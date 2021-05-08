class UnauthorisedAccessError extends Error {
    constructor() {
        super();
        this.message = "Unauthorised Access. Permission denied.";
        this.code = 400;
    }
}

module.exports = UnauthorisedAccessError;
