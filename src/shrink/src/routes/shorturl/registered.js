const express = require("express");
const router = express.Router();
const RegisteredUrlDao = require("../../db/dao/RegisteredUrlDao");

router.get("/:shorturl", async (req, res) => {
    const shorturl = req.params.shorturl;
    if (shorturl === undefined || shorturl === null || shorturl.length != 6) {
        return res.status(400).json({
            status: "error",
            msg: "Invalid short url. Please check and try again",
        });
    }
    try {
        // get shorturl and increment redirect count (if possible)
        const longurl = await RegisteredUrlDao.getLongUrlAndRedirects(shorturl);
        return res.redirect(longurl);
    } catch (err) {
        return res
            .status(404)
            .json({ status: "error", msg: "shorturl not found" });
    }
});

module.exports = router;
