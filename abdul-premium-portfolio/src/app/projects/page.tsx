import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return <main className="px-5 pt-36 pb-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Project Library" title="Build weekly. Publish beautifully." text="Add each new project inside src/data/projects.ts and this page updates automatically." /><div className="grid gap-6 lg:grid-cols-2">{projects.map((project) => <Reveal key={project.title}><ProjectCard project={project} /></Reveal>)}</div></div></main>;
}
