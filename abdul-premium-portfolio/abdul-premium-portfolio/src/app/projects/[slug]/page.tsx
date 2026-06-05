import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();
  return (
    <main className="bg-luxury px-4 pb-24 pt-32 sm:px-5 sm:pt-36">
      <article className="mx-auto max-w-6xl">
        <Link href="/projects" className="text-sm font-bold text-amber-200">← Back to projects</Link>
        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_.75fr]">
          <div className="min-w-0">
            <p className="text-sm font-black uppercase tracking-[.3em] text-sky-200">{project.type} • {project.year}</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="rounded-full bg-amber-300 px-7 py-4 text-center font-black text-slate-950 shadow-gold">Open live project ↗</a>}
              {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-4 text-center font-bold text-white hover:bg-white/10">View GitHub ↗</a>}
            </div>
          </div>
          <div className="glass overflow-hidden rounded-[2rem] p-5">
            <div className="grid min-h-56 place-items-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 text-6xl font-black text-white/20">{project.image}</div>
            <div className="mt-5 grid grid-cols-3 gap-3">{project.metrics.map((m) => <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"><p className="text-xl font-black text-white">{m.value}</p><p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">{m.label}</p></div>)}</div>
          </div>
        </section>
        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="glass rounded-[2rem] p-6"><h2 className="text-xl font-black text-amber-200">Problem</h2><p className="mt-4 leading-8 text-slate-300">{project.problem}</p></div>
          <div className="glass rounded-[2rem] p-6"><h2 className="text-xl font-black text-amber-200">Solution</h2><p className="mt-4 leading-8 text-slate-300">{project.solution}</p></div>
          <div className="glass rounded-[2rem] p-6"><h2 className="text-xl font-black text-amber-200">Impact</h2><p className="mt-4 leading-8 text-slate-300">{project.impact}</p></div>
        </section>
        <section className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1fr]">
          <div className="glass rounded-[2rem] p-6"><h2 className="text-2xl font-black">Tech Stack</h2><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((t) => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{t}</span>)}</div></div>
          <div className="glass rounded-[2rem] p-6"><h2 className="text-2xl font-black">Build Highlights</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{project.highlights.map((h) => <li key={h} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300">✓ {h}</li>)}</ul></div>
        </section>
        <section className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-5">
          <div className="mb-4 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-amber-300"/><span className="h-3 w-3 rounded-full bg-emerald-400"/></div>
          <pre className="overflow-x-auto text-xs leading-6 text-slate-300 sm:text-sm"><code>{`const caseStudy = {
  project: "${project.title}",
  status: "${project.status}",
  value: "${project.impact}",
  stack: ${JSON.stringify(project.tech.slice(0, 4))},
  nextStep: "keep improving, ship updates, and document results"
};`}</code></pre>
        </section>
      </article>
    </main>
  );
}
