const express = require("express");

const signup = require("./routes/signup");
const signin = require("./routes/signin");
const ErrorHandler = require("./middlewares/ErrorHandler");
const setupDb = require("./db/setupDb");

// setup objection ORM
setupDb();

// port number
const port = process.env.PORT || 8000;
// instantitate express app
const app = express();
// middlewares
app.use(express.json());
// routes
app.use(signup);
app.use(signin);

// error handler
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`ShrinkUrl auth server running at http://localhost:${port}`);
});
