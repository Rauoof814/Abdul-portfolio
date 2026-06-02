export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  impact: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Business Advisor AI Chatbot",
    category: "AI SaaS / Full-Stack",
    year: "2025",
    description:
      "A customized business advisor chatbot built with a clean interface, dark mode, contact/about pages, attachment support, and source-friendly AI responses.",
    impact:
      "Designed and built as a full product experience: fast UI, practical business guidance, and polished presentation for real users.",
    stack: ["Next.js", "React", "TypeScript", "AI API", "Vercel", "Tailwind CSS"],
    liveUrl: "https://business-advisor-grc.vercel.app/",
    featured: true
  },
  {
    title: "Pure Space Cleaning Co. Website",
    category: "Client Website / Business Growth",
    year: "2026",
    description:
      "A professional service-business website created to support commercial cleaning outreach, lead generation, credibility, and online presence.",
    impact:
      "Built to help a real business appear professional online, communicate services clearly, and support client conversion.",
    stack: ["Next.js", "React", "Tailwind CSS", "SEO", "Responsive Design", "Vercel"],
    liveUrl: "https://purespace.space/",
    featured: true
  }
];
