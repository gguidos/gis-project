import { type Locale, locales, defaultLocale } from "@/lib/locales";
import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

// Create the next-intl middleware for internationalization
const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "never",
});

// Function to add CSP headers to the response
function addCspHeaders(response: NextResponse): NextResponse {
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      "Content-Security-Policy",
      "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "img-src 'self' https://*.google.com https://*.googleapis.com https://*.gstatic.com data:; " +
        "connect-src 'self' https://maps.googleapis.com https://*.google.com https://*.gstatic.com; " +
        "frame-src 'self' https://*.google.com; " +
        "object-src 'none'; " +
        "form-action 'self'; " +
        "base-uri 'self'; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "media-src 'none'; " +
        "worker-src 'self' blob:;"
    );
  }
  return response;
}

export default function middleware(req: NextRequest): NextResponse {
  // Apply the next-intl middleware
  const response = nextIntlMiddleware(req);
  // Add the CSP headers to the response
  return addCspHeaders(response);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
