const RegisteredUrl = require("../models/RegisteredUrl");

class RegisteredUrlDao {
    // insert new shorturl into database
    static async insert(userid, shorturl, longurl) {
        return await FreeUrl.query().insert({
            userid,
            shorturl,
            longurl,
            redirects: 0,
        });
    }

    // get long url from database based on the supplied shorturl
    static async getLongUrl(shorturl) {
        const row = await FreeUrl.query()
            .findOne({ shorturl })
            .throwIfNotFound();
        return row.longurl;
    }

    // get short url from longurl -> used to check if a url is already present in the database
    static async getShortUrl(longurl) {
        const row = await FreeUrl.query()
            .findOne({ longurl })
            .throwIfNotFound();
        return row.shorturl;
    }
}

module.exports = RegisteredUrlDao;
