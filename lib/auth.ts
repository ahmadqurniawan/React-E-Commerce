// lib/auth.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Google from "next-auth/providers/google";
import { prisma } from "./prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }: { token: any; user?: any }) {
      if (user) token.role = user.role ?? "user";
      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role ?? "user";
      }
      return session;
    },
  },
};
