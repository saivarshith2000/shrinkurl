const User = require("../models/User");
const { getHashedPassword, verifyPassword } = require("../../utils/bcrypt");

class UserDAO {
    // try to insert a user in the database
    static async insert(username, password, email) {
        const passwordhash = getHashedPassword(password);
        return await User.query().insert({
            username,
            password: passwordhash,
            email,
        });
    }

    // check if a user exists in the database
    static async verify(email, password) {
        const user = await User.query().findOne({ email }).throwIfNotFound();
        return await verifyPassword(password, user.password);
    }
}

module.exports = UserDAO;
