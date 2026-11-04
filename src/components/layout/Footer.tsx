import React from 'react';
import { profileData } from '../../data/profile';
import { Icons } from '../ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-sky-500/20">
                RR
              </div>
              <span className="font-bold text-slate-100 text-lg tracking-tight">{profileData.name}</span>
            </div>
            <p className="text-sm text-slate-400/90 max-w-sm leading-relaxed tracking-wide">
              B.Tech Computer Science and Engineering student at Pimpri Chinchwad University (PCU), Pune.
              Building reliable backend systems, multi-agent AI architectures, and practical business software.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-slate-700 group"
              >
                <Icons.Github className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-slate-700 group"
              >
                <Icons.Linkedin className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={profileData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-slate-700 group"
              >
                <Icons.Code className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${profileData.social.email}`}
                aria-label="Email"
                className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-slate-700 group"
              >
                <Icons.Mail className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300/80 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400/90">
              <li>
                <a href="#about" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>About Me</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Skills & Tools</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Featured Projects</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Leadership & Experience</span>
                </a>
              </li>
              <li>
                <a href="#certifications" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Certifications</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Status */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300/80 mb-4 font-mono">
              Status & Documents
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400/90">
              <li>
                <a href="#resume" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Resume ({profileData.resume.lastUpdated})</span>
                </a>
              </li>
              <li>
                <a href="#achievements" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Hackathons & SIH 2026</span>
                </a>
              </li>
              <li>
                <a href="#activities" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Community Activities</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-200 group">
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200" />
                  <span>Contact Channel</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - refined */}
        <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500/80 gap-4">
          <p className="tracking-wide">
            © {new Date().getFullYear()} {profileData.name}. All verified student portfolio content.
          </p>
          <p className="flex items-center gap-2 font-mono text-slate-400/80">
            <span>Built with React + TypeScript + Three.js</span>
            <span className="text-slate-700">•</span>
            <span className="text-emerald-400 font-medium">No AI-fabricated metrics</span>
          </p>
        </div>
      </div>
    </footer>
  );
};