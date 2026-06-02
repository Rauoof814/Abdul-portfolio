"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const links = [
  ["Home", "/"], ["Projects", "/projects"], ["Experience", "/experience"], ["About", "/about"], ["Contact", "/contact"]
];

export function Navbar() {
  return (
    <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-gold"><Sparkles size={19}/></span>
          <span>Abdul<span className="gold-text">.dev</span></span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">{label}</Link>)}
        </div>
        <Link href="/contact" className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-amber-200">Hire Me</Link>
      </nav>
    </motion.header>
  );
}
