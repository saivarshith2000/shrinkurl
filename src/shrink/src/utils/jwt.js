const jwt = require("jsonwebtoken");

// This needs to gotten rid of in production
const { JWT_SECRET } = require("../../config");

const verifyJWT = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

module.exports = verifyJWT;
