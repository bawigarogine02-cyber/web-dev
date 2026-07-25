import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageCtaProps {
  title: string;
  description: string;
  label: string;
  href?: string;
}

export function PageCta({
  title,
  description,
  label,
  href = "/start-project",
}: PageCtaProps) {
  return (
    <section className="bg-blue py-24 text-center text-white">
      <div className="site-container">
        <h2 className="display-title">{title}</h2>
        <p className="mx-auto my-7 max-w-2xl text-white/70">{description}</p>
        <Button asChild variant="destructive">
          <Link href={href}>{label} ↗</Link>
        </Button>
      </div>
    </section>
  );
}
