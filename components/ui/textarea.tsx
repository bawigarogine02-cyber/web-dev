import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn("flex min-h-36 w-full resize-y border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15", className)} {...props} />;
}
export { Textarea };
