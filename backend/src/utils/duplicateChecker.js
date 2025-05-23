const Url = require("../models/url.model");

async function duplicateChecker(shortId) {
    const doc = await Url.findOne({ shortId: shortId });

    return doc != null;
}

module.exports = duplicateChecker;
