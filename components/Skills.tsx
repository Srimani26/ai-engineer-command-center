"use client";

import React from "react";
import { Cpu, Database, Server, Layout, ShieldCheck, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  borderColor: string;
  skills: { name: string; level: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Autonomous Systems",
    icon: Cpu,
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-500/30",
    skills: [
      { name: "Gemini 1.5 / 2.0 API", level: "Production" },
      { name: "Claude 3.5 / OpenAI GPT-4o", level: "Advanced" },
      { name: "Multi-Agent Swarm Logic", level: "Specialist" },
      { name: "Self-Correcting Prompt Chains", level: "Architect" },
      { name: "RAG & Vector Retrieval", level: "Production" },
      { name: "Pydantic Deterministic Schemas", level: "Advanced" },
    ],
  },
  {
    title: "Enterprise CRM & Automation",
    icon: Zap,
    color: "from-purple-400 to-fuchsia-500",
    borderColor: "border-purple-500/30",
    skills: [
      { name: "Zoho Deluge Scripting", level: "Architect" },
      { name: "Zoho CRM REST APIs", level: "Production" },
      { name: "Google Ads API & Scripts", level: "Specialist" },
      { name: "n8n Autonomous Workflows", level: "Advanced" },
      { name: "BOM Calculation Engines", level: "Specialist" },
      { name: "Automated Webhooks / Cron", level: "Production" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    color: "from-pink-400 to-rose-500",
    borderColor: "border-pink-500/30",
    skills: [
      { name: "Python 3.12 / FastAPI", level: "Architect" },
      { name: "Node.js / Express", level: "Advanced" },
      { name: "PostgreSQL & SQLite", level: "Production" },
      { name: "Docker Containerization", level: "Production" },
      { name: "RESTful & SSE Streaming", level: "Advanced" },
      { name: "Linux Administration", level: "Proficient" },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    color: "from-emerald-400 to-teal-500",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Next.js 16 (App Router)", level: "Production" },
      { name: "React 19 & TypeScript", level: "Advanced" },
      { name: "Tailwind CSS & Vanilla CSS", level: "Specialist" },
      { name: "Shopify Liquid Engineering", level: "Advanced" },
      { name: "Vue.js 3 & Pinia", level: "Production" },
      { name: "Turbopack & Web Performance", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Silicon Valley Stack</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
          Verified <span className="text-gradient-vibrant">Technical Matrix</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Production competencies honed through real commercial deployments and high-volume systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className={`mnc-card rounded-3xl p-6 sm:p-8 border ${cat.borderColor} relative overflow-hidden`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
