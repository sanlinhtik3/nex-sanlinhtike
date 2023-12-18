import Link from "next/link";
import Button from "../components/Button";
import { Avatar } from "@nextui-org/react";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function ProfileSide() {
    return (
        <div className=" bg-[#0d0f18] space-y-5 p-5 text-center max-h-fit h-[calc(100vh-4rem)] !rounded-xl">
            <div className=" relative">
                <Avatar
                    src="/sanlinhtike.JPG"
                    className="w-60 h-60 text-large mx-auto border-4 border-sky-500 object-fill "
                />
                <span className=" absolute bottom-5 right-14 bg-green-100 text-green-500 rounded-full px-2 flex justify-center items-center gap-1">
                    <div className=" h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    available
                </span>
            </div>
            <h1 className=" text-3xl font-bold">San Lin Htike</h1>
            <HoverCard>
                <HoverCardTrigger>
                    <h2 className=" text-gray-400"><Link href={"mailto:sanlin.htik3@gmail.com"} className=" hover:underline">sanlin.htik3@gmail.com</Link></h2>
                </HoverCardTrigger>
                <HoverCardContent className=" text-sm bg-white bg-opacity-5 backdrop-blur-md border-0 text-gray-200">
                    <p>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                </HoverCardContent>
            </HoverCard>

            <div className="">
                <h2 className=" text-gray-400">Full-stack Developer</h2>
                <h2 className=" text-gray-400">UI/UX Coding/Graphic Designer</h2>
            </div>
            <h6 className=" text-gray-400">&copy; 2023. All Rights Reserved</h6>
            <div className="flex gap-3">
                <Link href={"https://www.linkedin.com/in/sanlinhtike/"} className=" inline-block w-full" target="_blank">
                    <Button className="w-full" name="Hire Me!" />
                </Link>
                <Link href={"https://fb.com/sanlinhtik5"} className=" inline-block w-full" target="_blank">
                    <Button className="w-full bg-transparent border-2 border-sky-500" />
                </Link>
            </div>
        </div>

    )
}