import { Badge } from "@/components/ui/badge";
import { CalendarRange, Check, CheckCircle, Hammer } from "lucide-react";

const data = [
  {
    id: "32re932d3",
    year: "2023 - Present",
    experience_lists: [
      {
        id: "323jewer",
        company: "Build Myanmar",
        position: "Full-stack Web Developer",
        employment_status: "Freelance",
        year: "",
        status: "ongoing",
        start_end: "From Nov 13th, 2023 to Present",
      },
      {
        id: "3r43r4wer",
        company: "Anonymous",
        position: "React Developer",
        employment_status: "Freelance",
        year: "",
        status: "winner",
        start_end: "From May 4th, 2023 to present",
      },
    ],
  },
  {
    id: "32re932d3",
    year: "2022 - 2023",
    experience_lists: [
      {
        id: "43f3jewer",
        company: "Asia Royal",
        position: "React Developer",
        employment_status: "Virtual",
        year: "",
        status: "winner",
        start_end: "From Feb 5th, 2022 to 2023 Mar 25th",
      },
    ],
  },
];

export default function ResumeSection() {
  return (
    <div className="space-y-16">
      <h6 className="mb-20 inline-block rounded-lg border p-2 text-left text-xs uppercase">
        Resume
      </h6>
      <h1 className=" mb-10 text-6xl font-bold leading-tight">Experience</h1>

      <ol className="relative space-y-16 border-l border-gray-200 dark:border-gray-700">
        {data.map((data) => (
          <li key={data.id} className="mb-10 ml-6 space-y-10">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full  ring-8 ring-white dark:bg-gray-500 dark:ring-gray-900">
              <CalendarRange className="h-2.5 w-2.5" />
            </span>
            <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-400">
              {data.year}
            </h3>
            {data.experience_lists.map((experience) => (
              <div key={experience.id} className="">
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {experience.start_end}
                </time>
                <h5 className="mb-2 flex items-center gap-2 text-2xl">
                  {experience.position}{" "}
                  <Badge>{experience.employment_status}</Badge>{" "}
                  <Badge variant="outline">
                    {experience.status === "ongoing" ? (
                      <Hammer className="mr-1 w-3" />
                    ) : (
                      <CheckCircle className="mr-1 w-3" />
                    )}
                    {experience.status}
                  </Badge>
                </h5>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {experience.company}
                </p>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}
