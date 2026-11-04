import React from 'react';
import { Skill } from '../../types';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getProficiencyVariant = (prof: string) => {
    switch (prof) {
      case 'Core':
        return 'cyan';
      case 'Comfortable':
        return 'emerald';
      case 'Exploring':
        return 'amber';
      default:
        return 'neutral';
    }
  };

  const getProficiencyColor = (prof: string) => {
    switch (prof) {
      case 'Core':
        return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
      case 'Comfortable':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'Exploring':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      default:
        return 'text-slate-400 border-slate-700/30 bg-slate-800/50';
    }
  };

  return (
    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/60 hover:border-sky-500/30 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-800/90 text-sky-400 group-hover:text-white group-hover:bg-sky-500/20 transition-colors duration-200">
              <Icons.Code className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-100 text-base leading-snug group-hover:text-sky-400 transition-colors duration-200">
              {skill.name}
            </h4>
          </div>
          <Badge
            variant="custom"
            className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${getProficiencyColor(skill.proficiency)}`}
          >
            {skill.proficiency}
          </Badge>
        </div>

        {skill.description && (
          <p className="text-xs text-slate-400/90 mt-2 leading-relaxed tracking-wide">
            {skill.description}
          </p>
        )}
      </div>

      {skill.tags && skill.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/60 relative z-10">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50 group-hover:border-sky-500/30 group-hover:text-sky-300 group-hover:bg-slate-800 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};