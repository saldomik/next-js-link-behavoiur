import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('my-token') || undefined;
  if (token && !request.nextUrl.pathname.includes('page1')) {
    console.log('inside middleware!')
    return NextResponse.redirect(new URL('/page1', request.url));
  }

  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/page1']
};