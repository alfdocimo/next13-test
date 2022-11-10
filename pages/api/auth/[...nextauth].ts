import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../lib/db";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "", // Hex color code
  },
  providers: [
    CredentialsProvider({
      id: "github",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      name: "Creds",
      async authorize(credentials) {
        try {
          const foundUser = await db.user.findFirstOrThrow({
            where: {
              email: credentials?.email,
              password: credentials?.password,
            },
          });

          const user: User = {
            id: foundUser?.id as string,
            name: foundUser?.name,
            email: foundUser?.email,
          };
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
