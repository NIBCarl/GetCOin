import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  indicatorColor?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, indicatorColor, ...props }, ref) => {
    const percentage = value >= max ? 100 : (value / max) * 100;

    return (
      <div
        ref={ref}
        className={cn(
          "h-2 w-full overflow-hidden rounded-full bg-neutral-800",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full w-full flex-1 rounded-full transition-all",
            indicatorColor || "bg-[#E0B978]"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress }; 