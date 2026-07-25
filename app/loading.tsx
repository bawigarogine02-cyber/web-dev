export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-navy text-white" role="status" aria-live="polite">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-gold" />
        <p className="mt-5 font-bold">Loading…</p>
      </div>
    </div>
  );
}
