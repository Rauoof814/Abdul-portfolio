import Link from "next/link";
import { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="card-hover glass group relative flex min-w-0 flex-col overflow-hidden rounded-[1.6rem] p-4 sm:rounded-[2rem] sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-300/10 blur-2xl transition group-hover:bg-sky-300/20" />
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-amber-200">{project.status}</span>
        <span className="text-xs font-black uppercase tracking-[.25em] text-slate-500">0{index + 1}</span>
      </div>
      <div className="relative mb-6 grid min-h-40 place-items-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-6">
        <div className="absolute inset-0 grid-luxury opacity-50" />
        <div className="absolute left-4 top-4 flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
        <code className="relative text-center text-4xl font-black tracking-tight text-white/20 transition group-hover:text-amber-200/80 sm:text-5xl">{project.image}</code>
      </div>
      <p className="text-xs font-bold uppercase tracking-[.22em] text-sky-200 sm:text-sm">{project.type} • {project.year}</p>
      <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300 sm:text-base">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.tech.slice(0, 4).map((t) => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>)}</div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={`/projects/${project.slug}`} className="rounded-full bg-amber-300 px-5 py-3 text-center text-sm font-black text-slate-950 shadow-gold transition hover:bg-amber-200">View case study</Link>
        {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10">Open live ↗</a>}
      </div>
    </article>
  );
}
