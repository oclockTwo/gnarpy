/* eslint-disable react/no-unescaped-entities */
import { useTranslations } from "next-intl";
import Image from "next/image";
import Gally from "@/components/Gally/Gally";
import TwitterPost from "@/components/Twitter/Twitter";
import VoiceTable, { Table } from "@/components/VoiceTable/VoiceTable";

import gnarpyNew from "/public/images/gnarpy-new.png";
import gnarpyOld from "/public/images/gnarpy-old.png";
import twostudcamp from "/public/images/twostudcamp.png";
import gnarpyBrand from "/public/images/gnarpy-brand.jpeg";
import spud from "/public/images/spud.webp";
import Faq from "@/components/Faq/Faq";
import Blog from "@/components/Blog/Blog";

export default function Index() {
  const t = useTranslations("IndexPage");
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-0">
      <div className="flex justify-between items-center mt-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-extrabold my-4">{t("headline.h1")}</h1>
          <p className="text-md mt-6 font-semibold">
            {t("headline.h1p1")}
            <span className="text-green-400">{t("headline.h1p2")}</span>
          </p>
          <p className="mt-6">{t("headline.h1p3")}</p>
        </div>
        <div className="hidden lg:block">
          <Image
            src={gnarpyBrand}
            alt="gnarpy style brand"
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <h2 className="text-4xl my-4 font-bold">{t("headline.h2-1")}</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col flex-shrink-0">
            <Image
              src={gnarpyOld}
              alt="gnarpy old model"
              // width={400}
              style={{ width: "400px", height: "auto" }}
            />
            <h3 className="px-8 text-2xl font-semibold text-center">
              {t("headline.h3-1")}
            </h3>
          </div>
          <p className="text-md font-medium">
            {t.rich("headline.h3-1-p1", {
              br: () => <br />,
            })}
            <br></br>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col flex-shrink-0 pl-10">
            <Image
              src={gnarpyNew}
              alt="gnarpy new model"
              // width={400}
              style={{ width: "300px", height: "auto" }}
            />
            <h3 className="px-8 text-2xl font-semibold text-center">
              {t("headline.h3-2")}
            </h3>
          </div>
          <p className="text-md font-medium md:pl-[60px]">
            {t.rich("headline.h3-2-p1", {
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-4"> {t("headline.h2-2")} </h2>
      <div>
        <p className="text-md font-medium">
          {t("headline.h2-2-p1")}
        </p>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-col">
            <Image
              src={twostudcamp}
              alt="two stud camp"
              width={300}
              className="mt-[50px]"
            />
            <h3 className="mt-[50px] px-8 text-lg font-semibold text-center">
              {t("headline.h3-3")}
            </h3>
          </div>
          <div className="flex flex-col">
            <Image src={spud} alt="spud" width={300} />
            <h3 className="px-8 text-lg font-semibold text-center">{t("headline.h3-4")}</h3>
          </div>
        </div>
      </div>
      <h2 className="text-4xl my-4 font-bold">{t("headline.h2-3")}</h2>
      <VoiceTable />
      <h2 className="text-4xl my-4 font-bold">{t("headline.h2-4")}</h2>
      <Blog />
      <h2 className="text-4xl my-4 font-bold">
        {t("headline.h2-5")}
        <span className="text-sm font-normal">{t("headline.h2-5-p1")}</span>
      </h2>
      <Gally />
      <h2 className="text-4xl my-4 font-bold">{t("headline.h2-6")}</h2>
      <TwitterPost />
      <h2 className="text-4xl my-4 font-bold" id="faq">
      {t("headline.h2-7")}
      </h2>
      <Faq />
    </div>
  );
}
