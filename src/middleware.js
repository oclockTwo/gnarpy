import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
  alternateLinks: true // Defaults to `true`
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en|ja|es|de|fr|ko|pt|vi|ru)/:path*']
};