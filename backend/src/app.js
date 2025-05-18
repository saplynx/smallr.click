const express = require("express");
const morgan = require("morgan");
const { API_VERSION } = require("./config/env");

const app = express();
const router = express.Router();

app.use(morgan("dev"));
app.use(express.json());

app.get(`/`, (req, res) => {
    res.send(`smallr.click backend`);
});

app.use(`/api/${API_VERSION}`, router);

router.get(`/`, (req, res) => {
    res.send(`Root endpoint`);
});

module.exports = app;
