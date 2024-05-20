import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Auth from './utils/auth';

const ProtectedRoute = ({ children }) => {
  return Auth.loggedIn() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><ExplorePage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/saved" element={<ProtectedRoute><SavedPage /></ProtectedRoute>} />
        <Route path="/shop" element={<ProtectedRoute><ShopPage /></ProtectedRoute>} />
        <Route path="/friends" element={<ProtectedRoute><FriendsPage /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
