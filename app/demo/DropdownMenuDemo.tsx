import {
    AtSign,
    Facebook,
    MessageCircleCode,
    Send,
    Smartphone,
    Twitter,
    Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className=" h-auto">
                <Button variant="outline" className=" bg-black border-sky-500 text-sky-500 inline-block hover:bg-sky-950 hover:text-sky-600 px-10 rounded-2xl">Call Now</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black text-white border-gray-700">
                <DropdownMenuLabel>Contact</DropdownMenuLabel>
                <DropdownMenuSeparator className=" border-gray-800" />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Smartphone className="mr-2 h-4 w-4" />
                        <span>Phone</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Youtube className="mr-2 h-4 w-4" />
                        <Link href={"https://www.youtube.com/channel/UCOK-1XUE_uP-2WtjnWdL2ug"}>YouTube</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Facebook className="mr-2 h-4 w-4" />
                        <Link href={"https://fb.com/5anlinhtike"}>Facebook</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Send className="mr-2 h-4 w-4" />
                        <span>Telegram</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <AtSign className="mr-2 h-4 w-4" />
                        <Link href={"mailto:sanlin.htik3@gmail.com"}>Mail</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Twitter className="mr-2 h-4 w-4" />
                        <span>Twitter</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
