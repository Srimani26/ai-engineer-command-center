"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, TrendingUp, Layers, ShoppingBag, Utensils, Cpu, Film, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import FadeIn from "./FadeIn";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: "emerald" | "cyan" | "indigo" | "purple" | "amber";
  featured?: boolean;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "sri-ai-business-os",
    category: "FLAGSHIP ENTERPRISE AI PLATFORM",
    title: "Sri AI Business OS",
    subtitle: "Autonomous multi-tenant operating system for enterprise intake, triage and governance",
    badge: "CURRENT FLAGSHIP • PRODUCTION READY",
    badgeColor: "indigo",
    featured: true,
    description:
      "End-to-end multi-tenant business operating system architected with FastAPI, Neon Cloud PostgreSQL, and Next.js Turbopack. Ingests raw unstructured business messages through Gemini Flash, enforces human-in-the-loop triage governance, and automates operational milestones across client organizations.",
    highlights: [
      "Multi-tenant hierarchy with strict data isolation: Organizations -> Workspaces -> Projects -> Tasks.",
      "Deterministic AI request intake pipeline extracting structured objectives, SLA deadlines, and urgency.",
      "Executive Command Center dashboard with live audit logging, velocity progress tracking, and Cmd+K quick search.",
      "Developer Gateway with secret API keys, rate limits, and cryptographic HMAC-SHA256 webhook dispatch.",
      "Tested and verified across all routes with zero build errors and sub-50ms cloud database latency.",
    ],
    metrics: [
      { label: "API Latency", value: "< 45ms" },
      { label: "Intake Accuracy", value: "99.2%" },
      { label: "Security", value: "HMAC-SHA256" },
      { label: "Architecture", value: "Multi-Tenant" },
    ],
    stack: ["FastAPI", "Python 3.12", "Neon Cloud PostgreSQL", "Next.js 16", "TypeScript", "TailwindCSS", "Gemini Flash"],
    githubUrl: "https://github.com/Srimani26/Sri-AI-Business-OS",
  },
  {
    id: "google-ads-auditor",
    category: "AI & MARKETING INTELLIGENCE",
    title: "AI-Powered Google Ads Auditor (v5.0 — Live)",
    subtitle: "Autonomous daily keyword performance auditor & wasted spend mitigation engine",
    badge: "LIVE IN PRODUCTION",
    badgeColor: "emerald",
    featured: true,
    description:
      "Production-grade AI pipeline that executes at 6:00 AM IST daily via Google Apps Script, pulls 285+ real search queries, evaluates 7-day conversion and CTR performance with Gemini AI, and dispatches a color-coded STOP/SCALE/FIX HTML audit report directly to management by 7:00 AM IST.",
    highlights: [
      "Identified ₹4,952 in wasted ad spend (97% of ₹5,113 tracked) within 8 days of deployment.",
      "Engineered dual Gemini API key architecture with retry logic, 503 backoff, and static fallbacks.",
      "Zero monthly operating cost utilizing free-tier AI quotas and compressed payload staging.",
      "Eliminated 100% of manual query auditing, providing autonomous recommendations before daily ad spend starts.",
    ],
    metrics: [
      { label: "Wasted Spend Flagged", value: "₹4,952 (97%)" },
      { label: "Daily Queries Tracked", value: "285+" },
      { label: "Report Delivery", value: "07:00 AM IST" },
      { label: "Operating Cost", value: "₹0 / mo" },
    ],
    stack: ["Google Apps Script", "Google Ads Script API", "Gemini AI", "Google Sheets Warehouse", "Gmail API"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "zoho-quotation-engine",
    category: "ENTERPRISE WORKFLOW AUTOMATION",
    title: "Zoho CRM Quotation Automation Platform",
    subtitle: "4-Layer enterprise proposal generator & media sync engine for Standard Roofs",
    badge: "95% DEPLOYED • TECH LEAD",
    badgeColor: "cyan",
    featured: true,
    description:
      "Complete CRM automation overhaul replacing error-prone multi-step quotation drafting with a 4-layer technical stack (Workflow Rules, Deluge Backend, Client Script JS, Zoho Writer API). Slashes proposal generation time from over 30 minutes to under 1 minute with guaranteed pricing precision.",
    highlights: [
      "Reduced quote generation time to under 1 minute with zero manual calculation errors.",
      "Automated 30+ CRM fields across 14+ workflow rules including serial number indexing and roofing specifications.",
      "Dynamic Cloudinary media integration syncing product images based on customer color selections.",
      "Automated Zoho Writer API document synthesis and auto-attachment to client CRM deal records.",
    ],
    metrics: [
      { label: "Quote Time", value: "< 1 min" },
      { label: "CRM Fields", value: "30+ Automated" },
      { label: "Workflow Rules", value: "14+ Active" },
      { label: "Manual Errors", value: "0%" },
    ],
    stack: ["Zoho CRM Enterprise", "Deluge Functions", "Client Script (JS)", "Zoho Writer API", "Cloudinary"],
  },
  {
    id: "shopify-storefront",
    category: "COMMERCE & FRONT-END LEADERSHIP",
    title: "Shopify E-Commerce Storefront Development",
    subtitle: "Industrial theme customization, conversion UX & performance at Standard Roofs",
    badge: "LIVE STOREFRONT",
    badgeColor: "emerald",
    description:
      "Led front-end development for a live commercial Shopify storefront for Standard Roofs. Created customized Liquid themes, responsive component structures, and conversion-optimized checkout pathways for industrial and residential roofing customers.",
    highlights: [
      "Custom Shopify Liquid theme development tailored for high-ticket roofing inquiries.",
      "Optimized mobile Core Web Vitals to deliver sub-2s initial load and maximize buyer conversion.",
      "Direct collaboration with executive stakeholders to map operational inquiries into automated sales pipelines.",
    ],
    metrics: [
      { label: "Storefront", value: "Live Online" },
      { label: "Role", value: "Front-End Lead" },
      { label: "Architecture", value: "Shopify Liquid" },
      { label: "UX Focus", value: "High-Conversion" },
    ],
    stack: ["Shopify Liquid", "Theme Development", "JavaScript", "CSS3", "Conversion UX"],
  },
  {
    id: "monsterfoods-app",
    category: "REAL-TIME WEB APPLICATION",
    title: "MonsterFoods Real-Time Food Ordering Portal",
    subtitle: "Vue.js food ordering platform engineered at Macincode Technologies",
    badge: "PRODUCTION DEPLOYED",
    badgeColor: "cyan",
    description:
      "Built and deployed the front-end of MonsterFoods — a live, real-time food ordering web application — utilizing Vue.js, component-based state architecture, and responsive UI engineering during tenure at Macincode Technologies (Clops AI).",
    highlights: [
      "Engineered reactive menu navigation, real-time cart state management, and checkout flows.",
      "Translated high-fidelity UI/UX design mockups into accessible, cross-device front-end code.",
      "Collaborated with back-end teams to test REST API endpoints and error-handling boundaries.",
    ],
    metrics: [
      { label: "Framework", value: "Vue.js" },
      { label: "Type", value: "Real-time Web App" },
      { label: "Role", value: "Front-End Dev" },
      { label: "Status", value: "Deployed" },
    ],
    stack: ["Vue.js", "JavaScript", "HTML5", "CSS3", "REST API Integration", "State Management"],
  },
  {
    id: "mcp-memory-platform",
    category: "AI PROTOCOLS & INFRASTRUCTURE",
    title: "Centralized MCP AI Memory System",
    subtitle: "Cloud-hosted Model Context Protocol server with OAuth 2.1 & GitHub sync",
    badge: "AI INFRASTRUCTURE",
    badgeColor: "purple",
    description:
      "Cloud-hosted AI memory infrastructure adhering to the Anthropic Model Context Protocol (MCP). Enables multiple AI clients (Claude Desktop, ChatGPT, cursor agents) to share a single centralized knowledge base with bi-directional GitHub sync.",
    highlights: [
      "Eliminates repetitive context re-prompting across multiple AI IDEs and desktop assistants.",
      "Protected via OAuth 2.1 authentication flow with Bearer Token permission boundaries.",
      "Automated Git sync pipeline pushing memory updates directly to GitHub repositories.",
      "Deployed on Render Cloud with automated continuous integration and health checks.",
    ],
    metrics: [
      { label: "Protocol", value: "MCP Standard" },
      { label: "Auth", value: "OAuth 2.1" },
      { label: "Cloud", value: "Render" },
      { label: "Integration", value: "Claude / GPT" },
    ],
    stack: ["Python", "FastAPI", "Model Context Protocol (MCP)", "OAuth 2.1", "GitHub API", "Render"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "movie-list-app",
    category: "FRONTEND & REST API INTEGRATION",
    title: "Movie Explorer & Discovery Web App",
    subtitle: "Interactive React.js application with real-time movie search & dynamic filtering",
    badge: "FEATURED WEB APP",
    badgeColor: "amber",
    description:
      "Responsive React application for real-time movie search, discovery, and rating inspection. Emphasizes clean reusable component architecture, loading skeleton states, custom hooks, and robust error handling against third-party REST APIs.",
    highlights: [
      "Real-time search debouncing and genre filtering for responsive catalogue navigation.",
      "Modular component hierarchy with custom React hooks for API data fetching and state management.",
      "Graceful handling of empty states, network degradation, and rate limiting.",
    ],
    metrics: [
      { label: "Framework", value: "React.js" },
      { label: "Data Source", value: "REST APIs" },
      { label: "Architecture", value: "Custom Hooks" },
      { label: "UI", value: "Responsive" },
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Custom Hooks", "CSS3"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "smart-mirror-vision",
    category: "COMPUTER VISION & IOT",
    title: "Smart Magical Mirror with Image Processing",
    subtitle: "Real-time computer vision & personalized information overlay system",
    badge: "IMAGE PROCESSING • PYTHON",
    badgeColor: "purple",
    description:
      "Academic engineering project combining Python image processing and hardware interfacing. Senses user presence through computer vision, facial landmark tracking, and renders personalized contextual overlays (news, weather, calendar schedules) on reflective two-way glass.",
    highlights: [
      "Computer vision pipeline detecting user face presence and proximity in real-time.",
      "Dynamic widget renderer displaying contextual schedules, weather telemetry, and daily updates.",
      "Engineered with Python, OpenCV image processing algorithms, and modular visual widgets.",
    ],
    metrics: [
      { label: "Core Language", value: "Python" },
      { label: "Vision", value: "Image Processing" },
      { label: "Hardware", value: "Two-Way Glass" },
      { label: "Period", value: "Academic Project" },
    ],
    stack: ["Python", "OpenCV", "Image Processing", "IoT Display", "Computer Vision"],
  },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const filteredProjects = selectedFilter === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (selectedFilter === "AI") return p.category.includes("AI") || p.title.includes("Gemini") || p.title.includes("Auditor") || p.title.includes("Business OS") || p.title.includes("Mirror");
        if (selectedFilter === "AUTOMATION") return p.category.includes("AUTOMATION") || p.title.includes("Zoho") || p.title.includes("Ads") || p.title.includes("Business OS");
        if (selectedFilter === "WEB") return p.category.includes("WEB") || p.category.includes("COMMERCE") || p.category.includes("FRONTEND") || p.category.includes("ENTERPRISE");
        return true;
      });

  return (
    <section id="projects" className="py-24 bg-[#050816] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-bold">
                VERIFIED ENGINEERING PORTFOLIO
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Production Systems & Flagship Projects
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
                Comprehensive showcase of all 8 production AI systems, CRM automation platforms,
                and scalable web applications built for real-world business operations.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 shrink-0">
              {["ALL", "AI", "AUTOMATION", "WEB"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                    selectedFilter === filter
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                      : "bg-[#091020] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <FadeIn key={project.id}>
              <div
                className={`h-full rounded-3xl border transition-all p-7 sm:p-8 flex flex-col justify-between group shadow-xl ${
                  project.featured
                    ? "border-cyan-500/40 bg-gradient-to-b from-[#0b162c] to-[#080e1c] shadow-cyan-950/40 ring-1 ring-cyan-500/20"
                    : "border-white/10 bg-[#091020]/75 hover:border-cyan-500/35 hover:shadow-cyan-950/30"
                }`}
              >
                <div className="space-y-5">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                      {project.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                        project.badgeColor === "emerald"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : project.badgeColor === "cyan"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                          : project.badgeColor === "indigo"
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                          : project.badgeColor === "purple"
                          ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                          : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      {project.featured && (
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
                          FLAGSHIP
                        </span>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-bold uppercase text-slate-400 block">
                      Key Engineering Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Bento */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#060a14] border border-white/5 text-center">
                        <span className="block text-sm sm:text-base font-extrabold text-cyan-400">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & Action Links */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-[#060a14] border border-white/5 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
