const express = require("express");
const router = express.Router();
const FreeUrlDao = require("../../db/dao/FreeUrlDao");

router.get("/:shorturl", async (req, res) => {
    const shorturl = req.params.shorturl;
    if (shorturl === undefined || shorturl === null || shorturl.length != 6) {
        return res
            .status(400)
            .json({
                status: "error",
                msg: "Invalid short url. Please check and try again",
            });
    }
    try {
        const longurl = await FreeUrlDao.getLongUrl(shorturl);
        return res.redirect(longurl);
    } catch (err) {
        console.log(err)
        return res
            .status(404)
            .json({ status: "error", msg: "shorturl not found" });
    }
});

module.exports = router;
