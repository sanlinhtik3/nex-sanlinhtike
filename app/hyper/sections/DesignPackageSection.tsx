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
import { Check, Send } from "lucide-react";
import Link from "next/link";

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
];

export default function DesignPackageSection() {
  return (
    <>
      <div className=" space-y-16">
        <h6 className="mb-20 inline-block rounded-lg border p-2 text-left text-xs uppercase">
          Design Package
        </h6>
        <h1 className=" text-6xl leading-tight">
          Hyper <span className="text-sky-400">Design Package</span>
        </h1>
        <h1 className=" text-base leading-tight">
          Your <span className="text-sky-400">super employee</span> who will
          earn a lot of profit and work automatically without the need for
          additional employees{" "}
        </h1>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="">
            <CardHeader>
              <CardTitle>Landing Page</CardTitle>
              <CardDescription>
                Let's build your business with a single page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      {/* <p className="text-sm text-muted-foreground">
                                            {notification.description}
                                        </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <Separator className="my-4" />
            <CardHeader>
              <CardTitle>$100 USDT</CardTitle>
              <CardDescription>$100 x k3400 = k340,000</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="https://m.me/5anlinhtike">
                  <Send className="mr-2 h-4 w-4" /> Keep in touch
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>SMEs</CardTitle>
              <CardDescription>
                Your Super Web App that will gain the trust of its product that
                automatically earns a lot of profit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {smes.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      {/* <p className="text-sm text-muted-foreground">
                                            {notification.description}
                                        </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <Separator className="my-4" />
            <CardHeader>
              <CardTitle>$179 USDT</CardTitle>
              <CardDescription>$179 x k3400 = k608,600</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="https://m.me/5anlinhtike">
                  <Send className="mr-2 h-4 w-4" /> Keep in touch
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
