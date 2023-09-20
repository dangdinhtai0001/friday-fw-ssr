import acceptLanguage from 'accept-language';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { fallbackLang, languages, cookieName } from '@/package/michael/i18n';

acceptLanguage.languages(languages);

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - assets
         * - sw.js
         */
        '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
    ],
}

/**
 * Middleware to handle language detection and redirection
 * 
 * Tries to detect the language from:
 * 1. Cookie
 * 2. Accept-Language header 
 * 3. Fallback language
 *
 * Redirects to the correct path if the language in path 
 * doesn't match any supported language
 *
 * Sets the language cookie if it is present in the referer URL
 */

export function middleware(req: NextRequest) {

    /**
     * Try to get language from cookie
     */
    let language
    if (req.cookies.has(cookieName)) {
        language = acceptLanguage.get(req.cookies.get(cookieName)?.value)
    }

    /**
     * Try Accept-Language header if not found in cookie
     */
    if (!language) {
        language = acceptLanguage.get(req.headers.get('Accept-Language'))
    }

    /**
     * Use fallback if not found in header
     */
    if (!language) {
        language = fallbackLang
    }

    /**
     * Redirect if path language doesn't match supported languages
     */
    if (
        !languages.some(lang => req.nextUrl.pathname.startsWith(`/${lang}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${language}${req.nextUrl.pathname}`, req.url))
    }

    /**
     * Check referer header
     */
    if (req.headers.has('referer')) {

        /**
         * Get referer URL
         */
        const refererUrl = new URL(req.headers.get('referer') || fallbackLang);

        /**
         * Check if language is present in referer
         */
        const langInReferer = languages.find((lang) => refererUrl.pathname.startsWith(`/${lang}`))

        /**
         * Set language cookie if found
         */
        const response = NextResponse.next()
        if (langInReferer) response.cookies.set(cookieName, langInReferer)

        return response
    }

    return NextResponse.next()

}
