import React from 'react'
import { Navigate } from 'react-router-dom'



const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/login" />
}

export default ProtectedRoute


