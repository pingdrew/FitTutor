const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectionURI = process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@fittutor.zlmfabl.mongodb.net/`;

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
});

module.exports = mongoose.connection;