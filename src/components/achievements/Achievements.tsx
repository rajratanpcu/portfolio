import React from 'react';
import { achievementsData } from '../../data/achievements';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

export const Achievements: React.FC = () => {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Hackathon Selection':
        return 'emerald';
      case 'Community Milestone':
        return 'cyan';
      case 'Technical Participation':
        return 'indigo';
      default:
        return 'neutral';
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="mb-12 animate-in fade-in duration-200">
          <Badge variant="cyan" size="sm" icon={<Icons.Award className="w-3.5 h-3.5" />}>
            Milestones & Hackathons
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Achievements & Hackathon Selections
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Verified team selections, hackathon participations, and developer milestones.
          </p>
        </div>

        {/* Grid of Achievements - enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/60 hover:border-sky-500/30 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={getBadgeVariant(item.type) as any} size="sm">
                    {item.resultBadge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-500/80">{item.date}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors duration-200 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-sky-400/80 font-medium mt-1 line-clamp-1">{item.event}</p>
                  <p className="text-xs font-mono text-slate-500/80 mt-0.5">{item.organization}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400/90 leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-800/60 relative z-10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50 hover:border-sky-500/30 hover:text-sky-300 hover:bg-slate-800 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};