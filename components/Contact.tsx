"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Sparkles, Copy, Check, Download, ShieldCheck } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("srimanikandanece2000@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+916382121634");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-28 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      <div className="mnc-card rounded-3xl p-8 sm:p-14 relative overflow-hidden border border-cyan-500/35 glow-cyan">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bold Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Immediate Technical Availability</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-tight">
              Hire Me & Build <span className="text-gradient-vibrant">Reliable AI Automation</span> Systems.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Looking for an <strong>AI Automation Engineer</strong> with real production achievements? Whether you need an engineer to architect multi-layer CRM pricing engines, deploy daily AI marketing pipelines, or build mission-critical business OS platforms — let&apos;s connect directly today.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Guaranteed Fast Response:</strong> Within 2 hours for all recruiter & enterprise inquiries.</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <span><strong>Location:</strong> Erode, Tamil Nadu &bull; Open for Remote, Hybrid & Relocation.</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
                <span><strong>Roles Open For:</strong> AI Automation Engineer, Systems Architect, Tech Lead, Full-Stack AI Engineer.</span>
              </div>
            </div>
          </div>

          {/* Right Column: BOLD High-Contrast Direct Actions */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary WhatsApp Action */}
            <a
              href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20I%20reviewed%20your%20portfolio%20and%20want%20to%20discuss%20an%20opportunity%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black text-sm sm:text-base flex items-center justify-between shadow-2xl shadow-emerald-500/30 hover:opacity-95 hover:scale-[1.02] transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp (+91 63821 21634)</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Email Box with One-Click Copy */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-between hover:border-cyan-400/50 transition">
              <a
                href="mailto:srimanikandanece2000@gmail.com"
                className="flex items-center gap-3 text-slate-100 hover:text-cyan-300 transition overflow-hidden"
              >
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Email Address</div>
                  <div className="text-xs sm:text-sm font-bold font-mono">srimanikandanece2000@gmail.com</div>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-mono font-semibold text-cyan-300 transition cursor-pointer shrink-0 ml-2"
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Direct Phone Call */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-between hover:border-emerald-400/50 transition">
              <a
                href="tel:+916382121634"
                className="flex items-center gap-3 text-slate-100 hover:text-emerald-300 transition"
              >
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Direct Phone</div>
                  <div className="text-xs sm:text-sm font-bold font-mono">+91 63821 21634</div>
                </div>
              </a>
              <button
                onClick={handleCopyPhone}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-mono font-semibold text-emerald-300 transition cursor-pointer shrink-0 ml-2"
              >
                {copiedPhone ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* LinkedIn Connect */}
            <a
              href="https://www.linkedin.com/in/srimanikandan-k-9a741620a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 text-cyan-100 font-bold text-xs sm:text-sm flex items-center justify-between transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
                <span>Connect on LinkedIn (Srimanikandan K)</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Resume Download PDF */}
            <a
              href="/Srimanikandan_Resume_Professional.pdf"
              download="Srimanikandan_Resume_Professional.pdf"
              className="w-full py-3.5 px-6 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-white/20 text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-between transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Verified Resume (PDF)</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-300">Direct Download</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
