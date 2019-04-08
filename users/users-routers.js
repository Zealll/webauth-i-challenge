const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const db = require('./users-helpers.js')

router.get('/', (req, res) => {
    db
    .get()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json(error))
})






module.exports = router