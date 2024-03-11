import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata = {
  title: "Gnarpy - Know Gnarpy Everything",
  description:
    "Presenting all the relevant information about Gnarpy and an in-depth analysis of gnarpy",
  alternates: {
    canonical: "https://gnarpy.com",
  },
  authors: [{name: "blini"}],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <Script
        defer
        data-domain="gnarpy.com"
        src="https://yearbookai.online/js/script.js"
      />
      <body className={lora.className}>
        <Header />
        {children}
      </body>
      <GoogleAnalytics gaId="G-ZVJD2TJ85Y" />
    </html>
  );
}
