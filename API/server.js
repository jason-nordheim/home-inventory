/* Imports */
const express = require('express' )
const app = express() 
const bodyParser = require('body-parser')
const cors = require("cors");
const bcrypt = require("bcrypt");
const knex = require("knex");
const config = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = knex(config) 

const HASH_COST = 12;
const PORT = process.env.PORT || 4000

/* Middleware */
app.use(bodyParser.json())
app.use(cors())

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
        .catch(err => res.json({ err: err.detail }))
    })
    .catch(err => res.json({ err }))
})


app.listen(PORT, () => console.log(`Home Inventory API running on ${PORT}...`))