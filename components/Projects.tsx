"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, TrendingUp, Layers, ShoppingBag, Utensils, Cpu, Film, Sparkles, ArrowUpRight, Flame, Zap, ShieldCheck } from "lucide-react";
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
      "Identified ₹14,952 in wasted ad spend (97% of ₹15,113 tracked) within 8 days of deployment.",
      "Engineered dual Gemini API key architecture with retry logic, 503 backoff, and static fallbacks.",
      "Zero monthly operating cost utilizing free-tier AI quotas and compressed payload staging.",
      "Eliminated 100% of manual query auditing, providing autonomous recommendations before daily ad spend starts.",
    ],
    metrics: [
      { label: "Wasted Spend Flagged", value: "₹14,952 (97%)" },
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
    <section id="projects" className="py-24 bg-[#030712] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-bold flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                VERIFIED ENGINEERING PORTFOLIO &bull; ZERO FLUFF
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white">
                Production Systems &amp; Flagship Projects
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
                Showcase of 7 production-grade AI systems, CRM automation platforms, and scalable web applications engineered for real business revenue and ops.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {["ALL", "AI", "AUTOMATION", "WEB"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition uppercase font-mono cursor-pointer ${
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

        {/* Projects Grid with Holographic Cyber-Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <FadeIn key={project.id}>
              <div className="h-full rounded-3xl border border-white/10 bg-[#070c18]/90 hover:border-cyan-500/40 transition-all duration-300 p-6 flex flex-col justify-between group shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
                        project.badgeColor === "emerald"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : project.badgeColor === "cyan"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                          : project.badgeColor === "indigo"
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                          : project.badgeColor === "purple"
                          ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-5 p-3 rounded-2xl bg-[#030611] border border-white/5">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] text-slate-500 font-mono block">
                          {m.label}
                        </span>
                        <span className="text-xs font-bold text-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Stack & Links */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-[#0d1424] text-[10px] font-mono text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
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
