import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import Google from "next-auth/providers/google";
// import Providers from "next-auth/providers";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // profile(profile) {
      //   return { role: profile.role ?? "user" };
      // },
      // userRole: "admin",
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },
  // callbacks: {
  //   jwt({ token, user }) {
  //     // eslint-disable-next-line no-param-reassign
  //     if (user) token.role = user.role;
  //     return token;
  //   },
  //   session({ session, token }) {
  //     // eslint-disable-next-line no-param-reassign
  //     session.user.role = token.role;
  //     return session;
  //   },
  // },
};

// export default NextAuth(authOptions)
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
