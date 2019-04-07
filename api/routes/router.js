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
  };
  
  console.log('\n');
  console.log('----- User Data: -----');
  console.log(`User ID: ${req.body.userID || 'no-id'}`);
  console.log(`Username: ${req.body.username || 'not-set'}`);
  console.log('----- User Data: -----');
  console.log('\n');
  console.log('----- Contact Info: -----');
  console.log(`Email Address: ${req.body.contactInfo.email.address || 'not-set'}`);
  console.log(`Email Verified?: ${req.body.contactInfo.email.isVerified || 'not-set'}`);
  console.log(`Phone Number: ${req.body.contactInfo.phone.number || 'not-set'}`);
  console.log(`Phone Number Verified?: ${req.body.contactInfo.phone.isVerified || 'not-set'}`);
  console.log('\n');

  res.json(responseObj);
})

module.exports = router