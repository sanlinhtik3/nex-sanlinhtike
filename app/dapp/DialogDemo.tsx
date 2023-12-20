import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Click Buy/Sell</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Click Buy/Sell</DialogTitle>
                    <DialogDescription>
                        If you want to buy crypto, you can choose those options.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Link href="https://fb.com/5anlinhtike" target="_blank">
                            <Button> Messenger</Button>
                        </Link>
                        <Link href="https://t.me/barryhtike" target="_blank">
                            <Button>Telegram</Button>
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
