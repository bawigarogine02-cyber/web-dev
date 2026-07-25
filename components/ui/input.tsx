import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} className={cn("flex h-12 w-full border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15 disabled:opacity-50", className)} {...props} />;
}
export { Input };
