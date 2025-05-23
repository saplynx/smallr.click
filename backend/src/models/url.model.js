const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        minlength: 6,
        unique: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
});

urlSchema.index({ shortId: 1 });

module.exports = mongoose.model("Url", urlSchema);
