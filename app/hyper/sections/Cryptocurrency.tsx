import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cryptocurrency() {
    return (
        <>
            <div className=" space-y-16">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">Cryptocurrency</h6>
                <h1 className=" text-6xl leading-tight">Buy/Sell your crypto from <span className="text-sky-400">$1</span></h1>

                <p className=" leading-10 text-gray-400 text-2xl">
                    <span className=" text-white">Cryptpcurrency</span> များကို 1$ မှစပြီး ဝယ်ရောင်းပြုလုပ်နိုင်ပါတယ်။
                </p>

                <Link href={"/dapp"} className=" inline-block" target="_blank">
                    <Button className="w-full py-6 rounded-xl">
                        <span className=" text-green-500 mr-1">Buy</span>/ <span className=" text-red-500 ml-1 mr-2">Sell </span> Crypto
                    </Button>
                </Link>
            </div>
        </>
    )
}