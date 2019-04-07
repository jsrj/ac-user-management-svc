const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../db/models/User')

// Base endpoint
router.get('/', (req, res, next) => {
  res.send("Hello!");
})

module.exports = router