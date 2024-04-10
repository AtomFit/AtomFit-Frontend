import NextAuth from "next-auth/next";

declare module "next-auth" {
  type Session = {
    user: {
      id: number;
      username: string;
      email: string;
    };
  };
}
