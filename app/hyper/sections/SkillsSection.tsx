
import { HoverCardDemo } from "@/app/demo/HoverCardDemo"
import { CircularProgress } from "@nextui-org/react"

export default function SkillsSection() {
    return (
        <>
            <div className="">

                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">Skills</h6>
                <h1 className=" text-6xl mb-10 leading-tight font-bold">My <span className="text-sky-500">My Skills</span></h1>

                <div className=" border border-slate-900 p-5 mt-10 rounded-2xl">
                    <div className=" grid grid-cols-2 gap-5">
                        <HoverCardDemo
                            name="JavaScript"
                            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                            description="JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
                            joined="January 2019"
                        >
                            <div className=" flex justify-between items-center border-2 border-yellow-400 bg-yellow-500 bg-opacity-5 rounded-2xl p-5">
                                <h1 className=" text-sm text-yellow-400">JavaScript</h1>
                                <CircularProgress
                                    classNames={{
                                        svg: "w-14 h-14 drop-shadow-md",
                                        indicator: "stroke-yellow-500",
                                        track: "stroke-yellow-500/10",
                                        value: "font-semibold text-yellow-500",
                                    }}
                                    value={80}
                                    strokeWidth={0}
                                    showValueLabel={true}
                                    aria-label="JavaScript"
                                />
                            </div>
                        </HoverCardDemo>
                        <HoverCardDemo
                            name="React.js"
                            logo="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                            description="React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."
                            joined="February 2021"
                        >
                            <div className=" flex justify-between items-center border-2 border-sky-800 bg-sky-500 bg-opacity-5 rounded-2xl p-5">
                                <h1 className=" text-sm text-sky-400">React.js</h1>
                                <CircularProgress
                                    classNames={{
                                        svg: "w-14 h-14 drop-shadow-md",
                                        indicator: "stroke-sky-500",
                                        track: "stroke-sky-500/10",
                                        value: "font-semibold text-sky-500",
                                    }}
                                    value={70}
                                    strokeWidth={0}
                                    showValueLabel={true}
                                    aria-label="React.js"
                                />
                            </div>
                        </HoverCardDemo>
                        <div className=" flex justify-between items-center border-2 border-sky-800 bg-sky-500 bg-opacity-5 rounded-2xl p-5">
                            <h1 className=" text-sm text-sky-400">Tyescript</h1>
                            <CircularProgress
                                classNames={{
                                    svg: "w-14 h-14 drop-shadow-md",
                                    indicator: "stroke-sky-500",
                                    track: "stroke-sky-500/10",
                                    value: "font-semibold text-sky-500",
                                }}
                                value={75}
                                strokeWidth={0}
                                showValueLabel={true}
                                aria-label="Tyescript"
                            />
                        </div>
                        <div className=" flex justify-between items-center border-2 border-slate-100 bg-slate-500 bg-opacity-5 rounded-2xl p-5">
                            <h1 className=" text-sm text-gray-100">Next.js</h1>
                            <CircularProgress
                                classNames={{
                                    svg: "w-14 h-14 drop-shadow-md",
                                    indicator: "stroke-white",
                                    track: "stroke-white/10",
                                    value: "font-semibold text-white",
                                }}
                                value={80}
                                strokeWidth={0}
                                showValueLabel={true}
                                aria-label="Next.js"
                            />
                        </div>
                        <div className=" flex justify-between items-center border-2 border-green-500 bg-green-500 bg-opacity-5 rounded-2xl p-5">
                            <h1 className=" text-sm text-green-500">MongoDB</h1>
                            <CircularProgress
                                classNames={{
                                    svg: "w-14 h-14 drop-shadow-md",
                                    indicator: "stroke-green-500",
                                    track: "stroke-green-500/10",
                                    value: "font-semibold text-green-500",
                                }}
                                value={60}
                                strokeWidth={0}
                                showValueLabel={true}
                                aria-label="MongoDB"
                            />
                        </div>
                        <div className=" flex justify-between items-center border-2 border-pink-500 bg-pink-500 bg-opacity-5 rounded-2xl p-5">
                            <h1 className=" text-sm text-pink-500">Figma</h1>
                            <CircularProgress
                                classNames={{
                                    svg: "w-14 h-14 drop-shadow-md",
                                    indicator: "stroke-pink-500",
                                    track: "stroke-pink-500/10",
                                    value: "font-semibold text-pink-500",
                                }}
                                value={90}
                                strokeWidth={0}
                                showValueLabel={true}
                                aria-label="Figma"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}