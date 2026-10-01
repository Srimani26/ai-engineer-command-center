"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, Copy, Check, Send, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("srimanikandanece2000@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+916382121634");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AI Engineering Project Inquiry from ${name || "Business Lead"}`);
    const body = encodeURIComponent(
      `Hello Srimanikandan,\n\nMy name is ${name} (${email}).\n\nProject Details:\n${message}\n\nBest regards,\n${name}`
    );
    window.location.href = `mailto:srimanikandanece2000@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#050816] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8 text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-bold">
              LET'S BUILD USEFUL SYSTEMS
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Open to high-impact AI Automation Engineer roles, enterprise CRM workflow projects,
              and AI agent consultations.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <FadeIn>
              {/* Email Card with Copy button */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#091020]/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                        DIRECT EMAIL
                      </span>
                      <a
                        href="mailto:srimanikandanece2000@gmail.com"
                        className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                      >
                        srimanikandanece2000@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#060a14] border border-white/10 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-300 transition"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Phone / WhatsApp Card */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#091020]/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                        PHONE & WHATSAPP
                      </span>
                      <a
                        href="tel:+916382121634"
                        className="text-sm font-bold text-white hover:text-emerald-300 transition-colors"
                      >
                        +91 6382121634
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl bg-[#060a14] border border-white/10 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-300 transition"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Location Card */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#091020]/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                    BASE LOCATION
                  </span>
                  <span className="text-sm font-bold text-white">
                    Erode, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Resume Download Card */}
              <div className="p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-tr from-cyan-950/30 to-[#091020] space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase block">
                  CANDIDATE CURRICULUM VITAE
                </span>
                <p className="text-xs text-slate-300">
                  Detailed technical resume covering AI pipelines, CRM automation, front-end architecture, and verified metrics.
                </p>
                <a
                  href="/Srimanikandan_Resume_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Direct Inbound Message Form */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="p-8 rounded-3xl border border-white/10 bg-[#091020]/80 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="border-b border-white/5 pb-4">
                  <h3 className="text-xl font-bold text-white">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below to initiate an email directly to Srimanikandan.
                  </p>
                </div>

                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#060a14] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#060a14] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      PROJECT REQUIREMENTS / MESSAGE *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your AI automation, CRM integration, or web application requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#060a14] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Inbound Inquiry</span>
                  </button>
                </form>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    CONNECT SOCIALLY:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/Srimani26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-[#060a14] text-slate-300 hover:text-white transition"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-[#060a14] text-slate-300 hover:text-cyan-400 transition"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}