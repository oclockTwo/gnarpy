import { Inter, Lora } from "next/font/google";
import Header from "@/components/Header/Header";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getTranslations } from "next-intl/server";
import { locales } from "@/navigation";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "IndexPage" });
  const localeObj = locales.reduce((acc, locale) => {
    acc[locale] = `/${locale}`;
    return acc;
  }, {});
  delete localeObj["en"];
  return {
    metadataBase: new URL("https://gnarpy.com"),
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/", languages: localeObj },
    authors: [{ name: "blini" }],
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
      <meta
        name="google-adsense-account"
        content="ca-pub-8993913594775765"
      ></meta>
      <head>
        <Script
          lazyOnload
          data-domain="gnarpy.com"
          src="https://click.pageview.click/js/script.js"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8993913594775765"
          crossOrigin="anonymous"
        />
      </head>
      <body className={lora.className}>
        <Header locale={locale} />
        {children}
      </body>
      <GoogleAnalytics gaId="G-ZVJD2TJ85Y" />
    </html>
  );
}
