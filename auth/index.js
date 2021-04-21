const express = require("express");

const ErrorHandler = require("./middlewares/ErrorHandler");

const port = process.env.PORT || 8000;
const app = express();

// middlewares
app.use(express.json());

// routes
const signup = require("./routes/signup");
const signin = require("./routes/signin");
app.use(signup);
app.use(signin);

// error handler
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`ShrinkUrl auth server running at http://localhost:${port}`);
});
