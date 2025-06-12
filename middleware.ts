import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next(); // Don't redirect locally
  }

  const proto = req.headers.get('x-forwarded-proto');

  if (proto === 'http') {
    const url = req.nextUrl;
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}