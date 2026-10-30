import React from 'react';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';
import { AriaArchitectureDiagram } from './AriaArchitectureDiagram';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.subtitle}
      maxWidth="4xl"
    >
      <div className="space-y-8">
        {/* Top Badges & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={getStatusBadgeVariant(project.statusType)}>
              {project.status}
            </Badge>
            <Badge variant="cyan">{project.category}</Badge>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Button
                asLink
                href={project.githubUrl}
                target="_blank"
                variant="secondary"
                size="sm"
                icon={<Icons.Github className="w-4 h-4" />}
              >
                GitHub Repo
              </Button>
            )}

            {project.liveDemoUrl && (
              <Button
                asLink
                href={project.liveDemoUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={<Icons.ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="space-y-2">
          <h4 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
            <Icons.ShieldCheck className="w-4 h-4" />
            Problem Statement
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
            {project.problemStatement}
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="space-y-2">
          <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
            <Icons.Layers className="w-4 h-4" />
            Architecture Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.architectureOverview}
          </p>
        </div>

        {/* Specialized ARIA Agents Visualizer */}
        {project.id === 'aria' && project.agents && (
          <AriaArchitectureDiagram agents={project.agents} />
        )}

        {/* Attributable Feedback Protocol for ARIA */}
        {project.attributableFeedbackProtocol && (
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
              Attributable Feedback Protocol (AFP) Safeguards
            </h4>
            <p className="text-xs text-slate-300">
              {project.attributableFeedbackProtocol.summary}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
              {project.attributableFeedbackProtocol.safeguards.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Simulated Scenarios for ARIA */}
        {project.simulatedScenarios && project.simulatedScenarios.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                Simulated Architecture Validation Scenarios
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Synthetic Simulation Data
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.simulatedScenarios.map((sim, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                  <div className="font-semibold text-slate-200 mb-1">{sim.scenario}</div>
                  <div className="text-slate-400 leading-relaxed">{sim.observedEffect}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold">
            Key Architectural Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
              >
                <Icons.CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rigorous Implementation Breakdown */}
        <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-bold">
            Real Implementation Breakdown
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Implemented */}
            <div className="space-y-2 p-3 rounded-lg bg-slate-900/80 border border-emerald-500/20">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Implemented</span>
              </div>
              <ul className="space-y-1.5 text-slate-300">
                {project.implementationStatus.implemented.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In Progress */}
            <div className="space-y-2 p-3 rounded-lg bg-slate-900/80 border border-amber-500/20">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>In Active Development</span>
              </div>
              <ul className="space-y-1.5 text-slate-300">
                {project.implementationStatus.inProgress.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planned */}
            <div className="space-y-2 p-3 rounded-lg bg-slate-900/80 border border-slate-700/40">
              <div className="flex items-center gap-1.5 font-bold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span>Future Roadmap</span>
              </div>
              <ul className="space-y-1.5 text-slate-400">
                {project.implementationStatus.planned.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Technology Stack & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* My Role and Contributions */}
        <div className="space-y-2">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold">
            My Contributions & Engineering Role
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.roleAndContributions.map((role, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icons.ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Learnings */}
        <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
            Key Engineering Learnings
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            {project.keyLearnings.map((learning, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-sky-500">•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
