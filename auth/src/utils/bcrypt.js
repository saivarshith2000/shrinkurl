const bcrypt = require("bcrypt");

const SALT_ROUNDS = process.env.SALT_ROUNDS || 4;

const getHashedPassword = async (password) => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};

const verifyPassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
};

module.exports = { getHashedPassword, verifyPassword };
