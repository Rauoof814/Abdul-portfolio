import { skillGroups } from "@/data/skills";
export function SkillCloud() {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => <div key={group.title} className="glass rounded-3xl p-6"><h3 className="mb-4 text-xl font-black">{group.title}</h3><div className="flex flex-wrap gap-2">{group.skills.map((s) => <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{s}</span>)}</div></div>)}</div>;
}
