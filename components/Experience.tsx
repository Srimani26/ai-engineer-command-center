"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  description: string;
  bullets: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "AI Engineer & Technical Team Lead",
    company: "Standard Roofs",
    location: "Erode, Tamil Nadu",
    period: "Jan 2026 – Present",
    badge: "CURRENT &bull; FIRST TECH HIRE",
    description:
      "First technical hire on a newly formed in-house tech team; lead two engineers across CRM automation, Google Ads artificial intelligence, and e-commerce infrastructure.",
    bullets: [
      "Architected and deployed an end-to-end Zoho CRM Quotation Automation System using a 4-layer tech stack (Workflow Rules, Deluge Functions, Client Scripts, Zoho Writer API), reducing quote generation time to under 1 minute with zero manual errors.",
      "Automated 30+ CRM fields across 14+ workflow rules — including serial number generation, client data auto-fetch, roofing spec autofill, product image sync via Cloudinary, and PDF generation.",
      "Built and deployed an AI-Powered Google Ads Auditor (v5.0, Live) that pulls daily keyword/search-term performance data (285+ real queries), processes it through Gemini AI, and delivers a color-coded STOP/SCALE/FIX report via HTML email by 7:00 AM IST.",
      "Identified ₹4,952 in wasted ad spend (97% of ₹5,113 tracked) within 8 days of deployment using automated AI analysis at zero monthly cost.",
      "Leading front-end development for a live commercial Shopify storefront, owning theme customization, storefront performance, and conversion-focused UX decisions.",
      "Collaborated directly with business stakeholders across all initiatives to translate operational requirements into scalable AI-driven solutions.",
    ],
    skills: ["Zoho Deluge", "Google Apps Script", "Gemini AI", "Google Ads Script", "Shopify Liquid", "Cloudinary", "Zoho Writer API"],
  },
  {
    role: "Front-End Web Developer",
    company: "Macincode Technologies – Clops AI",
    location: "Salem, Tamil Nadu",
    period: "Apr 2025 – Aug 2025",
    description:
      "Developed responsive, user-centric web applications and real-time ordering portals utilizing modern JavaScript frameworks.",
    bullets: [
      "Developed responsive, user-centric web applications using HTML, CSS, JavaScript, React.js, and Vue.js.",
      "Built and deployed the frontend of MonsterFoods — a live, real-time food ordering web application — using Vue.js.",
      "Translated UI/UX designs into clean, functional front-end code; applied component-based architecture, state management, and performance optimization for scalable solutions.",
      "Collaborated with cross-functional teams on production projects and contributed to code quality and delivery timelines.",
    ],
    skills: ["Vue.js", "React.js", "JavaScript", "HTML5", "CSS3", "State Management", "REST APIs"],
  },
  {
    role: "Product Support Engineer",
    company: "Sixth Force Solution PVT LTD",
    location: "Chennai, Tamil Nadu",
    period: "May 2023 – Nov 2023",
    description:
      "Provided technical product troubleshooting and system workflows across enterprise client deployments.",
    bullets: [
      "Provided technical support and troubleshooting across product lines, maintaining high customer satisfaction rates.",
      "Delivered customer training sessions that improved product adoption; reduced average response time by 20% through process documentation and workflow improvements.",
      "Collaborated with cross-functional engineering teams to diagnose and resolve complex technical issues efficiently.",
    ],
    skills: ["Technical Support", "Workflow Optimization", "Documentation", "Client Training", "Troubleshooting"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050816] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8">
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-bold">
              CAREER TRAJECTORY
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Professional Experience
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
              Demonstrated track record of technical leadership, business process automation, and full-stack execution.
            </p>
          </div>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={exp.company}>
              <div className="rounded-3xl border border-white/10 bg-[#091020]/75 hover:border-cyan-500/35 transition p-7 sm:p-9 shadow-xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-5 mb-6">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span
                          dangerouslySetInnerHTML={{ __html: exp.badge }}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs font-medium text-slate-400 flex-wrap">
                      <span className="text-cyan-300 font-semibold text-sm">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-[#060a14] px-3 py-1.5 rounded-xl border border-white/5 shrink-0 self-start lg:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 italic">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-[11px] font-mono font-medium bg-[#060a14] border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education & Certifications Card */}
        <FadeIn>
          <div className="mt-14 rounded-3xl border border-white/10 bg-[#091020]/75 p-7 sm:p-9">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Education & Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#060a14] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                  BACHELOR OF ENGINEERING &bull; ECE
                </span>
                <p className="font-bold text-white text-base">Nandha College of Technology, Anna University</p>
                <p className="text-slate-400">Erode, Tamil Nadu &bull; CGPA: 7.6 (Jul 2022)</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#060a14] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                  HSC 12TH &bull; COMPUTER SCIENCE
                </span>
                <p className="font-bold text-white text-base">MSSHSS, State Board of Tamil Nadu</p>
                <p className="text-slate-400">Erode, Tamil Nadu &bull; CGPA: 6.5 (2018)</p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2">
              <span><strong>Certificate of Merit and Recognition:</strong> Java & Python Programming</span>
              <span className="font-mono text-cyan-400">Languages: Tamil, English</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}