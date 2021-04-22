class AuthValidationError extends Error {
    constructor(msg) {
        super();
        this.msg = msg;
        this.code = 400;
    }
}

module.exports = AuthValidationError;
