import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/shared/legal-page";
import { CONTACT } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the Web Dev website and general service information.",
};

const sections: LegalSection[] = [
  { id: "use", title: "1. Acceptance and website use", content: <p>By using this website, you agree to these Terms &amp; Conditions and our Privacy Notice. You may use the website only for lawful purposes.</p> },
  { id: "information", title: "2. Website information", content: <p>Website content is general information and may change without notice. It does not constitute a binding offer, professional advice, or guarantee of business results.</p> },
  { id: "services", title: "3. Services and project agreements", content: <p>Project scope, deliverables, schedules, responsibilities, fees, ownership, support, and cancellation will be stated in a written proposal or agreement.</p> },
  { id: "quotes", title: "4. Quotations and timelines", content: <p>Quotations are estimates valid for the stated period. Delivery schedules depend on timely feedback, approvals, content, access, and payment.</p> },
  { id: "ip", title: "5. Intellectual property", content: <p>This website&apos;s design, text, graphics, logo, code, and original content are owned by or licensed to Web Dev. Client deliverable ownership is determined by the applicable agreement.</p> },
  { id: "third-party", title: "6. Third-party services", content: <p>Our website and services may use third-party platforms, hosting, advertising networks, or automation tools subject to their own terms.</p> },
  { id: "liability", title: "7. Disclaimers and liability", content: <p>The website is provided on an &quot;as available&quot; basis. To the fullest extent permitted by law, Web Dev will not be liable for indirect or consequential losses arising solely from website use.</p> },
  { id: "law", title: "8. Governing law", content: <p>These terms are governed by the laws of the Republic of the Philippines.</p> },
  { id: "contact", title: "9. Contact", content: <p>Questions may be sent to <a className="text-blue underline" href={CONTACT.emailHref}>{CONTACT.email}</a> or <a className="text-blue underline" href={CONTACT.phoneHref}>{CONTACT.phone}</a>.</p> },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions." sections={sections} />;
}
