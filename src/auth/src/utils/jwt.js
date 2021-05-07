const jwt = require("jsonwebtoken");

// This needs to gotten rid of in production
const JWT_SECRET =
    "vQoPyhW4tJ7Ty0G4XfTsvgttxqREfnMI7ViKLfIDtMJoDmHFM1YxVFbF6z3Y" ||
    process.env.JWT_SECRET;

const generateJWT = (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: "3 days" }); // the token expires in 3 days
};

const verifyJWT = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateJWT, verifyJWT, JWT_SECRET };
