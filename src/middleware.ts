import { NextURL } from "next/dist/server/web/next-url";
import { type NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const token = req.cookies.get("auth-token")?.value;

  if (!token) {
    if (pathname === "/" || pathname === "/brands") {
      const loginUrl = new NextURL("/sign-in", origin);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (token && pathname === "/sign-in") {
    const dashboardUrl = new NextURL("/", origin);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/my-brands", "/tasks", "/sign-in"],
};
