import React from 'react';
import { projectsData } from '../../data/projects';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

export const AriaFlagshipSection: React.FC = () => {
  const aria = projectsData.find(p => p.id === 'aria');
  if (!aria) return null;

  const getStatusBadgeVariant = (type: string) => {
    switch (type) {
      case 'deployed': return 'emerald';
      case 'prototype': return 'amber';
      case 'architecture': return 'violet';
      default: return 'neutral';
    }
  };

  return (
    <section
      id="aria-flagship"
      className="py-24 border-t border-slate-800/80 relative overflow-hidden"
      aria-labelledby="aria-flagship-title"
    >
      {/* Background accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Flagship Project
          </span>
          <h2 id="aria-flagship-title" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ARIA: Agentic Release Intelligence Architecture
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A closed-loop multi-agent framework connecting production incidents to CI/CD pipelines
            through governed, attributable telemetry. Five specialized agents. One Attributable Feedback Protocol.
          </p>
        </div>

        {/* Primary Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {aria.liveDemoUrl && (
              <Button
                asLink
                href={aria.liveDemoUrl}
                target="_blank"
                variant="primary"
                size="lg"
                icon={<Icons.ExternalLink className="w-4 h-4" />}
              >
                Live Application
              </Button>
            )}
            {aria.githubUrl && (
              <Button
                asLink
                href={aria.githubUrl}
                target="_blank"
                variant="secondary"
                size="lg"
                icon={<Icons.Github className="w-4 h-4" />}
              >
                GitHub Repository
              </Button>
            )}
            {aria.documentationUrl && (
              <Button
                asLink
                href={aria.documentationUrl}
                target="_blank"
                variant="outline"
                size="lg"
                icon={<Icons.BookOpen className="w-4 h-4" />}
              >
                Documentation
              </Button>
            )}
            {aria.prototypeUrl && (
              <Button
                asLink
                href={aria.prototypeUrl}
                target="_blank"
                variant="ghost"
                size="lg"
                icon={<Icons.Layers className="w-4 h-4" />}
              >
                Interactive Prototype
              </Button>
            )}
          </div>
        </div>

        {/* Key Metrics / Status Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-violet-400 font-mono">5</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Specialized Agents</div>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono">AFP</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Attributable Feedback Protocol</div>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">HITL</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Human-in-the-Loop Gates</div>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">Sim</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Validated Scenarios</div>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 h-full">
            <h3 className="flex items-center gap-2 text-sky-400 font-semibold text-sm font-mono uppercase tracking-wider mb-4">
              <Icons.ShieldAlert className="w-5 h-5" />
              Problem Space
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {aria.problemStatement}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-slate-950/50 border border-slate-800/50">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Impact of Decoupled Incident Reviews</h4>
              <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                <li>Regression recurrence due to static CI test suites lacking production context</li>
                <li>Mean-time-to-detection (MTTD) inflated by manual root-cause correlation</li>
                <li>Knowledge silos between SRE, backend, and QA teams</li>
                <li>Release velocity constrained by fear of unknown production failure modes</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 h-full">
            <h3 className="flex items-center gap-2 text-emerald-400 font-semibold text-sm font-mono uppercase tracking-wider mb-4">
              <Icons.Lightbulb className="w-5 h-5" />
              Proposed Solution
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {aria.architectureOverview}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-slate-950/50 border border-emerald-500/20">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Core Innovation: Closed-Loop Intelligence</h4>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                <li>Production incidents directly reshape CI test prioritization via AFP</li>
                <li>Cryptographic lineage from stack trace → commit → test suite → risk score</li>
                <li>Human governance preserved at every critical release gate</li>
                <li>Simulation-validated before production infrastructure commitment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16">
          <h3 className="flex items-center gap-2 text-indigo-400 font-semibold text-sm font-mono uppercase tracking-wider mb-6 text-center">
            <Icons.Layers className="w-5 h-5" />
            Five-Agent Topology & Attributable Feedback Protocol
          </h3>
          <AriaAgentTopology agents={aria.agents || []} />
        </div>

        {/* Attributable Feedback Protocol Detail */}
        {aria.attributableFeedbackProtocol && (
          <div className="mb-16 p-6 rounded-2xl bg-slate-900/60 border border-indigo-500/30">
            <h3 className="flex items-center gap-2 text-indigo-400 font-semibold text-sm font-mono uppercase tracking-wider mb-4">
              <Icons.Link className="w-5 h-5" />
              Attributable Feedback Protocol (AFP)
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">{aria.attributableFeedbackProtocol.summary}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aria.attributableFeedbackProtocol.safeguards.map((safeguard, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Safeguard #{i + 1}
                  </div>
                  <p className="text-sm text-slate-300">{safeguard}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Simulated Scenarios */}
        {aria.simulatedScenarios && aria.simulatedScenarios.length > 0 && (
          <div className="mb-16">
            <h3 className="flex items-center gap-2 text-amber-400 font-semibold text-sm font-mono uppercase tracking-wider mb-6 text-center">
              <Icons.FlaskConical className="w-5 h-5" />
              Architecture Validation via Synthetic Scenarios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aria.simulatedScenarios.map((sim, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Scenario #{i + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Synthetic Validation</span>
                  </div>
                  <h4 className="font-semibold text-slate-100 mb-2">{sim.scenario}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{sim.observedEffect}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Implementation Breakdown */}
        <div className="mb-16">
          <h3 className="flex items-center gap-2 text-slate-300 font-semibold text-sm font-mono uppercase tracking-wider mb-6 text-center">
            <Icons.GitBranch className="w-5 h-5" />
            Implementation Breakdown: Implemented → In Progress → Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImplementationColumn
              title="Implemented"
              color="emerald"
              items={aria.implementationStatus.implemented}
              icon={Icons.CheckCircle}
            />
            <ImplementationColumn
              title="In Active Development"
              color="amber"
              items={aria.implementationStatus.inProgress}
              icon={Icons.Cpu}
            />
            <ImplementationColumn
              title="Future Roadmap"
              color="slate"
              items={aria.implementationStatus.planned}
              icon={Icons.ArrowRight}
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="flex items-center gap-2 text-slate-300 font-semibold text-sm font-mono uppercase tracking-wider mb-6 text-center">
            <Icons.Star className="w-5 h-5" />
            Key Architectural Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aria.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/30 transition-colors"
              >
                <Icons.CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="flex items-center gap-2 text-slate-300 font-semibold text-sm font-mono uppercase tracking-wider mb-4 text-center">
            <Icons.Cpu className="w-5 h-5" />
            Technology Stack & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {aria.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80 hover:border-violet-500/50 hover:text-violet-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-16 p-6 rounded-2xl bg-slate-900/60 border border-sky-500/20">
          <h3 className="flex items-center gap-2 text-sky-400 font-semibold text-sm font-mono uppercase tracking-wider mb-4">
            <Icons.BookOpen className="w-5 h-5" />
            Key Engineering Learnings
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {aria.keyLearnings.map((learning, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-sky-500">•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Future Roadmap */}
        <div className="mb-16">
          <h3 className="flex items-center gap-2 text-slate-300 font-semibold text-sm font-mono uppercase tracking-wider mb-6 text-center">
            <Icons.Target className="w-5 h-5" />
            Future Development Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aria.futureRoadmap.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <span className="text-violet-400 font-bold text-lg shrink-0">{i + 1}.</span>
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Explore the ARIA Architecture</h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Review the complete architecture, agent specifications, and simulation results on GitHub.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {aria.githubUrl && (
              <Button
                asLink
                href={aria.githubUrl}
                target="_blank"
                variant="primary"
                size="md"
                icon={<Icons.Github className="w-4 h-4" />}
              >
                View on GitHub
              </Button>
            )}
            {aria.liveDemoUrl && (
              <Button
                asLink
                href={aria.liveDemoUrl}
                target="_blank"
                variant="secondary"
                size="md"
                icon={<Icons.ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ImplementationColumnProps {
  title: string;
  color: 'emerald' | 'amber' | 'slate';
  items: string[];
  icon: (props: { className?: string }) => any;
}

const ImplementationColumn: React.FC<ImplementationColumnProps> = ({ title, color, items, icon: Icon }) => {
  const colorClasses = {
    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    slate: 'bg-slate-800/50 border-slate-700/40 text-slate-400',
  };
  const dotClasses = {
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    slate: 'bg-slate-500',
  };

  return (
    <div className={`p-5 rounded-xl ${colorClasses[color]} border`}>
      <div className="flex items-center gap-2 font-bold mb-4">
        <span className={`w-2 h-2 rounded-full ${dotClasses[color]}`} />
        <Icon className="w-4 h-4" />
        <span>{title}</span>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300">
            <span className={`text-${color}-500 shrink-0 mt-0.5`}>•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface AriaAgentTopologyProps {
  agents: Array<{
    code: string;
    name: string;
    role: string;
    responsibility: string;
  }>;
}

const AriaAgentTopology: React.FC<AriaAgentTopologyProps> = ({ agents }) => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-6">
      {/* Agents Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {agents.map((agent, i) => (
          <div
            key={agent.code}
            className="relative p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-all duration-300 group flex flex-col"
          >
            {/* Connection line between agents (except last) */}
            {i < agents.length - 1 && (
              <div className="absolute top-1/2 right-0 w-4 h-0.5 bg-gradient-to-r from-violet-500/30 to-transparent pointer-events-none" />
            )}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
                {agent.code}
              </span>
              <span className="text-[10px] font-mono text-slate-500">Node #{i + 1}</span>
            </div>
            <h5 className="text-xs font-bold text-slate-200 mb-1">{agent.name}</h5>
            <p className="text-[11px] font-medium text-violet-300/80 mb-2">{agent.role}</p>
            <p className="text-[11px] text-slate-400 leading-relaxed flex-1">{agent.responsibility}</p>
          </div>
        ))}
      </div>

      {/* Feedback Loop Explanation Bar */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-indigo-300">
          <span className="font-mono font-bold uppercase tracking-wider text-[11px]">Protocol:</span>
          <span>Attributable Feedback Protocol (AFP) connects IRA root cause telemetry → BIA risk scoring → COA test prioritization → RCA release gates → DCA canary monitoring</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded border border-emerald-800 shrink-0 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Human Approver Safeguard Active
        </span>
      </div>
    </div>
  );
};

export default AriaFlagshipSection;