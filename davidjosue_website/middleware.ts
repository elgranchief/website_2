import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en-US', 'es-MX'];
const defaultLocale = 'en-US';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect root path based on Accept-Language header
  if (pathname === '/') {
    const acceptLanguageHeader = request.headers.get('Accept-Language');
    const preferredLanguage = acceptLanguageHeader?.split(',')[0].split('-')[0].toLowerCase();

    if (preferredLanguage === 'es') {
      return NextResponse.redirect(new URL('/es-MX', request.url));
    } else {
      return NextResponse.redirect(new URL('/en-US', request.url));
    }
  }

  // Existing logic: Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher explicitly ignoring `/_next/`, `/api/`, `/admin/`, `favicon.ico`, and other static assets (files with extensions)
  matcher: ['/((?!api|_next/static|_next/image|admin|favicon\\.ico|.*\\..*).*)'],
}
