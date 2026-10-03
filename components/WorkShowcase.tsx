"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  TrendingDown,
  Clock,
  ShoppingBag,
  Film,
  Eye,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  architectureSteps: string[];
  metrics: { label: string; value: string; color: string }[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFlagship?: boolean;
}

const realProjects: Project[] = [
  {
    id: "sri-ai-business-os",
    badge: "AUTONOMOUS ENTERPRISE OS",
    badgeColor: "from-cyan-500 via-indigo-500 to-fuchsia-600",
    title: "Sri AI Business OS",
    subtitle: "Full-stack multi-tenant autonomous business operating system with AI intake & governance gates",
    description:
      "Enterprise autonomous operating system coordinating unstructured customer requests, multi-tenant workspace isolation, and automated task execution. Features Gemini 2.5 Flash intake parsing, deterministic governance risk gating (TODO vs. NEEDS_REVIEW), role-based access control (RBAC), and persistent cloud PostgreSQL/SQLite storage.",
    architectureSteps: [
      "Inbound Customer Intake Webhook ingests raw customer inquiries and operational task requests.",
      "Google Gemini AI entity extraction analyzes request urgency, matches project context, and assigns staff roles.",
      "Deterministic Governance Gate automatically intercepts high-impact or ambiguous commercial actions for executive review.",
      "Next.js App Router frontend provides real-time workspace dashboards, task triage boards, and audit logging.",
    ],
    metrics: [
      { label: "Intake Processing", value: "< 1.5s", color: "text-cyan-400" },
      { label: "Governance Accuracy", value: "99.2%", color: "text-emerald-400" },
      { label: "Architecture", value: "Multi-Tenant", color: "text-purple-400" },
    ],
    techStack: [
      "Next.js 15 (App Router)",
      "FastAPI (Python 3.12)",
      "Gemini AI API",
      "PostgreSQL / Neon",
      "Tailwind CSS",
      "RBAC Security",
    ],
    githubUrl: "https://github.com/Srimani26/Sri-AI-Business-OS",
    isFlagship: true,
  },
  {
    id: "zoho-quotation-engine",
    badge: "ENTERPRISE CRM AUTOMATION",
    badgeColor: "from-purple-500 to-fuchsia-600",
    title: "Zoho CRM Quotation Automation System",
    subtitle: "4-layer architecture cutting quote generation time to < 1 min with zero manual errors",
    description:
      "Architected and deployed a full end-to-end Zoho CRM Quotation Automation System for Standard Roofs using a 4-layer tech stack (Workflow Rules, Deluge Functions, Client Scripts, Zoho Writer API). Automated 30+ CRM fields across 14+ workflow rules including serial number generation, client data auto-fetch, roofing spec autofill, product image sync via Cloudinary, and PDF generation via Zoho Writer API.",
    architectureSteps: [
      "Layer 1: Workflow Rules & Client Scripts (JavaScript) handling dynamic UI validation, serial number control, and client data auto-fetch.",
      "Layer 2: Zoho Deluge backend functions executing automated mathematical BOM calculations and roofing spec autofill.",
      "Layer 3: Cloudinary API integration synchronizing product specs and color-to-image previews.",
      "Layer 4: Zoho Writer API generating formatted PDF quotes and automatically attaching them to CRM deal records.",
    ],
    metrics: [
      { label: "Quote Generation Time", value: "< 1 Minute", color: "text-emerald-400" },
      { label: "Calculation Errors", value: "0.00%", color: "text-cyan-400" },
      { label: "Automated Workflows", value: "14+ Rules / 30+ Fields", color: "text-purple-400" },
    ],
    techStack: [
      "Zoho CRM (Enterprise)",
      "Zoho Deluge",
      "Client Scripts (JavaScript)",
      "Zoho Writer API",
      "Cloudinary",
    ],
    isFlagship: true,
  },
  {
    id: "google-ads-auditor",
    badge: "PRODUCTION AI INTELLIGENCE",
    badgeColor: "from-cyan-500 to-blue-600",
    title: "AI-Powered Google Ads Auditor v5.0 (Live)",
    subtitle: "Daily automated intelligence pipeline collecting 285+ search queries & delivering STOP/SCALE/FIX reports",
    description:
      "Fully automated Google Ads performance pipeline that collects 285+ keyword/search-term data at 6:00 AM IST daily, analyzes 7-day trends, and delivers a color-coded STOP/SCALE/FIX HTML email report via Gmail API by 7:00 AM IST. Identified ₹4,952 in wasted ad spend (97% of ₹5,113 tracked) within 8 days of deployment using automated AI analysis. Engineered a dual AI API key architecture with retry logic, 503 backoff, and static fallbacks at ₹0 monthly operating cost.",
    architectureSteps: [
      "Step 1: Google Ads Script cron extracts raw metrics (285+ search queries, CPC, spend, conversions) into Google Sheets at 6:00 AM IST.",
      "Step 2: Google Apps Script parses 7-day performance trends and formats structured evaluation payloads.",
      "Step 3: Gemini AI analyzes queries with prompt engineering and dual API key architecture with retry logic and 503 backoff handling.",
      "Step 4: Autonomous delivery of color-coded STOP/SCALE/FIX HTML email reports via Gmail API by 7:00 AM IST.",
    ],
    metrics: [
      { label: "Wasted Spend Flagged", value: "₹4,952 (97%)", color: "text-rose-400" },
      { label: "Monthly Operating Cost", value: "₹0 / mo", color: "text-emerald-400" },
      { label: "Daily Queries Analyzed", value: "285+ Real Queries", color: "text-cyan-400" },
    ],
    techStack: [
      "Google Apps Script",
      "Google Ads Script",
      "Gemini AI Integration",
      "Google Sheets",
      "Gmail API",
    ],
    githubUrl: "https://github.com/Srimani26/Google-ads-ai-strategic-auditor-v5.0",
    isFlagship: true,
  },
  {
    id: "shopify-storefront",
    badge: "E-COMMERCE STOREFRONT",
    badgeColor: "from-emerald-500 to-teal-600",
    title: "Shopify E-Commerce Storefront Development",
    subtitle: "Front-end theme development, conversion-focused UX decisions & performance optimization",
    description:
      "Leading front-end development for a live Shopify storefront, with additional backend and automation involvement, as part of the company's technical initiatives. Own theme customization, storefront performance, and conversion-focused UX decisions, collaborating directly with business stakeholders.",
    architectureSteps: [
      "Custom Shopify Liquid theme development tailored for product discovery and responsive mobile UX.",
      "Front-end performance tuning and component optimization for rapid catalog browsing.",
      "Direct collaboration with operational stakeholders to translate business requirements into storefront features.",
    ],
    metrics: [
      { label: "Production Status", value: "Live Storefront", color: "text-emerald-400" },
      { label: "Development Focus", value: "Theme & UX", color: "text-cyan-400" },
      { label: "Technology", value: "Liquid & JS", color: "text-purple-400" },
    ],
    techStack: ["Shopify Liquid", "Theme Development", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "monsterfoods-app",
    badge: "PRODUCTION WEB APP",
    badgeColor: "from-amber-500 to-orange-600",
    title: "MonsterFoods Food Ordering Web Application",
    subtitle: "Live, real-time food ordering web application frontend built with Vue.js",
    description:
      "Built and deployed the frontend of MonsterFoods — a live, real-time food ordering web application — using Vue.js during tenure at Macincode Technologies. Translated UI/UX designs into clean, functional front-end code applying component-based architecture, state management, and performance optimization.",
    architectureSteps: [
      "Component-based architecture using Vue.js for intuitive customer ordering flows.",
      "Reactive state management coordinating menu selection, real-time cart updates, and checkout.",
      "Front-end performance optimization ensuring fast rendering and cross-device responsiveness.",
    ],
    metrics: [
      { label: "Application State", value: "Live & Deployed", color: "text-amber-400" },
      { label: "Core Framework", value: "Vue.js", color: "text-pink-400" },
      { label: "Architecture", value: "Component-Based", color: "text-emerald-400" },
    ],
    techStack: ["Vue.js", "JavaScript", "HTML5", "CSS3", "State Management", "REST APIs"],
  },
  
  {
    id: "smart-magic-mirror",
    badge: "ACADEMIC INNOVATION",
    badgeColor: "from-slate-500 to-zinc-600",
    title: "Smart Magical Mirror using Image Processing",
    subtitle: "Real-time image processing mirror displaying personalized contextual overlays",
    description:
      "Academic capstone project (Jan 2022 – May 2022) — engineered a smart mirror system using real-time image processing in Python to detect user presence and project personalized information overlays.",
    architectureSteps: [
      "Python and OpenCV pipeline processing video frames to recognize user interaction.",
      "Contextual GUI displaying dynamic widgets (time, schedules, personalized updates).",
      "Embedded display hardware synchronization with software controller.",
    ],
    metrics: [
      { label: "Project Scope", value: "Academic Capstone", color: "text-cyan-400" },
      { label: "Core Language", value: "Python", color: "text-purple-400" },
      { label: "Discipline", value: "Image Processing", color: "text-emerald-400" },
    ],
    techStack: ["Python", "Image Processing", "OpenCV", "Embedded Computing"],
  },
];

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? realProjects
      : activeTab === "automation"
      ? realProjects.filter((p) => p.id === "zoho-quotation-engine" || p.id === "google-ads-auditor" || p.id === "sri-ai-business-os")
      : activeTab === "web"
      ? realProjects.filter((p) => p.id === "shopify-storefront" || p.id === "monsterfoods-app" || p.id === "sri-ai-business-os" )
      : realProjects.filter((p) => p.id === "smart-magic-mirror");

  return (
    <section id="systems" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Verified Production Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            Original Systems. <span className="text-gradient-vibrant">Real Production Impact.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            100% verified production systems, real client automations, and live deployed software from my professional career.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0a0a20] border border-white/10 self-start md:self-end">
          {[
            { id: "all", label: "All Projects (6)" },
            { id: "automation", label: "Automation & AI" },
            { id: "web", label: "Web Apps & E-Com" },
            { id: "academic", label: "Academic" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden group"
          >
            {/* Top Multi-Color Radiant Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-white bg-gradient-to-r ${project.badgeColor} shadow-md`}
                  >
                    {project.badge}
                  </span>
                  {project.isFlagship && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-mono font-bold border border-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      FLAGSHIP
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center gap-2 transition hover:border-cyan-400/50"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>

            {/* Description & Impact Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Architecture Steps Breakdown */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Technical Architecture & Workflow</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    {project.architectureSteps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Metrics Column */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <div className="grid grid-cols-1 gap-3">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                      <span className={`text-xl sm:text-2xl font-heading font-black ${m.color}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold">
                    Technologies Used:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
