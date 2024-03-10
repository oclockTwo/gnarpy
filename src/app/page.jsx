/* eslint-disable react/no-unescaped-entities */
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

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-0">
      <div className="flex justify-between items-center mt-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-extrabold my-4">Gnarpy Pedia</h1>
          <p className="text-md mt-6 font-semibold">
            Gnarpy is an NPC character in the game regretevator, which is a game
            developed using the Roblox platform and published on it, created by
            a developer called{" "}
            <span className="text-green-400">The Axolotl Sun</span>
          </p>
          <p className="mt-6">
            Gnarpy has attracted a lot of discussion among the gaming community
            for being redesigned.
          </p>
        </div>
        <div className="hidden lg:block">
          <Image
            src={gnarpyBrand}
            alt="gnarpy style brand"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <h2 className="text-4xl my-4 font-bold">Gnarpy Appearance</h2>
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
              gnarpy old model
            </h3>
          </div>
          <p className="text-md font-medium">
            Gnarpy's old model appearance is mainly bright neon green, except
            for a yellow pentagon star on the belly. Xe's body structure is like
            a human's but with a face somewhat cat-like. Additionally, there are
            two antennas on top of the head, with tips that can emit bright
            yellow light.
            <br />
            <br />
            Gnarpy's mouth resembles a human's mustache, quite distinctive. Xyr
            arms and legs, aside from being bright green, also have several dark
            green stripes, adding some embellishment to xyr image.
            <br />
            <br />
            Like a cat, Gnarpy has a tail, also in bright green, featuring two
            dark green stripes. If you just look at the tail, it's like a
            caterpillar. Moreover, Gnarpy's eyes are always closed, adding a
            touch of simplicity to xyr demeanor.
            <br />
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col flex-shrink-0">
            <Image
              src={gnarpyNew}
              alt="gnarpy new model"
              // width={400}
              style={{ width: "300px", height: "auto" }}
            />
            <h3 className="px-8 text-2xl font-semibold text-center">
              gnarpy new model
            </h3>
          </div>
          <p className="text-md font-medium md:pl-[100px]">
            The new model of Gnarpy has undergone significant changes in
            appearance. Xe now has four hands instead of two, four ears instead
            of two, and two tails instead of one. The facial whiskers have also
            become more pronounced; previously, there were four whiskers, two on
            each side of the face, but now there are three on each side, making
            six in total. What's more, where there were two eyes before, there
            are now four.
            <br />
            Additionally, an important update is that the new Gnarpy has added
            clothing and boots, both in dark red. The clothing features a dark
            yellow little star on the chest. Also, the legs, which were bright
            green before, have now turned yellow. The dark green stripes across
            the body have also increased in number.
            <br />
            The old model of Gnarpy seemed as if its entire body was assembled
            from several blocks, while the new model of Gnarpy has limbs that
            are more anthropomorphic. The face still resembles that of a cat.
            However, due to the number of limbs, many say xe is a cat from
            another planet.
            <br />
            <br />
            Notably, on Xyr Halloween skin, xe has patches on his right arm,
            left foot, and waist.
          </p>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-4">Gnarpy Description in Game</h2>
      <div>
        <p className="text-md font-medium">
          Gnarpy's green spaceship malfunctions in the forest at Two Stud Camp,
          crashing into the secret area of the camp, where xe will proceed to
          sneak into the elevator. There is a 50/50 chance for either xem or
          Spud! to enter the elevator on the floor.
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
              Tow Stud Camp
            </h3>
          </div>
          <div className="flex flex-col">
            <Image src={spud} alt="spud" width={300} />
            <h3 className="px-8 text-lg font-semibold text-center">Spud</h3>
          </div>
        </div>
      </div>
      <h2 className="text-4xl my-4 font-bold">Gnarpy Voice And Music</h2>
      <VoiceTable />
      <h2 className="text-4xl my-4 font-bold">Gnarpy Blog</h2>
      <Blog />
      <h2 className="text-4xl my-4 font-bold">Gnarpy Model Gallery<span className="text-sm font-normal">(sourced from x)</span></h2>
      <Gally />
      <h2 className="text-4xl my-4 font-bold">People Talk About Gnarpy on X</h2>
      <TwitterPost />
      <h2 className="text-4xl my-4 font-bold">FAQ About Gnarpy</h2>
      <Faq />
    </div>
  );
}
