import { MotionCard, MotionItem, MotionList, Reveal } from "@/app/components/Reveal";

const skillGroups = [
  {
    title: "Research and UX",
    items: [
      "User flows",
      "Information architecture",
      "Journey mapping",
      "Usability review",
      "Competitive analysis",
    ],
  },
  {
    title: "Interface Design",
    items: [
      "Wireframes",
      "High-fidelity UI",
      "Responsive layouts",
      "Dark mode",
      "Micro-interactions",
    ],
  },
  {
    title: "Tools and Handoff",
    items: [
      "Figma",
      "FigJam",
      "Design systems",
      "Prototype links",
      "Developer handoff",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="space-y-10">
      <Reveal>
        <p className="inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-black dark:text-slate-300">
          Skills
        </p>
      </Reveal>
      <Reveal>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Skills that support useful, buildable design.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-gray-400">
          The strongest portfolio signal is not a percentage score. It is clear
          evidence that the designer can understand a problem, shape the flow,
          and deliver screens a team can build.
        </p>
      </Reveal>

      <MotionList className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <MotionItem key={group.title}>
            <MotionCard className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/40">
              <h3 className="text-2xl font-bold">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 transition hover:bg-sky-500/10 hover:text-sky-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:text-sky-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </MotionCard>
          </MotionItem>
        ))}
      </MotionList>
    </section>
  );
}
