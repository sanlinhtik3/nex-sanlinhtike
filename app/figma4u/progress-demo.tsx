"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function Free4UProgressDemo({ percentage }: { percentage?: number }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(percentage || 70), 500);
        return () => clearTimeout(timer);
    });

    return <Progress value={progress} className="w-[100%] h-1" />;
}
