export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  status: "Live" | "In Progress" | "Planned";
  featured?: boolean;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  image: string;
  href?: string;
  repo?: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "zee-auto-dealership-platform",
    title: "Zee Auto Dealership Platform",
    type: "Automotive Business Platform",
    year: "2026",
    status: "Live",
    featured: true,
    summary: "A professional dealership platform with inventory presentation, financing flows, vehicle details, service pages, and business lead generation.",
    problem: "A dealership needs a trustworthy digital storefront where customers can browse cars, request financing, contact the business, and understand repair services without calling first.",
    solution: "Built a polished web platform with inventory cards, vehicle detail pages, inquiry paths, financing calls to action, service content, and a clean brand experience.",
    impact: "Turns dealership traffic into leads by making inventory, financing, and contact options visible and easy to use.",
    tech: ["Next.js", "React", "Tailwind", "Vercel", "Responsive UI", "Lead Flow"],
    image: "AUTO",
    href: "https://zee-auto-dealership-platform.vercel.app/",
    repo: "https://github.com/Rauoof814",
    highlights: ["Inventory-first homepage", "Vehicle detail navigation", "Financing and inquiry paths", "Business-ready visual identity"],
    metrics: [{ label: "Pages", value: "7+" }, { label: "Flow", value: "Leads" }, { label: "Status", value: "Live" }]
  },
  {
    slug: "purespace-cleaning",
    title: "PureSpace Cleaning Co.",
    type: "Premium Local Business Website",
    year: "2026",
    status: "Live",
    featured: true,
    summary: "A premium cleaning company website focused on trust, services, booking intent, and conversion-ready presentation.",
    problem: "Local service businesses need a clean online presence that builds trust quickly and makes booking or contacting simple from any device.",
    solution: "Designed a modern landing experience with service sections, strong copy, polished visuals, and responsive layouts for customers on mobile and desktop.",
    impact: "Helps convert visitors into cleaning leads with a professional first impression and easy contact path.",
    tech: ["Next.js", "React", "Tailwind", "SEO", "Vercel", "Mobile Design"],
    image: "CLEAN",
    href: "https://purespace.space/",
    repo: "https://github.com/Rauoof814",
    highlights: ["Premium brand feel", "Service-focused content", "Mobile-ready sections", "Clear conversion flow"],
    metrics: [{ label: "Domain", value: ".space" }, { label: "Focus", value: "Leads" }, { label: "Status", value: "Live" }]
  },
  {
    slug: "business-advisor-ai",
    title: "Business Advisor AI",
    type: "AI Guidance Product",
    year: "2026",
    status: "Live",
    featured: true,
    summary: "A smart advisor concept for small business owners who need guidance, planning support, and faster decision-making.",
    problem: "New business owners often need quick help with planning, operations, marketing, and decision-making, but do not always know where to start.",
    solution: "Created an AI-focused web experience that frames business questions into practical guidance and positions the product as a helpful decision tool.",
    impact: "Shows AI product thinking, business understanding, and the ability to turn an idea into a usable web experience.",
    tech: ["React", "AI UX", "Next.js", "Vercel", "Product Design"],
    image: "AI",
    href: "https://business-advisor-grc.vercel.app/",
    repo: "https://github.com/Rauoof814",
    highlights: ["AI product concept", "Small-business focus", "Clean guidance layout", "Fast deployment"],
    metrics: [{ label: "Category", value: "AI" }, { label: "Users", value: "Owners" }, { label: "Status", value: "Live" }]
  },
  {
    slug: "servants-of-compassion",
    title: "Servants of Compassion",
    type: "Nonprofit Web Platform",
    year: "2026",
    status: "Live",
    featured: true,
    summary: "A mission-driven nonprofit platform for donations, events, media, partners, resources, and impact storytelling.",
    problem: "A nonprofit needs to communicate urgency, credibility, donor trust, and real-world impact through a clear digital platform.",
    solution: "Built a modern nonprofit experience with donation direction, impact sections, event structure, media areas, and scalable content planning.",
    impact: "Helps supporters understand the mission faster and gives the organization a stronger online foundation.",
    tech: ["React", "Supabase", "Vercel", "Tailwind", "Admin UI", "i18n Planning"],
    image: "SOC",
    href: "https://servants-of-compassion.vercel.app/",
    repo: "https://github.com/Rauoof814",
    highlights: ["Donation-ready content", "Impact storytelling", "Admin-focused structure", "Nonprofit brand system"],
    metrics: [{ label: "Mission", value: "Aid" }, { label: "Stack", value: "React" }, { label: "Status", value: "Live" }]
  },
  {
    slug: "weekly-project-lab",
    title: "Weekly Project Lab",
    type: "Portfolio Growth System",
    year: "2026",
    status: "In Progress",
    featured: false,
    summary: "A personal build system for publishing one serious project every week and documenting the engineering process.",
    problem: "A new graduate needs visible proof of consistency, growth, and engineering ability while applying for software roles.",
    solution: "This portfolio is structured as a living product lab with reusable project data, case study pages, and a simple project management workflow.",
    impact: "Makes it easier to keep building, publishing, and showing progress to recruiters and hiring managers.",
    tech: ["Next.js", "TypeScript", "Content System", "Case Studies", "Vercel"],
    image: "LAB",
    repo: "https://github.com/Rauoof814",
    highlights: ["Reusable project data", "Case-study pages", "GitHub-first workflow", "Designed for weekly updates"],
    metrics: [{ label: "Cadence", value: "Weekly" }, { label: "Goal", value: "Jobs" }, { label: "Status", value: "Active" }]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
