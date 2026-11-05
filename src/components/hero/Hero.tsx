import React from 'react';
import { profileData } from '../../data/profile';
import { StatusBadge } from './StatusBadge';
import { TechCoreCanvas } from '../three/TechCoreCanvas';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center border-b border-slate-800 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-3xl">
          <StatusBadge isAvailable={profileData.availabilityStatus.isAvailable} roleTarget="Open to Java backend internships" location="Pune / remote" />

          <div className="mt-8 flex items-center gap-4">
            <img
              src="/avatar.png"
              alt="Raj Ratan — Java Backend Developer and B.Tech CSE student at PCU Pune"
              className="h-16 w-16 rounded-full border border-amber-300/60 bg-slate-900 object-cover"
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = '/avatar-fallback.svg';
              }}
            />
            <div>
              <p className="measured text-xs text-slate-500">RR / 2026</p>
              <p className="text-sm text-slate-300">Pimpri Chinchwad University · Computer Science</p>
            </div>
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl leading-[0.98] text-slate-100 sm:text-7xl">
            Backend systems with a point of view.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Building scalable backend systems, intelligent applications, and practical software solutions with Java, Spring Boot, and Generative AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asLink href="#projects" variant="primary" size="lg" icon={<Icons.ExternalLink className="h-4 w-4" />} iconPosition="right">
              View projects
            </Button>
            <Button asLink href={profileData.resume.downloadPath} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" icon={<Icons.Download className="h-4 w-4" />}>
              Download resume
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-800 pt-5 text-sm text-slate-400">
            <span className="measured text-xs text-slate-500">Find me on</span>
            <a className="hover:text-amber-300" href={profileData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-amber-300" href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="hover:text-amber-300" href={profileData.social.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
            <a className="hover:text-amber-300" href={`mailto:${profileData.social.email}`}>Email</a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-card)] border border-slate-700 bg-slate-950 p-4 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-500">
            <span className="measured">interactive / systems-core</span>
            <span className="text-amber-300">online</span>
          </div>
          <TechCoreCanvas />
          <div className="grid grid-cols-3 gap-px border-t border-slate-800 bg-slate-800">
            <div className="bg-slate-950 p-3"><span className="measured block text-lg text-slate-100">JAVA</span><span className="text-xs text-slate-500">backend</span></div>
            <div className="bg-slate-950 p-3"><span className="measured block text-lg text-slate-100">RAG</span><span className="text-xs text-slate-500">applied AI</span></div>
            <div className="bg-slate-950 p-3"><span className="measured block text-lg text-slate-100">API</span><span className="text-xs text-slate-500">systems</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
