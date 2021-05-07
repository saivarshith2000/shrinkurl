const express = require("express");
const { body, validationResult } = require("express-validator");
const { NotFoundError } = require("objection");
const router = express.Router();

const UserDAO = require("../db/dao/UserDAO");
const AuthValidationError = require("../errors/AuthValidationError");
const ServerError = require("../errors/ServerError");
const { generateJWT } = require("../utils/jwt");

router.post(
    "/auth/signin",
    [
        body("email").isEmail().normalizeEmail(),
        body("password").trim().isLength({ min: 6, max: 16 }),
    ],
    async (req, res, next) => {
        // return first error if validation errors occur
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // The below logic is dependent on the express-validator library
            const msg = errors.array()[0].param;
            throw new AuthValidationError("Invalid" + msg);
        }
        const { email, password } = req.body;
        try {
            // if user doesn't exists, an error is thrown by objection
            const user = await UserDAO.verify(email, password);
            if (user.username == null) {
                // if password is incorrect
                return next(
                    new AuthValidationError("email/password incorrect!")
                );
            }
            // if user exists, return success and jwt
            const token = generateJWT({ id: user.id, username: user.username });
            res.cookie('auth-token', token, {httpOnly: true, sameSite: "Strict"})
            return res
                .status(200)
                .json({ status: "success", data:  token });
        } catch (err) {
            if (err instanceof NotFoundError) {
                return next(
                    new AuthValidationError("email/password incorrect!")
                );
            } else {
                console.log(err);
                return next(new ServerError());
            }
        }
    }
);

module.exports = router;
