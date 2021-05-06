const express = require("express");
const cors = require("cors");
const setupDb = require('./db/setupDb')

const newRouter = require("./routes/new");
const shortRouter = require("./routes/short");

// setup Objection ORM
setupDb();

const app = express();

// middlewares
app.use(express.json());

// routes
// the cors middleware is questionable needs to be configured
app.use(cors({ origin: true }));
app.use(newRouter);
app.use(shortRouter);



module.exports = app;
