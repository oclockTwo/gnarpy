import Image from "next/image";
// import Link from "next/link";
import {Link} from '@/navigation';
import { useTranslations } from "next-intl";

import gnarpyGun from "/public/images/gally/19.jpeg";

export default function Blog() {
  const t = useTranslations("IndexPage");
  return (
    <>
      <Link href="/blog/why-gnarpy-so-popular">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={gnarpyGun}
              alt="gnarpy with a gun"
              width={400}
              height={300}
              style={{ width: "384px", height: "auto" }}
            />
          </figure>
          <div className="card-body h-[300px]">
            <h2 className="card-title">{t("blog.title-1")}</h2>
            <p className="mt-6">
              {t("blog.p1")}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
