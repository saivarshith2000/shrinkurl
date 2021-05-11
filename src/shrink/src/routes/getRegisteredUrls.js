const express = require("express");
const router = express.Router();

const RegisteredUrlDao = require("../db/dao/RegisteredUrlDao");
const { NotFoundError } = require("objection");
const checkAuth = require("../middlewares/checkAuth");

const { DOMAIN } = require("../../config");
const domain = DOMAIN + "r/";

router.use(checkAuth);
router.post("/", async (req, res) => {
    const userid = req.body.userid;
    try {
        let rows = await RegisteredUrlDao.getUrls(userid);
        rows = rows.map((row) => ({
            longurl: row.longurl,
            shorturl: domain + row.shorturl,
            redirects: row.redirects,
        }));
        return res.status(200).json({ status: "success", data: rows });
    } catch (err) {
        if (err instanceof NotFoundError) {
            return res.status(400).json({
                status: "error",
                msg: "Error! User not found !",
            });
        }
        console.log(err);
    }
    return res
        .status(400)
        .json({ status: "error", msg: "Server is having backend issues" });
});

module.exports = router;
