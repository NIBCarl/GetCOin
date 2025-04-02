"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  children: ReactNode;
  glowColor?: string;
  scaleAmount?: number;
  className?: string;
}

export function AnimatedButton({
  children,
  glowColor = "rgba(224,185,120,0.7)",
  scaleAmount = 1.05,
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: scaleAmount,
        boxShadow: `0 0 25px ${glowColor}` 
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        className={cn(className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
} 