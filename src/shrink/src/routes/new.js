const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const crypto = require("crypto");
const { NotFoundError } = require("objection");
const FreeUrlDao = require("../db/dao/FreeUrlDao");

const domain = process.env.DOMAIN || "http://shrinkurl.com/";

router.post("/new", async (req, res) => {
    // extract url from request body
    const { url } = req.body;
    // if url is invalid, throw error
    if (!validUrl.isUri(url) || url.length > 512) {
        return res
            .status(400)
            .json({ status: "error", msg: "invalid url/url too long" });
    }
    // if url already exists, returns its shortened url
    try {
        const shorturl = await FreeUrlDao.getShortUrl(url);
        // return this short url
        return res.status(200).json({ url, shorturl: domain + shorturl });
    } catch (err) {
        if (err instanceof NotFoundError) {
            // if the long url is not found in the database, create new one
            const shorturl =
                crypto.createHash("md5").update(url).digest("hex").slice(0, 6);
            console.log(shorturl + " " + shorturl.length);
            // insert new longurl-shorturl mapping into the database
            try {
                await FreeUrlDao.insert(shorturl, url);
                return res
                    .status(200)
                    .json({ url, shorturl: domain + shorturl });
            } catch (e) {
                // if an error thrown, log it
                console.log(e);
            }
        } else {
            // this error will be a database error
            console.log(err);
        }
    }
    // if we came here, there was an error in generating url.
    return res
        .status(400)
        .json({ status: "error", msg: "There was an error in shrinking your url. Please try again!" });
});

router.get("/:shorturl", (req, res) => {
    // TODO - update route to use postgres database
    const shorturl = baseUrl + req.params.shorturl;
    console.log(shorturl);
    for (const u of urls) {
        if (u.shorturl === shorturl) {
            return res.redirect(u.url);
        }
    }
    return res.status(404).json({ status: "error", msg: "shorturl not found" });
});

module.exports = router;
