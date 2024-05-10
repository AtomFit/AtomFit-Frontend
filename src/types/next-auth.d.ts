import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken: string | unknown;
    user: {
      id: number;
      username: string;
      email: string;
      is_male: boolean;
      weight_preference: number;
      goal: string;
      age: number;
      weight: number;
      height: number;
      is_active: boolean;
      is_superuser: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    expiresIn: number;
  }
}
