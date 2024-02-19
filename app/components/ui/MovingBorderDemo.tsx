"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import clsx from "clsx";

export function MovingBorderDemo({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className={clsx(
          className,
          `border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white`,
        )}
      >
        {content}
      </Button>
    </div>
  );
}
