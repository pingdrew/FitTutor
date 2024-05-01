import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import HomePage from './pages/Home/HomePage';
import Login from './pages/Landing/Login';
import Signup from './pages/Landing/Signup';
import NoMatch from './pages/NoMatch';
import Landing from './pages/Landing/Landing';
// FRONT END WEBSITE ROUTES ^^

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>


          {/* FRONTEND WEBSITE ROUTES vv */}
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/home"
            element={<HomePage />}
          />

          {/* 404 ROUTE vv */}
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
