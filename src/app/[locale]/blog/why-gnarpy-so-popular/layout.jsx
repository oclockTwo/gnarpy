import {getTranslations} from 'next-intl/server';
import { locales } from "@/navigation";

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'BlogArticlePage'});
  const localeObj = locales.reduce((acc, locale) => {
    acc[locale] = `/${locale}/blog/why-gnarpy-so-popular`;
    return acc;
  }, {});
  delete localeObj[locale];
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: "/blog/why-gnarpy-so-popular", languages: localeObj },
    authors: [{name: "blini"}],
  };
}

export default function PageLayout({ children }) {
  return <article>{children}</article>
}