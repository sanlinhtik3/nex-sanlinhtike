import { MotionCard, MotionItem, MotionList, Reveal } from "@/app/components/Reveal";

const process = [
  {
    step: "01",
    title: "Understand the product",
    description:
      "Clarify users, goals, constraints, platform behavior, and the business outcome before touching visual design.",
  },
  {
    step: "02",
    title: "Map the experience",
    description:
      "Create user flows, information architecture, and low-fidelity layouts so the structure is easy to test.",
  },
  {
    step: "03",
    title: "Design the interface",
    description:
      "Build polished screens, responsive states, components, and interaction details for handoff.",
  },
  {
    step: "04",
    title: "Review and refine",
    description:
      "Check usability, visual hierarchy, accessibility basics, and edge cases across mobile, tablet, and desktop.",
  },
];

export default function AboutSection() {
  return (
    <section className="space-y-10">
      <Reveal>
        <p className="inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-black dark:text-slate-300">
          About
        </p>
      </Reveal>

      <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            I design product experiences that feel{" "}
            <span className="text-sky-400">clear before they feel clever.</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-600 dark:text-gray-400">
          <p>
            My UI/UX work focuses on practical product design: clear navigation,
            readable screens, purposeful interaction, and layouts that survive
            real content on iPhone, iPad, Mac, and responsive web.
          </p>
          <p>
            I like design that helps users decide faster. The visual style can
            be bold, but the structure should always stay calm and easy to scan.
          </p>
        </div>
      </Reveal>

      <MotionList className="grid gap-4 sm:grid-cols-2">
        {process.map((item) => (
          <MotionItem key={item.step}>
            <MotionCard className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/40">
              <p className="text-sm font-bold text-sky-400">{item.step}</p>
              <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400">
                {item.description}
              </p>
            </MotionCard>
          </MotionItem>
        ))}
      </MotionList>
    </section>
  );
}
