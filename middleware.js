import { NextResponse } from "next/server";
import { resolveRequest } from "./src/governance/engine";

export function middleware(request) {
  const url = request.nextUrl.pathname;

  const result = resolveRequest(url);

  // ✅ 301 REDIRECT
  if (result.kind === "redirect") {
    return NextResponse.redirect(new URL(result.redirectTo, request.url), 301);
  }

  // ✅ 404
  if (result.kind === "notfound") {
    return new NextResponse("404 Not Found", { status: 404 });
  }

  // ✅ ALLOW NORMAL FLOW
  return NextResponse.next();
}
