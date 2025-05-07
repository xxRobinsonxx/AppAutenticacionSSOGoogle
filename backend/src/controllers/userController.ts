// src/controllers/oauthController.ts  (o userController.ts)
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function me(req: Request, res: Response) {
  const userId = (req as any).userId as string;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, displayName: true, googleId: true }
  });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}
