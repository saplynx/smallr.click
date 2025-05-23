require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const API_VERSION = process.env.API_VERSION;
const MongooseClient = require("./services/mongodb.service");
const shortener = require("./controllers/shortener.controller");
const redirection = require("./controllers/redirection.controller");

const mongo = new MongooseClient();
const app = express();
const router = express.Router();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("smallr.click backend");
});

app.get("/:shortId", redirection);

app.use(`/api/${API_VERSION}`, router);

router.get("/", (req, res) => {
    res.send("Root endpoint");
});

router.post("/", shortener);

app.use((err, req, res, next) => {
    const status = err.status || 500;

    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({ error: err.message });
    }

    res.status(status).json({
        error: err.message || "Internal Server Error",
    });
});

module.exports = app;
