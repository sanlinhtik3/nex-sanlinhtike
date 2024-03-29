import Link from "next/link";

export default function PricingSection() {
  return (
    <>
      <div className=" ">
        <h6 className="mb-20 inline-block rounded-lg border p-2 text-left text-xs uppercase">
          Pricing
        </h6>
        <h1 className=" mb-10 text-4xl font-bold leading-tight lg:text-6xl">
          My <span className="text-sky-500">Pricing</span>
        </h1>

        <p className=" hidden leading-10 text-gray-400">
          Lorem ipsum dolor sit&rsquo; amet consectetur adipisicing elit.
          Accusantium animi quia earum! Praesentium omnis nostrum incidunt
        </p>

        <div className="">
          <div className="grid gap-y-10 sm:gap-6 md:grid-cols-2 lg:space-y-0 xl:gap-10">
            <div className="mx-auto flex hidden w-full flex-col rounded-xl border border-gray-800  p-6 text-gray-300 shadow hover:border-sky-500 lg:col-span-2 xl:p-8  dark:border-gray-600 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Buy Online Course Book
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Web Development နှင့်ပတ်သက်တဲ့ သင်ခန်းစာများ၊ Topic, Lession
                များကို အသေးစိတ်လေ့လာရမှာဖြစ််ပြီး Online Course Book
                တစ်ခုလုံးကိုမှာ 1.99 USDT ဖြစ်ပြီး မြန်မာငွေ 7,000 MMK
                ကျသင့်မှာဖြစ်ပါတယ်။ သင်ခန်းစာများသည် Web Development ကို
                တီးမိခေါက်မိရှိသူများအတွက် လုပ်ငန်းခွင်ဝင်နိုင်ဖို့အထိ
                ရည်ရွယ်ပြီး ခုမှလေ့လာမည့်သူများက HTML, CSS လို Basic
                သင်ခန်းစားကို အရင်လေ့လာရမှာဖြစ်ပါတယ်။ အဲ့ဒီသင်ခန်းစာများအတွက် ၁၀
                ရက်လောက်ကြာနိုင်မှာဖြစ်ပြီး{" "}
                <Link
                  href={"https://www.youtube.com/sanlinhtike"}
                  className=" text-sky-500 underline"
                >
                  ဒီမှာ
                </Link>{" "}
                လေ့လာနိုင်ပါတယ်။ စာအုပ်မှာ အသေးစိတ် Detail ကို အချိန်တိုတိုနဲ့
                နားလည်လွယ်အောင်ရှင်းပြထားတာဖြစ်ပြီး ဝယ်ယူလိုပါက{" "}
                <Link
                  href={"https://m.me/inficreax"}
                  className=" text-sky-500 underline"
                >
                  ဒီလင့်
                </Link>{" "}
                ကို Click ကာ ဝယ်ယူနိုင်ပါတယ်။
              </p>
              <div className="my-8 flex items-baseline">
                <span className="mr-2 text-5xl font-extrabold text-sky-500">
                  $1.99
                </span>
                <span className="text-gray-500 dark:text-gray-400">/hr</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>TailwindCSS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>React</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Next.js</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Git & Github</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Support life time</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">lifetime</span>
                  </span>
                </li>
              </ul>
              <Link
                href="#"
                className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:ring-4 focus:ring-sky-200 dark:text-white  dark:focus:ring-sky-900"
              >
                Get started
              </Link>
            </div>
            <div className="mx-auto flex w-full flex-col rounded-xl border  border-gray-800 p-6 text-gray-300 shadow hover:border-sky-500 xl:p-8  dark:border-gray-600 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div className="my-8 flex items-baseline">
                <span className="mr-2 text-5xl font-extrabold text-sky-500">
                  $29
                </span>
                <span className="text-gray-500 dark:text-gray-400">/hr</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Need your wireframe</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Design with Figma&rsquo; Framer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Implement with React&rsquo; Tailwindcss&rsquo; Next.js
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Remote/Online</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Work in Business day&rsquo; no weekend</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Support 2 months</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <Link
                href="#"
                className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:ring-4 focus:ring-sky-200 dark:text-white  dark:focus:ring-sky-900"
              >
                Get started
              </Link>
            </div>
            <div className="mx-auto flex w-full flex-col rounded-xl border  border-gray-800 p-6 text-gray-300 shadow hover:border-sky-500 xl:p-8  dark:border-gray-600 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div className="my-8 flex items-baseline">
                <span className="mr-2 text-5xl font-extrabold text-sky-500">
                  $49
                </span>
                <span className="text-gray-500 dark:text-gray-400">/hr</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Don&apos;t need wireframe or anything</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Design with Figma&rsquo; Framer from sracth</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Implement with React&rsquo; Tailwindcss&rsquo; Next.js
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Remote/online</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Work with booth weekend</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Your project always be priority</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Customer care gift</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-sky-500 dark:text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Support 5 months</span>
                </li>
              </ul>
              <Link
                href="#"
                className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:ring-4 focus:ring-sky-200 dark:text-white  dark:focus:ring-sky-900"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
