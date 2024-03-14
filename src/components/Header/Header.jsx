// import Link from "next/link";
import {Link} from '@/navigation';
import Image from "next/image";
import ThemeChanger from "./ThemeChanger";
import Multilang from '../Multilang/Multilang';
import { useTranslations } from "next-intl";

import logo from "/public/images/logo.png";

export default function Header({locale}) {
  const t = useTranslations("HeaderPage");

  return (
    <header className="w-full max-w-[1200px] mx-auto mt-6 px-4">
      <div className="flex flex-wrap justify-between">
        <div className="flex justify-start items-center gap-x-1 cursor-pointer">
          <Link href="/" className="">
            <Image src={logo} alt="gnarpy logo" className="w-[40px]" />
          </Link>
          <p className="text-lg font-bold">Gnarpy</p>
        </div>
        <div className="flex gap-x-2">
          <div className="flex justify-between text-lg tracking-wider font-normal gap-x-4 mt-1">
            <Link href="/">
              {t("home")}
            </Link>
            <Link href="#faq">
              {t("faq")}
            </Link>
            <Link href="/blog">
              {t("blog")}
            </Link>
          </div>
          <Multilang locale={locale} />
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
}
