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
      <Script
        defer
        data-domain="gnarpy.com"
        src="https://yearbookai.online/js/script.js"
      />
      <Script
        lazyOnload
        data-domain="gnarpy.com"
        src="https://click.pageview.click/js/script.js"
      />
      <body className={lora.className}>
        <Header locale={locale} />
        {children}
      </body>
      <GoogleAnalytics gaId="G-ZVJD2TJ85Y" />
    </html>
  );
}
