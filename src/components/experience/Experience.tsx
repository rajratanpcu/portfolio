import React from 'react';
import { experienceData } from '../../data/experience';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

export const Experience: React.FC = () => {
  const getActivityTypeVariant = (type: string) => {
    switch (type) {
      case 'Student Leadership':
        return 'cyan';
      case 'Ambassador Program':
        return 'indigo';
      case 'Technical Community':
        return 'emerald';
      default:
        return 'neutral';
    }
  };

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="mb-14 animate-in fade-in duration-200">
          <Badge variant="cyan" size="sm" icon={<Icons.UserCheck className="w-3.5 h-3.5" />}>
            Leadership & Community Involvement
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Experience & Student Leadership
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Verified leadership roles, technical ambassador appointments, and developer community contributions.
          </p>
        </div>

        {/* Timeline - enhanced with better visual hierarchy */}
        <div className="relative border-l border-slate-800/60 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {/* Timeline line gradient accent */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/60 via-sky-500/20 to-transparent" aria-hidden="true" />

          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot - enhanced with pulse ring */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 z-10 flex items-center justify-center">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-sky-500/20" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-sky-400/40 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" aria-hidden="true" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/60 hover:border-sky-500/30 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden group">
                {/* Subtle left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-sky-500/60 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" aria-hidden="true" />

                {/* Meta Header - refined */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-sky-400 transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-sky-400/90 mt-1">{exp.organization}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                      {exp.period}
                    </span>
                    <Badge variant={getActivityTypeVariant(exp.activityType) as any} size="sm">
                      {exp.activityType}
                    </Badge>
                  </div>
                </div>

                {/* Location - refined */}
                <div className="text-xs font-mono text-slate-500/80 mb-4 flex items-center gap-1.5">
                  <Icons.MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>

                {/* Description - improved typography */}
                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-5 tracking-wide">
                  {exp.description}
                </p>

                {/* Bullet Points - enhanced with better spacing and icon */}
                <ul className="space-y-2 text-sm text-slate-400 mb-5">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 group-hover:gap-3 transition-all duration-200">
                      <span className="text-sky-400 shrink-0 mt-0.5">▸</span>
                      <span className="leading-relaxed group-hover:text-slate-300 transition-colors duration-200">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags - refined */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50 hover:border-sky-500/30 hover:text-sky-300 hover:bg-slate-800 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Entrance animation delay via inline style */}
                <div style={{ animationDelay: `${index * 100}ms` }} className="animate-in" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};