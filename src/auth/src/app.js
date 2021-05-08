const express = require("express");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth/index");
const refreshRouter = require("./routes/refresh");

const ErrorHandler = require("./middlewares/ErrorHandler");
const setupDb = require("./db/setupDb");

// setup objection ORM
setupDb();

// instantitate express app
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/auth/', authRouter);
app.use(refreshRouter);

// error handler
app.use(ErrorHandler);

module.exports = app;
