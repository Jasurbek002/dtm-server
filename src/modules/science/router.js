const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.get('/science',controller.GET)
router.post('/science',controller.POST)
router.put('/science/:scienceId',controller.PUT)



module.exports = router
