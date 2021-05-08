const express = require("express");
const router = express.Router();

router.post("/auth/signout", (req, res) => {
    // clear auth_token cookie
    res.clearCookie("auth_token", {
        httpOnly: true,
        sameSite: "Strict",
    });
    return res.status(200).end();
});

module.exports = router;
