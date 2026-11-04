import React, { useState, useMemo } from 'react';
import { skillsData, skillCategories } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { SkillCategoryTabs } from './SkillCategoryTabs';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.tags &&
          skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-in fade-in duration-200">
          <div>
            <Badge variant="cyan" size="sm" icon={<Icons.Cpu className="w-3.5 h-3.5" />}>
              Technical Capabilities
            </Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
              Skills & Tooling
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Categorized technologies and engineering practices with honest proficiency indicators.
            </p>
          </div>

          {/* Search bar - refined */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Java, RAG)..."
              className="w-full px-4 py-2.5 pl-10 bg-slate-900/80 border border-slate-800/60 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
            />
            <Icons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <Icons.X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs - refined */}
        <div className="mb-10 animate-in slide-in-from-bottom-2 duration-300">
          <SkillCategoryTabs
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Skills Grid - enhanced */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in duration-300">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800 animate-in fade-in duration-300">
            <Icons.Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium">No matching skills found</p>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search query or switching categories.
            </p>
          </div>
        )}

        {/* Proficiency Legend - refined */}
        <div className="mt-10 pt-8 border-t border-slate-800/60 animate-in slide-in-from-bottom-2 duration-300 delay-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-slate-500/80 uppercase tracking-wider text-xs">
              Proficiency Levels:
            </span>
            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
              <span className="flex items-center gap-1.5 text-xs text-slate-400/90">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-sm shadow-sky-500/30" />
                <strong className="text-slate-200">Core:</strong> Daily production focus & strong foundational grasp
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400/90">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-500/30" />
                <strong className="text-slate-200">Comfortable:</strong> Regular project use & working fluency
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400/90">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-500/30" />
                <strong className="text-slate-200">Exploring:</strong> Actively studying & prototyping
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};