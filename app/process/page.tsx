import type { Metadata } from "next";
import { PageCta } from "@/components/shared/page-cta";
import { PageHero } from "@/components/shared/page-hero";

const steps = [
  ["01", "Discover", "We begin with your business—not assumptions. We learn about your goals, customers, systems, challenges, and opportunities."],
  ["02", "Plan", "We define the solution, priorities, scope, timeline, content requirements, and success measures before production begins."],
  ["03", "Build", "Our team designs, develops, integrates, and tests your solution with regular checkpoints for feedback."],
  ["04", "Launch", "We complete quality checks, optimize performance, prepare analytics, and deploy with care."],
  ["05", "Grow", "After launch, we continue with website care, optimization, automation, campaign management, and improvements."],
] as const;

export const metadata: Metadata = {
  title: "Our Process",
  description: "See Web Dev's five-step process from discovery through continuous growth.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="How we work" title="A clear path from idea to" accent="impact." description="Our collaborative five-step process keeps the work focused, transparent, and aligned with your goals from day one." />
      <section className="section-pad">
        <div className="site-container max-w-5xl">
          {steps.map(([number, title, text]) => (
            <article key={number} className="grid gap-6 border-b py-12 md:grid-cols-[100px_1fr]">
              <strong className="grid h-16 w-16 place-items-center rounded-full bg-gold text-navy">{number}</strong>
              <div><h2 className="font-display text-3xl font-bold">{title}</h2><p className="body-muted mt-4">{text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <PageCta title="Have a project in mind?" description="Start with a no-pressure conversation about your needs and next best step." label="Start the conversation" />
    </>
  );
}
