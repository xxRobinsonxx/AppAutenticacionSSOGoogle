import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CircularProgress, Container, Typography } from '@mui/material';

export default function OAuth2Redirect() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    if (token) {
      localStorage.setItem('jwt', token);
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [params, navigate]);

  return (
    <Container sx={{ mt: 8, textAlign: 'center' }} maxWidth="xs">
      <Typography>Procesando inicio de sesión…</Typography>
      <CircularProgress sx={{ mt: 2 }} />
    </Container>
  );
}
