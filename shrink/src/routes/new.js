const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");

const crypto = require("crypto");

const urls = [];

const baseUrl = "http://shrinkurl.com";

router.post("/new", async (req, res) => {
    // extract url from request body
    const { url } = req.body;
    // if url is invalid, throw error
    if (!validUrl.isUri(url)) {
        return res.status(400).json({ status: "error", msg: "invalid url" });
    }
    // if url already exists, returns its shortened url
    for (const u of urls) {
        if (u.url === url) {
            return res.status(200).json({ url, shorturl: u.shorturl });
        }
    }
    // if url doesn't exist, get new shorturl and return it
    // this is a temporary solution
    const shorturl =
        baseUrl +
        crypto.createHash("md5").update(url).digest("hex").slice(0, 6);
    console.log(`new mapping: ${url} to ${shorturl}`);
    urls.push({ url, shorturl });
    return res.status(200).json({ url, shorturl });
});

router.get("/:shorturl", (req, res) => {
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
