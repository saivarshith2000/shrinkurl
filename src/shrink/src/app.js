const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')

const setupDb = require('./db/setupDb')

const newRouter = require("./routes/new/index");
const shortRouter = require("./routes/short");

const ErrorHandler = require("./middlewares/ErrorHandler");

// setup Objection ORM
setupDb();

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser())

// routes
// the cors middleware is questionable needs to be configured
app.use(cors({ origin: true }));
app.use('/new', newRouter);
app.use(shortRouter);

// error handler middleware
app.use(ErrorHandler)


module.exports = app;
