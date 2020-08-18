const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const PORT = process.env.PORT || 4000 
const SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"


const app = express() 
app.use(cors())
app.use(bodyParser.json())

const database = require('./database')


const authenticate = (req, res, next) => {
  console.log(req.headers)
  if (!req.headers.authorization) {
    res.status(400).send();
  } else {
    const encoded_token = req.headers.authorization.split(" ")[1];
    const decoded_token = jwt.decode(encoded_token, SECRET);
    req.user_id = decoded_token.user_id;
    console.log(`req`, req.user_id)
  }
  // const { token } = req.headers
  // console.log('token', token)
  // const decoded = jwt.decode(token, SECRET);
  // console.log(decoded)
  next();
};

/**
 * Handle `GET` to `/users` 
 */
app
  .get("/users", (_, res) => {
    database("user")
      .select("*")
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json({ iid: 11, error: err }));
  })
  


/**
 * POST request for user (create new user)
 */
app.post('/users', (req, res) => {
  const { name, username, password, phone, email, bio } = req.body
 
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const newUser = {
        name,
        username,
        password_digest: hashedPassword,
        phone,
        email,
        bio,
      };
      database("user")
        .insert(newUser)
        .returning("*")
        .then((data) => {
          res.json(data);
        })
        .catch(error => res.status(500).json({iid: 91, error }))
    })
    .catch((err) => res.status(500).json({ iid: 7, error: err }));

}) 

/**
 * Login Route 
 */
app.post('/login', (req, res) => {
  const { username, password } = req.body 

  database("user")
    .select("*")
    .where({ username })
    .returning("*") // return all attributes of that user
    .first() // get the first result of the returned query
    .then((user) => {
      // see if we have a user with that username
      if (!user) throw new Error("Invalid Username");
      // try to see if the password matches
      return bcrypt
        .compare(password, user.password_digest)
        .then((passwordMatches) => {
          if (!passwordMatches) throw new Error("Invalid Password");
          else return user;
        });
    })
    .then((user) => {
      jwt.sign({ user_id: user.id }, SECRET, (error, token) => {
        if (error) throw new Error("Unable to sign token");
        else res.status(200).json({ token });
      });
    })
    .catch((err) => res.status(500).json({ iid: 5, error: err }));

})



/**
 * Example protected route... returns user informaiton 
 * for the user associated with the login 
 */
app.get('/login', authenticate, (req, res) => {
  database("user")
    .select("*")
    .where({ id: req.user_id })
    .returning("*")
    .first()
    .then((user) => {
      user.password_digest = null;
      res.status(200).json({ ...user });
    })
    .catch((err) => res.status(500).json({ iid: 3, error: err }));

})


/**
 * Get all the addressses created by the current user 
 */
app.get('/address', authenticate, (req, res) => {
  database("address")
    .select("*")
    .where({ created_by: req.user_id })
    .returning("*")
    .then((addresses) => res.json({ addresses }))
    .catch((err) => res.status(500).json({ iid: 1, error: err }));
})

app.post('/address', authenticate, (req, res) => {
  const { name, street1, street2, city, state, zip } = req.body   
  database("address").insert({
    name,
    street1,
    street2,
    city,
    state,
    zip,
    created_by: req.user_id,
  }).returning('*')
  .where({created_by: req.user_id})
  .then(addresses => {
    res.status(201).json(addresses)
  })
  .catch(err => res.status(500).json({ iid: 2,error: err}))
})




app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

