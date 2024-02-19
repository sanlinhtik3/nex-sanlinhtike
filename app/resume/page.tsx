"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image";
import { BadgeCheck, Github, Laptop, Mail, PenTool, Phone, Timer } from "lucide-react";

export default function Page() {

    // those are only for edit state
    // whin you docuble click, those are enable edit
    const [isTitleEdit, setTitleEdit] = React.useState(false)
    const [isDescriptionEdit, setDescriptionEdit] = React.useState(false)

    // those are data when you edit state
    const [title, setTitle] = React.useState("Welcome!")
    const [description, setDescription] = React.useState("Highly skilled and motivated Frontend Web Developer and Web UI/UX Designer with extensive experience in modern web development, proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. Adept at creating clean and beautiful UI/UX designs. Seeking challenging opportunities to utilize my skills and contribute to innovative web development projects. Currently, I am teaching at inficreax as a Frontend Web Developer. I have got 3+ years experience in web development field.")

    return (
        <div className=" max-w-6xl mx-auto">
            <div className="grid grid-cols-6 gap-5 py-10">
                <div className="col-span-2">
                    <Card className=" rounded-2xl">
                        <CardHeader>
                            <Avatar className=" w-28 h-28">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardTitle>San Lin Htike <BadgeCheck className="w-6 h-6 inline-block text-slate-50 fill-blue-500" /> </CardTitle>
                            <CardDescription>Unlock you door</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Professional: UI/UX</p>
                        </CardContent>
                    </Card>

                    <CardTitle className=" mt-5">Avaiable</CardTitle>

                    <Card className="rounded-2xl mt-2">
                        <CardContent className="p-2">
                            <div className=" flex items-center gap-3">
                                <div className=" border rounded-xl p-2 inline-block">
                                    <Laptop className="w-4 h-4" />
                                </div>
                                <h3 className="scroll-m-20 font-semibold tracking-tight">
                                    Remote
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-2xl mt-2">
                        <CardContent className="p-2">
                            <div className=" flex items-center gap-3">
                                <div className=" border rounded-xl p-2 inline-block">
                                    <Timer className="w-4 h-4" />
                                </div>
                                <h3 className="scroll-m-20 font-semibold tracking-tight">
                                    Full-time
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-2xl mt-2">
                        <CardContent className="p-2">
                            <div className=" flex items-center gap-3">
                                <div className=" border rounded-xl p-2 inline-block">
                                    <PenTool className="w-4 h-4" />
                                </div>
                                <h3 className="scroll-m-20 font-semibold tracking-tight">
                                    UI/UX Developer
                                </h3>
                            </div>
                        </CardContent>
                    </Card>

                    <CardTitle className=" mt-5">Contact</CardTitle>

                    <Card className="rounded-2xl mt-2">
                        <CardContent className="p-2">
                            <div className=" flex items-center gap-3">
                                <div className=" border rounded-xl p-2 inline-block">
                                    <Github className="w-4 h-4" />
                                </div>
                                <h3 className="scroll-m-20 font-semibold tracking-tight">
                                    @sanlinhtik3
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-2xl mt-2">
                        <CardContent className="p-2">
                            <div className=" flex items-center gap-3">
                                <div className=" border rounded-xl p-2 inline-block">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <h3 className="scroll-m-20 font-semibold tracking-tight">
                                    09 969 474 745
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-2xl mt-2">
                        <CardContent className="p-2">
                            <div className=" flex items-center gap-3">
                                <div className=" border rounded-xl p-2 inline-block">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <h3 className="scroll-m-20 font-semibold tracking-tight">
                                    sanlinhtike.info@gmail.com
                                </h3>
                            </div>
                        </CardContent>
                    </Card>

                </div>

                <div className="col-span-4 space-y-5">


                    <Card className=" rounded-2xl">
                        <CardHeader>
                            <CardTitle>EDUCATION</CardTitle>
                            <CardDescription>
                                ဘာမှတော့ မတတ်ပါခင်ဗျား။
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-5">
                                <Card className="rounded-2xl">
                                    <CardHeader>
                                        <CardTitle>2017: TON Sites, TON Proxy, TON WWW</CardTitle>
                                        <CardDescription>Myeik Computer University</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Try the decentralized, secure, reliable Internet of the future with TON services.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-2xl">
                                    <CardHeader>
                                        <CardTitle>2017: TON Sites, TON Proxy, TON WWW</CardTitle>
                                        <CardDescription>Myeik Computer University</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Try the decentralized, secure, reliable Internet of the future with TON services.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className=" rounded-2xl">
                        <CardHeader>
                            {!isTitleEdit ? (
                                <CardTitle onDoubleClick={() => setTitleEdit(true)}>{title}</CardTitle>
                            ) : (
                                <Input type="email" placeholder="Your title" value={title} onChange={(e) => setTitle(e.target.value)} onDoubleClick={() => setTitleEdit(false)} />
                            )}
                            {!isDescriptionEdit ? (
                                <CardDescription onDoubleClick={() => setDescriptionEdit(true)}>
                                    {description}
                                </CardDescription>
                            ) : (
                                <Textarea placeholder="Type your message here." value={description} onChange={(e) => setDescription(e.target.value)} onDoubleClick={() => setDescriptionEdit(false)} />
                            )}
                        </CardHeader>
                    </Card>

                    <Card className=" rounded-2xl">
                        <CardHeader>
                            <CardTitle>EXPERIENCE</CardTitle>
                            <CardDescription>
                                Highly skilled and motivated Frontend Web Developer and Web
                                UI/UX Designer with extensive experience in modern web
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-10">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <div key={index} className="border-b">
                                        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                                            2019
                                        </h2>
                                        <CardDescription>MMSIT</CardDescription>
                                        <CardTitle>Web Developer(Coach)</CardTitle>
                                        <CardDescription>
                                            I worked as a Web Developer Coach at MMS IT in 2019-2020.
                                            As a guide, I explain and guide the trainees. When there are
                                            projects, we work as a team.
                                        </CardDescription>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <CardTitle>SKILLS</CardTitle>

                    <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Card className=" rounded-2xl">
                                <CardHeader>
                                    <Image
                                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png`}
                                        width={100}
                                        height={100}
                                        alt="logo"
                                        className="w-10"
                                    />

                                    <CardTitle>Figma</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}