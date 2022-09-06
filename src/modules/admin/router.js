const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.get('/admin',controller.LOGIN)
router.get('/admin',controller.REGISTER)



module.exports = router