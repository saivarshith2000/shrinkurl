const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/signin", (req, res) => {
    res.send("signin page!");
});

app.get("/signup", (req, res) => {
    res.send("signup page");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
