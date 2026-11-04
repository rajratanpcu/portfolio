import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profile';
import { StatusBadge } from './StatusBadge';
import { TechCoreCanvas } from '../three/TechCoreCanvas';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

export const Hero: React.FC = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % profileData.subtitles.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting - refined for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Additional subtle accent for visual interest */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-violet-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Actions - improved visual hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
            <StatusBadge
              isAvailable={profileData.availabilityStatus.isAvailable}
              roleTarget={profileData.availabilityStatus.roleTarget}
              location={profileData.education.location}
            />

            <div className="space-y-4">
              {/* Name with refined typography */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Hi, I'm <span className="text-sky-400 relative">{profileData.name}</span>
                <span className="absolute -bottom-1 left-0 w-24 h-1 bg-sky-500/50 rounded-full" aria-hidden="true" />
              </h1>

              {/* Dynamic subtitle with typewriter feel */}
              <div className="h-10 sm:h-12 flex items-center relative">
                <span className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-300 transition-opacity duration-300">
                  {profileData.subtitles[subtitleIndex]}
                </span>
                <span className="ml-2 w-2 h-2 bg-sky-500 rounded-full animate-pulse" aria-hidden="true" />
              </div>
            </div>

            {/* Refined bio paragraph with better line length */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed tracking-wide">
              Computer Science undergraduate (B.Tech 2025–2029) at Pimpri Chinchwad University (PCU), Pune.
              Building high-reliability backend systems with Java and Spring Boot, secure JWT authentication,
              MySQL, RAG pipelines, and conversational AI chatbots.
            </p>

            {/* Quick action buttons - improved visual weight */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asLink
                href="#projects"
                variant="primary"
                size="md"
                icon={<Icons.ChevronRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View Projects
              </Button>

              <Button
                asLink
                href="#resume"
                variant="secondary"
                size="md"
                icon={<Icons.Download className="w-4 h-4" />}
              >
                Download Resume
              </Button>

              <Button
                asLink
                href="#contact"
                variant="outline"
                size="md"
                icon={<Icons.Mail className="w-4 h-4" />}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links & Profiles - cleaner presentation */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full max-w-md">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 shrink-0">
                Connect
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Raj Ratan GitHub Profile"
                  className="p-2.5 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-sky-500/30 group"
                >
                  <Icons.Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Raj Ratan LinkedIn Profile"
                  className="p-2.5 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-sky-500/30 group"
                >
                  <Icons.Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={profileData.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Raj Ratan LeetCode Profile"
                  className="p-2.5 text-slate-400 hover:text-amber-400 hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-amber-500/30 group"
                >
                  <Icons.Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={`mailto:${profileData.social.email}`}
                  aria-label="Send direct email to Raj Ratan"
                  className="p-2.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-xl transition-all duration-200 border border-slate-800 hover:border-emerald-500/30 group"
                >
                  <Icons.Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Tech Core - refined */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-lg relative">
              <TechCoreCanvas />
              <div className="text-center mt-4">
                <span className="text-xs text-slate-500 font-mono tracking-wider uppercase">
                  SYSTEM CORE • INTERACTIVE 3D MESH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
