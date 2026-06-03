"use client";

import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ModeToggle } from "../dapp/mode-toggle";
import { MovingBorderDemo } from "../components/ui/MovingBorderDemo";
import { ExternalLink, Mail, MonitorSmartphone } from "lucide-react";

const tools = [
  "Figma",
  "FigJam",
  "Prototyping",
  "Design Systems",
  "iOS",
  "iPadOS",
  "macOS",
  "Usability",
];

const highlights = [
  "Product UI/UX for mobile and desktop apps",
  "Wireframes, prototypes, and high-fidelity screens",
  "Clean interfaces for real business workflows",
];

export default function ProfileSide() {
  return (
    <aside className="max-h-fit w-full space-y-5 rounded-3xl border-slate-200/80 text-slate-950 lg:sticky lg:top-7 lg:border-2 lg:bg-white/60 lg:p-5 lg:shadow-sm dark:border-slate-500/40 dark:text-slate-50 dark:lg:bg-black">
      <div className="relative hidden lg:block">
        <Avatar
          src="/sanlinhtike.png"
          className="mx-auto h-52 w-52 object-cover xl:h-60 xl:w-60"
        />
        <span className="absolute bottom-2 right-8 flex items-center justify-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-600 xl:right-14">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          available
        </span>
      </div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className="space-y-5 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm dark:border-slate-500/40 dark:bg-black"
      >
        <div className="flex items-center justify-start gap-3">
          <Avatar
            src="/sanlinhtike.png"
            className="flex h-20 w-20 shrink-0 object-cover lg:hidden"
          />
          <div className="min-w-0">
            <motion.h1
              initial={{ x: -3, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.9, type: "spring", stiffness: 200 },
              }}
              className="text-2xl font-bold leading-tight sm:text-3xl"
            >
              San Lin Htike
            </motion.h1>
            <Link
              href={"mailto:sanlin.htik3@gmail.com"}
              className="flex min-w-0 items-center gap-2 break-all text-sm text-slate-500 hover:underline dark:text-gray-400"
            >
              <Mail className="h-4 w-4 shrink-0" />
              sanlin.htik3@gmail.com
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="flex items-center gap-2 text-slate-900 dark:text-gray-200">
            <MonitorSmartphone className="h-4 w-4 text-sky-400" />
            UI/UX Designer
          </h2>
          <p className="text-sm leading-6 text-slate-600 dark:text-gray-400">
            Designing focused product experiences for macOS, iOS, and iPadOS.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 900 },
        }}
        className="flex flex-wrap gap-2 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm dark:border-slate-500/40 dark:bg-black"
      >
        {tools.map((professional) => (
          <Badge
            key={professional}
            className="bg-slate-100 font-normal text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            {professional}
          </Badge>
        ))}
      </motion.div>

      <div className="space-y-3 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm dark:border-slate-500/40 dark:bg-black">
        {highlights.map((item) => (
          <p key={item} className="text-sm leading-6 text-slate-600 dark:text-gray-400">
            {item}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href={"https://www.linkedin.com/in/san-lin-htike-544041191"}
          className="inline-block w-full"
          target="_blank"
        >
          <MovingBorderDemo
            content="View LinkedIn"
            className="!bg-white !text-slate-950 dark:!bg-black dark:!text-white"
            containerClassName="w-full"
          />
        </Link>
        <Link
          href={"mailto:sanlin.htik3@gmail.com"}
          className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-800 shadow-sm transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:bg-black dark:text-gray-200 dark:hover:text-sky-300"
        >
          Start a project <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-500 shadow-sm dark:border-slate-800 dark:bg-black dark:text-slate-400">
        <span>Theme</span>
        <ModeToggle />
      </div>
    </aside>
  );
}
