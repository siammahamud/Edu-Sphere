import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/model/user-model";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const user = await User.findOne({ email: credentials.email });
          console.log(user);
          if (!user) {
            throw new Error("No user found !! ");
          }
          if (user) {
            const isMatch = bcrypt.compare(
              credentials?.password,
              user?.password
            );
            if (!isMatch) {
              throw new Error("Invalid password");
            }
          }
          return user;
        } catch (error) {
          throw new error();
        }
      },
    }),
  ],
});
