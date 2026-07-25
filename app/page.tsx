import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Code2, Megaphone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Code2, title: "Custom Website Development", text: "Professional, high-performing websites designed to represent your brand and convert visitors.", items: ["Corporate & business websites", "eCommerce and landing pages", "Custom applications & CMS"] },
  { icon: ShieldCheck, title: "Website Care & Maintenance", text: "Ongoing technical care that keeps your website secure, updated, and performing at its best.", items: ["Security and uptime monitoring", "Backups and updates", "Performance optimization"] },
  { icon: Bot, title: "Business Process Automation", text: "Connected, intelligent workflows that reduce repetitive work and improve productivity.", items: ["AI-powered workflows", "CRM and email automation", "API integrations"] },
  { icon: Megaphone, title: "Digital Advertising", text: "Measurable campaigns that reach the right audience and turn attention into growth.", items: ["Google and Meta Ads", "Remarketing campaigns", "Conversion tracking"] },
];

const values = ["Results-Driven Strategy", "Tailored Solutions", "Modern Technologies", "Transparent Communication", "Reliable Support"];
const process = [
  ["01", "Discover", "We learn about your business, objectives, and challenges."],
  ["02", "Plan", "We create a strategy tailored to your goals and target audience."],
  ["03", "Build", "We design, develop, integrate, and test your solution."],
  ["04", "Launch", "We deploy and optimize everything for performance."],
  ["05", "Grow", "We continue supporting, optimizing, and marketing your business."],
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[840px] overflow-hidden bg-[radial-gradient(circle_at_78%_42%,rgba(11,83,176,.7),transparent_28%),linear-gradient(135deg,#06162f_0%,#092a5d_60%,#061a3a_100%)] pb-24 pt-44 text-white">
        <div className="site-container grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow"><span />Trusted digital solutions</p>
            <h1 className="font-display text-[clamp(52px,6.4vw,96px)] font-extrabold leading-[.98] tracking-[-.06em]">Build, grow, and <em>automate</em> your business online.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">We help businesses create high-performing websites, streamline repetitive processes, and attract more customers with data-driven digital marketing.</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button asChild size="lg"><Link href="/start-project">Get a free consultation <ArrowUpRight size={18} /></Link></Button>
              <Button asChild variant="ghost"><Link href="/contact">Request a quote <ArrowUpRight size={18} /></Link></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] rotate-[3deg] border border-white/80 bg-white shadow-2xl">
            <div className="flex justify-between px-7 pt-6 text-base font-bold tracking-widest text-navy/55"><span className="text-green-500">●</span><span>Your digital growth system</span><span>01</span></div>
            <div className="relative h-[310px]"><Image src="/logo-transparent.png" alt="Web Dev" fill priority className="scale-110 object-contain drop-shadow-xl" /></div>
            <div className="bg-navy px-7 py-5 font-mono text-base leading-relaxed text-white/60">&lt;growth&gt;<br /><span className="pl-5 text-gold">website + automation + marketing</span><br />&lt;/growth&gt;</div>
            <div className="absolute -bottom-10 -right-8 grid h-36 w-36 place-items-center rounded-full border-8 border-gold/20 bg-gold text-center font-bold leading-tight text-navy shadow-2xl">BUILD<br />GROW<br />AUTOMATE<br /><span className="text-2xl">✦</span></div>
          </div>
        </div>
      </section>

      <section className="bg-gold py-5 text-center font-display text-base font-extrabold uppercase tracking-widest text-navy">Web Development &nbsp; ✦ &nbsp; Website Care &nbsp; ✦ &nbsp; Automation &nbsp; ✦ &nbsp; Digital Advertising</section>

      <section className="section-pad"><div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center"><h2 className="display-title">Modern solutions.<br /><span className="text-blue">Long-term growth.</span></h2><div className="body-muted space-y-5 border-l border-border pl-8"><p>Whether you&apos;re launching a new business, improving an existing website, or automating daily operations, we deliver modern solutions designed to save time and increase efficiency.</p><p>From custom development to intelligent automation and advertising, we build systems that help businesses stay ahead.</p></div></div></section>

      <section className="section-pad bg-white" id="services"><div className="site-container"><p className="eyebrow text-blue"><span />Our services</p><h2 className="display-title max-w-4xl">One team. Four ways to <span className="text-blue">move forward.</span></h2><div className="mt-16 grid gap-5 md:grid-cols-2">
        {services.map(({ icon: Icon, title, text, items }, index) => <Card key={title} className="group transition hover:-translate-y-2 hover:border-blue hover:shadow-2xl"><CardHeader><div className="flex items-center justify-between"><Icon className="text-blue" size={38} /><span className="font-bold text-destructive">0{index + 1}</span></div><CardTitle className="mt-10 text-3xl">{title}</CardTitle></CardHeader><CardContent><p className="body-muted">{text}</p><ul className="mt-6 grid gap-2 border-t pt-5 text-base text-slate-600">{items.map(item => <li key={item}>— {item}</li>)}</ul></CardContent></Card>)}
      </div><Button asChild className="mt-10"><Link href="/services">Explore all services <ArrowUpRight size={18} /></Link></Button></div></section>

      <section className="dark-section section-pad" id="why-us"><div className="site-container"><p className="eyebrow"><span />Why choose us?</p><div className="grid gap-8 lg:grid-cols-[1.2fr_.6fr] lg:items-end"><h2 className="display-title">A partner built around <em>your goals.</em></h2><p className="leading-relaxed text-white/60">Technology is only valuable when it creates meaningful progress for your business.</p></div><div className="mt-14 grid border-l border-t border-white/15 md:grid-cols-3">{values.map((value, i) => <div key={value} className="min-h-56 border-b border-r border-white/15 p-8"><span className="text-gold">0{i + 1}</span><h3 className="mt-16 font-display text-xl font-bold">{value}</h3></div>)}</div></div></section>

      <section className="section-pad" id="process"><div className="site-container"><p className="eyebrow text-blue"><span />Our process</p><h2 className="display-title">From first idea to <span className="text-blue">continuous growth.</span></h2><div className="mt-14 border-t">{process.map(([n,title,text]) => <div key={n} className="grid gap-5 border-b py-9 md:grid-cols-[90px_.4fr_1fr] md:items-center"><strong className="text-destructive">{n}</strong><h3 className="font-display text-3xl font-bold">{title}</h3><p className="body-muted">{text}</p></div>)}</div></div></section>

      <section className="section-pad bg-blue text-white"><div className="site-container text-center"><p className="eyebrow justify-center"><span />Ready to grow your business?</p><h2 className="display-title">Let&apos;s build a stronger<br /><em>digital presence.</em></h2><p className="mx-auto mt-7 max-w-3xl leading-relaxed text-white/65">Whether you need a website, ongoing maintenance, intelligent automation, or high-performing campaigns, we&apos;re here to help.</p><div className="mt-9 flex flex-wrap justify-center gap-5"><Button asChild variant="destructive"><Link href="/start-project">Start your project <ArrowUpRight size={18} /></Link></Button><Button asChild variant="outline"><Link href="/contact">Schedule a free consultation</Link></Button></div></div></section>
    </>
  );
}
