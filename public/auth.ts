// import NextAuth from "next-auth"
// import { prisma } from "@/lib/prisma"
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import Google from "next-auth/providers/google"


// export const { handlers, signIn, signOut, auth } = NextAuth({
//   secret: process.env.NEXTAUTH_SECRET, // ✅ WAJIB untuk enkripsi session/token
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,        // ✅ dari .env.local
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // ✅ dari .env.local
//     }),
//   ],

//   session: { strategy: "jwt" },

//   pages: {
//     signIn: "/signin",
//   },
//   callbacks: {
//     jwt({ token, user }) {
//       if (user) {
//         token.role = user.role ?? "user"; // ✅ fallback default
//       }
//       return token;
//     },

//     session({ session, token }) {
//       session.user.id = token.sub!;
//       session.user.role = token.role ?? "user"; // ✅ fallback
//       return session;
//     },

//   },
// })
