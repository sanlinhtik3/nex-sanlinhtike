import { MotionCard, MotionItem, MotionList, Reveal } from "@/app/components/Reveal";
import { Layers3, MousePointerClick, PenTool, Smartphone } from "lucide-react";

const services = [
  {
    name: "Mobile App UI/UX",
    description:
      "iOS and iPadOS flows, onboarding, empty states, settings, forms, and interaction states designed for real device use.",
    projects: "Mobile",
    icon: Smartphone,
  },
  {
    name: "Desktop Product Design",
    description:
      "macOS and web dashboard interfaces with clear hierarchy, dense but readable layouts, and efficient task flows.",
    projects: "Desktop",
    icon: Layers3,
  },
  {
    name: "Wireframes and Prototypes",
    description:
      "Low-fidelity exploration, clickable prototypes, and user-flow validation before investing in polished UI.",
    projects: "Prototype",
    icon: MousePointerClick,
  },
  {
    name: "Design Systems",
    description:
      "Reusable components, visual rules, responsive behavior, and handoff details that make implementation cleaner.",
    projects: "System",
    icon: PenTool,
  },
];

export default function ServicesSection() {
  return (
    <section className="space-y-10">
      <Reveal>
        <p className="inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-black dark:text-slate-300">
          Specializations
        </p>
      </Reveal>
      <Reveal>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          UI/UX work that covers the full product surface.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-gray-400">
          From first flow to final component, each deliverable is shaped around
          clarity, usability, and platform-appropriate behavior.
        </p>
      </Reveal>

      <MotionList className="grid gap-5 sm:grid-cols-2">
        {services.map((data) => {
          const Icon = data.icon;

          return (
            <MotionItem key={data.name}>
              <MotionCard className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-150 hover:border-sky-500 dark:border-gray-800 dark:bg-black">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 transition group-hover:bg-sky-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase text-slate-500 transition group-hover:border-sky-500 group-hover:text-sky-600 dark:border-slate-800 dark:text-gray-400 dark:group-hover:text-sky-300">
                    {data.projects}
                  </span>
                </div>
                <h3 className="text-2xl font-bold transition duration-150 group-hover:text-sky-400">
                  {data.name}
                </h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
                  {data.description}
                </p>
              </MotionCard>
            </MotionItem>
          );
        })}
      </MotionList>
    </section>
  );
}
