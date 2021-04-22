const jwt = require("jsonwebtoken");

// This needs to gotten rid of in production
const secret = "vQoPyhW4tJ7Ty0G4XfTsvgttxqREfnMI7ViKLfIDtMJoDmHFM1YxVFbF6z3Y";

const generateJWT = (data) => {
    return jwt.sign(data, secret);
};

const verifyJWT = (token) => {
    return jwt.verify(token, secret);
};

module.exports = { generateJWT, verifyJWT };
