import React from 'react';
import { AgentSpec } from '../../types';

interface AriaArchitectureDiagramProps {
  agents?: AgentSpec[];
}

export const AriaArchitectureDiagram: React.FC<AriaArchitectureDiagramProps> = ({ agents = [] }) => {
  return (
    <div className="p-5 rounded-2xl bg-slate-950/80 border border-sky-500/30 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            ARIA: Closed-Loop Multi-Agent Architecture
          </h4>
          <p className="text-xs text-slate-400">
            Attributable Feedback Protocol (AFP) & Continuous Deployment Interconnect
          </p>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
          5-Agent Topology
        </span>
      </div>

      {/* Agents Flow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {agents.map((agent: AgentSpec, i: number) => (
          <div
            key={agent.code}
            className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {agent.code}
                </span>
                <span className="text-[10px] font-mono text-slate-500">Node #{i + 1}</span>
              </div>
              <h5 className="text-xs font-bold text-slate-200">{agent.name}</h5>
              <p className="text-[11px] font-medium text-sky-300/80 mt-0.5">{agent.role}</p>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                {agent.responsibility}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Loop Explanation Bar */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-indigo-300">
          <span className="font-mono font-bold uppercase tracking-wider text-[11px]">
            Protocol:
          </span>
          <span>Attributable Feedback Protocol (AFP) connects IRA root cause telemetry to BIA risk scoring</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800 shrink-0">
          Human Approver Safeguard Active
        </span>
      </div>
    </div>
  );
};
