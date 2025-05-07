// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = { children: React.ReactElement };

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem('jwt');
  return token ? children : <Navigate to="/login" replace />;
}
