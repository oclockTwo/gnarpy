import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'BlogPage'});
 
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: "https://gnarpy.com/blog" },
  };
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}