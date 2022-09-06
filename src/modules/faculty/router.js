const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.get('/faculty',controller.GET)


module.exports = router