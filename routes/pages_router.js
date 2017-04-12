const express = require('express')
const pagesController = require('../controllers/page_controller')
const router = express.Router()

router.get('/', pagesController.home)

module.exports = router
