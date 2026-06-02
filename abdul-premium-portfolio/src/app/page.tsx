import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCloud } from "@/components/SkillCloud";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Featured Work" title="Real projects with product-level presentation" text="Your portfolio is built so every new project you create can be added quickly and still look premium." />
          <div className="grid gap-6 lg:grid-cols-2">{projects.filter(p => p.featured).map((project) => <Reveal key={project.title}><ProjectCard project={project} /></Reveal>)}</div>
          <div className="mt-10 text-center"><Link href="/projects" className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-bold hover:bg-white/10">See all projects <ArrowRight className="ml-2" size={18}/></Link></div>
        </div>
      </section>
      <section className="bg-slate-950 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Technical Arsenal" title="A strong stack for modern software teams" />
          <Reveal><SkillCloud /></Reveal>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal><div><p className="mb-3 text-sm font-bold uppercase tracking-[.3em] text-amber-300">Why hire me</p><h2 className="text-4xl font-black md:text-5xl">I bring software, data, business sense, and serious work ethic together.</h2><p className="mt-5 text-slate-300">I am not trying to look like everyone else. This portfolio is designed to show that I can build polished real products, learn fast, communicate clearly, and turn ideas into working systems.</p></div></Reveal>
          <Reveal delay={.1}><div className="grid gap-4">{profile.highlights.map((h) => <div key={h} className="glass flex gap-4 rounded-2xl p-5"><CheckCircle2 className="shrink-0 text-amber-300"/><p>{h}</p></div>)}</div></Reveal>
        </div>
      </section>
    </main>
  );
}
