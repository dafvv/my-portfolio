export type Project = {
  index: number;
  category: string;
  name: string;
  problem: string;
  delivery: string;
  role: string;
  stack: string;
  image?: { src: string; alt: string };
  liveUrl?: string;
  status?: string;
};

export type MoreWork = {
  name: string;
  description: string;
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type Education = {
  degree: string;
  period: string;
  institution: string;
};

export type SkillCategory = "Language" | "Backend" | "Frontend" | "Database" | "Tools";
export type SkillMatrix = Record<SkillCategory, string[]>;

export const EXTERNAL_LINKS = {
  email: "daffarudidharma@gmail.com",
  emailHref: "mailto:daffarudidharma@gmail.com",
  phone: "+62 877 735 01867",
  phoneHref: "tel:+6287773501867",
  linkedin: "linkedin.com/in/daffabrudidharma/",
  linkedinHref: "https://linkedin.com/in/daffabrudidharma/",
  github: "github.com/dafvv",
  githubHref: "https://github.com/dafvv",
  cvUrl: "/media/CV.pdf",
  cromaMusicLiveUrl: "https://cromis-croma-music.vercel.app/",
  kotauItineraryLiveUrl: "https://kotau.id/",
} as const;

export const HERO_DATA = {
  name: "DAFFA BISMA RUDIDHARMA",
  role: "Full-stack Developer · Aspiring DevOps Engineer",
  tagline: "I build web applications from interface to backend and I’m working toward the systems that keep them running.",
  introParagraph1: "I’m Daffa, a Software Engineering Technology student at IPB University. I use AI as a powerful assistant to explore ideas and get more work done. Not to hand off responsibility. Quality, judgment, and final decisions stay in my hands.",
  introParagraph2: "My next direction is DevOps: connecting development with deployment and reliable delivery. I care about how an application runs as much as how it feels to use.",
  portraitSrc: "/media/portrait.webp",
  portraitAlt: "Portrait of Daffa Bisma Rudidharma",
};

export const PROJECTS_DATA: Project[] = [
  {
    index: 1,
    category: "Business planning",
    name: "SPASI",
    problem: "Choosing a business to open starts with understanding the location.",
    delivery: "A web app in development that analyzes a location to help identify a suitable business opportunity.",
    role: "Frontend Developer.",
    stack: "TypeScript, React, Leaflet, OpenStreetMap, Laravel, Railway.",
    status: "IN PROGRESS",
    image: {
      src: "/media/project-spasi.avif",
      alt: "SPASI business location feasibility platform preview",
    },
  },
  {
    index: 2,
    category: "Music education",
    name: "Croma Music",
    problem: "Music-school administration needs a structured way to manage information.",
    delivery: "A web-based information system shaped by requirements analysis and UI/UX design to support administrative workflows.",
    role: "Full-stack Developer.",
    stack: "PHP, SQL.",
    liveUrl: EXTERNAL_LINKS.cromaMusicLiveUrl,
    image: {
      src: "/media/project-cromamusic.avif",
      alt: "Croma Music management and scheduling web interface preview",
    },
  },
  {
    index: 3,
    category: "Travel planning",
    name: "KotaU Itinerary",
    problem: "Planning a trip means bringing destinations, budgets, and travel information together.",
    delivery: "An interactive planner combining destination mapping and budget estimates with travel articles and community features.",
    role: "Full-stack Developer.",
    stack: "React, TypeScript, Leaflet, Supabase.",
    liveUrl: EXTERNAL_LINKS.kotauItineraryLiveUrl,
    image: {
      src: "/media/project-kotau.avif",
      alt: "KotaU Itinerary transit routing and budget planner preview",
    },
  },
];

export const MORE_WORK_DATA: MoreWork[] = [
  {
    name: "Stratum",
    description: "F&B operations-monitoring prototype built with Next.js, Tailwind CSS and Supabase. Real-time dashboards cover energy optimization, predictive maintenance, OEE analytics and HACCP/ISO 22000 monitoring.",
  },
  {
    name: "Stand by Me",
    description: "React/Vite travel-information app for Transjakarta, with Crowdedness Prediction, SmartWait Display and Proactive Disruption Alert features designed to reduce passenger uncertainty.",
  },
  {
    name: "Rumah Que Que",
    description: "Cake-shop business website with Three-Tier architecture, DPPL documentation, WhatsApp ordering, and DBLC database design.",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    title: "PRIME 2026 Business Case Competition",
    organization: "Competition",
    period: "2026",
    description: "2nd Runner-up.",
  },
  {
    title: "AgriUXDesign 2025",
    organization: "Competition",
    period: "2025",
    description: "3rd Place — Agriculture Innovation.",
  },
  {
    title: "Event Division Staff & MC",
    organization: "EdudayTrich 2025",
    period: "2025",
    description: "Supported the webinar and main event as part of the event team and served as MC.",
  },
  {
    title: "Member",
    organization: "Student English Society / SENSE IPB University",
    period: "Ongoing",
    description: "An ongoing member of Student English Society / SENSE at IPB University.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  "Language",
  "Backend",
  "Frontend",
  "Database",
  "Tools",
];

export const SKILLS_DATA: SkillMatrix = {
  Language: ["JavaScript", "TypeScript", "PHP", "SQL"],
  Backend: ["Laravel", "Next.js", "Supabase", "Node.js"],
  Frontend: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Leaflet"],
  Database: ["PostgreSQL", "PostGIS", "MySQL", "MongoDB"],
  Tools: ["Git/GitHub", "Figma", "Affinity", "Docker", "Vite", "Railway"],
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Software Engineering Technology",
    period: "2024–present",
    institution: "IPB University, Sekolah Vokasi · Bogor, Jawa Barat",
  },
  {
    degree: "Mathematics & Natural Sciences",
    period: "2021–2024",
    institution: "SMA Insan Rabbany · Tangerang Selatan, Banten",
  },
];

export const CONTACT_DATA = {
  headingLine1: "LET'S",
  headingLine2: "TALK.",
  intro: "Interested in building systems that feel clear, responsive, and useful? I’d love to talk about projects, collaboration, or how design and code can work better together.",
  email: EXTERNAL_LINKS.email,
  emailHref: EXTERNAL_LINKS.emailHref,
  phone: EXTERNAL_LINKS.phone,
  phoneHref: EXTERNAL_LINKS.phoneHref,
  linkedin: EXTERNAL_LINKS.linkedin,
  linkedinHref: EXTERNAL_LINKS.linkedinHref,
  github: EXTERNAL_LINKS.github,
  githubHref: EXTERNAL_LINKS.githubHref,
};
