import Button from "@/app/components/Button"
import { DropdownMenuDemo } from "@/app/demo/DropdownMenuDemo"
import Link from "next/link"

export default function IntroSection() {
    return (
        <>
            <div className="!mt-10">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">Introduced</h6>
                <h1 className="text-6xl lg:text-8xl leading-tight font-bold uppercase">Learn Now&rsquo; Apply <span className=" text-sky-500">Future</span></h1>

                <p className=" leading-10 text-gray-400 mb-10 max-w-lg text-2xl">
                    အချိန်တိုတိုဖြင့် ပိုမိုထိရောက်တဲ့ Web App တစ်ခုတည်ဆောက်မလား? ဒါမှမဟုတ် မိမိသား သမီး/လူငယ်များ အတွက် <span className=" text-gray-100">Web Development</span> ဖြင့် အသက်မွေးဝမ်းကြောင်းကို ပို့ဆောင်ပေးမလား? Ready to let&apos;s go?
                </p>

                <div className="flex flex-col lg:flex-row gap-5 mb-10">
                    <Link href={"https://drive.google.com/file/d/1oU2Hatb-xP89gL4zEsLzA6Gf7e9b7dxK/view?usp=sharing"} className=" inline-block" target="_blank">
                        <Button className="w-full bg-transparent border-2 !bg-sky-500 border-sky-500" name="Download CV" />
                    </Link>
                    <DropdownMenuDemo />
                    
                </div>

                <div className="grid lg:grid-cols-2 gap-5 bg-[#0d0e18] p-5 lg:p-10 rounded-xl mb-10">
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

                <div className="bg-[#0d0e18] p-5 lg:p-10 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <h1 className=" lg:col-span-2 text-3xl lg:text-4xl font-bold">Learn</h1>
                    <Link href={"https://learn-sanlinhtike.vercel.app/"} className="space-y-5 bg-gray-950 p-3 rounded-2xl hover:bg-gray-900 transform transition-colors duration-200">
                        <h1 className=" text-3xl lg:text-4xl font-medium">Learn With Online Book</h1>
                        <h1>Learn Your Career Path</h1>
                        <p className="text-gray-400">
                            <span className=" text-white">Web Development</span> ကို အချိန်တိုတိုနှင့် စနစ်တကျလေ့လာချင်သူများအတွက် ဒီ Learn Page ကို develope လုပ်ထားခြစ်တယ်။ JavaScript, Git, Github, Tailwindcss, React, Next.js သင်ခန်းစာများကို Online Learn Book စနစ်ဖြင့် လေ့လာရမှာပါ။ Click ပြီးလေ့လာကြည့်ပါ။
                        </p>
                    </Link>
                    <Link href={"https://www.youtube.com/@SanLinHtike"} className=" space-y-5 bg-gray-950 p-3 rounded-2xl hover:bg-gray-900 transform transition-colors duration-200">
                        <h1 className=" text-3xl lg:text-4xl font-medium">Learn on YouTube</h1>
                        <h1>Learn Your Career Path</h1>
                        <p className="text-gray-400">
                            <span className=" text-white">HTML, CSS, JavaScript, Bootstrap, Tailwindcss, React</span> စတဲ့သင်ခန်းစာများကို Newly on Expert ဖြစ်အောင် ဒီ YouTube Channel က မိတ်ဆွေတို့ကို ကူညီပေးပါလိမ့်မယ်။ အပြင်မှာ သင်တန်းတက်တဲ့အတိုင်းလေ့လာရမှာဖြစ်ပြီး Up to Date ဖြစ်တဲ့ Library, Framework Version ဖြစ့်လေ့လာရမှာပါ။
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}