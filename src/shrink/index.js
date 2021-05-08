const app = require("./src/app");

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`ShrinkUrl SHRINK server running at http://localhost:${port}`);
});
