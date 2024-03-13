import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'BlogArticlePage'});
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: "https://gnarpy.com/blog/why-gnarpy-so-popular" },
    authors: [{name: "blini"}],
  };
}

export default function PageLayout({ children }) {
  return <article>{children}</article>
}