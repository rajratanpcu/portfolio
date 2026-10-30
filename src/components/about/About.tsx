import React from 'react';
import { profileData } from '../../data/profile';
import { Icons } from '../ui/Icons';
import { Badge } from '../ui/Badge';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="cyan" size="sm" icon={<Icons.UserCheck className="w-3.5 h-3.5" />}>
            Background & Engineering Philosophy
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Computer Science undergraduate at PCU Pune, focused on Java/Spring Boot backend architecture, secure APIs, and practical AI systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/30 transition-colors">
                <div className="flex items-center gap-2 text-sky-400 font-semibold mb-1">
                  <Icons.Server className="w-4 h-4" />
                  <span>Robust Backend Systems</span>
                </div>
                <p className="text-sm text-slate-400">
                  Focusing on strong data contracts, relational normalization with MySQL, JWT authentication, and resilient Spring Boot services.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
                  <Icons.Sparkles className="w-4 h-4" />
                  <span>Applied AI & RAG Pipelines</span>
                </div>
                <p className="text-sm text-slate-400">
                  Developing RAG pipelines, AI chatbots, and multi-agent workflows (SANCHAY, SANJEEV, ARIA) grounded in actionable telemetry.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Info Card Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
                <Icons.BookOpen className="w-4 h-4" />
                <span>Formal Education</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {profileData.education.degree}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-1">
                {profileData.education.specialization}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-sm text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Institution:</span>
                  <span className="font-medium text-slate-200 text-right">
                    {profileData.education.institution}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-medium text-slate-300">{profileData.education.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Timeline:</span>
                  <span className="font-mono text-slate-300">{profileData.education.period}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Performance:</span>
                  <span className="font-mono text-sky-400 font-semibold">CGPA: {profileData.education.cgpa}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-emerald-400 font-medium">{profileData.education.status}</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Highlights */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Key Engagements & Honors
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <Icons.CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>MLSA & Google Student Ambassador:</strong> Leading developer initiatives and workshops at PCU.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>SIH 2026 Internal:</strong> Top 50 Team selection across campus engineering submissions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Team Lead @ KDSH 2025:</strong> Kharagpur Data Science Hackathon at IIT Kharagpur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Certified by Oracle:</strong> OCI 2025 AI Foundations Associate (Sept 2025).
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
