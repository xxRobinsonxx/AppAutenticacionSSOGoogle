# Backend – SSO Google + JWT

Un servicio Express en TypeScript que permite iniciar sesión con Google (OAuth2) y emite JWT.

## Prerrequisitos

- Node.js ≥ 14  
- PostgreSQL  
- Cuenta en Google Cloud con credenciales OAuth2

## Instalación

```bash
git clone <repo-url> && cd backend-sso-google
npm install
cp .env.example .env
# Rellena .env con tus valores:
# DATABASE_URL, JWT_SECRET, SESSION_SECRET,
# GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
# GOOGLE_CALLBACK_URL, FRONTEND_URL
npx prisma migrate dev --name add_googleid
npm run dev
```

## Scripts
* npm run dev — Arranca en modo desarrollo (ts-node-dev)
* npm run build — Compila TypeScript a JavaScript
* npm start — Ejecuta la versión compilada

## Variables de entorno
```
DATABASE_URL=postgresql://user:pass@localhost:5432/mi_bd?schema=public
JWT_SECRET=tu_jwt_secret
SESSION_SECRET=tu_session_secret
GOOGLE_CLIENT_ID=XXX.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=YYY
GOOGLE_CALLBACK_URL=http://localhost:4000/api/auth/google/callback
FRONTEND_URL=http://localhost:3000
```
### Endpoints
* GET /api/auth/google → inicia login en Google

* GET /api/auth/google/callback → procesa callback y redirige con ?token=<JWT>

* GET /health → { "status": "ok" }