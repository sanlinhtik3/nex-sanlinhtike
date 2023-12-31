import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { Button as TButton } from "@/components/ui/button";
import Button from "../components/Button";



export default function ProfileSide() {
    return (
        <div className=" lg:bg-[#0d0f18] space-y-5 p-5 text-center max-h-fit lg:h-[calc(100vh-4rem)] !rounded-xl">
            <div className=" relative">
                <Avatar
                    src="/sanlinhtike.png"
                    className="w-60 h-60 text-large mx-auto  object-fill "
                />
                <span className=" absolute  bottom-5 lg:bottom-2 right-36 lg:right-14 md:right-8 bg-green-100 text-green-500 rounded-full px-2 flex justify-center items-center gap-1">
                    <div className=" h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    available
                </span>
            </div>
            <h1 className=" text-3xl font-bold">San Lin Htike</h1>
            <Link href={"mailto:sanlin.htik3@gmail.com"} className=" hover:underline text-gray-400">sanlin.htik3@gmail.com</Link>
            <div className="">
                <h2 className=" text-gray-400">Full-stack Developer</h2>
                <h2 className=" text-gray-400">UI/UX Coding/Graphic Designer</h2>
            </div>
            <h6 className=" text-gray-400">&copy; 2023. All Rights Reserved</h6>
            <div className="flex flex-col  gap-3">
                <Link href={"https://www.linkedin.com/in/sanlinhtike/"} className=" inline-block w-full" target="_blank">
                    <Button className="w-full whitespace-nowrap" name="Hire Me!" />
                </Link>
                <Link href={"/dapp"} className=" inline-block" target="_blank">
                    <TButton className="w-full py-6 rounded-xl"><span className=" text-green-500 mr-1">Buy</span>/ <span className=" text-red-500 ml-1 mr-2">Sell </span> Crypto</TButton>
                </Link>
                <Link href={"https://fb.com/5anlinhtike"} className=" inline-block w-full" target="_blank">
                    <Button className="w-full bg-transparent border-2 border-sky-500 whitespace-nowrap" />
                </Link>
            </div>
        </div>
    )
}