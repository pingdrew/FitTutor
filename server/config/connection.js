const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@pingdrew2048.0hwklu7.mongodb.net/?retryWrites=true&w=majority&appName=pingdrew2048`);


module.exports = mongoose.connection;
