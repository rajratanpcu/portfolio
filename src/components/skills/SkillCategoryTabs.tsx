import React from 'react';
import { skillCategories } from '../../data/skills';

interface SkillCategoryTabsProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const SkillCategoryTabs: React.FC<SkillCategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
      <button
        onClick={() => onSelectCategory('all')}
        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 select-none flex items-center gap-2 ${
          activeCategory === 'all'
            ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
            : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 hover:bg-slate-900'
        }`}
      >
        <span className="hidden sm:inline">All Skills</span>
        <span className="sm:hidden">All</span>
      </button>

      {skillCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 select-none flex items-center gap-2 ${
            activeCategory === cat.id
              ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
              : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 hover:bg-slate-900'
          }`}
        >
          <span className="hidden sm:inline">{cat.name}</span>
          <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
        </button>
      ))}
    </div>
  );
};