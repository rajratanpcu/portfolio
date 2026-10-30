import React from 'react';
import { profileData } from '../../data/profile';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <Badge variant="cyan" size="sm" icon={<Icons.FileText className="w-3.5 h-3.5" />}>
            Curriculum Vitae
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Resume & Technical Dossier
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Complete overview of education, technical projects, community experience, and Java backend competencies.
          </p>
        </div>

        {/* Main Resume Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          {/* Top Bar with download CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {profileData.name} — Technical Resume
                </h3>
                <Badge variant="emerald" size="sm">
                  Java Backend Intern
                </Badge>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Last Updated: {profileData.resume.lastUpdated} • File: {profileData.resume.filename} • CGPA: {profileData.education.cgpa}
              </p>
            </div>

            <div className="flex items-center gap-3">
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

          {/* Quick Snapshot / Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education Snapshot */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <div className="text-xs font-mono uppercase text-sky-400 font-bold flex items-center gap-1.5">
                <Icons.BookOpen className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="text-base font-bold text-white">B.Tech Computer Science</h4>
              <p className="text-xs text-slate-300">Pimpri Chinchwad University, Pune</p>
              <p className="text-xs font-mono text-slate-500">2025 – 2029 • CGPA: {profileData.education.cgpa}</p>
            </div>

            {/* Core Stack Snapshot */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <div className="text-xs font-mono uppercase text-indigo-400 font-bold flex items-center gap-1.5">
                <Icons.Server className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <h4 className="text-base font-bold text-white">Java, Spring Boot & MySQL</h4>
              <p className="text-xs text-slate-300">JWT Authentication, REST APIs, Docker</p>
              <p className="text-xs font-mono text-slate-500">DSA • OOP • RAG Pipelines • Chatbots</p>
            </div>

            {/* Leadership Snapshot */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                <Icons.UserCheck className="w-4 h-4" />
                <span>Community & Leadership</span>
              </div>
              <h4 className="text-base font-bold text-white">MLSA & Google Student Ambassador</h4>
              <p className="text-xs text-slate-300">GDG & AWS Community Pune Technical Volunteer</p>
              <p className="text-xs font-mono text-slate-500">~2 Years Community Involvement</p>
            </div>
          </div>

          {/* Structured Resume Sections Preview */}
          <div className="space-y-6 pt-4">
            {/* Technical Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Featured Resume Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center justify-between font-bold text-slate-200">
                    <span>SANCHAY</span>
                    <span className="font-mono text-sky-400 text-xs">Java • Spring Boot • MySQL • JWT</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Centralized resource optimization platform integrating electricity, water, workforce, machine, and maintenance data with real-time monitoring, anomaly detection, predictive insights, and JWT security.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center justify-between font-bold text-slate-200">
                    <span>SANJEEV</span>
                    <span className="font-mono text-emerald-400 text-xs">Java • JWT • APIs • Docker</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    AI-powered rural business companion helping entrepreneurs analyze local markets, estimate capital requirements, and discover eligible government support schemes with multilingual UI and Docker containerization.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Achievements Summary */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Icons.CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Oracle Certified:</strong> OCI 2025 AI Foundations Associate (Sept 2025, ID: 102790258OCI25AICFA)
                </span>
              </div>
              <span className="font-mono text-sky-400 text-[11px] shrink-0">
                Top 50 Team SIH 2026 • KDSH 2025 Team Lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
