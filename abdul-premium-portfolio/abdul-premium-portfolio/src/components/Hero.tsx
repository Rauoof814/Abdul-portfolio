"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { CodePanel } from "./CodePanel";

export function Hero() {
  return (
    <section className="noise relative min-h-screen overflow-hidden bg-luxury px-4 pt-28 sm:px-5 sm:pt-32">
      <div className="grid-luxury absolute inset-0 opacity-80" />
      <motion.div className="absolute left-1/3 top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl sm:h-80 sm:w-80" animate={{ x: [-70, 70, -70], y: [0, 60, 0] }} transition={{ duration: 11, repeat: Infinity }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
        <div className="min-w-0">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex max-w-full rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold text-amber-200 sm:text-sm">{profile.domain} • Software Engineer Portfolio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="text-4xl font-black leading-[.98] tracking-tight sm:text-5xl md:text-7xl">Building <span className="gold-text">premium digital products</span> with engineering, design, and speed.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.pitch}</motion.p>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/projects" className="rounded-full bg-amber-300 px-7 py-4 text-center font-black text-slate-950 shadow-gold transition hover:bg-amber-200">View Projects →</Link><Link href="/contact?intent=hire" className="rounded-full border border-white/15 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10">Hire Me</Link></motion.div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-slate-300"><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white"><GitHubIcon /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white"><LinkedInIcon /></a><a href={`mailto:${profile.email}`} className="break-all text-sm hover:text-white">{profile.email}</a></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25 }} className="relative min-w-0">
          <div className="ring-spin absolute -inset-4 rounded-full border border-dashed border-amber-300/30 sm:-inset-8" />
          <div className="glass relative overflow-hidden rounded-[1.7rem] p-3 shadow-glow sm:rounded-[2rem] sm:p-4"><Image src="/abdul-portrait.jpg" alt="Abdul Rauoof Rahmani professional portrait" width={760} height={960} priority className="max-h-[560px] w-full rounded-[1.3rem] object-cover object-top sm:rounded-[1.5rem]"/><div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:p-5"><p className="text-xs uppercase tracking-[.25em] text-amber-200 sm:text-sm">Available for roles</p><p className="mt-1 text-xl font-black sm:text-2xl">Full-Stack • AI • Data</p></div></div>
        </motion.div>
      </div>
      <div className="relative mx-auto max-w-7xl pb-16"><CodePanel /></div>
    </section>
  );
}
