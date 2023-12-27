import { Free4UProgressDemo } from "@/app/figma4u/progress-demo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Free4U() {
    return (
        <>
            <div className=" space-y-16">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">Free 4 U</h6>
                <h1 className=" text-6xl leading-tight">Learn to <span className="text-sky-400">Earn</span>: Free4U</h1>

                <p className=" leading-10 text-gray-400 text-2xl">
                    အပတ်စဉ်တိုင်း တနင်္လာနေ့မှာ Web Development နှင့် ပတ်သက်တဲ့ HTML, CSS, JS, Bootstrap, Tailinwd CSS, React, Next.js, MongoDB, Figma, UI/UX သင်ခန်းစာများကို မရိုးနိုင်တဲ့ Project များကို လေ့လာရေးဆွဲရမှာဖြစ်ပါတယ်။
                </p>

                <div className=" space-y-5">
                    <h1 className="leading-tight text-2xl">Abaiable</h1>

                    <Button asChild>
                        <Link href="/figma4u">Figma - Batch: 10</Link>
                    </Button>

                    <h1 className="leading-tight">Current: 4/30</h1>
                    <Free4UProgressDemo />
                </div>

                <div className=" space-y-5">
                    <h1 className="leading-tight text-2xl">Coming Next...</h1>

                    <div className=" grid grid-cols-2 gap-2">
                        <Button className=" w-full" asChild>
                            <Link href="#">Bootstrap</Link>
                        </Button>
                        <Button className=" w-full" asChild>
                            <Link href="#">Tailwind CSS</Link>
                        </Button>
                        <Button className=" w-full" asChild>
                            <Link href="#">JavaScript</Link>
                        </Button>
                        <Button className=" w-full" asChild>
                            <Link href="#">React.js</Link>
                        </Button>
                        <Button className=" w-full" asChild>
                            <Link href="#">Next.js</Link>
                        </Button>
                    </div>
                </div>


            </div>
        </>
    )
}