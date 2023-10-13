export default function IntroSection() {
    return (
        <>
            <div className="hidden">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs">Introduced</h6>
                <h1 className=" text-6xl mb-10 leading-tight font-bold">Say Hi to Nex, Framer Designer and Developer</h1>

                <p className=" leading-10 text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi quia earum! Praesentium omnis nostrum incidunt
                </p>

                <div className="flex gap-20 mt-20">
                    <div className=" space-y-5">
                        <h6 className=" text-6xl text-purple-400">10+</h6>
                        <p className="text-gray-400">Years <br /> of Experience</p>
                    </div>

                    <div className="space-y-5">
                        <h6 className=" text-6xl text-purple-400">10+</h6>
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
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left">Introduced</h6>
                <h1 className="text-9xl leading-tight font-bold uppercase">Trade tokens on <span className=" text-purple-500">Nex</span></h1>

                <p className=" leading-10 text-gray-400 mb-10 max-w-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi quia earum! Praesentium omnis nostrum incidunt
                </p>

                <div className="flex gap-5 ">
                    <button className=" bg-purple-500 p-3">Download CV</button>
                    <button className=" border border-purple-500 p-3">Download CV</button>
                </div>

                <div className="flex gap-20 mt-20">
                    <div className=" space-y-5">
                        <h6 className=" text-6xl text-purple-400">10+</h6>
                        <p className="text-gray-400">Years <br /> of Experience</p>
                    </div>

                    <div className="space-y-5">
                        <h6 className=" text-6xl text-purple-400">10+</h6>
                        <p className="text-gray-400">Projects <br /> completed</p>
                    </div>
                </div>
            </div>
        </>
    )
}