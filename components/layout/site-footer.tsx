import Image from "next/image";
import Link from "next/link";
import { CONTACT, FOOTER_LINKS } from "@/constants/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#040f22] py-16 text-white">
      <div className="site-container grid gap-12 md:grid-cols-[1.2fr_.6fr_1fr]">
        <div>
          <Image src="/logo-transparent.png" alt="Web Dev" width={125} height={125} className="h-auto w-32 drop-shadow-xl" />
          <p className="mt-4 leading-relaxed text-white/50">Developing solutions.<br />Building futures. Together.</p>
        </div>
        <nav className="flex flex-col items-start gap-3" aria-label="Footer navigation">
          <p className="mb-2 text-base font-bold uppercase tracking-widest text-gold">Navigate</p>
          {FOOTER_LINKS.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="flex flex-col items-start gap-3">
          <p className="mb-2 text-base font-bold uppercase tracking-widest text-gold">Contact</p>
          <a href={CONTACT.emailHref}>{CONTACT.email} ↗</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phone} ↗</a>
        </div>
        <div className="col-span-full flex flex-wrap justify-between gap-4 border-t border-white/10 pt-7 text-base text-white/40">
          <span>© 2026 WEB DEV.</span>
          <span className="flex gap-3"><Link href="/privacy">Privacy</Link><span>·</span><Link href="/terms">Terms</Link></span>
          <Link href="#top">Back to top ↑</Link>
        </div>
      </div>
    </footer>
  );
}
