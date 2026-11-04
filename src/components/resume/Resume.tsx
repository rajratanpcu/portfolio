import React from 'react';
import { profileData } from '../../data/profile';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="mb-12 animate-in fade-in duration-200">
          <Badge variant="cyan" size="sm" icon={<Icons.FileText className="w-3.5 h-3.5" />}>
            Curriculum Vitae
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Resume & Technical Dossier
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Complete overview of education, technical projects, community experience, and Java backend competencies.
          </p>
        </div>

        {/* Main Resume Card - enhanced */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800/60 shadow-2xl shadow-black/30 space-y-10 relative overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
          {/* Subtle animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-indigo-500/10 opacity-50" aria-hidden="true" />

          {/* Top Bar with download CTA - refined */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-800/60 relative z-10">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {profileData.name} — Technical Resume
                </h3>
                <Badge variant="emerald" size="sm">
                  Java Backend Intern
                </Badge>
              </div>
              <p className="text-xs font-mono text-slate-400/80 mt-2">
                Last Updated: {profileData.resume.lastUpdated} • File: {profileData.resume.filename} • CGPA: {profileData.education.cgpa}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                asLink
                href={profileData.resume.downloadPath}
                download={profileData.resume.filename}
                variant="primary"
                size="md"
                icon={<Icons.Download className="w-4 h-4" />}
              >
                Download PDF
              </Button>
            </div>
          </div>

          {/* Quick Snapshot / Highlights Grid - enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Education Snapshot */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3 group hover:border-sky-500/30 hover:bg-slate-950/80 transition-all duration-300">
              <div className="text-xs font-mono uppercase text-sky-400 font-bold flex items-center gap-1.5">
                <Icons.BookOpen className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">B.Tech Computer Science</h4>
              <p className="text-xs text-slate-300/90">Pimpri Chinchwad University, Pune</p>
              <p className="text-xs font-mono text-slate-500/80">2025 – 2029 (Expected) • CGPA: {profileData.education.cgpa}</p>
              <div className="pt-3 border-t border-slate-800/60">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {profileData.education.status} • {profileData.education.location}
                </p>
              </div>
            </div>

            {/* Core Stack Snapshot */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3 group hover:border-indigo-500/30 hover:bg-slate-950/80 transition-all duration-300">
              <div className="text-xs font-mono uppercase text-indigo-400 font-bold flex items-center gap-1.5">
                <Icons.Server className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">Java, Spring Boot & MySQL</h4>
              <p className="text-xs text-slate-300/90">JWT Authentication, REST APIs, Docker</p>
              <p className="text-xs font-mono text-slate-500/80">DSA • OOP • RAG Pipelines • Chatbots</p>
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {['Java', 'Spring Boot', 'MySQL', 'JWT', 'Docker', 'DSA'].map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-indigo-400/90 border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Leadership Snapshot */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3 group hover:border-emerald-500/30 hover:bg-slate-950/80 transition-all duration-300">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                <Icons.UserCheck className="w-4 h-4" />
                <span>Community & Leadership</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">MLSA & Google Student Ambassador</h4>
              <p className="text-xs text-slate-300/90">GDG & AWS Community Pune Technical Volunteer</p>
              <p className="text-xs font-mono text-slate-500/80">~2 Years Community Involvement</p>
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {['MLSA', 'GSA', 'GDG', 'AWS Community'].map((role) => (
                  <span key={role} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-emerald-400/90 border border-slate-700/50">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Structured Resume Sections Preview - enhanced */}
          <div className="space-y-8 pt-4 relative z-10">
            {/* Technical Projects */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400/80 font-bold flex items-center gap-1.5">
                <Icons.GitBranch className="w-4 h-4 text-violet-400" />
                Featured Resume Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm space-y-2.5 group hover:border-sky-500/30 hover:bg-slate-950/60 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-white">SANCHAY</span>
                    <span className="font-mono text-sky-400 text-[10px] shrink-0">Java • Spring Boot • MySQL • JWT</span>
                  </div>
                  <p className="text-slate-400/90 text-xs leading-relaxed tracking-wide">
                    Centralized resource optimization platform integrating electricity, water, workforce, machine, and maintenance data with real-time monitoring, anomaly detection, predictive insights, and JWT security.
                  </p>
                  <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 text-[10px] font-mono text-slate-500">
                    <Icons.Github className="w-3.5 h-3.5" />
                    <span>github.com/rajratanpcu/SANCHAY</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm space-y-2.5 group hover:border-emerald-500/30 hover:bg-slate-950/60 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-white">SANJEEV</span>
                    <span className="font-mono text-emerald-400 text-[10px] shrink-0">Java • JWT • APIs • Docker</span>
                  </div>
                  <p className="text-slate-400/90 text-xs leading-relaxed tracking-wide">
                    AI-powered rural business companion helping entrepreneurs analyze local markets, estimate capital requirements, and discover eligible government support schemes with multilingual UI and Docker containerization.
                  </p>
                  <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 text-[10px] font-mono text-slate-500">
                    <Icons.Github className="w-3.5 h-3.5" />
                    <span>github.com/rajratanpcu/SANJEEV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Achievements Summary - enhanced */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300/90 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Oracle Certified:</strong> OCI 2025 AI Foundations Associate (Sept 2025, ID: 102790258OCI25AICFA)
                  </span>
                </div>
                <span className="font-mono text-sky-400 text-[10px] shrink-0">
                  Top 50 Team SIH 2026 • KDSH 2025 Team Lead
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                {['OCI AI Foundations', 'SIH 2026 Top 50', 'KDSH 2025 Lead', 'MLSA PCU', 'GSA', 'GDG Volunteer'].map((badge) => (
                  <span key={badge} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Overview */}
            <div className="space-y-4 pt-4 border-t border-slate-800/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400/80 font-bold flex items-center gap-1.5">
                <Icons.Cpu className="w-4 h-4 text-indigo-400" />
                Technical Skill Matrix
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { category: 'Languages', items: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'], color: 'sky' },
                  { category: 'Frameworks', items: ['Spring Boot', 'React', 'Node.js', 'Express', 'Tailwind CSS'], color: 'indigo' },
                  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB'], color: 'emerald' },
                  { category: 'Tools & Cloud', items: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'AWS Basics', 'OCI'], color: 'amber' },
                ].map((cat) => (
                  <div key={cat.category} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-slate-500/80 tracking-wider">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span key={item} className={`text-[10px] font-mono px-2 py-0.5 rounded bg-${cat.color}-500/10 text-${cat.color}-400 border border-${cat.color}-500/20`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};