const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const { UniqueViolationError } = require("objection");

const { getHashedPassword } = require("../utils/bcrypt");
const User = require("../db/models/User");
const AuthValidationError = require("../errors/AuthValidationError");
const ServerError = require("../errors/ServerError");

router.post(
    "/signup",
    [
        body("username").trim().isLength({ min: 6, max: 16 }),
        body("email").isEmail().normalizeEmail(),
        body("password").trim().isLength({ min: 6, max: 16 }),
    ],
    async (req, res, next) => {
        // return first error if validation errors occur
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // The below line is dependent on the express-validator library
            const msg = errors.array()[0].param;
            throw new AuthValidationError("Invalid" + msg);
        }
        const { username, password, email } = req.body;
        try {
            const passwordhash = await getHashedPassword(password);
            const user = await User.query().insert({
                username,
                password: passwordhash,
                email,
            });
            // TODO: user success logic
            return res
                .status(200)
                .json({ status: "success", data: { username, email } });
        } catch (err) {
            if (err instanceof UniqueViolationError) {
                return next(new AuthValidationError("email already exists!"));
            } else {
                console.log(err);
                return next(new ServerError());
            }
        }
    }
);

module.exports = router;
