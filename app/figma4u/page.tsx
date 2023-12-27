import { DataTable } from './data-table-demo';
import Image from 'next/image';

import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

const notifications = [
    {
        title: "Start Date: 28th, Dec, 2023",
        description: "1 hour ago",
    },
    {
        title: "Max Supply: 30",
        description: "1 hour ago",
    },
    {
        title: "Time: 7:00PM to 9:00PM",
        description: "2 hours ago",
    },
    {
        title: "Days: Monday, Tuesday, Wednesday, Thursday, Friday",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card>


interface Post {
    id: string;
    name: string;
    // title: string;
    // date: string;
    // tags: string[];
    // content: string;
}

export default async function Home({ className, ...props }: CardProps) {

    return (
        <div className='max-w-7xl mx-auto pt-5'>
            {/* {data.map((post: any) => (
                <div key={post.id}>
                    <h2>{post.name}</h2>
                    <h2>{post.number}</h2> */}
            {/* <p>{post.date}</p> */}
            {/* <ul>
                        {post.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    <p>{post.content}</p> */}
            {/* </div>
            ))} */}

            <Card className={cn("max-w-[580px]", className)} {...props}>
                <CardHeader>
                    <CardTitle>
                        Figma - Batch: 10
                    </CardTitle>
                    <CardDescription>Figma Batch 10 သည် အကောင်းဆုံးသော UI ကိုရေးဆွဲသွားမည်ဖြစ်သည်။</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                            alt="logo" className=" w-8" width={100} height={100} />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Figma
                            </p>
                            <p className="text-sm text-muted-foreground">
                                UI/UX Design
                            </p>
                        </div>
                    </div>
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
                <CardFooter>
                    <Button className="w-full" asChild>
                        <Link href={"https://m.me/inficreax"} target="_blank">Enroll Now</Link>
                    </Button>
                </CardFooter>
            </Card>

            <DataTable />

        </div>
    );
}