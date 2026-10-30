import React, { useEffect, useRef } from 'react';
import { Icons } from './Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = '2xl',
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles: Record<string, string> = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-xl',
    xl: 'max-w-2xl',
    '2xl': 'max-w-4xl',
    '4xl': 'max-w-5xl',
  };

  const selectedMaxWidth = maxWidthStyles[maxWidth] || maxWidthStyles['2xl'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className={`relative w-full ${selectedMaxWidth} my-8 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-sky-950/30 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-sm text-slate-400 font-medium">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-300 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
