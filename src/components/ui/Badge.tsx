import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'neutral' | string;
  size?: 'sm' | 'md' | string;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
  icon,
}) => {
  const variantStyles: Record<string, string> = {
    cyan: 'bg-sky-500/10 text-sky-400 border-sky-500/20 hover:border-sky-500/40',
    violet: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/40',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:border-amber-500/40',
    neutral: 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:border-slate-600',
  };

  const sizeStyles: Record<string, string> = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full font-medium',
    md: 'text-xs sm:text-sm px-3 py-1 rounded-full font-medium',
  };

  const selectedVariant = variantStyles[variant] || variantStyles.neutral;
  const selectedSize = sizeStyles[size] || sizeStyles.md;

  return (
    <span
      className={`inline-flex items-center gap-1.5 border transition-colors ${selectedVariant} ${selectedSize} ${className}`}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
