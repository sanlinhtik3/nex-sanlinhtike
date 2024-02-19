"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionDiv({ children }: { children: ReactNode }) {
  return <motion.div>{children}</motion.div>;
}
