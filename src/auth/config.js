const PORT = process.env.PORT || 8000;

if (process.env.JWT_SECRET === undefined) {
    throw new Error("JWT_SECRET environment variable not found");
}
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = { PORT, JWT_SECRET };
