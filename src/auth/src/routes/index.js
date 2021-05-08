const express = require("express");
const router = express.Router();

const signInRouter = require("./signin");
const signUpRouter = require("./signup");
const signOutRouter = require("./signout");
const refreshRouter = require("./refresh");

router.use("/signin", signInRouter);
router.use("/signup", signUpRouter);
router.use("/signout", signOutRouter);
router.use("/refresh", refreshRouter);

module.exports = router;
