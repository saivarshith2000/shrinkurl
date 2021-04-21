class ValidationError extends Error {
    constructor(msg) {
        super();
        this.msg = "Invalid " + msg.param;
        this.code = 400;
    }
}

module.exports = ValidationError;
