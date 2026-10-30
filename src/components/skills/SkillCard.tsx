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

  return (
    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-slate-800 text-sky-400 group-hover:text-white group-hover:bg-sky-500/20 transition-colors">
              <Icons.Code className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-100 text-base">{skill.name}</h4>
          </div>
          <Badge variant={getProficiencyVariant(skill.proficiency)} size="sm">
            {skill.proficiency}
          </Badge>
        </div>

        {skill.description && (
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            {skill.description}
          </p>
        )}
      </div>

      {skill.tags && skill.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/60">
          {skill.tags.map((tag) => (
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
  );
};
