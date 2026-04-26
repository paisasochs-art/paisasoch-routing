import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  // 👉 Map SEO URL → Lovable URL
  if (path.startsWith("/gold-rate-today/")) {
    const city = path.split("/")[2];

    // 👇 THIS IS THE KEY CHANGE
    return NextResponse.rewrite(
      new URL(`https://www.paisasoch.com/gold-rate-today/${city}`)
    );
  }

  return NextResponse.next();
}
