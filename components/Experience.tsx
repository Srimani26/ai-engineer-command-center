"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold uppercase mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Career</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
          Verified <span className="text-gradient-vibrant">Work Experience</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Hands-on career trajectory across enterprise CRM automation, AI pipelines, e-commerce, and front-end engineering.
        </p>
      </div>

      <div className="space-y-8">
        {/* Role 1: Standard Roofs */}
        <div className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                  CURRENT ROLE
                </span>
                <span className="text-emerald-400 text-xs font-mono font-semibold">
                  Jan 2026 – Present
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mt-2">
                AI Engineer
              </h3>
              <p className="text-sm font-semibold text-cyan-300">
                Standard Roofs &bull; Erode, Tamil Nadu
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono text-slate-400 flex flex-col sm:items-end gap-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                First Technical Hire &bull; Leading 2 Team Members
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Erode, Tamil Nadu
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              First technical hire on a newly formed in-house tech team; lead two team members on CRM automation, Google Ads intelligence, and e-commerce development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Zoho CRM Quotation Automation</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Architected and deployed a 4-layer tech stack (Workflow Rules, Deluge Functions, Client Scripts, Zoho Writer API), reducing quote generation time to under 1 minute with zero manual errors.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>30+ Fields & 14+ Workflow Rules</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated serial number generation, client data auto-fetch, roofing spec autofill, product image sync via Cloudinary, and automatic PDF attachment to CRM deal records.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  <span>AI-Powered Google Ads Auditor</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Built daily pipeline pulling 285+ keyword queries at 6:00 AM IST; flagged ₹4,952 in wasted ad spend (97% of ₹5,113 tracked) in 8 days. Delivered daily STOP/SCALE/FIX HTML email reports by 7:00 AM IST.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Shopify Storefront Development</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Leading front-end development for a live Shopify storefront; own theme customization, storefront performance, conversion-focused UX decisions, and stakeholder collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Role 2: Macincode Technologies */}
        <div className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
                FRONT-END DEVELOPMENT
              </span>
              <h3 className="text-2xl font-heading font-black text-white mt-2">
                Front-End Web Developer
              </h3>
              <p className="text-sm font-semibold text-purple-300">
                Macincode Technologies – Clops AI &bull; Salem, Tamil Nadu
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono text-slate-400 flex flex-col sm:items-end gap-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                Apr 2025 – Aug 2025
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                Salem, Tamil Nadu
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Developed responsive, user-centric web applications using HTML, CSS, JavaScript, React.js, and Vue.js.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Built and deployed the frontend of <strong>MonsterFoods</strong> — a live, real-time food ordering web application using Vue.js.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Translated UI/UX designs into clean, functional front-end code with component-based architecture, state management, and performance optimization.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>Collaborated with cross-functional teams on production projects, contributing to code quality and delivery timelines.</span>
            </div>
          </div>
        </div>

        {/* Role 3: Sixth Force Solution */}
        <div className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="px-3 py-1 rounded-full bg-slate-500/20 text-slate-300 text-xs font-mono font-bold border border-slate-500/30">
                PRODUCT & CLIENT SUPPORT
              </span>
              <h3 className="text-2xl font-heading font-black text-white mt-2">
                Product Support Engineer
              </h3>
              <p className="text-sm font-semibold text-slate-300">
                Sixth Force Solution PVT LTD &bull; Chennai, Tamil Nadu
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono text-slate-400 flex flex-col sm:items-end gap-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                May 2023 – Nov 2023
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Chennai, Tamil Nadu
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>Provided technical support and troubleshooting across product lines, maintaining high customer satisfaction rates.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>Delivered customer training sessions that improved product adoption; reduced average response time by 20% through process documentation and workflow improvements.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>Collaborated with cross-functional teams to diagnose and resolve complex product issues efficiently.</span>
            </div>
          </div>
        </div>

        {/* Education & Academic Honors */}
        <div className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden border border-cyan-500/20">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-2xl font-heading font-black text-white">
              Education & Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-mono text-cyan-400 font-bold">Anna University</span>
              <h4 className="text-base font-bold text-white">Bachelor of Engineering – ECE</h4>
              <p className="text-xs text-slate-300">Nandha College of Technology, Erode, Tamil Nadu</p>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-mono">
                <span>Graduated: Jul 2022</span>
                <span className="text-emerald-400 font-bold">CGPA: 7.6 / 10</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-mono text-purple-400 font-bold">State Board of Tamil Nadu</span>
              <h4 className="text-base font-bold text-white">HSC 12th – Computer Science</h4>
              <p className="text-xs text-slate-300">MSSHSS, Erode, Tamil Nadu</p>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-mono">
                <span>Completed: 2018</span>
                <span className="text-emerald-400 font-bold">CGPA: 6.5 / 10</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span><strong>Certificate of Merit and Recognition:</strong> Java & Python Programming</span>
            </div>
            <span className="text-slate-600">&bull;</span>
            <div><strong>Languages:</strong> Tamil (Native), English (Professional)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
