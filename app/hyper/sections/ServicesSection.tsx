export default function ServicesSection() {

    const services = [
        {
            name: "Fontend Web Design",
            description: "Modren ဖြစ်တဲ့ UI ကို အရောင်သွေးတောက်ပစုံလင်စွာနဲ့ ရရှိမှာဖြစ်ပြီး၊ သူမတူတဲ့ UI Design များကို အချိန်တိုအတွင်း လျှင်မြန်စွာရရှိမှာဖြစ်ပါတယ်။ Coding ဖြစ်တာကြောင့် မိမိကြိုက်တဲ့အချိန်ပြုပြင်နိုင်ဖို့ Flexible, Scalable, Compactable ဖြစ်တဲ့ Design များကိုရရှိမှာဖြစ်ပါတယ်။",
            image: "https://static.mocortech.com/mxc-web-community/static/images/learn/title-image.svg",
            projects: "10",
        },
        {
            name: "Graphic UI/UX Design",
            description: "App, Web App တစ်ခုကို မရေးသားမှီ Prototype ကို Latest tools နှင့် update ဖြစ်တဲ့ Design များနှင့်အတူ မိတ်ဆွေတို့၏ UI/UX ကိုမြင့်တင်အစားထိုးရန် အသင့်ရှိနေပါပြီ",
            image: "https://static.mocortech.com/mxc-web-community/static/images/learn/title-image.svg",
            projects: "30",
        }
    ]

    return (
        <>
            <div className="">
                <h6 className="uppercase border p-2 inline-block mb-20 text-xs text-left rounded-lg">Services</h6>
                <h1 className=" text-4xl lg:text-6xl mb-10 leading-tight font-bold">My <span className="text-sky-500">specializations</span></h1>

                <p className=" leading-10 text-gray-400 hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi quia earum! Praesentium omnis nostrum incidunt
                </p>

                <div className=" space-y-10">
                    {services.map((data, index) => (
                        <div key={index} className=" border border-gray-800 hover:border-sky-500 transition duration-150 group p-10 space-y-10 rounded-2xl">
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <h4 className=" text-3xl font-bold transition duration-150 group-hover:text-sky-400">{data?.name}</h4>
                                    <div className=" w-5 h-5 group-hover:bg-sky-400"></div>
                                </div>
                                <p className=" text-gray-400 leading-loose">
                                    {data?.description}
                                </p>
                            </div>
                            <div className=" uppercase transition duration-150 group-hover:underline group-hover:text-sky-500 text-gray-300">{data?.projects} Projects</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}