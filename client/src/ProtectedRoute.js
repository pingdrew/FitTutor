import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthService from './utils/auth';

const ProtectedRoute = () => {
  return AuthService.loggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
