import type { Metadata } from "next";
import { PageCta } from "@/components/shared/page-cta";
import { PageHero } from "@/components/shared/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  ["01 / BUILD", "Custom Website Development", "Professional, fast, secure websites shaped around your brand and business goals.", ["Corporate Websites", "eCommerce Websites", "Landing Pages", "Membership Portals", "Custom Web Apps", "Responsive Design", "CMS Integration", "Website Redesign"]],
  ["02 / PROTECT", "Website Care & Maintenance", "Proactive technical care that keeps your website reliable, protected, and performing.", ["Website Updates", "Security Monitoring", "Performance Optimization", "Regular Backups", "Bug Fixes", "Content Updates", "Uptime Monitoring", "Technical Support"]],
  ["03 / AUTOMATE", "Business Process Automation", "Connected workflows that reduce manual work and help your team focus on higher-value tasks.", ["AI-Powered Workflows", "CRM Automation", "Email Automation", "Lead Management", "Scheduling", "Data Synchronization", "API Integrations", "Custom Workflows"]],
  ["04 / GROW", "Digital Advertising", "Data-driven campaigns built to reach qualified audiences and produce measurable returns.", ["Google Ads", "Facebook Ads", "Instagram Ads", "Search Advertising", "Display Advertising", "Remarketing", "Conversion Tracking", "Performance Reporting"]],
] as const;

export const metadata: Metadata = {
  title: "Services",
  description: "Explore website development, maintenance, automation, and digital advertising services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we do" title="Digital solutions that" accent="work harder." description="From your first website to connected business systems and measurable campaigns, we build the digital foundation your growth deserves." />
      <section className="section-pad">
        <div className="site-container">
          <div className="mx-auto mb-16 max-w-3xl text-center"><h2 className="display-title">One team. Four ways to <span className="text-blue">move forward.</span></h2><p className="body-muted mt-6">Choose a focused service or combine them into an end-to-end growth system.</p></div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map(([number, title, text, items]) => (
              <Card key={title} className="transition hover:-translate-y-1 hover:border-blue hover:shadow-xl">
                <CardHeader><span className="font-bold tracking-widest text-destructive">{number}</span><CardTitle className="mt-10 text-3xl">{title}</CardTitle></CardHeader>
                <CardContent><p className="body-muted">{text}</p><ul className="mt-7 grid gap-2 border-t pt-5 sm:grid-cols-2">{items.map((item) => <li key={item} className="text-slate-600">— {item}</li>)}</ul></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <PageCta title="Not sure what you need?" description="Tell us where your business is today and where you want it to go." label="Get a free consultation" />
    </>
  );
}
