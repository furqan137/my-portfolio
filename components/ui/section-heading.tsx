import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-center": alignment === "center",
          "text-left": alignment === "left",
          "text-right": alignment === "right",
        },
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}