import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { CONTACT } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Web Dev collects, uses, protects, and retains personal information.",
};

const sections: LegalSection[] = [
  { id: "collect", title: "1. Information we collect", content: <p>We may collect information you voluntarily provide, including your name, email address, telephone number, company, service interests, project details, and messages. We may also receive basic technical data when analytics or security tools are enabled.</p> },
  { id: "use", title: "2. How we use information", content: <p>We use personal information to respond to inquiries, prepare quotations, provide and improve services, manage client relationships, maintain security, and comply with legal obligations.</p> },
  { id: "basis", title: "3. Basis and manner of processing", content: <p>We process information with your consent, to take requested steps before entering into or performing a contract, to comply with legal obligations, and for legitimate business purposes.</p> },
  { id: "share", title: "4. Sharing and service providers", content: <p>We do not sell personal information. We may share limited information with trusted service providers when necessary to operate our business or deliver services.</p> },
  { id: "cookies", title: "5. Cookies and analytics", content: <p>This website may use essential cookies and, when configured, analytics or advertising technologies. You can control cookies through your browser settings.</p> },
  { id: "retention", title: "6. Retention and security", content: <p>We retain information only as long as reasonably necessary and use reasonable organizational and technical safeguards.</p> },
  { id: "rights", title: "7. Your privacy rights", content: <p>Subject to applicable law, you may request access, correction, restriction, withdrawal of consent, deletion, or portability, and lodge a complaint with the National Privacy Commission.</p> },
  { id: "contact", title: "8. Contact us", content: <p>For privacy questions, email <a className="text-blue underline" href={CONTACT.emailHref}>{CONTACT.email}</a> or call <a className="text-blue underline" href={CONTACT.phoneHref}>{CONTACT.phone}</a>.</p> },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Notice." sections={sections} />;
}
