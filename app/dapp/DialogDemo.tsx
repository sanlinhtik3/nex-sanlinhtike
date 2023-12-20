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

export function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Click Buy/Sell</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Click Buy/Sell</DialogTitle>
                    <DialogDescription>
                        If you want to buy crypto, you can choose those options.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Button> Messenger</Button>
                        <Button>Telegram</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
