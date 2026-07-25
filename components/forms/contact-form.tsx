import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/constants/site";

export function ContactForm({ project = false }: { project?: boolean }) {
  return (
    <form className="grid gap-6 bg-white p-6 shadow-2xl md:grid-cols-2 md:p-10" action={CONTACT.emailHref} method="post" encType="text/plain">
      <Field label="Name *" id="name"><Input id="name" name="Name" required autoComplete="name" /></Field>
      <Field label="Email *" id="email"><Input id="email" name="Email" type="email" required autoComplete="email" /></Field>
      <Field label="Phone" id="phone"><Input id="phone" name="Phone" type="tel" autoComplete="tel" /></Field>
      <Field label="Company" id="company"><Input id="company" name="Company" autoComplete="organization" /></Field>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="service">{project ? "What can we help with? *" : "Topic"}</Label>
        <select id="service" name="Service" required={project} className="h-12 w-full border border-input bg-background px-4 text-base outline-none focus:border-blue">
          <option value="">Select a service</option><option>Custom Website Development</option><option>Website Care &amp; Maintenance</option><option>Business Process Automation</option><option>Digital Advertising</option><option>General Inquiry</option>
        </select>
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="message">{project ? "Project details *" : "How can we help? *"}</Label>
        <Textarea id="message" name="Message" required placeholder="Tell us about your goals, challenges, and anything else we should know." />
      </div>
      <Button className="md:col-span-2" type="submit">{project ? "Send project inquiry" : "Send your message"} <span>↗</span></Button>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return <div className="space-y-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}
