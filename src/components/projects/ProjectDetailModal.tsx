import React, { useState } from 'react';
import { Project, ArchitectureDiagram, ChallengeSolution, ImplementationBreakdown } from '../../types';
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

// Diagram visualizer without external dependencies
const DiagramVisualizer: React.FC<{ diagram: ArchitectureDiagram; index: number }> = ({ diagram, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(diagram.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="font-semibold text-slate-200 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            {diagram.title}
          </h5>
          {diagram.description && (
            <p className="text-xs text-slate-400 mt-1">{diagram.description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 uppercase">
            {diagram.type}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
            title="Copy diagram source"
          >
            {copied ? (
              <>
                <Icons.CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Icons.FileText className="w-3.5 h-3.5" />
                <span>Source</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="relative group">
        <pre className="p-4 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-80 select-all">
          {diagram.content}
        </pre>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono bg-slate-950/90 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
            Mermaid DSL
          </span>
        </div>
      </div>
    </div>
  );
};

// Screenshot gallery with zoom/lightbox
const ScreenshotGallery: React.FC<{ screenshots: string[]; title: string }> = ({ screenshots, title }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!screenshots.length) return null;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
        <Icons.Image className="w-4 h-4 text-sky-400" />
        Project Screenshots & Architecture Diagrams
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((screenshot, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group cursor-pointer relative"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={screenshot}
              alt={`${title} screenshot ${i + 1}`}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-mono text-sky-400 flex items-center gap-1">
                <Icons.Eye className="w-3.5 h-3.5" />
                Click to expand
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot zoom"
        >
          <button
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors rounded-xl bg-slate-900/50"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            aria-label="Close zoom"
          >
            <Icons.X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-6 p-3 text-slate-400 hover:text-white transition-colors rounded-xl bg-slate-900/50 hidden sm:block"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => prev === null ? null : ((prev! - 1 + screenshots.length) % screenshots.length)); }}
            aria-label="Previous"
          >
            <Icons.ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-6 p-3 text-slate-400 hover:text-white transition-colors rounded-xl bg-slate-900/50 hidden sm:block"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => prev === null ? null : ((prev! + 1) % screenshots.length)); }}
            aria-label="Next"
          >
            <Icons.ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-[90vw] max-h-[85vh] relative">
            <img
              src={screenshots[selectedIndex]}
              alt={`${title} screenshot ${selectedIndex + 1} (zoomed)`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="mt-3 text-center text-sm text-slate-400">
              {selectedIndex + 1} / {screenshots.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Challenge/Solution card
const ChallengeSolutionCard: React.FC<{ item: ChallengeSolution; index: number }> = ({ item, index }) => (
  <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/60 hover:border-sky-500/30 transition-colors duration-300">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
        <Icons.HelpCircle className="w-5 h-5 text-sky-400" />
      </div>
      <div className="flex-1">
        <h5 className="font-semibold text-slate-100 text-sm">Challenge</h5>
        <p className="text-xs text-slate-400 mt-0.5">{item.challenge}</p>
      </div>
    </div>
    <div className="flex items-start gap-3 pt-3 border-t border-slate-800/60">
      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
        <Icons.Lightbulb className="w-5 h-5 text-emerald-400" />
      </div>
      <div className="flex-1">
        <h5 className="font-semibold text-slate-100 text-sm">Solution</h5>
        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.solution}</p>
        {item.technicalDetail && (
          <details className="mt-2 group">
            <summary className="text-xs text-sky-400/80 font-mono cursor-pointer flex items-center gap-1 hover:text-sky-300">
              <Icons.ChevronRight className="w-3 h-3 transition-transform duration-200 group-open:rotate-90" />
              Technical Details
            </summary>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed font-mono bg-slate-950 p-3 rounded border border-slate-800">{item.technicalDetail}</p>
          </details>
        )}
      </div>
    </div>
  </div>
);

// Implementation breakdown card
const ImplementationBreakdownCard: React.FC<{ item: ImplementationBreakdown; index: number }> = ({ item, index }) => {
  const complexityColors = {
    Low: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    Medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    High: 'text-red-400 bg-red-500/10 border-red-500/20',
  };
  const colorClass = complexityColors[item.complexity || 'Medium'];

  return (
    <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/60 hover:border-sky-500/30 transition-colors duration-300">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <h5 className="font-semibold text-slate-100 text-sm">{item.area}</h5>
          {item.files && item.files.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {item.files.slice(0, 3).map((f, i) => (
                <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 border border-slate-800">{f}</span>
              ))}
              {item.files.length > 3 && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 border border-slate-800">+{item.files.length - 3}</span>
              )}
            </div>
          )}
        </div>
        {item.complexity && (
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${colorClass} shrink-0`}>
            {item.complexity}
          </span>
        )}
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
    </div>
  );
};

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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.subtitle}
      maxWidth="6xl"
    >
      <div className="space-y-8 animate-in fade-in duration-200">
        {/* Top Badges & Actions - refined */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={getStatusBadgeVariant(project.statusType)}>
              {project.status}
            </Badge>
            <Badge variant="custom" className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${getCategoryColor(project.category)}`}>
              {project.category}
            </Badge>
            {project.accentColors && (
              <div
                className="w-6 h-6 rounded-full border border-slate-700"
                style={{
                  background: project.accentColors.gradient,
                }}
                title="Project accent colors"
              />
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.documentationUrl && (
              <Button
                asLink
                href={project.documentationUrl}
                target="_blank"
                variant="ghost"
                size="sm"
                icon={<Icons.BookOpen className="w-4 h-4" />}
              >
                Docs
              </Button>
            )}
            {project.prototypeUrl && (
              <Button
                asLink
                href={project.prototypeUrl}
                target="_blank"
                variant="ghost"
                size="sm"
                icon={<Icons.Layers className="w-4 h-4" />}
              >
                Prototype
              </Button>
            )}
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

        {/* Accent Header Bar */}
        {project.accentColors && (
          <div
            className="h-1 rounded-t-xl"
            style={{ background: project.accentColors.gradient }}
            aria-hidden="true"
          />
        )}

        {/* Screenshots Gallery - enhanced with zoom */}
        <ScreenshotGallery screenshots={project.screenshots || []} title={project.title} />

        {/* Architecture Diagrams */}
        {project.architectureDiagrams && project.architectureDiagrams.length > 0 && (
          <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-300 delay-50">
            <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
              <Icons.Layers className="w-4 h-4" />
              Architecture Diagrams & Schemas
            </h4>
            <div className="space-y-6">
              {project.architectureDiagrams.map((diagram, i) => (
                <DiagramVisualizer key={i} diagram={diagram} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Problem Statement - refined */}
        <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          <h4 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
            <Icons.ShieldAlert className="w-4 h-4" />
            Problem Statement
          </h4>
          <div className="bg-slate-950/40 p-5 rounded-xl border border-slate-800/80">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed tracking-wide">
              {project.problemStatement}
            </p>
          </div>
        </div>

        {/* Architecture Overview - refined */}
        <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300 delay-50">
          <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
            <Icons.Layers className="w-4 h-4" />
            Architecture Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed tracking-wide">
            {project.architectureOverview}
          </p>
        </div>

        {/* Specialized ARIA Agents Visualizer */}
        {project.id === 'aria' && project.agents && (
          <div className="animate-in fade-in duration-300 delay-100">
            <AriaArchitectureDiagram agents={project.agents} />
          </div>
        )}

        {/* Attributable Feedback Protocol for ARIA */}
        {project.attributableFeedbackProtocol && (
          <div className="p-5 rounded-xl bg-slate-900/80 border border-sky-500/20 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
              <Icons.Link className="w-4 h-4" />
              Attributable Feedback Protocol (AFP) Safeguards
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.attributableFeedbackProtocol.summary}
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              {project.attributableFeedbackProtocol.safeguards.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sky-500 shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Simulated Scenarios for ARIA */}
        {project.simulatedScenarios && project.simulatedScenarios.length > 0 && (
          <div className="p-5 rounded-xl bg-slate-950/80 border border-amber-500/20 space-y-4 animate-in slide-in-from-bottom-2 duration-300 delay-50">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <Icons.FlaskConical className="w-3.5 h-3.5" />
                Simulated Architecture Validation Scenarios
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Synthetic Simulation Data
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.simulatedScenarios.map((sim, i) => (
                <div key={i} className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-sm">
                  <div className="font-semibold text-slate-100 mb-1.5">{sim.scenario}</div>
                  <div className="text-slate-400 leading-relaxed">{sim.observedEffect}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Solutions */}
        {project.challengesSolutions && project.challengesSolutions.length > 0 && (
          <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-300 delay-100">
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <Icons.Lightbulb className="w-4 h-4" />
              Engineering Challenges & Solutions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.challengesSolutions.map((item, i) => (
                <ChallengeSolutionCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Key Features - refined */}
        <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300 delay-150">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
            <Icons.Star className="w-4 h-4 text-amber-400" />
            Key Architectural Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 text-sm text-slate-300 group hover:border-sky-500/30 hover:bg-slate-950/60 transition-all duration-200"
              >
                <Icons.CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Breakdown - enhanced with detailed cards */}
        {project.implementationBreakdown && project.implementationBreakdown.length > 0 ? (
          <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-5 animate-in slide-in-from-bottom-2 duration-300 delay-200">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-1.5">
              <Icons.GitBranch className="w-4 h-4 text-violet-400" />
              Detailed Implementation Breakdown
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.implementationBreakdown.map((item, i) => (
                <ImplementationBreakdownCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        ) : (
          // Fallback to original implementation status
          <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-5 animate-in slide-in-from-bottom-2 duration-300 delay-200">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-1.5">
              <Icons.GitBranch className="w-4 h-4 text-violet-400" />
              Implementation Status
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
              <div className="space-y-3 p-4 rounded-lg bg-slate-900/80 border border-emerald-500/20">
                <div className="flex items-center gap-2 font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Implemented</span>
                </div>
                <ul className="space-y-2 text-slate-300">
                  {project.implementationStatus.implemented.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 p-4 rounded-lg bg-slate-900/80 border border-amber-500/20">
                <div className="flex items-center gap-2 font-bold text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>In Active Development</span>
                </div>
                <ul className="space-y-2 text-slate-300">
                  {project.implementationStatus.inProgress.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 p-4 rounded-lg bg-slate-900/80 border border-slate-700/40">
                <div className="flex items-center gap-2 font-bold text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  <span>Future Roadmap</span>
                </div>
                <ul className="space-y-2 text-slate-400">
                  {project.implementationStatus.planned.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-600 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Chips - refined */}
        <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300 delay-250">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
            <Icons.Cpu className="w-4 h-4 text-indigo-400" />
            Technology Stack & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80 hover:border-sky-500/50 hover:text-sky-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* My Role and Contributions - refined */}
        <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300 delay-300">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
            <Icons.UserCheck className="w-4 h-4 text-emerald-400" />
            My Contributions & Engineering Role
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {project.roleAndContributions.map((role, i) => (
              <li key={i} className="flex items-start gap-3 leading-relaxed">
                <Icons.ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Learnings - refined */}
        <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-3 animate-in slide-in-from-bottom-2 duration-300 delay-350">
          <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
            <Icons.BookOpen className="w-4 h-4" />
            Key Engineering Learnings
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.keyLearnings.map((learning, i) => (
              <li key={i} className="flex items-start gap-3 leading-relaxed">
                <span className="text-sky-500 shrink-0">•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Future Roadmap - refined */}
        <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300 delay-400">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
            <Icons.Target className="w-4 h-4 text-violet-400" />
            Future Development Roadmap
          </h4>
          <ul className="space-y-3 text-sm">
            {project.futureRoadmap.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                <span className="text-violet-400 font-bold shrink-0 w-6 text-right">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};