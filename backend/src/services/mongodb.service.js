require("dotenv").config();
const mongoose = require("mongoose");
const MONGODB_URL =
    process.env.ENVIRONMENT == "dev"
        ? process.env.MONGODB_URL + "dev"
        : process.env.MONGODB_URL + "prod";

class MongooseClient {
    constructor() {
        mongoose.connect(MONGODB_URL);
    }
}

module.exports = MongooseClient;
