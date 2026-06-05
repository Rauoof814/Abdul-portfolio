import { SectionTitle } from "@/components/SectionTitle";
import { experiences } from "@/data/experience";

const roadmap = ["Ship one project every week", "Write case studies for each build", "Improve GitHub README files", "Practice interviews and system design", "Apply with a stronger online brand"];

export default function Experience() {
  return (
    <main className="bg-luxury px-4 pb-24 pt-32 sm:px-5 sm:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Experience" title="Education, projects, and practical build experience." subtitle="This page presents my experience honestly while still showing strong engineering direction, product thinking, and growth." />
        <section className="grid gap-6 lg:grid-cols-[1fr_.7fr]">
          <div className="grid gap-5">{experiences.map((item) => <article key={item.title} className="glass rounded-[2rem] p-6 sm:p-8"><p className="text-sm font-black uppercase tracking-[.25em] text-amber-300">{item.period}</p><h2 className="mt-3 text-2xl font-black">{item.title}</h2><p className="mt-4 leading-8 text-slate-300">{item.description}</p><div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{tag}</span>)}</div></article>)}</div>
          <aside className="glass h-fit rounded-[2rem] p-6 sm:p-8"><h2 className="text-2xl font-black">Current execution plan</h2><p className="mt-4 leading-8 text-slate-300">The goal is to make my portfolio stronger every week and turn it into a serious proof-of-work system.</p><div className="mt-6 grid gap-3">{roadmap.map((r, i) => <div key={r} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300"><span className="mr-3 font-black text-amber-200">0{i + 1}</span>{r}</div>)}</div></aside>
        </section>
      </div>
    </main>
  );
}
