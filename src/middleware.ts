// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     if (
//       req.nextUrl.pathname.startsWith("/admin") &&
//       req.nextauth.token?.email !== "admin"
//     )
//       return NextResponse.rewrite(
//         new URL("/auth/signin?message=You Are Not Athorized!", req.url)
//       );
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/protectedRoutes"],
};
