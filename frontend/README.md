# Frontend – SSO Google + JWT

Un cliente React en TypeScript que permite iniciar sesión mediante SSO con Google y gestiona la sesión con JWT.

---

## 📝 Descripción

- **Login** con Google (OAuth2)  
- **Captura** del JWT devuelto por el backend  
- **Dashboard** protegido que muestra el email del usuario  
- **Logout** para cerrar sesión y volver al login

---

## 🔧 Requisitos

- Node.js ≥ 14  
- El backend corriendo en `http://localhost:4000`  
- Google OAuth2 configurado (CLIENT_ID / CLIENT_SECRET)

---

## 🚀 Instalación

```bash
# Clonar y entrar al directorio
git clone <repo-url> && cd frontend

# Instalar dependencias
npm install

# Crear .env
cp .env.example .env

# Editar .env con la URL de tu API
# REACT_APP_AUTH_API=http://localhost:4000/api/auth

# Arrancar en modo desarrollo
npm start
