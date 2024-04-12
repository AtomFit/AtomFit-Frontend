import NextAuth from "next-auth/next";
import { authOption } from "./next-auth-config";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
