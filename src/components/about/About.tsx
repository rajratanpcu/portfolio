import React from 'react';
import { profileData } from '../../data/profile';
import { Icons } from '../ui/Icons';
import { Badge } from '../ui/Badge';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="mb-14 animate-in fade-in duration-200">
          <Badge variant="cyan" size="sm" icon={<Icons.UserCheck className="w-3.5 h-3.5" />}>
            Background & Engineering Philosophy
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Computer Science undergraduate at PCU Pune, focused on Java/Spring Boot backend architecture, secure APIs, and practical AI systems.
          </p>
        </div>

        {/* Content Grid - enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300/90 leading-relaxed">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg tracking-wide animate-in fade-in duration-300 delay-100">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Pillars - enhanced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 animate-in slide-in-from-bottom-2 duration-300 delay-200">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-sky-500/30 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <div className="flex items-center gap-2 text-sky-400 font-semibold mb-2 relative z-10">
                  <Icons.Server className="w-4 h-4" />
                  <span>Robust Backend Systems</span>
                </div>
                <p className="text-sm text-slate-400/90 leading-relaxed relative z-10">
                  Focusing on strong data contracts, relational normalization with MySQL, JWT authentication, and resilient Spring Boot services.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-2 relative z-10">
                  <Icons.Sparkles className="w-4 h-4" />
                  <span>Applied AI & RAG Pipelines</span>
                </div>
                <p className="text-sm text-slate-400/90 leading-relaxed relative z-10">
                  Developing RAG pipelines, AI chatbots, and multi-agent workflows (SANCHAY, SANJEEV, ARIA) grounded in actionable telemetry.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Info Card Column - enhanced */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card - enhanced */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/60 shadow-xl shadow-black/20 relative overflow-hidden animate-in slide-in-from-bottom-2 duration-300 delay-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-4">
                <Icons.BookOpen className="w-4 h-4" />
                <span>Formal Education</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {profileData.education.degree}
              </h3>
              <p className="text-sm font-medium text-slate-300/90 mt-1">
                {profileData.education.specialization}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/60 space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/40">
                  <span className="text-slate-500/80">Institution:</span>
                  <span className="font-medium text-slate-100 text-right">{profileData.education.institution}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/40">
                  <span className="text-slate-500/80">Location:</span>
                  <span className="font-medium text-slate-300">{profileData.education.location}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/40">
                  <span className="text-slate-500/80">Timeline:</span>
                  <span className="font-mono text-slate-300">{profileData.education.period}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/40">
                  <span className="text-slate-500/80">Performance:</span>
                  <span className="font-mono text-sky-400 font-semibold">CGPA: {profileData.education.cgpa}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-slate-500/80">Status:</span>
                  <span className="text-emerald-400 font-medium">{profileData.education.status}</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Highlights - enhanced */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60 space-y-3 animate-in slide-in-from-bottom-2 duration-300 delay-400">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400/80 font-mono">
                Key Engagements & Honors
              </h4>
              <ul className="space-y-3 text-sm text-slate-300/90">
                <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/40 hover:border-sky-500/30 transition-colors">
                  <Icons.CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-100">MLSA & Google Student Ambassador:</strong> Leading developer initiatives and workshops at PCU.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/40 hover:border-indigo-500/30 transition-colors">
                  <Icons.CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-100">SIH 2026 Internal:</strong> Top 50 Team selection across campus engineering submissions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/40 hover:border-emerald-500/30 transition-colors">
                  <Icons.CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-100">Team Lead @ KDSH 2025:</strong> Kharagpur Data Science Hackathon at IIT Kharagpur.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/40 hover:border-amber-500/30 transition-colors">
                  <Icons.CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-100">Certified by Oracle:</strong> OCI 2025 AI Foundations Associate (Sept 2025).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};