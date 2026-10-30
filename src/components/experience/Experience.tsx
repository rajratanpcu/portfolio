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
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="cyan" size="sm" icon={<Icons.UserCheck className="w-3.5 h-3.5" />}>
            Leadership & Community Involvement
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Student Leadership
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Verified leadership roles, technical ambassador appointments, and developer community contributions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 group-hover:scale-125 transition-all shadow-md shadow-sky-500/20" />

              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 transition-all">
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-sky-400 mt-0.5">{exp.organization}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                      {exp.period}
                    </span>
                    <Badge variant={getActivityTypeVariant(exp.activityType) as any} size="sm">
                      {exp.activityType}
                    </Badge>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 mb-3 flex items-center gap-1">
                  <Icons.MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400 mb-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-400">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
