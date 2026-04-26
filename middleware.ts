import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const path = url.pathname;

  // GOLD RATE ROUTE
  if (path.startsWith("/gold-rate-today/")) {
    const city = path.split("/")[2];

    return NextResponse.redirect(
      `https://www.paisasoch.com/gold-rate-today/${city}`,
      301
    );
  }

  return NextResponse.next();
}
