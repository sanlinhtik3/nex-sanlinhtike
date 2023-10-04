export default function Hyper() {
    return (
        <main className="grid grid-cols-7 p-2 text-slate-50">
            {/* Left here */}
            <div className="bg-gray-900 col-span-2 p-5 border border-lime-950">
                <h1>Nex</h1>
                <button className=" bg-lime-500 w-full p-2">
                    Hire Me!
                </button>
            </div>

            {/* Right here */}
            <div className="col-span-5 overflow-y-scroll h-screen">
                <div className=" h-screen bg-blue-400"></div>
                <div className=" h-screen bg-blue-500"></div>
                <div className=" h-screen bg-blue-600"></div>
                <div className=" h-screen bg-blue-700"></div>
            </div>
        </main>
    )
}