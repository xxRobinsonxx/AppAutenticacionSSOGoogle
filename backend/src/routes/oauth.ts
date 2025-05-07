import { Router } from 'express';
import passport from 'passport';
import { oauthCallback } from '../controllers/oauthController';
import { me } from '../controllers/userController';
import { verifyJWT } from '../middleware/authMiddleware';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['openid', 'email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  oauthCallback
);

// Nuevo endpoint para que el frontend valide el JWT
router.get('/me', verifyJWT, me);

export default router;