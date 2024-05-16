const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@pingdrew2048.0hwklu7.mongodb.net/test?retryWrites=true&w=majority`);

module.exports = mongoose.connection;
