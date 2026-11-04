import React, { useState } from 'react';
import { activitiesData } from '../../data/activities';
import { ActivityItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';
import { Modal } from '../ui/Modal';

const getCategoryVariant = (category: string) => {
  switch (category) {
    case 'Hackathon':
      return 'emerald';
    case 'Community':
      return 'cyan';
    case 'Conference':
      return 'indigo';
    case 'Workshop':
      return 'amber';
    case 'Architecture':
      return 'violet';
    default:
      return 'neutral';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Hackathon':
      return <Icons.Trophy className="w-3.5 h-3.5" />;
    case 'Community':
      return <Icons.Users className="w-3.5 h-3.5" />;
    case 'Conference':
      return <Icons.Calendar className="w-3.5 h-3.5" />;
    case 'Workshop':
      return <Icons.BookOpen className="w-3.5 h-3.5" />;
    case 'Architecture':
      return <Icons.Layers className="w-3.5 h-3.5" />;
    default:
      return <Icons.Activity className="w-3.5 h-3.5" />;
  }
};

export const Activities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  return (
    <section id="activities" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="mb-12 animate-in fade-in duration-200">
          <Badge variant="cyan" size="sm" icon={<Icons.Activity className="w-3.5 h-3.5" />}>
            Developer Activity Timeline
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Activities & Community Engagement
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Technical conferences, hackathons, workshops, and community participation across cloud, AI, and developer ecosystems.
          </p>
        </div>

        {/* Activities Timeline - card-based grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesData.map((activity, index) => (
            <div
              key={activity.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/60 hover:border-sky-500/30 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl shadow-black/20"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={getCategoryVariant(activity.category) as any} size="sm" icon={getCategoryIcon(activity.category)}>
                    {activity.category}
                  </Badge>
                  <span className="text-xs font-mono text-slate-500/80">{activity.date}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors duration-200 tracking-tight leading-snug">
                    {activity.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500/80 mt-0.5">{activity.organization}</p>
                </div>

                <p className="text-sm text-slate-400/90 leading-relaxed tracking-wide">
                  {activity.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60 relative z-10">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50 hover:border-sky-500/30 hover:text-sky-300 hover:bg-slate-800 transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {activity.link && (
                <div className="pt-4 relative z-10">
                  <Button
                    asLink
                    href={activity.link}
                    target="_blank"
                    variant="ghost"
                    size="sm"
                    icon={<Icons.ExternalLink className="w-3.5 h-3.5" />}
                    className="w-full justify-center group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:border-sky-500/30"
                  >
                    View Details
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};