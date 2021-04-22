const app = require("./src/app");

// port number
const port = process.env.PORT || 8000;

// start server
app.listen(port, () => {
    console.log(`ShrinkUrl AUTH server running at http://localhost:${port}`);
});
