import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_CITIES = new Set([
  "mumbai","delhi","bangalore","hyderabad","chennai"
  // extend later
]);

function isValidCity(city: string) {
  return VALID_CITIES.has(city);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const path = pathname.toLowerCase().replace(/\/+$/, "");

  // ✅ 1. GOLD RATE PAGE
  if (path.startsWith("/gold-rate-today/")) {
    const city = path.split("/")[2];

    if (!city || !isValidCity(city)) {
      return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.next();
  }

  // ✅ 2. 301 REDIRECTS (variants)
  if (
    path.includes("18k-gold-price") ||
    path.includes("22k-gold-price") ||
    path.includes("24k-gold-price") ||
    path.includes("10-gram-gold-price") ||
    path.includes("1-gram-gold-price")
  ) {
    const city = path.split("-").pop();

    if (city && isValidCity(city)) {
      const url = request.nextUrl.clone();
      url.pathname = `/gold-rate-today/${city}`;
      return NextResponse.redirect(url, 301);
    }

    return new NextResponse("Gone", { status: 410 });
  }

  // ✅ 3. ALLOW ROOT + BASIC PAGES
  if (
    path === "/" ||
    path.startsWith("/blog") ||
    path.startsWith("/about")
  ) {
    return NextResponse.next();
  }

  // ❌ 4. BLOCK EVERYTHING ELSE
  return new NextResponse("Not Found", { status: 404 });
}
