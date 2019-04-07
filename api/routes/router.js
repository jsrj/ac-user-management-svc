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
  res.json({
    message: 'hello from auth0_hook'
  });
})

module.exports = router