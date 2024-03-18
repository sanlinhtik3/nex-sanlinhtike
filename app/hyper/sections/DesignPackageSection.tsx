import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { clsx } from "@nextui-org/shared-utils";
import { Check, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    id: 1,
    title: "Landing",
    subtitle: "Pause or cancel anytime",
    price: "$100",
    link: {
      name: "Browsw",
      active: false,
      href: "https://m.me/5anlinhtike",
    },
    description: "Let's build your business with a single page",
    avaiable: [
      {
        title: "Will receive a Domain",
      },
      {
        title: "6 Section Content",
      },
      {
        title: "Responsive Web Design(Mobile, Tablet, Desktop)",
      },
      {
        title:
          "Flexible UI/UX Design, Compatible with All Devices, Scalable, DeX",
      },
      {
        title: "Training, Support, and Guidance",
      },
      {
        title: "React / Next.js / Tailwind CSS code",
      },
      {
        title: "Design + Development",
      },
      {
        title: "24-hour support response time",
      },
      {
        title: "Private communication channel",
      },
      {
        title: "Pause or cancel anytime",
      },
    ],
  },
  {
    id: 2,
    title: "SMEs(Recommend)",
    subtitle: "Pause or cancel anytime",
    price: "$199",
    link: {
      name: "Touch",
      active: true,
      href: "https://m.me/5anlinhtike",
    },
    description:
      "Your Super Web App that will gain the trust of its product that automatically earns a lot of profit",
    avaiable: [
      {
        title: "Will receive a Domain",
      },
      {
        title: "9+ Pages",
      },
      {
        title: "Responsive Web Design(Mobile, Tablet, Desktop)",
      },
      {
        title:
          "Flexible UI/UX Design, Compatible with All Devices, Scalable, DeX",
      },
      {
        title: "Training, Support, and Guidance",
      },
      {
        title: "React / Next.js / Tailwind CSS code",
      },
      {
        title: "Design + Development",
      },
      {
        title: "24-hour support response time",
      },
      {
        title: "Private communication channel",
      },
      {
        title: "Pause or cancel anytime",
      },
    ],
  },
];

const notifications = [
  {
    title: "Will receive a Domain",
    description: "1 hour ago",
  },
  {
    title: "6 Section Content",
    description: "1 hour ago",
  },
  {
    title: "Responsive Web Design(Mobile, Tablet, Desktop)",
    description: "2 hours ago",
  },
  {
    title: "Flexible UI/UX Design, Compatible with All Devices, Scalable, DeX",
    description: "2 hours ago",
  },
  {
    title: "Training, Support, and Guidance",
    description: "2 hours ago",
  },
  {
    title: "React / Next.js / Tailwind CSS code",
    description: "2 hours ago",
  },
  {
    title: "Design + Development",
    description: "2 hours ago",
  },
  {
    title: "24-hour support response time",
    description: "2 hours ago",
  },
  {
    title: "Private communication channel",
    description: "2 hours ago",
  },
  {
    title: "Pause or cancel anytime",
    description: "2 hours ago",
  },
];

const smes = [
  {
    title: "Will receive a Domain",
    description: "1 hour ago",
  },
  {
    title: "9+ Pages",
    description: "1 hour ago",
  },
  {
    title: "Responsive Web Design(Mobile, Tablet, Desktop)",
    description: "2 hours ago",
  },
  {
    title: "Flexible UI/UX Design, Compatible with All Devices, Scalable, DeX",
    description: "2 hours ago",
  },
  {
    title: "Training, Support, and Guidance",
    description: "2 hours ago",
  },
  {
    title: "React / Next.js / Tailwind CSS code",
    description: "2 hours ago",
  },
  {
    title: "Design + Development",
    description: "2 hours ago",
  },
  {
    title: "24-hour support response time",
    description: "2 hours ago",
  },
  {
    title: "Private communication channel",
    description: "2 hours ago",
  },
  {
    title: "Pause or cancel anytime",
    description: "2 hours ago",
  },
];

export default function DesignPackageSection() {
  return (
    <>
      <div className=" space-y-16">
        <h6 className="mb-20 inline-block rounded-lg border p-2 text-left text-xs uppercase">
          Design Package
        </h6>
        <h1 className=" text-6xl font-bold leading-tight">
          Hyper <span className="text-sky-400">Design Package</span>
        </h1>
        <h1 className=" text-base leading-tight">
          Your <span className="text-sky-400">super employee</span> who will
          earn a lot of profit and work automatically without the need for
          additional employees{" "}
        </h1>

        <div className="grid gap-5 lg:grid-cols-2">
          {packages.map((pack: any) => (
            <Card key={pack.title} className="rounded-3xl bg-black">
              <CardHeader className=" space-y-5">
                <CardDescription>{pack.title}</CardDescription>
                <div>
                  <CardDescription>{pack.subtitle}</CardDescription>
                  <CardTitle>{pack.price}</CardTitle>
                </div>
                <CardDescription>{pack.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className=" mt-5">
                  {pack.avaiable.map((notification: any, index: number) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className={clsx("w-full", {})} asChild>
                  <Link href={pack.link.href}>
                    <Send className="mr-2 h-4 w-4" /> {pack.link.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
