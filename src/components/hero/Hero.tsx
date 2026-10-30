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
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
            <StatusBadge
              isAvailable={profileData.availabilityStatus.isAvailable}
              roleTarget={profileData.availabilityStatus.roleTarget}
              location={profileData.education.location}
            />

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-sky-400">{profileData.name}</span>
              </h1>

              {/* Dynamic subtitle indicator */}
              <div className="h-8 sm:h-9 flex items-center">
                <span className="text-lg sm:text-xl font-medium text-slate-300">
                  {profileData.subtitles[subtitleIndex]}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Computer Science undergraduate (B.Tech 2025–2029) at Pimpri Chinchwad University (PCU), Pune.
              Building high-reliability backend systems with Java and Spring Boot, secure JWT authentication,
              MySQL, RAG pipelines, and conversational AI chatbots.
            </p>

            {/* Quick action buttons */}
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

            {/* Social Links & Profiles */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-md">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Connect
              </span>
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Raj Ratan GitHub Profile"
                className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Icons.Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Raj Ratan LinkedIn Profile"
                className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Icons.Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Raj Ratan LeetCode Profile"
                className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Icons.Code className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.social.email}`}
                aria-label="Send direct email to Raj Ratan"
                className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Icons.Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Tech Core */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full relative">
              <TechCoreCanvas />
              <div className="text-center mt-2">
                <span className="text-xs text-slate-500 font-mono tracking-wide">
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
