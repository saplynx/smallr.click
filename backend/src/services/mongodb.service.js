const mongoose = require("mongoose");
const { dev_connection_url: MONGODB_URL } = require("../config/mongodb.config");

class MongooseClient {
    constructor() {
        mongoose.connect(MONGODB_URL);
    }
}

module.exports = MongooseClient;
