const express = require("express");
const router = express.Router();
const { NotFoundError } = require("objection");
const FreeUrlDao = require("../db/dao/FreeUrlDao");

router.get("/r/:shorturl", async (req, res) => {
    const shorturl = req.params.shorturl;
    console.log(shorturl);
    try {
        const longurl = await FreeUrlDao.getLongUrl(shorturl)
        return res.redirect(longurl)
    } catch (err) {
        return res.status(404).json({ status: "error", msg: "shorturl not found" });
    }
});

module.exports = router;