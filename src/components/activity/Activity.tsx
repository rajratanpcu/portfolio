import React, { useState } from 'react';
import { activitiesData } from '../../data/activities';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

export const Activity: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Hackathon', 'Architecture', 'Conference', 'Workshop'];

  const filteredActivities = activitiesData.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <section id="activities" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Badge variant="cyan" size="sm" icon={<Icons.Calendar className="w-3.5 h-3.5" />}>
              Continuous Learning
            </Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Activity & Technical Learning Log
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              Chronological log of hackathons, technical conferences, system milestones, and competitive coding.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feed List */}
        <div className="space-y-4">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-sky-400">
                    {act.date}
                  </span>
                  <Badge variant="neutral" size="sm">
                    {act.category}
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono">• {act.organization}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {act.summary}
                </p>

                {act.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {act.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {act.link && (
                <div className="shrink-0">
                  <a
                    href={act.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 transition-colors border border-slate-700/80"
                  >
                    <span>View Link</span>
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
