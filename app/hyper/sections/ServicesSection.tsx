export default function ServicesSection() {
    return (
        <>
            <div className="">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">Services</h6>
                <h1 className=" text-6xl mb-10 leading-tight font-bold">My <span className="text-sky-500">specializations</span></h1>

                <p className=" leading-10 text-gray-400 hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi quia earum! Praesentium omnis nostrum incidunt
                </p>

                <div className=" space-y-10">
                    {[1, 2, 3].map((data, index) => (
                        <div key={index} className=" border border-gray-800 hover:border-sky-500 transition duration-150 group p-10 space-y-10 rounded-2xl">
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <h4 className=" text-3xl font-bold transition duration-150 group-hover:text-sky-400">Fontend Web Design</h4>
                                    <div className=" w-5 h-5 group-hover:bg-sky-400"></div>
                                </div>
                                <p className=" text-gray-400">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur nam delectus voluptatem inventore minus quos voluptatibus. Et minus saepe aliquid.
                                </p>
                            </div>
                            <div className=" uppercase transition duration-150 group-hover:underline group-hover:text-sky-500 text-gray-300">24 Projects</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}