import React from 'react';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const getStatusBadgeVariant = (type: string) => {
    switch (type) {
      case 'deployed':
        return 'emerald';
      case 'prototype':
        return 'amber';
      case 'architecture':
        return 'violet';
      default:
        return 'neutral';
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/20">
      <div className="p-6 space-y-4">
        {/* Header tags & status */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant={getStatusBadgeVariant(project.statusType)} size="sm">
            {project.status}
          </Badge>
          <span className="text-[11px] font-mono text-slate-500">{project.category}</span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs text-sky-400/90 font-medium mt-1">{project.subtitle}</p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-500">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:px-6 bg-slate-950/50 border-t border-slate-800/60 flex items-center justify-between gap-2">
        <button
          onClick={() => onViewDetails(project)}
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
        >
          <span>Architecture & Details</span>
          <Icons.ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            >
              <Icons.Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="p-1.5 text-slate-400 hover:text-emerald-400 rounded hover:bg-slate-800 transition-colors"
            >
              <Icons.ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
