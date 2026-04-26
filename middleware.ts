import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  // ✅ FIX: map SEO route → actual Next route
  if (path.startsWith("/gold-rate-today/")) {
    const city = path.split("/")[2];
    url.pathname = `/gold-rate/${city}`;
    return NextResponse.rewrite(url);
  }

  // 404 example (optional safety)
  if (path.includes("atlantis")) {
    return new NextResponse("404 Not Found", { status: 404 });
  }

  return NextResponse.next();
}
