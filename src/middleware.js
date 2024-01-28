import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';

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

export default auth((request) => {
    console.log(request.auth)

    if (request.nextUrl.pathname.includes('/dashboard') && !request.auth) {
        return auth(request)
    }

    if (request.nextUrl.pathname.includes('login')) {
        return
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
})


export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // '/'
        // Optional: only run on root (/) URL
        // '/'
        '/((?!api|_next/static|_next/image|.*\\.webp$|.*\\.svg$).*)'
    ],
}