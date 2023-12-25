import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

export function TabsDemo() {
    return (
        <Tabs defaultValue="basic" className=" w-full">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="mid">Mid</TabsTrigger>
                <TabsTrigger value="higher">Higher</TabsTrigger>
                <TabsTrigger value="uix">UI/UX Graphic</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
                <div className="grid gap-2">
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=Swp2zd76SGlGyVuI&amp;list=PLuj0ueOrPud8ldQbSv4YuXxY-GmTmvuLG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>HTML, CSS</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud8ldQbSv4YuXxY-GmTmvuLG&si=KPhj4XLCNgEQ2QOl">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=aN1mMTb__N80HO2x&amp;list=PLuj0ueOrPud-oFHLkQFSS79ASFKxgul78" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>FWD</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud-oFHLkQFSS79ASFKxgul78&si=i-d3LNIMOhVGqjss">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent value="mid">
                <div className="grid gap-2">
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=SoFZOfrg_IsjeBmM&amp;list=PLuj0ueOrPud-lxYyJyG07d6jNL4pxNUvJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Bootstrap</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud-lxYyJyG07d6jNL4pxNUvJ&si=E5WvAl8qmW5r50Xz">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=UnAaR6lUZJcRNikn&amp;list=PLuj0ueOrPud8Kv2HH-CFBnsQMEOE11eEX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Git & Github</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud8Kv2HH-CFBnsQMEOE11eEX&si=E8Zhnpxx-GKda1lw">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=mIIA3X6Ni7CgboOQ&amp;list=PLuj0ueOrPud-mRHrVWCouOEFgpbCbQScU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Bootstrap Dashboard</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud-mRHrVWCouOEFgpbCbQScU&si=ie4zlvxAXJbZnq9A">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent value="higher">
                <div className="grid gap-2">
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=HNLwaAs1wQftHJ0u&amp;list=PLuj0ueOrPud_Lu4-K8icC3cJ9vuNPS2JC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>JavaScript</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud_Lu4-K8icC3cJ9vuNPS2JC&si=GIAf24BhoFBJIeC2">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=dl6-EhDcrpEknRjJ&amp;list=PLuj0ueOrPud8M6eYFH7FaVECYoAm3GBeb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Tailwind CSS</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud8M6eYFH7FaVECYoAm3GBeb&si=oDgLE-iHh9up8Cnq">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=TylqhuVW35qa7B3V&amp;list=PLuj0ueOrPud_8SYDsnVQjwSz9XsDi90rV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>React.js</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud_8SYDsnVQjwSz9XsDi90rV&si=SUqfL3Auc-t5oG5S">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=mvNPcB_2aBgfRnp3&amp;list=PLuj0ueOrPud9BnJ3AW0A1__w_4L3Fo0_G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>MERN Stack</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud9BnJ3AW0A1__w_4L3Fo0_G&si=xg3gmWBYzr76cevl">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent value="uix">
                <div className="grid gap-2">
                    <Card>
                        <CardContent className="space-y-2 pt-5">
                            <div className="space-y-1 lg:grid grid-cols-3">
                                <div className=" lg:col-span-1 rounded-lg overflow-hidden">
                                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/videoseries?si=QXf6CgJydfnbYbOd&amp;list=PLuj0ueOrPud-lFXoqSSym8JwRGUo-bH4p" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className=" lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle>Figma UI/UX (Graphic)</CardTitle>
                                        <CardDescription>
                                            Web Development ပညာရပ်ကိုလေ့လာသူများအတွက် မဖြစ်မနေလေ့လာရမယ့် သင်ခန်းစာများဖြစ်ပါတယ်။
                                        </CardDescription>
                                        <Button asChild>
                                            <Link href="https://youtube.com/playlist?list=PLuj0ueOrPud-lFXoqSSym8JwRGUo-bH4p&si=iXG2q2wd6JrszPV2">Learn Course</Link>
                                        </Button>
                                    </CardHeader>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
    )
}
