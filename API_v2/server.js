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
const { response, json } = require( 'express' )

/**
 * Handle `GET` to `/users` 
 */
app.get('/users', (_, res) => {
  database('user').select('*')
    .then(users => res.json(users))
})

/**
 * POST request for user (create new user)
 */
app.post('/users', (req, res) => {
  const { name, username, password, phone, email, bio } = req.body
 
  bcrypt.hash(password, 12)
    .then(hashedPassword => {
      const newUser = { name, username, password_digest: hashedPassword, phone, email, bio }
      database('user').insert(newUser)
        .returning('*')
        .then(data => {
          res.json(data)
        })
    }).catch(err => {
      res.status(500).json({error: err})
    })
}) 

/**
 * Login Route 
 */
app.post('/login', (req, res) => {
  const { username, password } = req.body 

  database('user').select('*').where({ username })
    .returning('*') // return all attributes of that user 
    .first() // get the first result of the returned query 
    .then(user => {
      // see if we have a user with that username 
      if (!user) throw new Error("Invalid Username");
      // try to see if the password matches 
      return bcrypt.compare(password, user.password_digest)
        .then(passwordMatches => {
        if (!passwordMatches) throw new Error('Invalid Password')
        else return user 
        })
    })
    .then(user => {
      jwt.sign({user_id: user.id}, SECRET, (error, token) => {
        if (error) throw new Error("Unable to sign token")
        else res.status(200).json({ token })
      })
    })
    .catch(err => {
      res.status('401').json({error: err.message})
    })
})

const authenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).send() 
  } else {
    const encoded_token = req.headers.authorization.split(' ')[1]
    const decoded_token = jwt.decode(encoded_token, SECRET)
    req.user_id = decoded_token.user_id 
  }
  // const { token } = req.headers
  // console.log('token', token)
  // const decoded = jwt.decode(token, SECRET);
  // console.log(decoded) 
  next() 
};

/**
 * Example protected route... returns user informaiton 
 * for the user associated with the login 
 */
app.get('/login', authenticate, (req, res) => {
  database('user').select('*').where({id: req.user_id })
    .returning('*')
    .first()
    .then(user => {
      user.password_digest = null 
      res.status(200).json({...user})
    })
})





app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

