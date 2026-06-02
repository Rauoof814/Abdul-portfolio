import { profile } from "@/data/profile";
export function Footer() {
  return <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} {profile.name}. Built with premium UI, clean code, and career-focused presentation.</footer>;
}
