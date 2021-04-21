const ValidationError = require("../utils/AuthValidationError");

const ErrorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.code).json({
            status: "error",
            msg: err.msg,
        });
    }
    return res.status(500).json({
        status: "error",
        msg: err.message,
    });
};

module.exports = ErrorHandler;
