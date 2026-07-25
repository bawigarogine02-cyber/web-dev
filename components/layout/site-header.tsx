"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/site";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);
  return (
    <header className="absolute inset-x-0 top-0 z-50 h-24 text-white">
      <div className="site-container flex h-full items-center justify-between">
        <Link href="/" aria-label="Web Dev home" className="relative block h-[70px] w-[100px]">
          <Image src={assetPath("/main-logo.png")} alt="Web Dev" fill priority className="scale-[1.42] object-contain" />
        </Link>
        <button ref={toggleRef} className="relative z-50 p-2 lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={cn("max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:bg-navy max-lg:text-2xl", "flex items-center gap-8 transition-all", open ? "max-lg:visible max-lg:translate-x-0 max-lg:pointer-events-auto" : "max-lg:invisible max-lg:translate-x-full max-lg:pointer-events-none")}>
          {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base text-white/75 transition hover:text-white">{link.label}</Link>)}
          <Button asChild variant="outline"><Link href="/start-project" onClick={() => setOpen(false)}>Start a project <span>↗</span></Link></Button>
        </nav>
      </div>
    </header>
  );
}
