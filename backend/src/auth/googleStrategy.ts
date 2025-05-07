import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
      prompt: 'select_account' ,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value!;
        const user = await prisma.user.upsert({
          where: { googleId: profile.id },
          update: { displayName: profile.displayName, email },
          create: {
            googleId: profile.id,
            email,
            displayName: profile.displayName,
          },
        });
        done(null, user);
      } catch (error) {
        done(error as Error, undefined);
      }
    }
  )
);