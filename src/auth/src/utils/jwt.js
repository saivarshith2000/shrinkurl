const jwt = require("jsonwebtoken");

const {JWT_SECRET} = require("../../config")

const generateJWT = (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: "3 days" }); // the token expires in 3 days
};

const verifyJWT = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateJWT, verifyJWT, JWT_SECRET };
