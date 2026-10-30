import React from 'react';
import { profileData } from '../../data/profile';
import { Icons } from '../ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                RR
              </div>
              <span className="font-bold text-slate-100 text-lg">{profileData.name}</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              B.Tech Computer Science and Engineering student at Pimpri Chinchwad University (PCU), Pune.
              Building reliable backend systems, multi-agent AI architectures, and practical business software.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
              >
                <Icons.Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
              >
                <Icons.Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
              >
                <Icons.Code className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.social.email}`}
                aria-label="Email"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
              >
                <Icons.Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-3 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-400 transition-colors">
                  Leadership & Experience
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-sky-400 transition-colors">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Status */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-3 font-mono">
              Status & Documents
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#resume" className="hover:text-sky-400 transition-colors">
                  Resume ({profileData.resume.lastUpdated})
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-sky-400 transition-colors">
                  Hackathons & SIH 2026
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-sky-400 transition-colors">
                  Community Activities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Contact Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All verified student portfolio content.
          </p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with React + TypeScript + Three.js</span>
            <span>•</span>
            <span className="text-emerald-400">No AI-fabricated metrics</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
