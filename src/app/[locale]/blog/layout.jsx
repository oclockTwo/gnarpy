import {getTranslations} from 'next-intl/server';
import { locales } from "@/navigation";

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'BlogPage'});
  const localeObj = locales.reduce((acc, locale) => {
    acc[locale] = `/${locale}/blog`;
    return acc;
  }, {});
 
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: "/blog", languages: localeObj },
  };
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}