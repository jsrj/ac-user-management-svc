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
})

module.exports = router