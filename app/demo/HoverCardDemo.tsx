import { CalendarDays } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo({
    children, logo, name, description, joined
}: {
    children: React.ReactNode,
    logo?: string,
    name?: string,
    description?: string,
    joined?: string
}) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div>{children}</div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 border-gray-900 bg-black bg-opacity-10 backdrop-blur-md">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src={logo || "https://github.com/vercel.png"} />
                        <AvatarFallback>{name || "VC"}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 text-white">
                        <h4 className="text-sm font-semibold">{name || "@nextjs"}</h4>
                        <p className="text-sm text-gray-300">
                            {description || "The React Framework – created and maintained by @vercel."}
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                {joined || "Joined December 2023"}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
