const mongoose = require('mongoose');

const connectionURI = process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@pingdrew2048.0hwklu7.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Use tls for secure connections instead of ssl
});

module.exports = mongoose.connection;
