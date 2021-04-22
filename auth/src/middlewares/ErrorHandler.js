const ValidationError = require("../errors/AuthValidationError");
const ServerError = require("../errors/ServerError");

const ErrorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.code).json({
            status: "error",
            msg: err.message,
        });
    }

    if (err instanceof ServerError) {
        return res.status(err.code).json({
            status: "error",
            msg: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        msg: err.message,
    });
};

module.exports = ErrorHandler;
