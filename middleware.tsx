import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const protectedRoutes = ["/search", "/activity", "/@user"]; 
  const authRoute = "/auth/Login";  
  const homeRoute = "/"; 

  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const url = new URL(request.nextUrl);

  // Check if the user is trying to access a protected route without a token
  if (!token && protectedRoutes.includes(request.nextUrl.pathname)) {
    const loginUrl = new URL(authRoute, request.nextUrl.origin);
    return NextResponse.redirect(loginUrl.toString());
  }

  // Check if the user is trying to access the auth route with a token
  if (token && url.pathname.includes(authRoute)) {
    const homeUrl = new URL(homeRoute, request.nextUrl.origin);
    return NextResponse.redirect(homeUrl.toString());
  }

  // Allow access to all other routes
  return NextResponse.next();
}
