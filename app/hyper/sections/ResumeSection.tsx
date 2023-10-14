export default function ResumeSection() {
    return (
        <>
            <div className="space-y-16">
                <h6 className="uppercase border p-2 inline-block text-xs">Resume</h6>
                <h1 className=" text-6xl mb-10 leading-tight">Education and <span className="text-purple-400">Experience</span></h1>

                <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-16">
                    <li className="mb-10 ml-6 space-y-5">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-400">2023 - Present <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
                        <div className="">
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From January 13th, 2022 to 2023</time>
                            <h5 className="text-2xl mb-2">React Developer</h5>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">inficreax</p>
                        </div>
                        <div className="">
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From January 13th, 2022 to 2023</time>
                            <h5 className="text-2xl mb-2">React Developer</h5>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">inficreax</p>
                        </div>
                    </li>
                    <li className="mb-10 ml-6 space-y-5">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-400">2023 - Present </h3>
                        <div className="">
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From January 13th, 2022 to 2023</time>
                            <h5 className="text-2xl mb-2">React Developer</h5>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">inficreax</p>
                        </div>
                    </li>
                </ol>


            </div>
        </>
    )
}