import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-navy px-6 text-center text-white">
      <div>
        <p className="eyebrow justify-center"><span />404</p>
        <h1 className="display-title">This page could not be found.</h1>
        <p className="mx-auto my-7 max-w-xl text-white/70">The page may have moved or the address may be incorrect.</p>
        <Button asChild><Link href="/">Return home</Link></Button>
      </div>
    </section>
  );
}
