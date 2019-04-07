const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../db/models/User')

// Base endpoint
router.get('/', (req, res, next) => {
  res.json({
    message: 'hello, world!'
  });
})

router.post(`/${process.env.AUTH0_HOOK}`, (req, res, next) => {

  const responseObj = {
    data: req.body
  }
  
  const firstName = 'not-set';
  const lastName = 'not-set';
  const { userID, username, contactInfo } = req.body

  // First check that the user does not already exist
  User.findOne({ username: username})
  .exec()
  .then(userExists => {
    if (userExists) {

      // Reject request
      res.status(500).json({ message: 'User Already Exists'}).end()
    } else {

      // Create new base user profile
      new User({ 
        userID, 
        username, 
        firstName, 
        lastName, 
        contactInfo 
      })
      .save()
      .then(() => {
        console.log('--- New User Profile Created ---');
        res.status(200).json({ message: 'User Data Generation Succeeded'}).end()
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'User Data Generation Failed' }).end()
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
})

router.get(`/${process.env.CLIENT}`, (req, res, next) => {
  if (req.query.username) {
    User.findOne({ username: req.query.username})
    .exec()
    .then(user => {
      res.status(200).json(user).end()
    }).catch(err => {
      res.status(500).json(err).end()
    })
  } else {
    res.status(400).json({ message: 'No username specified.'}).end()
  }
})

module.exports = router