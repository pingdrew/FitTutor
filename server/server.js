const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 8080;
const app = express();

// Middleware to parse request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Serve the React frontend for any other route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new Apollo server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  introspection: true, // Enable introspection in development
  playground: true,    // Enable GraphQL Playground
});

// Function to start Apollo server and Express application
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Start Express server on the specified port
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the function to start the server
startApolloServer();
