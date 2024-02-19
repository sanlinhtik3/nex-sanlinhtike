export default function ServicesSection() {
  const services = [
    {
      name: "Fontend Web Design",
      description:
        "Modren's UI will be bright and colorful. Different UI Designs will be available quickly in a short period of time. Because it is coding, you will get designs that are flexible, scalable, and compactable so that you can modify them whenever you like.",
      image:
        "https://static.mocortech.com/mxc-web-community/static/images/learn/title-image.svg",
      projects: "10",
    },
    {
      name: "Graphic UI/UX Design",
      description:
        "Before writing an App or Web App, the Prototype is ready to upgrade your friends' UI/UX with the latest tools and updated Design.",
      image:
        "https://static.mocortech.com/mxc-web-community/static/images/learn/title-image.svg",
      projects: "30",
    },
  ];

  return (
    <>
      <div className="">
        <h6 className="mb-20 inline-block rounded-lg border p-2 text-left text-xs uppercase">
          Services
        </h6>
        <h1 className=" mb-10 text-4xl font-bold leading-tight lg:text-6xl">
          My <span className="text-sky-500">specializations</span>
        </h1>

        <p className=" hidden leading-10 text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          animi quia earum! Praesentium omnis nostrum incidunt
        </p>

        <div className=" space-y-10">
          {services.map((data, index) => (
            <div
              key={index}
              className=" group space-y-10 rounded-2xl border border-gray-800 p-10 transition duration-150 hover:border-sky-500"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className=" text-3xl font-bold transition duration-150 group-hover:text-sky-400">
                    {data?.name}
                  </h4>
                  <div className=" h-5 w-5 group-hover:bg-sky-400"></div>
                </div>
                <p className=" leading-loose text-gray-400">
                  {data?.description}
                </p>
              </div>
              <div className=" uppercase text-gray-300 transition duration-150 group-hover:text-sky-500 group-hover:underline">
                {data?.projects} Projects
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
