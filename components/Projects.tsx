"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, TrendingUp, Layers, ShoppingBag, Utensils, Cpu, Film, Sparkles, ArrowUpRight, Flame, Zap, ShieldCheck, Star } from "lucide-react";
import { GithubIcon } from "./Icons";
import FadeIn from "./FadeIn";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeGradient: string;
  headerGradient: string;
  glowColor: string;
  featured?: boolean;
  description: string;
  architecturePills: string[];
  metrics: { label: string; value: string; color?: string }[];
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
    badge: "🔥 CURRENT FLAGSHIP • PRODUCTION READY",
    badgeGradient: "from-violet-500 to-fuchsia-500",
    headerGradient: "from-violet-600/30 via-indigo-600/20 to-transparent",
    glowColor: "hover:border-violet-500/50 hover:shadow-violet-500/20",
    featured: true,
    description:
      "End-to-end multi-tenant business operating system architected with FastAPI, Neon Cloud PostgreSQL, and Next.js Turbopack. Ingests raw unstructured business messages through Gemini Flash, enforces human-in-the-loop triage governance, and automates operational milestones across client organizations.",
    architecturePills: [
      "FastAPI Gateway & Gemini Flash Parser",
      "Multi-Tenant Isolation: Org ➔ Workspace ➔ Project",
      "Human-in-the-Loop Review Queue Gating",
      "Cryptographic HMAC-SHA256 Webhook Dispatch",
    ],
    metrics: [
      { label: "API Latency", value: "< 45ms", color: "text-emerald-400" },
      { label: "AI Accuracy", value: "99.2%", color: "text-cyan-400" },
      { label: "Security", value: "HMAC-SHA256", color: "text-violet-300" },
      { label: "Database", value: "Neon Cloud", color: "text-amber-400" },
    ],
    stack: ["FastAPI", "Python 3.12", "Neon PostgreSQL", "Next.js 16", "TypeScript", "TailwindCSS", "Gemini Flash"],
    githubUrl: "https://github.com/Srimani26/Sri-AI-Business-OS",
  },
  {
    id: "google-ads-auditor",
    category: "AI & MARKETING INTELLIGENCE",
    title: "AI-Powered Google Ads Auditor (v5.0 — Live)",
    subtitle: "Autonomous daily keyword performance auditor & wasted spend mitigation engine",
    badge: "🟢 LIVE 6:00 AM CRON • ZERO COST INFRA",
    badgeGradient: "from-emerald-500 to-teal-500",
    headerGradient: "from-emerald-600/30 via-teal-600/20 to-transparent",
    glowColor: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
    featured: true,
    description:
      "Production AI pipeline that runs daily at 6:00 AM IST via Google Apps Script. Pulls 285+ real search queries, evaluates 7-day conversion and CTR metrics using Gemini AI, and dispatches a color-coded STOP/SCALE/FIX HTML audit report directly to management by 7:00 AM IST.",
    architecturePills: [
      "Identified ₹14,952 in wasted spend (97% of ₹15,113 tracked) in 8 days",
      "Dual Gemini API key failover with exponential 503 backoff",
      "Google Sheets data warehouse staging with 7-day lookback",
      "Color-coded STOP/SCALE/FIX HTML email dispatched via Gmail API",
    ],
    metrics: [
      { label: "Ad Waste Caught", value: "₹14,952 (97%)", color: "text-rose-400" },
      { label: "Daily Queries", value: "285+ Audited", color: "text-cyan-400" },
      { label: "Delivery", value: "07:00 AM IST", color: "text-indigo-300" },
      { label: "Run Cost", value: "₹0 / mo", color: "text-emerald-400" },
    ],
    stack: ["Google Apps Script", "Google Ads Script API", "Gemini AI", "Google Sheets Warehouse", "Gmail API"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "zoho-quotation-engine",
    category: "ENTERPRISE WORKFLOW AUTOMATION",
    title: "Zoho CRM Quotation Automation Platform",
    subtitle: "4-Layer enterprise proposal generator & media sync engine for Standard Roofs",
    badge: "⚡ 95% DEPLOYED • TECH LEAD",
    badgeGradient: "from-amber-500 to-rose-500",
    headerGradient: "from-amber-600/30 via-orange-600/20 to-transparent",
    glowColor: "hover:border-amber-500/50 hover:shadow-amber-500/20",
    featured: true,
    description:
      "Complete CRM automation overhaul replacing error-prone multi-step quotation drafting with a 4-layer technical stack (Workflow Rules, Deluge Backend, Client Script JS, Zoho Writer API). Slashes proposal generation time from over 30 minutes to under 1 minute with guaranteed pricing precision.",
    architecturePills: [
      "Layer 1: Workflow rules & mandatory roofing parameter gates",
      "Layer 2: Deluge business logic for square footage & vendor margins",
      "Layer 3: Client Script (JS) real-time Cloudinary asset sync",
      "Layer 4: Zoho Writer API compiling branded client PDFs in 48s",
    ],
    metrics: [
      { label: "Quote Speed", value: "< 1 min (48s)", color: "text-emerald-400" },
      { label: "CRM Fields", value: "30+ Automated", color: "text-cyan-400" },
      { label: "Workflow Rules", value: "14+ Active", color: "text-amber-400" },
      { label: "Manual Errors", value: "0%", color: "text-emerald-400" },
    ],
    stack: ["Zoho CRM Enterprise", "Deluge Functions", "Client Script (JS)", "Zoho Writer API", "Cloudinary"],
  },
  {
    id: "shopify-storefront",
    category: "COMMERCE & FRONT-END LEADERSHIP",
    title: "Shopify E-Commerce Storefront Development",
    subtitle: "Industrial theme customization, conversion UX & performance at Standard Roofs",
    badge: "🛍️ LIVE STOREFRONT • HIGH-CONVERSION",
    badgeGradient: "from-teal-400 to-emerald-500",
    headerGradient: "from-teal-600/30 to-transparent",
    glowColor: "hover:border-teal-500/50 hover:shadow-teal-500/20",
    description:
      "Led front-end development for a live commercial Shopify storefront for Standard Roofs. Created customized Liquid themes, responsive component structures, and conversion-optimized checkout pathways for industrial and residential roofing customers.",
    architecturePills: [
      "Custom Shopify Liquid theme tailored for high-ticket roofing leads",
      "Optimized mobile Core Web Vitals to deliver sub-2s initial loads",
      "Collaborated with executive stakeholders to map buyer inquiries",
    ],
    metrics: [
      { label: "Storefront", value: "Live Online", color: "text-emerald-400" },
      { label: "Role", value: "Front-End Lead", color: "text-cyan-400" },
      { label: "Architecture", value: "Shopify Liquid", color: "text-teal-300" },
      { label: "UX Metric", value: "Sub-2s CWV", color: "text-emerald-400" },
    ],
    stack: ["Shopify Liquid", "Theme Development", "JavaScript", "CSS3", "Conversion UX"],
  },
  {
    id: "monsterfoods-app",
    category: "REAL-TIME WEB APPLICATION",
    title: "MonsterFoods Real-Time Food Ordering Portal",
    subtitle: "Vue.js food ordering platform engineered at Macincode Technologies",
    badge: "🍕 PRODUCTION DEPLOYED • VUE.JS",
    badgeGradient: "from-rose-500 to-pink-500",
    headerGradient: "from-rose-600/30 to-transparent",
    glowColor: "hover:border-rose-500/50 hover:shadow-rose-500/20",
    description:
      "Built and deployed the front-end of MonsterFoods — a live, real-time food ordering web application — utilizing Vue.js, component-based state architecture, and responsive UI engineering during tenure at Macincode Technologies (Clops AI).",
    architecturePills: [
      "Reactive menu navigation & real-time cart state management",
      "Translated high-fidelity UI/UX design mockups into accessible code",
      "Integrated REST API endpoints and error-handling boundaries",
    ],
    metrics: [
      { label: "Framework", value: "Vue.js", color: "text-rose-400" },
      { label: "Type", value: "Real-time Portal", color: "text-pink-300" },
      { label: "Role", value: "Front-End Dev", color: "text-cyan-400" },
      { label: "Status", value: "Deployed", color: "text-emerald-400" },
    ],
    stack: ["Vue.js", "JavaScript", "HTML5", "CSS3", "REST API Integration", "State Management"],
  },
  {
    id: "movie-list-app",
    category: "FRONTEND & REST API INTEGRATION",
    title: "Movie Explorer & Discovery Web App",
    subtitle: "Interactive React.js application with real-time movie search & dynamic filtering",
    badge: "🎬 FEATURED WEB APP • REACT.JS",
    badgeGradient: "from-amber-400 to-violet-500",
    headerGradient: "from-amber-600/30 to-transparent",
    glowColor: "hover:border-amber-500/50 hover:shadow-amber-500/20",
    description:
      "Responsive React application for real-time movie search, discovery, and rating inspection. Emphasizes clean reusable component architecture, loading skeleton states, custom hooks, and robust error handling against third-party REST APIs.",
    architecturePills: [
      "Real-time search debouncing and multi-genre filtering",
      "Modular component hierarchy with custom React data hooks",
      "Graceful handling of empty states and network rate limiting",
    ],
    metrics: [
      { label: "Framework", value: "React.js", color: "text-amber-400" },
      { label: "Data Source", value: "REST APIs", color: "text-cyan-400" },
      { label: "Architecture", value: "Custom Hooks", color: "text-violet-300" },
      { label: "UI", value: "Responsive", color: "text-emerald-400" },
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Custom Hooks", "CSS3"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "smart-mirror-vision",
    category: "COMPUTER VISION & IOT",
    title: "Smart Magical Mirror with Image Processing",
    subtitle: "Real-time computer vision & personalized information overlay system",
    badge: "🪞 COMPUTER VISION • PYTHON",
    badgeGradient: "from-cyan-400 to-blue-600",
    headerGradient: "from-cyan-600/30 to-transparent",
    glowColor: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
    description:
      "Academic engineering project combining Python image processing and hardware interfacing. Senses user presence through computer vision, facial landmark tracking, and renders personalized contextual overlays (news, weather, calendar schedules) on reflective two-way glass.",
    architecturePills: [
      "Computer vision pipeline detecting user face presence in real-time",
      "Dynamic widget renderer displaying contextual schedules & weather",
      "Engineered with Python, OpenCV image processing, and visual widgets",
    ],
    metrics: [
      { label: "Language", value: "Python", color: "text-cyan-400" },
      { label: "Vision", value: "OpenCV", color: "text-blue-400" },
      { label: "Display", value: "Two-Way Glass", color: "text-indigo-300" },
      { label: "Period", value: "Academic Project", color: "text-slate-300" },
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
    <section id="projects" className="py-24 bg-[#08091a] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
            <div>
              <p className="text-cyan-400 uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                VERIFIED PRODUCTION PORTFOLIO &bull; ZERO FLUFF
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Featured Systems &amp; Engineering Builds
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 font-normal">
                7 production-grade AI systems, enterprise workflow automation platforms, and scalable web apps built for tangible business impact.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {["ALL", "AI", "AUTOMATION", "WEB"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition font-mono cursor-pointer ${
                    selectedFilter === filter
                      ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg shadow-cyan-400/25"
                      : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Dynamic Colorful Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <FadeIn key={project.id}>
              <div
                className={`h-full rounded-3xl vibrant-card p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${project.glowColor}`}
              >
                {/* Visual Gradient Header Strip */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.badgeGradient}`} />
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${project.headerGradient} opacity-60 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      {project.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${project.badgeGradient} shadow-md shadow-black/40`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mt-1">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 font-normal">
                    {project.description}
                  </p>

                  {/* Architecture & Highlights Pills */}
                  <div className="mt-4 space-y-1.5">
                    {project.architecturePills.map((pill, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics Grid with Vibrant Numbers */}
                  <div className="grid grid-cols-2 gap-2 mt-5 p-3.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] text-slate-400 font-mono block">
                          {m.label}
                        </span>
                        <span className={`text-xs sm:text-sm font-extrabold font-mono ${m.color || "text-white"}`}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Stack & Links */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-4 relative z-10">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] text-[11px] font-mono text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-cyan-400" />
                        <span>View Repository</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
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
