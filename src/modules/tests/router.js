const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.get('/tests',controller.GET)
router.post('/tests',controller.POST)
router.put('/tests/:testId',controller.GET)


module.exports = router