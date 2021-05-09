// middleware to check if auth jwt is present in the auth_token cookie
// throws an Unauthorised error if token is absent/invalid
const verifyJWT = require("../utils/jwt");
const UnauthorisedAccessError = require("../errors/UnauthorisedAccessError");

const checkAuth = (req, res, next) => {
    // if cookie is not present
    const auth_token = req.cookies.auth_token;
    if (auth_token === undefined) {
        throw new UnauthorisedAccessError();
    }
    try {
        const decoded = verifyJWT(auth_token);
        // put userid in req.body
        req.body.userid = decoded.id;
        next();
    } catch (err) {
        throw new UnauthorisedAccessError();
    }
};

module.exports = checkAuth