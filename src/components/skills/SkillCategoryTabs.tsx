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
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      <button
        onClick={() => onSelectCategory('all')}
        className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all select-none ${
          activeCategory === 'all'
            ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
            : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
        }`}
      >
        All Skills
      </button>

      {skillCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all select-none ${
            activeCategory === cat.id
              ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
              : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
