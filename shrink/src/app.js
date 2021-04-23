const express = require("express");

const newRouter = require("./routes/new");

const app = express();

// middlewares
app.use(express.json());

// routes
app.use(newRouter);

module.exports = app;
