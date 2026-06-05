export function CodePanel() {
  return (
    <div className="glass overflow-hidden rounded-[1.6rem] p-4 sm:rounded-[2rem] sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-amber-300"/><span className="h-3 w-3 rounded-full bg-emerald-400"/></div>
        <span className="text-xs uppercase tracking-[.25em] text-slate-500">developer.ts</span>
      </div>
      <pre className="max-w-full overflow-x-auto rounded-2xl bg-black/35 p-4 text-xs leading-6 text-slate-300 sm:text-sm"><code>{`const developer = {
  name: "Abdul Rauoof Rahmani",
  domain: "rauoof.com",
  graduate: "Green River College • June 2025",
  focus: ["Full-Stack", "AI", "Data", "Product UI"],
  currentlyBuilding: "one serious project every week",
  goal: "join a team and contribute real value",
  mindset: "ship, learn, improve, repeat"
};`}</code></pre>
    </div>
  );
}
