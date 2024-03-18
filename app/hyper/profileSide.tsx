"use client";

import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { Button as TButton } from "@/components/ui/button";
import Button from "../components/Button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import MotionDiv from "../components/motion-dev";
import { ModeToggle } from "../dapp/mode-toggle";
import { MovingBorderDemo } from "../components/ui/MovingBorderDemo";

export default function ProfileSide() {
  return (
    <div className=" max-h-fit space-y-5 rounded-3xl border-slate-500 border-opacity-40 lg:border-2 lg:p-5 dark:lg:bg-black">
      {/* lg:h-[calc(100vh-4rem)] */}
      {/* <ModeToggle /> */}
      <div className=" relative">
        <Avatar
          src="/sanlinhtike.png"
          className="text-large mx-auto hidden h-40 w-40 object-fill lg:flex lg:h-60 lg:w-60"
        />
        <span className=" absolute bottom-5  right-36 flex hidden items-center justify-center gap-1 rounded-full bg-green-100 px-2 text-green-500 md:right-8 lg:bottom-2 lg:right-14">
          <div className=" h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
          available
        </span>
      </div>

      <ModeToggle />

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className="space-y-5 rounded-2xl border-2 border-slate-500 border-opacity-40 p-5 dark:bg-black"
      >
        <div className="flex items-center justify-start gap-3">
          <Avatar
            src="/sanlinhtike.png"
            className="text-large flex h-20 w-20 object-fill lg:hidden"
          />
          <div>
            <motion.h1
              initial={{ x: -3, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.9, type: "spring", stiffness: 200 },
              }}
              className="text-3xl font-bold"
            >
              San Lin Htike
            </motion.h1>
            <Link
              href={"mailto:sanlin.htik3@gmail.com"}
              className="text-gray-400 hover:underline"
            >
              sanlin.htik3@gmail.com
            </Link>
          </div>
        </div>

        <div className="">
          <h2 className=" text-gray-400">Full-stack Developer</h2>
          <h2 className=" text-gray-400">UI/UX Coding/Graphic Designer</h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 900 },
        }}
        className="flex flex-wrap gap-2 rounded-2xl border-2 border-slate-500 border-opacity-40 p-5 dark:bg-black"
      >
        {[
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "React.js",
          "UI/UX",
          "Figma",
          "Framer",
        ].map((professional) => (
          <Badge
            key={professional}
            className=" bg-slate-800 font-normal text-white hover:bg-slate-800 hover:opacity-80"
          >
            {professional}
          </Badge>
        ))}
      </motion.div>

      {/* <h6 className=" text-gray-400">&copy; 2023. All Rights Reserved</h6> */}
      <div className="flex flex-col  gap-3">
        <Link
          href={"https://www.linkedin.com/in/san-lin-htike-544041191"}
          className=" inline-block w-full"
          target="_blank"
        >
          <MovingBorderDemo
            content="Hire Me!"
            className="!bg-black"
            containerClassName="w-full"
          />
          {/* <Button className="w-full whitespace-nowrap" name="Hire Me!" /> */}
        </Link>
        {/* <Link href={"/dapp"} className=" inline-block" target="_blank">
                    <TButton className="w-full py-6 rounded-xl"><span className=" text-green-500 mr-1">Buy</span>/ <span className=" text-red-500 ml-1 mr-2">Sell </span> Crypto</TButton>
                </Link>
                <Link href={"https://fb.com/5anlinhtike"} className=" inline-block w-full" target="_blank">
                    <Button className="w-full bg-transparent border-2 border-sky-500 whitespace-nowrap" />
                </Link> */}
      </div>
    </div>
  );
}
