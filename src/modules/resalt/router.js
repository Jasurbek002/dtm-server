const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.post('/resalts',controller.POST)



module.exports = router