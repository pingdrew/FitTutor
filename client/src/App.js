import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Landing from './pages/Landing/Landing';
import Login from './pages/Landing/Login';
import Signup from './pages/Landing/Signup';
import NoMatch from './pages/NoMatch';
import HomePage from './pages/Home/HomePage';
import ExplorePage from './pages/Home/ExplorePage';
import ProfilePage from './pages/Home/ProfilePage';
import SavedPage from './pages/Home/SavedPage';
import ShopPage from './pages/Home/ShopPage';
import FriendsPage from './pages/Home/FriendsPage';
import ChatPage from './pages/Home/ChatPage';
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
          <Route
            path="/explore"
            element={<ExplorePage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/saved"
            element={<SavedPage />}
          />
          <Route
            path="/shop"
            element={<ShopPage />}
          />
          <Route
            path="/friends"
            element={<FriendsPage />}
          />
          <Route
            path="/chat"
            element={<ChatPage />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
