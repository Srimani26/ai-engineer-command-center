"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, Copy, Check, Send, ArrowRight, Zap, Sparkles } from "lucide-react";
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
    <section id="contact" className="py-24 bg-[#030712] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8 text-center max-w-3xl mx-auto">
            <p className="text-cyan-400 uppercase tracking-widest text-xs font-semibold flex items-center justify-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              LET'S BUILD USEFUL SYSTEMS
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Ready to Ship? Get in Touch
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
              Open to high-impact AI Automation Engineer roles, enterprise CRM workflow projects,
              and AI pipeline consultations. No endless meetings — just high-velocity shipping.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <FadeIn>
              {/* Email Card with Copy button */}
              <div className="p-6 rounded-3xl bento-card space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase block font-semibold text-slate-400">
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
                    className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Phone Card with Copy button */}
              <div className="p-6 rounded-3xl bento-card space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase block font-semibold text-slate-400">
                        PHONE / WHATSAPP
                      </span>
                      <a
                        href="tel:+916382121634"
                        className="text-sm font-bold text-white hover:text-indigo-300 transition-colors"
                      >
                        +91 63821 21634
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 text-slate-400 hover:text-indigo-300 transition-all cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Location Card */}
              <div className="p-6 rounded-3xl bento-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase block font-semibold text-slate-400">
                    CURRENT BASE
                  </span>
                  <span className="text-sm font-bold text-white">
                    Erode, Tamil Nadu, India (Open to Remote &amp; Relocation)
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://github.com/Srimani26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bento-card text-slate-300 hover:text-white transition flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/srimanikandan-t-942693246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bento-card text-slate-300 hover:text-white transition flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <FadeIn>
              <form
                onSubmit={handleSendMessage}
                className="p-8 rounded-3xl bento-card space-y-4"
              >
                <div className="border-b border-white/10 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-normal">
                    Prepares a verified mail dispatch directly to Srimanikandan's inbox.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Project Scope / Role Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your AI automation requirements, systems challenge, or open engineering role..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-400/20"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
