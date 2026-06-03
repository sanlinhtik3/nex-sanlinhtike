import { MotionCard, MotionItem, MotionList, Reveal } from "@/app/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { CalendarRange, CheckCircle, Hammer } from "lucide-react";

const data = [
  {
    id: "experience-2023",
    year: "2023 - Present",
    experience_lists: [
      {
        id: "build-myanmar",
        company: "Build Myanmar",
        position: "Freelance UI/UX and Product Designer",
        employment_status: "Freelance",
        status: "ongoing",
        start_end: "Nov 2023 - Present",
        description:
          "Designing responsive product flows, landing experiences, and UI systems for small business and learning products.",
      },
      {
        id: "anonymous-product",
        company: "Private Client",
        position: "Product Interface Designer",
        employment_status: "Freelance",
        status: "completed",
        start_end: "May 2023 - Present",
        description:
          "Created wireframes, polished screens, and implementation-ready layouts for web app experiences.",
      },
    ],
  },
  {
    id: "experience-2022",
    year: "2022 - 2023",
    experience_lists: [
      {
        id: "asia-royal",
        company: "Asia Royal",
        position: "Frontend UI Designer",
        employment_status: "Virtual",
        status: "completed",
        start_end: "Feb 2022 - Mar 2023",
        description:
          "Worked on interface layouts, component styling, and responsive UI decisions for React-based products.",
      },
    ],
  },
];

export default function ResumeSection() {
  return (
    <section className="space-y-10">
      <Reveal>
        <p className="inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-black dark:text-slate-300">
          Experience
        </p>
      </Reveal>
      <Reveal>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Product design experience with build-ready thinking.
        </h2>
      </Reveal>

      <MotionList className="relative space-y-12 border-l border-slate-200 dark:border-gray-800">
        {data.map((data) => (
          <MotionItem key={data.id}>
            <div className="ml-6 space-y-8">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 ring-8 ring-slate-50 dark:bg-gray-800 dark:ring-black">
                <CalendarRange className="h-3 w-3" />
              </span>
              <h3 className="text-lg font-semibold text-slate-500 dark:text-gray-400">
                {data.year}
              </h3>
              {data.experience_lists.map((experience) => (
                <MotionCard
                  key={experience.id}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/40"
                >
                  <time className="mb-3 block text-sm font-normal leading-none text-slate-500 dark:text-gray-500">
                    {experience.start_end}
                  </time>
                  <h4 className="mb-3 flex flex-wrap items-center gap-2 text-xl font-bold sm:text-2xl">
                    {experience.position}
                    <Badge>{experience.employment_status}</Badge>
                    <Badge variant="outline">
                      {experience.status === "ongoing" ? (
                        <Hammer className="mr-1 w-3" />
                      ) : (
                        <CheckCircle className="mr-1 w-3" />
                      )}
                      {experience.status}
                    </Badge>
                  </h4>
                  <p className="text-base font-normal text-slate-600 dark:text-gray-400">
                    {experience.company}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-gray-500">
                    {experience.description}
                  </p>
                </MotionCard>
              ))}
            </div>
          </MotionItem>
        ))}
      </MotionList>
    </section>
  );
}
