const express = require("express");
const router = express.Router();

const freeRouter = require("./free");
const registeredRouter = require("./registered");
router.use("/free", freeRouter);
router.use("/registered", registeredRouter);

module.exports = router;
