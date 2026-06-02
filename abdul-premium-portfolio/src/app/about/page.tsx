import { SectionTitle } from "@/components/SectionTitle";
import { SkillCloud } from "@/components/SkillCloud";

export default function AboutPage() {
  return <main className="px-5 pt-36 pb-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="About" title="I am building my way into the software industry." text="I graduated in June 2025 and I am turning my skills, projects, and story into a strong public presence." /><div className="glass mx-auto mb-14 max-w-4xl rounded-[2rem] p-8 text-lg leading-8 text-slate-300"><p>I am Abdul Rahmani, a Computer Science and Software Engineering graduate from Green River College. My goal is to become a strong software engineer who builds real applications, not just school assignments. I enjoy full-stack development, data tools, AI products, dashboards, automation, and beautiful user interfaces.</p><p className="mt-5">This portfolio is designed to grow with me. Every week, I can add a new project, explain what problem it solves, show the technologies I used, and prove that I am improving fast.</p></div><SkillCloud /></div></main>;
}
