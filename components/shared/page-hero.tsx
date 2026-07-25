export function PageHero({ eyebrow, title, accent, description, compact = false }: { eyebrow: string; title: string; accent: string; description: string; compact?: boolean }) {
  return (
    <section className={`sub-hero ${compact ? "min-h-[460px]" : ""}`}>
      <div className="site-container relative z-10">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}{accent ? <> <em>{accent}</em></> : null}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
