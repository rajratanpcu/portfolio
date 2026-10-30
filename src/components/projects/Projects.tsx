import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Multi-Agent', 'Enterprise ERP', 'Optimization Platforms'];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Badge variant="cyan" size="sm" icon={<Icons.Layers className="w-3.5 h-3.5" />}>
              Architecture & Systems
            </Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Software Projects
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              Real engineering prototypes, multi-agent frameworks, and business ERP systems with clear separation of implemented versus planned features.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Modal View for Project Deep Dive */}
        <ProjectDetailModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};
