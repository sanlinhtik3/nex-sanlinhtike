"use client";

import Button from "@/app/components/Button";
import { CardContainer } from "@/app/components/ui/3d-card";
import { MovingBorderDemo } from "@/app/components/ui/MovingBorderDemo";
import { NavbarDemo } from "@/app/components/ui/NavbarDemo";
import { SparklesPreview } from "@/app/components/ui/SparklesPreview";
import { TextGenerateEffectDemo } from "@/app/components/ui/TextGenerateEffectDemo";
import { TextRevealCardPreview } from "@/app/components/ui/TextRevealCardPreview";
import { ThreeDCardDemo } from "@/app/components/ui/ThreeDCardDemo";
import { ThreeDCardProfile } from "@/app/components/ui/ThreeDCardProfile";
import { TypewriterEffectSmoothDemo } from "@/app/components/ui/TypewriterEffectSmoothDemo";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { DropdownMenuDemo } from "@/app/demo/DropdownMenuDemo";
import { TabsDemo } from "@/app/demo/tabs-demo";
import { motion } from "framer-motion";
import Link from "next/link";

export const projects = [
  {
    title: "YouTube",
    description:
      "This YouTube Channel will help you become a Newly on Expert in HTML, CSS, JavaScript, Bootstrap, Tailwindcss, React lessons.Outside, you will have to study as you attend the course, and you will have to study with an up- to - date library and framework version.",
    link: "https://www.youtube.com/@SanLinHtike",
  },
  {
    title: "Telegram",
    description:
      "This Telegram Channel will help you become a Crypto Expert in Binance, Real Time Crypto News, DeFi, NFT, GameFi, SocialFi, Metaverse, and more.",
    link: "t.me/zoecryptofree",
  },
  {
    title: "TikTok",
    description:
      "This TikTok Account will help you become a Crypto Expert in Binance, Real Time Crypto News and more.",
    link: "https://tiktok.com/zoedevcrypto",
  },
  {
    title: "Facebook",
    description:
      "This Facebook Page will help you become a Crypto Expert in Binance, Real Time Crypto News and more.",
    link: "https://facebook.com/realzoedevcrypto",
  },
  {
    title: "Online Book",
    description: `This Learn Page has been developed for those who want to learn
      Web Development in a short
      time and systematically. You will learn JavaScript, Git, Github,
      Tailwindcss, React, Next.js lessons through the Online Learn Book
      system. Click and learn.`,
    link: "https://learn-sanlinhtike.vercel.app/",
  },
];

export default function IntroSection() {
  return (
    <>
      {/* <ThreeDCardDemo /> */}
      {/* <SparklesPreview /> */}
      {/* <TextRevealCardPreview /> */}
      {/* <NavbarDemo /> */}
      {/* <ThreeDCardProfile /> */}

      <div className="!mt-10">
        <h6 className="mb-20 inline-block rounded-lg border p-2 text-left text-xs uppercase">
          Introduced
        </h6>

        <h1 className="text-4xl font-bold uppercase leading-tight md:text-6xl lg:text-8xl">
          Learn Now&rsquo; Apply <span className=" text-sky-500">Future</span>
        </h1>

        <div className="mb-10">
          <TextGenerateEffectDemo />
        </div>

        {/* <p className=" mb-10 max-w-lg text-2xl leading-10 text-gray-400">
          Build a more efficient Web App in less time? Or lead a career with Web
          Development for your children/young people? Ready to let's go?
        </p> */}

        <div className="mb-10 flex flex-col gap-5 lg:flex-row">
          <Link
            href={
              "https://drive.google.com/file/d/1oU2Hatb-xP89gL4zEsLzA6Gf7e9b7dxK/view?usp=sharing"
            }
            className=" inline-block"
            target="_blank"
          >
            <MovingBorderDemo content="Download CV" className="!bg-black" />
          </Link>
          <Link
            href={"mailto:sanlin.htik3@gmail.com"}
            className=" inline-block"
            target="_blank"
          >
            <MovingBorderDemo
              content="Send Email"
              className="!bg-transparent"
            />
          </Link>
          {/* <DropdownMenuDemo /> */}
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          className="grid gap-5 rounded-3xl border-2 border-slate-500 border-opacity-40 p-5 lg:grid-cols-2 lg:p-10 dark:bg-black"
        >
          <div className="">
            <h6 className=" text-6xl font-bold text-sky-500">5+</h6>
            <h6 className="text-lg font-bold">Years of Experience</h6>
            <p className="text-sm text-gray-400">
              Contact and start your{" "}
              <span className=" text-slate-200">business/learn</span> journey
              now
            </p>
          </div>
          <div className="">
            <h6 className=" text-6xl font-bold text-sky-500">80+</h6>
            <h6 className="text-lg font-bold">Projects completed</h6>
            <p className="text-sm text-gray-400">
              Utilise, Flexibility, Scalability ,Compatibility{" "}
            </p>
          </div>
        </motion.div>

        <HoverEffect items={projects} />

        {/* <div className="grid grid-cols-1 gap-5 rounded-3xl border-2 border-slate-500 border-opacity-40 bg-[#0d0e18] p-5 lg:grid-cols-2 lg:p-10">
          <Link
            href={"https://learn-sanlinhtike.vercel.app/"}
            className="transform space-y-5 rounded-2xl bg-gray-950 p-3 transition-colors duration-200 hover:bg-gray-900 "
          >
            <h1 className=" text-3xl font-medium lg:text-4xl">Online Book</h1>
            <h1>Learn Your Career Path</h1>
            <p className="text-gray-400">
              This Learn Page has been developed for those who want to learn{" "}
              <span className=" text-white">Web Development</span> in a short
              time and systematically. You will learn JavaScript, Git, Github,
              Tailwindcss, React, Next.js lessons through the Online Learn Book
              system. Click and learn.
            </p>
          </Link>
          <Link
            href={"https://www.youtube.com/@SanLinHtike"}
            className=" transform space-y-5 rounded-2xl bg-gray-950 p-3 transition-colors duration-200 hover:bg-gray-900"
          >
            <h1 className=" text-3xl font-medium lg:text-4xl">YouTube</h1>
            <h1>Learn Your Career Path</h1>
            <p className="text-gray-400">
              This YouTube Channel will help you become a Newly on Expert in
              <span className=" text-white">
                HTML, CSS, JavaScript, Bootstrap, Tailwindcss, React
              </span>
              lessons. Outside, you will have to study as you attend the course,
              and you will have to study with an up-to-date library and
              framework version.
            </p>
          </Link>
        </div> */}
        <div className="mt-10 lg:col-span-2">
          <TabsDemo />
        </div>
      </div>
    </>
  );
}
