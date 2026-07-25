import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { CONTACT } from "@/constants/site";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell Web Dev about your website, automation, or advertising project.",
};

export default function StartProjectPage() {
  return (
    <>
      <PageHero eyebrow="Start a project" title="Let’s build what’s" accent="next." description="Share a few details about your goals. We’ll review your request and arrange a free consultation." compact />
      <section className="section-pad">
        <div className="site-container grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <aside>
            <h2 className="display-title">Tell us about your project.</h2>
            <p className="body-muted mt-6">You don&apos;t need a perfect brief. Give us the context you have, and we&apos;ll help clarify the right approach.</p>
            <div className="mt-10 border-t pt-7"><strong className="text-blue">Email us</strong><a href={CONTACT.emailHref} className="mt-3 block font-bold">{CONTACT.email}</a></div>
            <div className="mt-7 border-t pt-7"><strong className="text-blue">Call us</strong><a href={CONTACT.phoneHref} className="mt-3 block font-bold">{CONTACT.phone}</a></div>
          </aside>
          <ContactForm project />
        </div>
      </section>
    </>
  );
}
