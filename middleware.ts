import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const path = url.pathname;

  // 1️⃣ ROOT PROTECTION (no SSR UI exposure)
  if (path === "/") {
    return NextResponse.redirect(
      "https://www.paisasoch.com",
      301
    );
  }

  // 2️⃣ GOLD RATE ROUTE (allowed + redirected)
  if (path.startsWith("/gold-rate-today/")) {
    const city = path.split("/")[2];

    // Safety: ensure city exists
    if (city) {
      return NextResponse.redirect(
        `https://www.paisasoch.com/gold-rate-today/${city}`,
        301
      );
    }
  }

  // 3️⃣ ALLOW ONLY KNOWN PATTERNS (future scalable)
  const allowedPatterns = [
    /^\/gold-rate-today\/[^/]+$/,
  ];

  const isAllowed = allowedPatterns.some((regex) =>
    regex.test(path)
  );

  // 4️⃣ BLOCK EVERYTHING ELSE
  if (!isAllowed) {
    return new NextResponse("404 - Not Found", {
      status: 404,
      headers: { "content-type": "text/html" },
    });
  }

  // 5️⃣ FALLBACK (should rarely hit)
  return NextResponse.next();
}
