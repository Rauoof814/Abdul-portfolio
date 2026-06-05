import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCloud } from "@/components/SkillCloud";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <main>
      <Hero />
      <section className="px-4 py-20 sm:px-5 sm:py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Engineering Profile" title="Not just a portfolio — a living product lab." subtitle="This site is built to grow every week with new projects, case studies, experiments, and proof of real skill."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{profile.stats.map((s) => <Reveal key={s.label}><div className="glass rounded-[1.6rem] p-6 text-center sm:rounded-[2rem]"><p className="gold-text text-3xl font-black sm:text-4xl">{s.value}</p><p className="mt-2 text-xs uppercase tracking-widest text-slate-400 sm:text-sm">{s.label}</p></div></Reveal>)}</div></div></section>
      <section className="px-4 py-20 sm:px-5 sm:py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Selected Work" title="Live projects with case studies." subtitle="The top projects include live links that open in a new tab, plus detailed case study pages inside this portfolio."/><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{featured.map((p, i) => <ProjectCard key={p.title} project={p} index={i}/>)}</div><div className="mt-10 text-center"><Link href="/projects" className="rounded-full border border-white/15 px-7 py-4 font-black hover:bg-white/10">Explore all projects →</Link></div></div></section>
      <section className="overflow-hidden border-y border-white/10 bg-white/[.03] py-6"><div className="marquee flex w-[220%] gap-8 whitespace-nowrap text-xs font-black uppercase tracking-[.28em] text-slate-400 sm:text-sm"><span>React</span><span>Next.js</span><span>TypeScript</span><span>AI</span><span>Dashboards</span><span>APIs</span><span>Tailwind</span><span>Vercel</span><span>Supabase</span><span>SQL</span><span>Product Design</span><span>Responsive UI</span><span>React</span><span>Next.js</span><span>TypeScript</span><span>AI</span></div></section>
      <section className="px-4 py-20 sm:px-5 sm:py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Stack" title="Modern tools. Clean execution." subtitle="A strong portfolio should show technologies, product thinking, deployment ability, and clean communication."/><SkillCloud/></div></section>
      <section className="px-4 py-20 sm:px-5 sm:py-24"><div className="glass mx-auto grid max-w-7xl gap-8 rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-8 md:grid-cols-[1fr_auto]"><div><p className="text-sm font-black uppercase tracking-[.3em] text-amber-300">Ready to talk</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Have a role, internship, contract, or project?</h2><p className="mt-4 max-w-2xl leading-8 text-slate-300">Use the contact form and your message will go to {profile.email}. The Hire Me button goes directly to the contact page with hiring selected.</p></div><Link href="/contact?intent=hire" className="self-center rounded-full bg-amber-300 px-8 py-4 text-center font-black text-slate-950 shadow-gold">Hire Me →</Link></div></section>
    </main>
  );
}
