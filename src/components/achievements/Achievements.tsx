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
        {/* Section Header */}
        <div className="mb-10">
          <Badge variant="cyan" size="sm" icon={<Icons.Award className="w-3.5 h-3.5" />}>
            Milestones & Hackathons
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Hackathon Selections
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Verified team selections, hackathon participations, and developer milestones.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={getBadgeVariant(item.type) as any} size="sm">
                    {item.resultBadge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-500">{item.date}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-sky-400/90 font-medium mt-1">{item.event}</p>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">{item.organization}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-800/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400"
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
