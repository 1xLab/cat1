import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-xl border border-[var(--color-outline)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] shadow-sm transition placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-primary)] focus-visible:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
