const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
require('dotenv').config(); // Ensure env variables are loaded

const PORT = process.env.PORT || 8080;
const app = express();

// Create a new instance of Apollo Server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  cache: 'bounded',
  cors: {
    origin: '*', // Adjust according to your needs, e.g., 'http://localhost:3000'
    credentials: true,
  },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
