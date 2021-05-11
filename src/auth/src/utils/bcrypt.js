const bcrypt = require("bcrypt");

const SALT_ROUNDS = 2;

const getHashedPassword = async (password) => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};

const verifyPassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
};

module.exports = { getHashedPassword, verifyPassword };
