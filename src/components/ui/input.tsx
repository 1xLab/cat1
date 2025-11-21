import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-[var(--color-outline)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)] shadow-sm transition placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-primary)] focus-visible:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
