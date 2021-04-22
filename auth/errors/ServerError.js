class ServerError extends Error {
    constructor() {
        super();
        this.msg =
            "The backend server is facing issues at the moment. Please try again later !";
        this.code = 500;
    }
}

module.exports = ServerError;
