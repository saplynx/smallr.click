const Url = require("../models/url.model");

async function redirection(req, res, next) {
    try {
        const doc = await Url.findOne({ shortId: req.params.shortId });

        if (doc != null) {
            let redirectUrl = doc.longUrl;
            if (redirectUrl.startsWith("http") == false) {
                redirectUrl = "https://" + redirectUrl;
            }
            return res.status(302).redirect(redirectUrl);
        } else {
            return res.status(404).json({
                error: "Short URL does not exist",
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = redirection;
