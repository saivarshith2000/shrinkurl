const User = require("../models/User");
const { getHashedPassword, verifyPassword } = require("../../utils/bcrypt");

class UserDAO {
    // try to insert a user in the database
    static async insert(username, password, email) {
        const passwordhash = await getHashedPassword(password);
        return await User.query().insert({
            username,
            password: passwordhash,
            email,
        });
    }

    // check if a user exists in the database. If user exists and password
    // matches, username is returned. Else null is returned
    static async verify(email, password) {
        const user = await User.query().findOne({ email }).throwIfNotFound();
        const result = await verifyPassword(password, user.password);
        if (result) return user.username;
        else return null;
    }
}

module.exports = UserDAO;
