import createMiddleware from 'next-intl/middleware';
import {locales} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix: 'as-needed',
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(zh|en|ja|es|de|fr|ko|pt|vi|ru|fi)/:path*', '/:path*']
  matcher: ['/', '/(zh|en|ja|es|de|fr|ko|pt|vi|ru|fi)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)', '/([\\w-]+)?/users/(.+)']
};