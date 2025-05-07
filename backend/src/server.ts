import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';

// Carga estrategias
import './auth/googleStrategy';
import './auth/session'; // si usas sesiones
import oauthRoutes from './routes/oauth';

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

// Configura sesión (si necesitas mantener login en Passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'session123',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/api/auth', oauthRoutes);

// Salud endpoint
app.get('/health', (_req, res) => res.json({ status: 'ok' }));


// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend SSO Google escuchando en puerto ${PORT}`);
});