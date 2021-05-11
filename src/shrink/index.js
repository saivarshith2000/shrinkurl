const app = require("./src/app");
const {PORT} = require('./config')

app.listen(PORT, () => {
    console.log(`ShrinkUrl SHRINK server running at http://localhost:${PORT}`);
});
