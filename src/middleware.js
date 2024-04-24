import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
import { NextResponse } from 'next/server';

let locales = ['es', 'en']
let defaultLocale = 'es'

export const getLocale = (request) => {
    let locale = request.headers.get('accept-language')
    console.log(locale)

    if (locale.startsWith('es')) {
        return defaultLocale
    }

    return 'en'
}

const { auth } = NextAuth(authConfig);

export default function middleware(request) {
    if (request.nextUrl.pathname.includes('/dashboard')) {
        return auth(request)
    }

    if (request.nextUrl.pathname.includes('login')) {
        return auth(request)
    }

    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)

    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return Response.redirect(request.nextUrl)
}


export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // '/'
        // Optional: only run on root (/) URL
        // '/'
        '/((?!_next|.*\\.[webp|svg|pdf]).*)',
    ]
}