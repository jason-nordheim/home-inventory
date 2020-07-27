/* Imports */
const express = require('express' )
const app = express() 
const bodyParser = require('body-parser')
const cors = require("cors");
const bcrypt = require("bcrypt");
const knex = require("knex");
const jwt = require('jsonwebtoken')
const { response } = require( 'express' )
const config = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = knex(config) 

/* Constants */
const SECRET = "S3CR3T"
const HASH_COST = 12;
const PORT = process.env.PORT || 4000

/* Middleware */
const Authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) return res.status(403).json({ err });
      else {
        req.user = user;
        next();
      }
    });
  } else res.status(401).json({ err: "Uncaught Authorization Error"});
};
app.use(bodyParser.json())
app.use(cors())


/* Routes */ 
app.post('/users', (req, res) => {
  const { first, last, username, password, email, bio } = req.body 
  
  if (username == null) return res.json({ err: "Username required"})
  if (password == null) return res.json({ err: "Password is required"}) 

  bcrypt.hash(password, HASH_COST)
    .then(hashedPwd => { 
      database("users")
        .insert({ first, last, username, password_digest: hashedPwd, email, bio })
        .returning("*")
        .limit(1)
        .then(newUser => { res.json(newUser)})
        .catch(err => res.status(400).json({ err: err.detail }))
    })
    .catch(err => res.status(400).json({ err }))
})

app.get('/users', Authenticate, (req, res) => {
  database("user").select("*").whereNot({id: req.user.id })
    .then((users, err) => {
      if (err) return res.status(400).json({ err })
      else return res.status(200).json({ users })
    })
})

app.post('/token', (req, res) => {
  const { username, password } = req.body 

  database("users").select("*").where({ username }).first()
    .then(user => {
      if (user == null) return res.status(400).json({ err: "Invalid Username"})
      else {
        bcrypt.compare(password, user.password_digest)
          .then(pwdMatches => {
            if (!pwdMatches) return res.status(400).json({ err: "Invalid password" })
            else return user 
          })
            .then(user => {
            jwt.sign(user, SECRET, (err, token) => {
              if (err) return response.status(400).json({ err })
              else return res.status(200).json({ token }) 
            })
          }).catch(err => res.json({ err }))
      }
    }).catch(err => res.json({ err }))
})


app.post('/locations', Authenticate, (req, res) => {
  const { name, street1, street2, city, state, zip, type } = req.body 
  const newRecord = {
    user_id: req.user.id,
    name,
    street1,
    street2,
    city,
    state,
    zip,
    type,
  };

  database("locations")
    .insert(newRecord)
    .returning("*")
    .andWhere({ user_id: req.user.id })
    .then(locations => res.status(200).json({ locations }))
    .catch(err => res.status(500).json({ err }))
})

app.listen(PORT, () => console.log(`Home Inventory API running on ${PORT}...`))