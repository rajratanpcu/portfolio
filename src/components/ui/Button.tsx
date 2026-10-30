import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | string;
  size?: 'sm' | 'md' | 'lg' | string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  asLink = false,
  href,
  target,
  rel,
  download,
  className = '',
  disabled,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles: Record<string, string> = {
    sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
  };

  const variantStyles: Record<string, string> = {
    primary:
      'bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/20 active:scale-[0.98]',
    secondary:
      'bg-slate-800 hover:bg-slate-700/80 text-slate-100 border border-slate-700/80 hover:border-slate-600 active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-slate-800/40 text-slate-200 border border-slate-700 hover:border-sky-500/50 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white',
  };

  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const selectedVariant = variantStyles[variant] || variantStyles.primary;

  const combinedClass = `${baseStyles} ${selectedSize} ${selectedVariant} ${className}`;

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className={combinedClass}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} disabled={disabled} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
