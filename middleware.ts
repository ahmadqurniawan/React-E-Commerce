// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { authOptions } from "@/lib/auth"; // pastikan kamu punya export authOptions di auth.ts

const ProtectedRoutes = ["/myreservation", "/checkout", "/admin"];

export async function middleware(req: NextRequest) {
  // Ambil token dari request nyata (middleware harus pakai getToken)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isLoggedIn = !!token;
  const role = token?.role as string | undefined;
  const { pathname } = req.nextUrl;

  // Jika belum login dan mencoba akses protected route → redirect ke signin
  if (!isLoggedIn && ProtectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Jika login tapi bukan admin, jangan akses admin
  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Jika sudah login tapi buka halaman signin → redirect ke home
  if (isLoggedIn && pathname === "/signin") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
