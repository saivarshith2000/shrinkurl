const UnauthorisedAccessError = require("../errors/UnauthorisedAccessError");
const ServerError = require("../errors/ServerError");

const ErrorHandler = (err, req, res, next) => {
    if (err instanceof UnauthorisedAccessError) {
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
