const express = require("express");
const router = express.Router();

const RegisteredUrlDao = require("../db/dao/RegisteredUrlDao");
const { NotFoundError } = require("objection");
const checkAuth = require("../middlewares/checkAuth");

const domain = process.env.DOMAIN || "http://shrinkurl.com/r/";
const domainLength = domain.length;

router.use(checkAuth);
router.post("/", async (req, res) => {
    const { userid, shorturl } = req.body;
    try {
        const urlToDelete = shorturl.slice(domainLength) 
        await RegisteredUrlDao.deleteUrl(userid, urlToDelete);
        return res.status(200).json({ status: "success" });
    } catch (err) {
        console.log(err);
    }
    return res.status(200).json({
        status: "error",
        msg: "Failed to delete URL. Please try again",
    });
});

module.exports = router;
