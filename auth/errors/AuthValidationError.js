class AuthValidationError extends Error {
    constructor(msg) {
        super();
        this.message = msg;
        this.code = 400;
    }
}

module.exports = AuthValidationError;
