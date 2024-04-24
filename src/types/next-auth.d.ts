import NextAuth from "next-auth/next";

declare module "next-auth" {
  type Session = {
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
  };
}
