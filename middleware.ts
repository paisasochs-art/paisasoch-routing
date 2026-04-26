import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.toLowerCase()

  // ✅ Allow homepage
  if (path === '/') {
    return NextResponse.redirect('https://www.paisasoch.com')
  }

  // ✅ Allow gold rate pages
  if (path.startsWith('/gold-rate-today')) {
    return NextResponse.redirect(`https://www.paisasoch.com${path}`)
  }

  // ✅ Allow calculators
  if (path.startsWith('/calculators')) {
    return NextResponse.redirect(`https://www.paisasoch.com${path}`)
  }

  // ❌ Everything else → 404
  return new NextResponse('Not Found', { status: 404 })
}
