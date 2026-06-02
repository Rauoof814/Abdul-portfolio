"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.38-3.87-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.2-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18A11.1 11.1 0 0 1 12 6.1c.99 0 1.98.13 2.91.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.75.8 1.2 1.83 1.2 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-luxury px-5 pt-32">
      <div className="grid-luxury absolute inset-0 opacity-60" />

      <motion.div
        className="absolute left-1/2 top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ x: [-80, 80, -80], y: [0, 70, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200"
          >
            Available for software engineering, web, AI, and data roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black leading-[.95] tracking-tight md:text-7xl"
          >
            I build <span className="gold-text">premium software</span> that
            looks sharp and works beautifully.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="group rounded-full bg-amber-300 px-7 py-4 font-black text-slate-950 shadow-gold transition hover:bg-amber-200"
            >
              View Projects{" "}
              <ArrowRight
                className="ml-2 inline transition group-hover:translate-x-1"
                size={18}
              />
            </Link>

            <a
              href={profile.resume}
              className="rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              <Download className="mr-2 inline" size={18} />
              Resume
            </a>
          </motion.div>

          <div className="mt-9 flex gap-4 text-slate-300">
            <a href={profile.github} className="hover:text-white">
              <GitHubIcon />
            </a>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="glass relative rounded-[2rem] p-6 shadow-glow"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="mb-6 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <pre className="overflow-hidden text-sm leading-7 text-slate-300">
              <code>{`const developer = {
  name: "Abdul Rahmani",
  degree: "CS + Software Engineering",
  graduate: "June 2025",
  focus: ["Full-Stack", "AI", "Data"],
  mission: "Build advanced real-world products",
  status: "Ready to contribute"
};`}</code>
            </pre>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}