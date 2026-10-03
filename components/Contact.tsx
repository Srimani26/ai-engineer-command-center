"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("srimanikandanece2000@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <div className="mnc-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-cyan-500/30 glow-cyan">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Connect</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
              Let's Build <span className="text-gradient-vibrant">Reliable AI Automation</span> Systems.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Looking for an AI Automation Engineer with real, production-tested experience in enterprise CRM automation, AI diagnostic pipelines, and e-commerce storefront development? Let's connect directly.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Location: Erode, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Open for Full-Time Roles & Scalable AI Automation Projects</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 space-y-3">
            <a
              href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20I%20reviewed%20your%20portfolio%20and%20want%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-xl shadow-emerald-500/20 hover:opacity-95 transition"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4" />
                <span>WhatsApp (+91 6382121634)</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="w-full py-3.5 px-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs sm:text-sm flex items-center justify-between transition cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>srimanikandanece2000@gmail.com</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-300">
                {copied ? "Copied!" : "Click to Copy"}
              </span>
            </button>

            <a
              href="https://www.linkedin.com/in/srimanikandan-k-9a741620a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 text-cyan-100 font-bold text-xs sm:text-sm flex items-center justify-between transition"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>Connect on LinkedIn</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
