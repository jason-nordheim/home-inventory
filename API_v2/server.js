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
const { json } = require( 'express' )


const authenticate = (req, res, next) => {
  console.log(req.headers)
  if (!req.headers.authorization) {
    res.status(400).send();
  } else {
    const encoded_token = req.headers.authorization.split(" ")[1];
    const decoded_token = jwt.decode(encoded_token, SECRET);
    req.user_id = decoded_token.user_id;
  }
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
      .catch((err) => {
        console.error('GET => /users', err)
        res.status(500).json({ iid: 11, error: err })
      });
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
    .catch((err) => {
      console.error('POST => /users', err)
      res.status(500).json({ iid: 7, error: err })
    });

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
      if (!user) res.status(401).json({error: "Invalid Username"});
      // try to see if the password matches
      return bcrypt
        .compare(password, user.password_digest)
        .then((passwordMatches) => {
          if (!passwordMatches) res.status(401).json({error: "Invalid Password"});
          else return user;
        });
    })
    .then((user) => {
      jwt.sign({ user_id: user.id }, SECRET, (error, token) => {
        if (error) throw new Error("Unable to sign token");
        else res.status(200).json({ token });
      });
    })
    .catch((err) => {
      console.error('POST => /login', err)
      res.status(500).json({ iid: 5, error: err })
    });
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
    .catch((err) => {
      console.error('GET => /login', err)
      res.status(500).json({ iid: 3, error: err })
    });

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
    .catch((err) => {
      console.error('GET => /address', err)
      res.status(500).json({ iid: 1, error: err })
    });
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
  .catch(err => {
    console.error('POST => /address', err)
    res.status(500).json({ iid: 2,error: err})
  })
})


app.get('/locations', authenticate, (req, res) => {
  database('location').select('*').where({ user_id: req.user_id})
    .returning('*')
    .then(locations => {
      res.status(200).json(locations)
    }).catch(err => {
      console.error('GET => /locations', err)
      res.status(500).json({ iid: 101, error: err })
    })
})

app.post("/locations", authenticate, (req, res) => {
  const { name, type, address_id } = req.body 
  database('location')
    .insert({ name, type, address_id, user_id: req.user_id})
    .returning('*')
    .where({ user_id: req.user_id })
    .orderBy('created_at', { order: 'desc'})
    .then(locations => {
      res.status(201).json(locations)
    })
    .catch(err => {
      console.error('POST => /locations', err)
      res.status(500).json({ iid: 22, error: err})
    })
});

app.get('/vendors', authenticate, (req, res) => {
  database('vendor')
    .select('*').where({ user_id: req.user_id})
    .returning('*')
    .then(vendors => {
      res.status(200).json(vendors)
    })
    .catch(err => {
      console.error('GET => /vendors', err)
      res.status(500).json({ iid: 24, error: err });
    })
})

app.post('/vendors', authenticate, (req, res) => {
  const { name, phone, email, notes } = req.body 
  database('vendor').insert({name, phone, email, notes, user_id: req.user_id})
    .returning('*')
    .then(vendors => {
      res.status(201).json(vendors)
    })
    .catch(err => {
      console.error('POST => /vendors', err)
      res.status(500).json({ iid: 25, error: err})
    })
})


app.get('/items', authenticate, (req, res) => {
  database('item').select('*').where({ user_id: req.user_id })
    .then(items => res.status(200).json(items))
    .catch(err => {
      console.error('GET => /items', err)
      res.status(500).json({iid: 26, error: err})
    })
})

app.post('/items', authenticate, (req, res) => {
  const { name, est_value, acc_value, category, make, model, purchase_date, selling, location_id } = req.body 
  const newItem = { name, est_value, acc_value, category, make, model, purchase_date, selling, location_id, user_id: req.user_id }
  database('item')
    .insert(newItem)
    .returning('*')
    .then(items => res.status(201).json(items))
    .catch(err => {
      console.error('POST => /items', err)
      res.status(500).json({iid: 31, error: err})
    })
})

app.delete('/items', authenticate, (req, res) => {
  database('item')
    .where({ user_id: req.user_id, id: req.body.id})
    .delete() 
    .then(() => res.status(204).send())
    .catch(err => {
      console.error('DELETE => /items', err) 
      res.status(500).json({iid: 32, error: err })
    })
})



app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

