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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Multi-Agent':
        return 'text-violet-400 border-violet-500/30 bg-violet-500/10';
      case 'Enterprise ERP':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'Optimization Platforms':
        return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
      case 'AI Systems & Platforms':
        return 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10';
      default:
        return 'text-slate-400 border-slate-700/30 bg-slate-800/50';
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl shadow-black/30">
      {/* Project Thumbnail / Visual Preview - improved */}
      {(project.screenshots && project.screenshots.length > 0) && (
        <div className="relative h-44 bg-slate-950/50 overflow-hidden">
          <img
            src={project.screenshots[0]}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-1.5">
            <Badge variant={getStatusBadgeVariant(project.statusType)} size="sm">
              {project.status}
            </Badge>
            <Badge variant="custom" className={`text-xs px-2 py-0.5 rounded-full font-medium ${getCategoryColor(project.category)}`}>
              {project.category}
            </Badge>
          </div>
          {/* Hover indicator */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-3 py-1.5 bg-slate-950/90 backdrop-blur-sm border border-slate-800 rounded-lg text-xs font-mono text-sky-400 flex items-center gap-1.5">
              <Icons.Eye className="w-3 h-3" />
              View Details
            </span>
          </div>
        </div>
      )}

      <div className="p-6 space-y-4 flex-1">
        {/* Title & Subtitle - refined typography */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors duration-200 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-sky-400/80 font-medium mt-1.5 line-clamp-1">{project.subtitle}</p>
        </div>

        {/* Short Description - better readability */}
        <p className="text-sm text-slate-300/90 line-clamp-3 leading-relaxed tracking-wide">
          {project.shortDescription}
        </p>

        {/* Tech Stack Preview - refined */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50 group-hover:border-sky-500/30 group-hover:text-sky-300 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-500">
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>

        {/* Key Features Preview - improved visual treatment */}
        <div className="pt-3 border-t border-slate-800/60">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5">Key Capabilities</h4>
          <ul className="space-y-2">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 group-hover:text-slate-200 transition-colors duration-200">
                <Icons.CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1 leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Footer - refined */}
      <div className="p-4 sm:px-6 pb-6 bg-slate-950/50 border-t border-slate-800/60 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => onViewDetails(project)}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors duration-200 flex-1 text-left group-hover:gap-2"
          >
            <span>Architecture & Details</span>
            <Icons.ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

          <div className="flex items-center gap-1">
            {project.documentationUrl && (
              <a
                href={project.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Documentation for ${project.title}`}
                className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800/50 rounded-xl transition-all duration-200 border border-slate-800 hover:border-indigo-500/30"
                title="Documentation"
              >
                <Icons.BookOpen className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200 border border-slate-800 hover:border-slate-700"
                title="GitHub Repository"
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
                className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50 rounded-xl transition-all duration-200 border border-slate-800 hover:border-emerald-500/30"
                title="Live Demo"
              >
                <Icons.ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.prototypeUrl && (
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Interactive prototype for ${project.title}`}
                className="p-2 text-slate-400 hover:text-violet-400 hover:bg-slate-800/50 rounded-xl transition-all duration-200 border border-slate-800 hover:border-violet-500/30"
                title="Interactive Prototype"
              >
                <Icons.Layers className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};