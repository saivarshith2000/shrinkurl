const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const ValidationError = require("../utils/AuthValidationError");

router.post(
    "/signin",
    [
        body("email").isEmail().normalizeEmail(),
        body("password").isLength({ min: 6, max: 16 }),
    ],
    (req, res) => {
        // return first error if validation errors occur
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ValidationError(errors.array()[0]);
        }
        console.log(req.body);
        return res.status(200).json({});
    }
);

module.exports = router;
