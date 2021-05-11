const PORT = process.env.PORT || 8000;

if (process.env.JWT_SECRET === undefined) {
    throw new Error("environment variable JWT_SECRET not found");
}
const JWT_SECRET = process.env.JWT_SECRET

if (process.env.DOMAIN === undefined) {
    throw new Error("environment variable DOMAIN not found");
}
const DOMAIN = process.env.DOMAIN;

module.exports = {PORT, DOMAIN, JWT_SECRET}
