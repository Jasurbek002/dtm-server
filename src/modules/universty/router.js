const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.get('/universty',controller.GET)


module.exports = router