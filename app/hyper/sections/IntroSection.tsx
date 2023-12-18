import Button from "@/app/components/Button"
import { DropdownMenuDemo } from "@/app/demo/DropdownMenuDemo"
import Link from "next/link"

export default function IntroSection() {
    return (
        <>
            <div className="hidden">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs">Introduced</h6>
                <h1 className=" text-6xl mb-10 leading-tight font-bold">Say Hi to Nex&rsquo; Framer Designer and Developer</h1>

                <p className=" leading-10 text-gray-400">
                    Lorem ipsum dolor sit&rsquo; amet consectetur adipisicing elit. Accusantium animi quia earum! Praesentium omnis nostrum incidunt
                </p>

                <div className="flex gap-20 mt-20">
                    <div className=" space-y-5">
                        <h6 className=" text-6xl text-sky-400">10+</h6>
                        <p className="text-gray-400">Years <br /> of Experience</p>
                    </div>

                    <div className="space-y-5">
                        <h6 className=" text-6xl text-sky-400">10+</h6>
                        <p className="text-gray-400">Projects <br /> completed</p>
                    </div>
                </div>
            </div>
            <IntroSectionUI1 />
        </>
    )
}

function IntroSectionUI1() {
    return (
        <>
            <div className="!mt-10">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">Introduced</h6>
                <h1 className="text-8xl leading-tight font-bold uppercase">Learn Now, Apply <span className=" text-sky-500">Future</span></h1>

                <p className=" leading-10 text-gray-400 mb-10 max-w-xl text-2xl">
                    အချိန်တိုတိုဖြင့် ပိုမိုထိရောက်တဲ့ Web App တစ်ခုတည်ဆောက်မလား? ဒါမှမဟုတ် မိမိသား သမီး/လူငယ်များ အတွက် <span className=" text-gray-100">Web Development</span> ဖြင့် အသက်မွေးဝမ်းကြောင်းကို ပို့ဆောင်ပေးမလား? Ready to let's go?
                </p>

                <div className="flex gap-5 mb-10">
                    <Link href={"https://drive.google.com/file/d/1oU2Hatb-xP89gL4zEsLzA6Gf7e9b7dxK/view?usp=sharing"} className=" inline-block" target="_blank">
                        <Button className="w-full bg-transparent border-2 !bg-sky-500 border-sky-500" name="Download CV" />
                    </Link>
                    <DropdownMenuDemo />
                </div>

                <div className="grid lg:grid-cols-2 gap-5 bg-[#0d0e18] p-10 rounded-xl">
                    <div className="">
                        <h6 className=" text-6xl text-sky-500 font-bold">5+</h6>
                        <h6 className="text-lg font-bold">Years of Experience</h6>
                        <p className="text-gray-400 text-sm">Contact and start your <span className=" text-slate-200">business/learn</span> journey now</p>
                    </div>
                    <div className="">
                        <h6 className=" text-6xl text-sky-500 font-bold">80+</h6>
                        <h6 className="text-lg font-bold">Projects completed</h6>
                        <p className="text-gray-400 text-sm">Utilise, Flexibility, Scalability ,Compatibility </p>
                    </div>
                </div>
            </div>
        </>
    )
}