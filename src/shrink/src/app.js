const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')

const setupDb = require('./db/setupDb')

const newRouter = require("./routes/new/index");
const shortUrlRouter = require("./routes/shorturl/index");
const getRegisteredUrlsRouter = require("./routes/getRegisteredUrls");

const ErrorHandler = require("./middlewares/ErrorHandler");

// setup Objection ORM
setupDb();

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser())

// routes
app.use('/new', newRouter);
app.use('/', shortUrlRouter);
app.use('/getRegisteredUrls', getRegisteredUrlsRouter);

// error handler middleware
app.use(ErrorHandler)


module.exports = app;
