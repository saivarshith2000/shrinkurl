// RegisteredUrl model - represents a row in the registered_urls table
const { Model } = require("objection");

class RegisteredUrl extends Model {
    static get tableName() {
        return "registered_urls";
    }
}

module.exports = RegisteredUrl;
