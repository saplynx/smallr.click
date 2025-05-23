require("dotenv").config();
const ShortUniqueId = require("short-unique-id");
const { randomUUID } = new ShortUniqueId({ length: 6 });
const duplicateChecker = require("../utils/duplicateChecker");
const Url = require("../models/url.model");
const DOMAIN = process.env.DOMAIN;

async function shortener(req, res, next) {
    try {
        let shortId = randomUUID();
        while (await duplicateChecker(shortId)) {
            shortId = randomUUID();
        }

        const newUrl = new Url({
            shortId: shortId,
            longUrl: req.body.longUrl,
        });

        newUrl.save();

        return res.status(201).json({
            shortId: shortId,
            shortUrl: DOMAIN + "/" + shortId,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = shortener;
