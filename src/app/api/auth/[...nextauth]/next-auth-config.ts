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
            headers: getHeaders,
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
      // access | refresh | expires_in = 15 min
      if (user) {
        token.refreshToken = user.refresh;
        token.accessToken = user.access;
        token.expiresIn = Date.now() + 15 * 60 * 1000;
      }

      if (Date.now() < token.expiresIn) return token;
      return await refresh(token);
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      if (session?.accessToken ?? false) {
        console.log("Testam asta");
        const userResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
          {
            method: "GET",
            credentials: "include",
            headers: getHeaders,
          },
        );
        console.log(userResponse);
        if (userResponse.ok) {
          session.user = await userResponse.json();
        }
      }
      console.log(session);

      return session;
    },
  },
};
