"use client";

import React from "react";
import { Cpu, Code2, Globe, Database, Users, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const SKILL_GROUPS = [
  {
    title: "AI & Automation Engineering",
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    skills: [
      "Gemini AI Integration",
      "Zoho Deluge (Enterprise)",
      "Google Apps Script",
      "Google Ads Script API",
      "Workflow Automation",
      "Model Context Protocol (MCP)",
      "Chrome Extensions",
      "Low-Code / Vibe Coding",
    ],
  },
  {
    title: "Programming Languages & Backend",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    skills: [
      "Python",
      "FastAPI",
      "JavaScript (ES6+)",
      "Java",
      "TypeScript",
      "RESTful API Architecture",
      "OAuth 2.1 Security",
      "HMAC-SHA256 Webhooks",
    ],
  },
  {
    title: "Frontend & Modern Web",
    icon: <Globe className="w-5 h-5 text-teal-400" />,
    skills: [
      "React.js",
      "Next.js (App Router)",
      "Vue.js",
      "Shopify Liquid & Themes",
      "TailwindCSS",
      "HTML5 / Modern CSS3",
      "Component Architecture",
      "State Management",
    ],
  },
  {
    title: "CRM, Cloud & Media APIs",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    skills: [
      "Zoho CRM (Enterprise)",
      "Zoho Writer API",
      "Cloudinary Media Sync",
      "PostgreSQL (Neon Cloud)",
      "Google Sheets API",
      "Git & GitHub Versioning",
      "Render Cloud Hosting",
      "Gmail API Automation",
    ],
  },
  {
    title: "Engineering Leadership & Soft Skills",
    icon: <Users className="w-5 h-5 text-emerald-400" />,
    skills: [
      "First Technical Hire Leadership",
      "Led 2 In-House Engineers",
      "Cross-Functional Collaboration",
      "Client & Stakeholder Translation",
      "Zero-Error Business Workflows",
      "Technical Documentation",
      "Agile Delivery Timelines",
      "System Architecture Design",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#050816] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8">
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-bold">
              COMPETENCIES & TOOLKIT
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Technical Skills Matrix
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
              Battle-tested tools and frameworks utilized to architect production automation pipelines and scalable web applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, index) => (
            <FadeIn key={group.title}>
              <div className="h-full p-7 rounded-3xl border border-white/10 bg-[#091020]/75 hover:border-cyan-500/35 transition flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#060a14] border border-white/10 flex items-center justify-center">
                      {group.icon}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[#060a14] border border-white/5 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
