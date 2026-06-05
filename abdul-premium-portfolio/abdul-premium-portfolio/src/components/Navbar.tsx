"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const nav = [["Projects", "/projects"], ["Experience", "/experience"], ["About", "/about"], ["Contact", "/contact"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-4 py-3 sm:rounded-full sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-black tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber-300 text-slate-950 shadow-gold">R</span>
          <span className="truncate">Rauoof<span className="text-amber-300">.com</span></span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">{nav.map(([n, h]) => <Link key={n} href={h} className="hover:text-white">{n}</Link>)}</div>
        <div className="hidden md:block"><Link href="/contact?intent=hire" className="rounded-full bg-white px-5 py-2 text-sm font-black text-slate-950 hover:bg-amber-300">Hire Me</Link></div>
        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white md:hidden">Menu</button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 grid max-w-7xl gap-2 rounded-3xl p-3 text-slate-200 md:hidden">
          {nav.map(([n, h]) => <Link key={n} href={h} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-white/10">{n}</Link>)}
          <Link href="/contact?intent=hire" onClick={() => setOpen(false)} className="rounded-2xl bg-amber-300 px-4 py-3 text-center font-black text-slate-950">Hire Me</Link>
        </div>
      )}
    </motion.header>
  );
}
