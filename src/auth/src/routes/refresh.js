const express = require("express");
const router = express.Router();

const { verifyJWT, generateJWT } = require("../utils/jwt");
const cookieMaxAge = 3 * 86400 * 1000  

router.post("/auth/refresh", (req, res) => {
    const auth_token = req.cookies.auth_token;
    if (auth_token == undefined) {
        res.status(400).json({ status: "error", msg: "Auth Token absent" });
    }
    // get a new token and send it
    try {
        const decoded = verifyJWT(auth_token);
        const token = generateJWT({
            id: decoded.id,
            username: decoded.username,
        });
        res.cookie("auth_token", token, { httpOnly: true, sameSite: "Strict", maxAge: cookieMaxAge});
        res.status(200).json({ status: "success", username: decoded.username });
    } catch (err) {
        console.log(err);
        // invalid token - the token has been tampered with
        res.status(400).json({
            status: "error",
            msg: "Auth Token expired/corrupted/tampered with",
        });
    }
});

module.exports = router;
