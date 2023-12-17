
import { IconsJS } from "@/app/components/Icons"
import CircularProgressBar from "@/app/components/circular-progress-bar"
import { CircularProgress } from "@nextui-org/react"

export default function SkillsSection() {
    return (
        <>
            <div className="">

                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">My Skills</h6>
                <h1 className=" text-6xl mb-10 leading-tight font-bold">My <span className="text-sky-500">Advantages</span></h1>

                {/* <div className="space-y-10">
                    <div className="border border-gray-800 rounded-xl hover:border-sky-500 transition-colors group p-5 space-y-10">
                        <div className="flex items-center gap-5">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="fill-slate-700" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" /></svg>
                            </div>

                            <h4 className="text-3xl group-hover:text-sky-500">Typescript</h4>
                        </div>
                    </div>
                </div> */}

                <div className=" border border-slate-900 p-5 mt-10 rounded-2xl">
                    {/* <h1 className=" mb-5">Conformance</h1> */}

                    <div className=" grid grid-cols-2 gap-5">
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
                            />
                        </div>
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
                            />
                        </div>
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}