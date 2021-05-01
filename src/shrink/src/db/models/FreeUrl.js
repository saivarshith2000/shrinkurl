// FreeUrl model - represents a row in the free_urls table
const {Model} = require('objection');

class FreeUrl extends Model {
    static get tableName() {
        return "free_urls";
    }
}

module.exports = FreeUrl;