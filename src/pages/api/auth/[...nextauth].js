import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import client from "../../../../lib/db"

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.SECRET,
  },
  adapter: MongoDBAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

