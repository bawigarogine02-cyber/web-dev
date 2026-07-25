import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap px-6 text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-xl",
        destructive: "bg-destructive text-white hover:-translate-y-0.5 hover:shadow-xl",
        outline: "border border-white/40 bg-transparent text-white hover:bg-white hover:text-navy",
        secondary: "bg-white text-navy hover:-translate-y-0.5 hover:shadow-xl",
        ghost: "text-current hover:bg-current/10",
      },
      size: {
        default: "h-12",
        lg: "h-14 px-7",
        sm: "h-10 px-4",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
