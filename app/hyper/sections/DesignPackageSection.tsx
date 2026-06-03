import { MotionCard, MotionItem, MotionList, Reveal } from "@/app/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";

const deliverables = [
  "Product audit and UX recommendations",
  "User flow and information architecture",
  "Wireframes for key screens",
  "High-fidelity UI for mobile, tablet, desktop, or web",
  "Clickable Figma prototype",
  "Design system notes and developer handoff",
];

const fit = [
  "You are building a new app and need the first usable experience.",
  "Your existing product feels cluttered and needs clearer structure.",
  "You need polished UI screens before development starts.",
];

export default function DesignPackageSection() {
  return (
    <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="mb-6 inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-black dark:text-slate-300">
            Contact
          </p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Need a clearer UI/UX direction for your product?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-gray-400">
            Send the product idea, current screens, or rough feature list. I can
            help turn it into a focused experience that looks good and works
            well across Apple devices and responsive web.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="min-h-12 rounded-2xl px-6">
              <Link href="mailto:sanlin.htik3@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-12 rounded-2xl border-slate-300 bg-transparent px-6 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
            >
              <Link
                href="https://www.linkedin.com/in/san-lin-htike-544041191"
                target="_blank"
              >
                LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <MotionCard className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-black/40">
            <h3 className="text-xl font-bold">Typical deliverables</h3>
            <MotionList className="mt-5 space-y-4">
              {deliverables.map((item) => (
                <MotionItem key={item}>
                  <div className="grid grid-cols-[24px_1fr] items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-400" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-gray-300">{item}</p>
                  </div>
                </MotionItem>
              ))}
            </MotionList>
          </MotionCard>

          <MotionCard className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-black/40">
            <h3 className="text-xl font-bold">Best fit</h3>
            <div className="mt-5 space-y-4">
              {fit.map((item) => (
                <p key={item} className="text-sm leading-6 text-slate-600 dark:text-gray-400">
                  {item}
                </p>
              ))}
            </div>
          </MotionCard>
        </div>
      </div>
    </Reveal>
  );
}
