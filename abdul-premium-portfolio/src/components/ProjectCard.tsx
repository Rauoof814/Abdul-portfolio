import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
      <div className="mb-5 flex items-center justify-between"><span className="rounded-full bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-200">{project.category}</span><span className="text-sm text-slate-400">{project.year}</span></div>
      <h3 className="text-2xl font-black text-white">{project.title}</h3>
      <p className="mt-4 text-slate-300">{project.description}</p>
      <p className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">{project.impact}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{tech}</span>)}</div>
      {project.liveUrl && <a href={project.liveUrl} className="mt-6 inline-flex items-center font-bold text-amber-200 hover:text-amber-100">Open live project <ArrowUpRight className="ml-1" size={18}/></a>}
    </article>
  );
}
