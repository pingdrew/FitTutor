const mongoose = require('mongoose');
require('dotenv').config();

const connectionURI = process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@pingdrew2048.0hwklu7.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  sslValidate: true,
  sslCA: Buffer.from(process.env.CA_CERTIFICATE_BASE64, 'base64')
});

module.exports = mongoose.connection;
