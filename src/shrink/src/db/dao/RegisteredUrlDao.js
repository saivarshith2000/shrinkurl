const RegisteredUrl = require("../models/RegisteredUrl");

class RegisteredUrlDao {
    // insert new shorturl into database
    static async insert(userid, shorturl, longurl) {
        return await RegisteredUrl.query().insert({
            userid,
            shorturl,
            longurl,
            redirects: 0,
        });
    }

    // get longurl and increment redirects by one
    static async getLongUrlAndRedirects(shorturl) {
        const row = await RegisteredUrl.query()
            .findOne({ shorturl })
            .throwIfNotFound();
        const longurl = row.longurl
        const currentRedirects = row.redirects
        try {
            await RegisteredUrl.query().update({redirects: currentRedirects + 1}).where('shorturl', shorturl)
        } catch (e) {
            // do nothing - we MUST redirect even though we can update redirects
            console.log(err)
        }
        return longurl;
    }

    // get short url from longurl -> used to check if a url is already present in the database
    static async getShortUrl(longurl) {
        const row = await RegisteredUrl.query()
            .findOne({ longurl })
            .throwIfNotFound();
        return row.shorturl;
    }

    // get urls - fetch all urls of a user
    static async getUrls(userid) {
        const rows = await RegisteredUrl.query().where('id', userid)
        return rows;
    }
}

module.exports = RegisteredUrlDao;
