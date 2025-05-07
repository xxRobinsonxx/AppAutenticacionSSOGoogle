// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api/oauth';

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    getProfile()
      .then(res => {
        setEmail(res.data.email);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem('jwt');
        navigate('/login');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  if (loading) {
    return (
      <Container sx={{ mt: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 8, textAlign: 'center' }} maxWidth="sm">
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography gutterBottom>Bienvenido, {email}</Typography>
      <Button variant="outlined" onClick={handleLogout}>Cerrar sesión</Button>
    </Container>
  );
}
