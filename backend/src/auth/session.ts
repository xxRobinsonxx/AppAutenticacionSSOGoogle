import passport from 'passport';
import { PrismaClient } from '@prisma/client';

passport.serializeUser((user: any, done) => done(null, user.id));

passport.deserializeUser(async (id: string, done) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({ where: { id } });
  done(null, user);
});