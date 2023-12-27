"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function Free4UProgressDemo({ percentage }: { percentage?: number }) {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(percentage || 70), 500)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-[100%] h-1" />
}