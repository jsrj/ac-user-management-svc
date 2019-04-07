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

  let newUser = new User({ 
    userID, 
    username, 
    firstName, 
    lastName, 
    contactInfo 
  });

  console.log(newUser);

  res.json(responseObj);
})

module.exports = router