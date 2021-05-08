const express = require("express");
const router = express.Router();

const signInRouter = require("./signin");
const signUpRouter = require("./signup");
const signOutRouter = require("./signout");

router.use("/signin", signInRouter);
router.use("/signup", signUpRouter);
router.use("/signout", signOutRouter);

module.exports = router;
