"use client";
import { useMemo, useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("New Project Title");
  const [slug, setSlug] = useState("new-project-title");
  const [href, setHref] = useState("https://");
  const [summary, setSummary] = useState("Short project summary...");
  const code = useMemo(() => `{
  slug: "${slug}",
  title: "${title}",
  type: "Web Application",
  year: "2026",
  status: "Live",
  featured: true,
  summary: "${summary}",
  problem: "Describe the real problem this project solves.",
  solution: "Describe what you built and how it works.",
  impact: "Explain the business or user value.",
  tech: ["Next.js", "React", "Tailwind", "Vercel"],
  image: "APP",
  href: "${href}",
  repo: "https://github.com/Rauoof814",
  highlights: ["Responsive UI", "Clean UX", "Live deployment", "Case study ready"],
  metrics: [{ label: "Status", value: "Live" }, { label: "Stack", value: "React" }, { label: "Type", value: "Web" }]
},`, [title, slug, href, summary]);
  return (
    <main className="bg-luxury px-4 pb-24 pt-32 sm:px-5 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[.3em] text-amber-300">Project Studio</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">Draft a new project object.</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">This is a safe local dashboard. It helps you create project content quickly. Copy the generated object into <code className="rounded bg-black/30 px-2 py-1">src/data/projects.ts</code>, commit, and Vercel will update the live site.</p>
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-6">
            <label className="block"><span className="text-sm text-slate-300">Title</span><input value={title} onChange={(e)=>{setTitle(e.target.value);setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""));}} className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 outline-none focus:border-amber-300"/></label>
            <label className="mt-4 block"><span className="text-sm text-slate-300">Slug</span><input value={slug} onChange={(e)=>setSlug(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 outline-none focus:border-amber-300"/></label>
            <label className="mt-4 block"><span className="text-sm text-slate-300">Live URL</span><input value={href} onChange={(e)=>setHref(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 outline-none focus:border-amber-300"/></label>
            <label className="mt-4 block"><span className="text-sm text-slate-300">Summary</span><textarea value={summary} onChange={(e)=>setSummary(e.target.value)} rows={5} className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 outline-none focus:border-amber-300"/></label>
          </div>
          <div className="glass overflow-hidden rounded-[2rem] p-6"><div className="mb-4 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-amber-300"/><span className="h-3 w-3 rounded-full bg-emerald-400"/></div><pre className="max-h-[620px] overflow-auto rounded-2xl bg-black/35 p-4 text-xs leading-6 text-slate-300"><code>{code}</code></pre></div>
        </section>
      </div>
    </main>
  );
}
