import { PageHero } from "@/components/shared/page-hero";

export type LegalSection = { id: string; title: string; content: React.ReactNode };

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return <><PageHero eyebrow="Legal" title={title} accent="" description="Effective July 25, 2026" compact /><section className="section-pad"><div className="site-container grid gap-12 lg:grid-cols-[240px_minmax(0,780px)]"><nav className="flex flex-wrap gap-4 border-l-2 border-gold pl-5 lg:sticky lg:top-8 lg:flex-col lg:self-start">{sections.map(s => <a key={s.id} href={`#${s.id}`} className="text-slate-600 hover:text-blue">{s.title}</a>)}</nav><article><p className="border-l-4 border-destructive bg-[#eee9de] p-5">This document describes the website&apos;s current general practices. Service-specific terms may also apply under a separate agreement.</p>{sections.map(section => <section id={section.id} key={section.id} className="scroll-mt-8"><h2 className="mb-4 mt-12 font-display text-3xl font-bold first:mt-0">{section.title}</h2><div className="body-muted space-y-4">{section.content}</div></section>)}</article></div></section></>;
}
