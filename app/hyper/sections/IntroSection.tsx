"use client";

import { MovingBorderDemo } from "@/app/components/ui/MovingBorderDemo";
import { MotionCard, Reveal } from "@/app/components/Reveal";
import { TabsDemo } from "@/app/demo/tabs-demo";
import { motion } from "framer-motion";
import { ArrowUpRight, Figma, PlayCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const metrics = [
  {
    value: "6+",
    label: "Years shaping digital interfaces",
    note: "Product UI, design systems, and responsive flows.",
  },
  {
    value: "80+",
    label: "Screens and product concepts delivered",
    note: "From low-fidelity structure to polished prototypes.",
  },
];

const heroChips = ["Figma", "Prototype", "Motion UI", "Handoff"];

const featuredPlaylists = [
  {
    title: "Figma UI/UX",
    subtitle: "Graphic and interface workflow",
  },
  {
    title: "HTML, CSS",
    subtitle: "Visual foundation for web UI",
  },
  {
    title: "Tailwind CSS",
    subtitle: "Responsive interface styling",
  },
  {
    title: "React.js",
    subtitle: "Component-based product UI",
  },
];

export default function IntroSection() {
  return (
    <section className="pt-8 sm:pt-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:bg-black dark:shadow-sky-950/20 sm:p-5 lg:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_18%_90%,rgba(244,114,182,0.12),transparent_28%)]" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(15,23,42,0.28)_1px,transparent_1px)] [background-size:22px_22px] dark:opacity-50 dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1px)]"
            animate={{ backgroundPosition: ["0px 0px", "22px 22px"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-orange-300 via-pink-500 to-sky-400" />

          <div className="relative grid min-h-[700px] gap-5 lg:grid-cols-[0.78fr_1.36fr_0.86fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] lg:order-none lg:translate-y-10"
            >
              <div>
                <p className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-slate-600 dark:border-white/10 dark:bg-black/40 dark:text-slate-300">
                  UI/UX Portfolio
                </p>
                <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-4xl xl:text-6xl">
                  Minimal futuristic{" "}
                  <span className="text-sky-400">UI/UX motion</span> designer.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                  I design clean product flows, polished prototypes, and motion
                  details for macOS, iOS, iPadOS, and responsive web products.
                </p>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex flex-wrap gap-2">
                  {heroChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link
                    href={"mailto:sanlin.htik3@gmail.com"}
                    className="inline-block"
                  >
                    <MovingBorderDemo
                      content="Start a project"
                      className="!bg-white !text-slate-950 dark:!bg-black dark:!text-white"
                    />
                  </Link>
                  <Link
                    href={
                      "https://drive.google.com/file/d/1oU2Hatb-xP89gL4zEsLzA6Gf7e9b7dxK/view?usp=sharing"
                    }
                    className="inline-block"
                    target="_blank"
                  >
                    <MovingBorderDemo content="View CV" className="!bg-transparent" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="order-1 relative flex min-h-[610px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-4 shadow-sm dark:border-white/10 dark:bg-black sm:p-6 lg:order-none lg:min-h-[700px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(56,189,248,0.26),transparent_32%),radial-gradient(circle_at_62%_68%,rgba(168,85,247,0.18),transparent_28%)]" />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:24px_24px]"
                animate={{ backgroundPosition: ["0px 0px", "-24px 24px"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="relative z-10 w-full max-w-[360px] sm:max-w-[420px]"
                style={{ perspective: 1000 }}
                animate={{ y: [0, -16, 0], rotateZ: [-3, 2, -3], rotateY: [-8, 7, -8] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-[0_34px_120px_rgba(56,189,248,0.34)] backdrop-blur-xl">
                  <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src="/sanlinhtike.png"
                        alt="San Lin Htike"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/10" />
                      <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
                        sanlinhtike
                      </div>
                      <div className="absolute inset-x-5 bottom-5">
                        <p className="text-sm uppercase tracking-[0.28em] text-sky-200">
                          Digital Pass
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-white">
                          San Lin Htike
                        </h2>
                        <p className="mt-1 text-sm text-slate-200">
                          UI/UX Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="absolute bottom-12 left-1/2 z-20 h-12 w-12 -translate-x-1/2 rotate-45 border-b border-r border-white/40 bg-white/10 backdrop-blur"
                animate={{ y: [0, 12, 0], opacity: [0.45, 0.9, 0.45] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="order-3 flex flex-col gap-5 lg:order-none lg:-translate-y-5"
            >
              <Link
                href="https://www.linkedin.com/in/san-lin-htike-544041191"
                target="_blank"
                className="group flex min-h-28 items-start justify-end rounded-3xl border border-slate-200 bg-white/80 p-5 text-slate-900 shadow-sm backdrop-blur-xl transition hover:border-sky-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              >
                <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xl font-black transition group-hover:border-sky-400 dark:border-white/10 dark:bg-black/40">
                  in
                </span>
              </Link>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-4 flex items-center gap-2 text-sm text-sky-500 dark:text-sky-300">
                  <Figma className="h-4 w-4" />
                  Design focus
                </div>
                <div className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <p>User flows, wireframes, high-fidelity UI, and prototypes.</p>
                  <p>Minimal motion systems for premium product experiences.</p>
                  <p>Clean handoff thinking for developers and product teams.</p>
                </div>
              </div>

              <div className="flex-1 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">Latest playlists</h3>
                  <Sparkles className="h-5 w-5 text-sky-400" />
                </div>
                <div className="space-y-4">
                  {featuredPlaylists.map((playlist, index) => (
                    <div
                      key={playlist.title}
                      className="group grid grid-cols-[52px_1fr_auto] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-sky-400 dark:border-white/10 dark:bg-black/30"
                    >
                      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-slate-900 text-sky-200">
                        <div
                          className={[
                            "absolute inset-0 opacity-90",
                            index === 0 ? "bg-gradient-to-br from-pink-500 via-violet-500 to-sky-400" : "",
                            index === 1 ? "bg-gradient-to-br from-emerald-400 via-cyan-500 to-slate-900" : "",
                            index === 2 ? "bg-gradient-to-br from-sky-400 via-blue-600 to-violet-700" : "",
                            index === 3 ? "bg-gradient-to-br from-cyan-300 via-sky-500 to-slate-950" : "",
                          ].join(" ")}
                        />
                        <PlayCircle className="relative h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="truncate text-sm font-bold">{playlist.title}</h4>
                        <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                          {playlist.subtitle}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-sky-400" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="mt-12 grid gap-4 rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-sm dark:border-slate-500/40 dark:bg-black sm:grid-cols-2 lg:p-8"
      >
        {metrics.map((metric, index) => (
          <MotionCard
            key={metric.label}
            delay={index * 0.08}
            className="min-w-0 rounded-2xl p-2"
          >
            <h2 className="text-5xl font-bold text-sky-400 sm:text-6xl">
              {metric.value}
            </h2>
            <h3 className="mt-2 text-lg font-bold">{metric.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-gray-400">{metric.note}</p>
          </MotionCard>
        ))}
      </motion.div>

      <Reveal className="mt-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-black dark:text-slate-300">
              YouTube Playlists
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Learn UI/UX and design workflow from my playlists.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600 dark:text-gray-400">
            The original course playlist section is back here, including the
            UI/UX Graphic playlist.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 sm:p-5">
          <TabsDemo />
        </div>
      </Reveal>
    </section>
  );
}
