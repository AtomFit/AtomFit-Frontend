import { getHeaders } from "@/lib/fetchUtils";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { refresh } from "../auth";

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const { email, password } = credentials;
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/login`,
          {
            method: "POST",
            credentials: "include",
            headers: getHeaders(),
            body: JSON.stringify({ email, password }),
          },
        );
        if (!response.ok) {
          const errorMsg = await response.json();
          throw new Error(errorMsg.detail);
        }
        return await response.json();
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log("token", token);
      // console.log("user", user);
      // access | refresh | expires_in = 15 min
      if (!user) return null;
      token.expiresIn = Date.now() + 15 * 60 * 1000;

      if (Date.now() < token.expiresIn) return { ...token, ...user };
      return await refresh(token);
    },
    async session({ session, token, user }) {
      session.accessToken = token.access;
      if (session?.accessToken ?? false) {
        const userResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
          {
            method: "GET",
            credentials: "include",
            headers: getHeaders(),
          },
        );
        if (!userResponse.ok) {
          const errorMsg = await userResponse.json();
          throw new Error(errorMsg.detail);
        }
        session.user = await userResponse.json();
        return session;
      }
      console.log("session", session);
      console.log("token", token);
      console.log("user", user);
      return session;
    },
  },
};
