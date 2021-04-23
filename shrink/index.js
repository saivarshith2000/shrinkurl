const app = require("./src/app");

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`SHRINK service running on port ${port}`);
});
