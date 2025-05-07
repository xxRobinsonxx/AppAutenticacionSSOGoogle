// src/pages/Login.tsx
import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Alert, CircularProgress } from '@mui/material';
import { googleLogin } from '../api/oauth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Introduce un email válido');
      return;
    }
    setError(null);
    setLoading(true);
    // Podrías enviar el email como hint al backend si quieres
    googleLogin();
  };

  return (
    <Container sx={{ mt: 8, textAlign: 'center' }} maxWidth="xs">
      <Typography variant="h4" gutterBottom>Iniciar sesión</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleGoogleLogin}
        disabled={loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : 'Con Google'}
      </Button>
    </Container>
  );
}
