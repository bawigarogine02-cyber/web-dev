import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Web Dev to discuss your next digital project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s start a"
        accent="conversation."
        description="Have a question, need advice, or want to discuss a project? Reach out directly or send us a message."
        compact
      />
      <section className="section-pad">
        <div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-blue"><span />We’re ready to help</p>
            <h2 className="display-title">Talk to our<br /><span className="text-blue">digital team.</span></h2>
            <p className="body-muted mt-6">Tell us what you&apos;re working on and where you need support. We&apos;ll help identify a practical next step.</p>
            <div className="mt-9 grid gap-4">
              <a href={CONTACT.emailHref} className="flex items-center gap-5 border bg-white p-6 hover:border-blue">
                <Mail className="text-blue" aria-hidden="true" />
                <span><small className="block font-bold text-blue">Email</small><strong>{CONTACT.email}</strong></span>
              </a>
              <a href={CONTACT.phoneHref} className="flex items-center gap-5 border bg-white p-6 hover:border-blue">
                <Phone className="text-blue" aria-hidden="true" />
                <span><small className="block font-bold text-blue">Phone</small><strong>{CONTACT.phone}</strong></span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
