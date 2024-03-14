import { Inter, Lora } from "next/font/google";
import Header from "@/components/Header/Header";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import {getTranslations} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'IndexPage'});
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: "https://gnarpy.com" },
    authors: [{name: "blini"}],
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} data-theme="light">
      <Script
        defer
        data-domain="gnarpy.com"
        src="https://yearbookai.online/js/script.js"
      />
      <body className={lora.className}>
        <Header locale={locale} />
        {children}
      </body>
      <GoogleAnalytics gaId="G-ZVJD2TJ85Y" />
    </html>
  );
}
