"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, TrendingUp, Layers, ShoppingBag, Utensils, Cpu, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import FadeIn from "./FadeIn";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "google-ads-auditor",
    category: "AI & MARKETING INTELLIGENCE",
    title: "AI-Powered Google Ads Auditor (v5.0 — Live)",
    subtitle: "Automated search term intelligence & waste mitigation pipeline",
    badge: "LIVE IN PRODUCTION",
    badgeColor: "emerald",
    description:
      "Fully autonomous performance pipeline that extracts 285+ keyword and search-term records at 6:00 AM IST daily, evaluates 7-day query trends through Gemini AI, and dispatches an actionable, color-coded STOP/SCALE/FIX HTML audit report to stakeholders by 7:00 AM IST.",
    highlights: [
      "Identified ₹4,952 in wasted ad spend (97% of ₹5,113 tracked) within 8 days of deployment.",
      "Engineered a dual AI API key architecture with automated retry logic, 503 backoff, and static fallbacks.",
      "Operates at ₹0 monthly operating cost utilizing zero-cost API quotas and smart payload compression.",
      "Daily scheduled cron execution with zero manual supervision required.",
    ],
    metrics: [
      { label: "Wasted Spend Flagged", value: "₹4,952 (97%)" },
      { label: "Daily Queries Audited", value: "285+" },
      { label: "Report Delivery Time", value: "07:00 AM" },
      { label: "Monthly Cost", value: "₹0" },
    ],
    stack: ["Google Apps Script", "Google Ads Script", "Gemini 1.5 Flash", "Google Sheets", "Gmail API"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "zoho-quotation-engine",
    category: "ENTERPRISE WORKFLOW AUTOMATION",
    title: "Zoho CRM Quotation Automation System",
    subtitle: "4-Layer enterprise quotation & product sync engine for Standard Roofs",
    badge: "95% COMPLETE • PRODUCTION",
    badgeColor: "cyan",
    description:
      "Architected and deployed an end-to-end 4-layer CRM automation ecosystem for Standard Roofs. Replaced a tedious, error-prone manual quotation drafting process with deterministic formula calculators, image syncing, and one-click PDF generation.",
    highlights: [
      "Reduced quote creation time from a multi-step manual process down to under 1 minute with 0 errors.",
      "Automated 30+ CRM fields across 14+ workflow rules including serial numbers, customer autofill, and roofing specs.",
      "Synchronized roofing product images directly to client proposals via Cloudinary and Zoho Writer API.",
      "Built using a 4-layer technical stack: Workflow Rules, Deluge Backend, Client Script (JS), and Zoho Writer API.",
    ],
    metrics: [
      { label: "Quotation Time", value: "< 1 min" },
      { label: "CRM Fields Automated", value: "30+" },
      { label: "Workflow Rules", value: "14+" },
      { label: "Error Rate", value: "0%" },
    ],
    stack: ["Zoho CRM Enterprise", "Deluge", "Client Scripts (JS)", "Zoho Writer API", "Cloudinary"],
  },
  {
    id: "sri-ai-business-os",
    category: "FULL-STACK AI ENTERPRISE PLATFORM",
    title: "Sri AI Business OS",
    subtitle: "Multi-tenant autonomous operating system for AI intake & governance",
    badge: "FLAGSHIP OPEN SOURCE",
    badgeColor: "indigo",
    description:
      "Modern multi-tenant enterprise business operating system. Structures messy unstructured business communications with Gemini AI, enforces human-in-the-loop review triage gates, manages project delivery milestones, and exposes cryptographic HMAC-SHA256 webhook APIs.",
    highlights: [
      "Multi-tenant isolation: Full hierarchical segregation across Organizations, Workspaces, Projects, and Tasks.",
      "AI Intake Pipeline: Automatically parses unstructured messages into structured deliverables with confidence scoring.",
      "Command Center & Live Audit Feed: Real-time telemetry, completion velocity progress, and instant task launch modal.",
      "High-performance architecture: FastAPI backend with Neon Cloud PostgreSQL, and Next.js 16 Turbopack frontend.",
    ],
    metrics: [
      { label: "Backend Latency", value: "< 45ms" },
      { label: "Intake Accuracy", value: "99.2%" },
      { label: "Security", value: "HMAC-SHA256" },
      { label: "Tenancy", value: "Multi-Tenant" },
    ],
    stack: ["FastAPI", "Python", "Neon PostgreSQL", "Next.js", "TypeScript", "TailwindCSS", "Gemini AI"],
    githubUrl: "https://github.com/Srimani26/Sri-AI-Business-OS",
  },
  {
    id: "shopify-storefront",
    category: "E-COMMERCE & FRONT-END LEADERSHIP",
    title: "Shopify E-Commerce Storefront Development",
    subtitle: "High-performance theme customization & conversion UX at Standard Roofs",
    badge: "LIVE COMMERCIAL STORE",
    badgeColor: "emerald",
    description:
      "Leading front-end development and conversion-focused UX architecture for a live commercial Shopify storefront. Translated industrial roofing specifications into intuitive customer catalog navigation and automated order routing.",
    highlights: [
      "Custom Shopify Liquid theme development tailored for industrial manufacturing & construction inquiries.",
      "Optimized storefront load speed and Core Web Vitals to maximize mobile conversion rates.",
      "Integrated product variant selectors with dynamic pricing calculations and inquiry forms.",
      "Collaborated directly with business stakeholders to scale automated client acquisition.",
    ],
    metrics: [
      { label: "Storefront Status", value: "Live" },
      { label: "UX Role", value: "Tech Lead" },
      { label: "Mobile CWV", value: "Optimized" },
      { label: "Integrations", value: "Automated" },
    ],
    stack: ["Shopify Liquid", "Theme Development", "JavaScript", "CSS3", "Conversion UX"],
  },
  {
    id: "monsterfoods-app",
    category: "REAL-TIME WEB APPLICATION",
    title: "MonsterFoods Real-Time Food Ordering App",
    subtitle: "Vue.js live ordering web application at Macincode Technologies",
    badge: "PRODUCTION DEPLOYED",
    badgeColor: "cyan",
    description:
      "Developed and deployed the responsive front-end of MonsterFoods — a live, real-time food ordering web platform — during tenure at Macincode Technologies (Clops AI).",
    highlights: [
      "Engineered reactive component-based architecture using Vue.js for real-time menu browsing and order cart state.",
      "Translated high-fidelity UI/UX design mockups into pixel-perfect, accessible client-side code.",
      "Applied modern front-end state management, error boundaries, and performance optimization for snappy interaction.",
      "Collaborated with cross-functional back-end engineering teams to deliver ahead of release sprint timelines.",
    ],
    metrics: [
      { label: "Framework", value: "Vue.js" },
      { label: "Application", value: "Real-time" },
      { label: "State", value: "Optimized" },
      { label: "Delivery", value: "On-time" },
    ],
    stack: ["Vue.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "State Management"],
  },
  {
    id: "mcp-memory-platform",
    category: "AI INFRASTRUCTURE & PROTOCOLS",
    title: "Centralized MCP AI Memory System",
    subtitle: "Cloud-hosted Model Context Protocol server with OAuth 2.1 & GitHub sync",
    badge: "MCP SYSTEM",
    badgeColor: "indigo",
    description:
      "Cloud-hosted AI memory infrastructure built on the Model Context Protocol (MCP). Enables multiple AI tools (Claude Desktop, ChatGPT, cursor agents) to share a single centralized knowledge base with bi-directional GitHub sync.",
    highlights: [
      "Eliminates repetitive copy-pasting of context across AI assistants through centralized workspace querying.",
      "Hardened with OAuth 2.1 authentication protocol for secure, permissioned tool access.",
      "Automated Git commit pipeline syncing memory workspace deltas directly to GitHub repositories.",
      "Containerized and deployed on Render Cloud for continuous high availability.",
    ],
    metrics: [
      { label: "Protocol", value: "MCP" },
      { label: "Authentication", value: "OAuth 2.1" },
      { label: "Hosting", value: "Render" },
      { label: "Integration", value: "Claude / GPT" },
    ],
    stack: ["Python", "FastAPI", "Model Context Protocol", "OAuth 2.1", "GitHub API", "Render"],
    githubUrl: "https://github.com/Srimani26",
  },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const filteredProjects = selectedFilter === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (selectedFilter === "AI") return p.category.includes("AI");
        if (selectedFilter === "AUTOMATION") return p.category.includes("AUTOMATION") || p.title.includes("Zoho");
        if (selectedFilter === "WEB") return p.category.includes("WEB") || p.category.includes("COMMERCE") || p.category.includes("FULL-STACK");
        return true;
      });

  return (
    <section id="projects" className="py-24 bg-[#050816] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-bold">
                ENGINEERING PORTFOLIO
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Featured Production Systems
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
                Battle-tested AI pipelines, CRM automation engines, and enterprise software built and
                deployed for real businesses.
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
              <div className="h-full rounded-3xl border border-white/10 bg-[#091020]/75 hover:border-cyan-500/35 transition-all p-7 sm:p-8 flex flex-col justify-between group shadow-xl hover:shadow-cyan-950/30">
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
                          : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
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
                      Production Highlights:
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
