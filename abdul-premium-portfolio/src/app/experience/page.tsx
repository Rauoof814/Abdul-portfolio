import { experience } from "@/data/experience";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";

export default function ExperiencePage() {
  return <main className="px-5 pt-36 pb-24"><div className="mx-auto max-w-5xl"><SectionTitle eyebrow="Experience" title="A practical developer with real build experience" /> <div className="space-y-6">{experience.map((item) => <Reveal key={item.role}><section className="glass rounded-[2rem] p-7"><div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-2xl font-black">{item.role}</h2><p className="text-amber-200">{item.company}</p></div><p className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-300">{item.time}</p></div><ul className="mt-6 space-y-3 text-slate-300">{item.bullets.map((b) => <li key={b}>• {b}</li>)}</ul></section></Reveal>)}</div></div></main>;
}
