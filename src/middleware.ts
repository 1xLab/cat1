import { NextResponse, type NextRequest } from "next/server";

const blockedAgents = [/curl/i, /wget/i, /python-requests/i];

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  if (blockedAgents.some((regex) => regex.test(ua))) {
    return new NextResponse("Requisição bloqueada.", { status: 403 });
  }

  const csp = [
    "default-src 'self'",
    "script-src 'self' https://maps.googleapis.com 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https://maps.gstatic.com",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self'",
    "frame-src https://www.google.com",
  ].join("; ");

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Permissions-Policy", "geolocation=()");

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
