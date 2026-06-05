import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { CodePanel } from "@/components/CodePanel";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <main className="bg-luxury px-4 pb-24 pt-32 sm:px-5 sm:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About" title="A developer building proof through real products." subtitle="I am focused on becoming job-ready by shipping real applications, improving every week, and showing my work clearly." />
        <section className="grid gap-8 lg:grid-cols-[.85fr_1fr]">
          <div className="glass overflow-hidden rounded-[2rem] p-4"><Image src="/abdul-candid.jpg" alt="Abdul Rauoof Rahmani" width={900} height={1100} className="max-h-[720px] w-full rounded-[1.5rem] object-cover object-top" /></div>
          <div className="grid gap-5">
            <div className="glass rounded-[2rem] p-6 sm:p-8"><h2 className="text-3xl font-black">My story</h2><p className="mt-5 leading-8 text-slate-300">I graduated in June 2025 with a Computer Science and Software Engineering background from Green River College. Right now, my mission is simple: build, publish, improve, and show real evidence of my skills through polished projects that people can open and use.</p><p className="mt-4 leading-8 text-slate-300">I care about interfaces that feel clean, products that solve business problems, and code that can grow. This portfolio is not only a website; it is my public engineering lab.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{profile.highlights.map((h) => <div key={h} className="glass rounded-[1.5rem] p-5 text-slate-300">✓ {h}</div>)}</div>
          </div>
        </section>
        <section className="mt-10"><CodePanel /></section>
      </div>
    </main>
  );
}
