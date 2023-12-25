import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ProgressDemo } from "./progress-demo"

export function CardWithForm() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Volume</CardTitle>
                <CardDescription>Crypto Exchange</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Circulating supply</Label>
                        <CardDescription>1,231 USDT</CardDescription>
                        <ProgressDemo percentage={80} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Max supply</Label>
                        <CardDescription>2,000 USDT</CardDescription>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
