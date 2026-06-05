import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";

export default function Projects() {
  const live = projects.filter((p) => p.status === "Live");
  const upcoming = projects.filter((p) => p.status !== "Live");
  return (
    <main className="bg-luxury px-4 pb-24 pt-32 sm:px-5 sm:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Portfolio System" title="Project gallery built to scale every week." subtitle="Live projects stay at the top. Each card has a real case study page and live projects open in a new tab." />
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-[1.6rem] p-6 sm:rounded-[2rem]"><h3 className="text-xl font-black text-amber-200">Add Projects Fast</h3><p className="mt-3 text-slate-300">Edit <code className="rounded bg-black/30 px-2 py-1">src/data/projects.ts</code> and add one object. The gallery and case study pages update automatically.</p></div>
          <div className="glass rounded-[1.6rem] p-6 sm:rounded-[2rem]"><h3 className="text-xl font-black text-amber-200">Live Links</h3><p className="mt-3 text-slate-300">Open Live buttons use <code className="rounded bg-black/30 px-2 py-1">target=_blank</code>, so visitors do not leave your portfolio.</p></div>
          <div className="glass rounded-[1.6rem] p-6 sm:rounded-[2rem]"><h3 className="text-xl font-black text-amber-200">Project Studio</h3><p className="mt-3 text-slate-300">Use the local dashboard to draft new project content, then copy the generated object into your data file.</p><Link href="/admin" className="mt-4 inline-flex font-bold text-amber-200">Open Project Studio →</Link></div>
        </div>
        <h2 className="mb-5 text-2xl font-black">Live Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{live.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}</div>
        <h2 className="mb-5 mt-14 text-2xl font-black">In Progress / Planned</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{upcoming.map((p, i) => <ProjectCard key={p.title} project={p} index={i + live.length} />)}</div>
      </div>
    </main>
  );
}
