const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.post('/login',controller.LOGIN)
router.post('/register',controller.REGISTER)


module.exports = router