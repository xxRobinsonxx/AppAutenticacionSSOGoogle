import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const oauthCallback = (req: Request, res: Response) => {
  const user = req.user as { id: string };
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || 'secret123',
    { expiresIn: '1h' }
  );
  res.redirect(
    `${process.env.FRONTEND_URL}/oauth2/redirect?token=${token}`
  );
};