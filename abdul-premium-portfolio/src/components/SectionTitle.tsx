export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[.3em] text-amber-300">{eyebrow}</p><h2 className="text-3xl font-black tracking-tight md:text-5xl">{title}</h2>{text && <p className="mt-4 text-slate-300">{text}</p>}</div>;
}
