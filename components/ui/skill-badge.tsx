"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  return (
    <motion.div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span className="font-medium">{name}</span>
    </motion.div>
  );
}