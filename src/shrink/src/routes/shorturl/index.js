const express = require('express')
const router = express.Router();

const freeRouter = require('./free')
const registeredRouter = require('./registered')

router.use('/f', freeRouter)
router.use('/r', registeredRouter)

module.exports = router;