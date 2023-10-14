import Button from "../components/Button";

export default function ProfileSide() {
    return (
        <div className=" bg-[#222429] space-y-5 p-5 text-center max-h-fit h-[calc(100vh-4rem)] rounded-xl">
            <h1 className=" text-3xl font-bold">Nex</h1>
            <div className="">
                <img src="https://static.mocortech.com/mxc-web-community/static/images/learn/title-image.svg" alt="" />
            </div>
            <h2>nex@sanlinhtike.com <br /> Fontend Developer in Myanmar</h2>
            <h6>&copy; 2023. All Rights Reserved</h6>
            <div className="flex gap-3">
                <Button className="w-full" name="Hire Me!" />
                <Button className="w-full bg-transparent border-2 border-purple-500" />
            </div>
        </div>

    )
}