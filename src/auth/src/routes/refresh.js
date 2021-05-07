const express = require('express')
const router = express.Router();

const {verifyJWT} = require('../utils/jwt')

router.post('/auth/refresh', (req, res) => {
    const auth_token = req.cookies.auth_token;
    console.log(auth_token)
    if (auth_token == undefined) {
        res.status(400).json({status: "error", msg: "Auth Token absent"})
    }
    // get a new token and send it
    try {
        const decoded = verifyJWT(auth_token)
        res.status(200).json({status: "success", username: decoded.username})
    } catch (err) {
        // invalid token - the token has been tampered with
        res.status(400).json({status: "error", msg: "Auth Token corrupted/tampered with"})
    }
})

module.exports = router;