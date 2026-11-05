import React from 'react';

interface StatusBadgeProps {
  isAvailable?: boolean;
  roleTarget?: string;
  location?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  isAvailable = true,
  roleTarget = 'Seeking SDE Internships / Co-ops',
  location = 'Pune, India (Hybrid/Remote)',
}) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-3 py-2">
      <span className="relative flex h-2.5 w-2.5">
        {isAvailable && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isAvailable ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />
      </span>
      <span className="text-xs sm:text-sm font-medium text-slate-300">
        <span className="text-slate-100 font-semibold">{roleTarget}</span>
        <span className="hidden sm:inline text-slate-500 mx-1.5">/</span>
        <span className="hidden sm:inline text-slate-400">{location}</span>
      </span>
    </div>
  );
};
