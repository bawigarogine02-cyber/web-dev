"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="grid min-h-screen place-items-center bg-navy px-6 text-center text-white">
      <div>
        <p className="eyebrow justify-center"><span />Something went wrong</p>
        <h1 className="display-title">We hit an unexpected error.</h1>
        <p className="mx-auto my-7 max-w-xl text-white/70">Please try again. If the problem continues, contact our team.</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </section>
  );
}
