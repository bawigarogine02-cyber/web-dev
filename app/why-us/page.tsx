import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  ["Results-Driven Strategy", "Every decision connects to a clear business objective and measurable outcome."],
  ["Tailored Solutions", "No generic templates. Your solution is shaped around your audience, operations, and goals."],
  ["Modern Technologies", "Reliable web technologies, AI tools, and automation platforms keep you future-ready."],
  ["Transparent Communication", "Clear timelines, responsive conversations, and honest updates at every stage."],
  ["Reliable Support", "We remain available after launch to maintain, optimize, and improve your solution."],
  ["One Connected Team", "Strategy, design, development, automation, and advertising work together."],
];

export const metadata: Metadata = { title: "Why Us", description: "Discover why businesses choose Web Dev as their digital growth partner." };

export default function WhyUsPage() {
  return <><PageHero eyebrow="Why Web Dev" title="Built for results. Here for the" accent="journey." description="We combine thoughtful strategy, modern technology, and dependable support to create solutions that make a real business difference." /><section className="section-pad"><div className="site-container"><div className="mx-auto mb-16 max-w-3xl text-center"><h2 className="display-title">More than a supplier.<br /><span className="text-blue">Your digital partner.</span></h2><p className="body-muted mt-6">We stay focused on understanding your goals, solving the right problems, and supporting sustainable growth.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{values.map(([title,text],i) => <Card key={title}><CardHeader><span className="text-destructive">0{i+1}</span><CardTitle className="mt-14">{title}</CardTitle></CardHeader><CardContent><p className="body-muted">{text}</p></CardContent></Card>)}</div></div></section><section className="dark-section section-pad"><div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center"><h2 className="display-title">Local understanding.<br /><em>World-class ambition.</em></h2><div><p className="leading-relaxed text-white/60">We understand the realities of growing a business in the Philippines while building to modern global standards.</p><Button asChild className="mt-7"><Link href="/process">See how we work →</Link></Button></div></div></section></>;
}
