import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      redirectUri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: "kSos8D4JG1NfnVJFHykRQewjcfsShjejBMniN1TGr6I=",
});
