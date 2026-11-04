import React from 'react';
import { Certification } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

interface CertificateCardProps {
  certification: Certification;
  onView: (cert: Certification) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certification, onView }) => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20 relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="emerald" size="sm" icon={<Icons.CheckCircle className="w-3.5 h-3.5" />}>
            Verified Credential
          </Badge>
          <span className="text-xs font-mono text-slate-500/80">{certification.issueDate}</span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors duration-200 tracking-tight leading-snug">
            {certification.title}
          </h3>
          <p className="text-xs text-sky-400/80 font-medium mt-1">
            Issuing Body: {certification.issuer}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-400/90 line-clamp-3 leading-relaxed tracking-wide">
          {certification.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {certification.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50 group-hover:border-sky-500/30 group-hover:text-sky-300 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
          {certification.skills.length > 4 && (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/40 text-slate-500">
              +{certification.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between gap-2 relative z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onView(certification)}
          icon={<Icons.Eye className="w-4 h-4" />}
        >
          View Credential
        </Button>

        {certification.verificationUrl && (
          <a
            href={certification.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${certification.title} on ${certification.issuer}`}
            className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1 font-mono transition-colors duration-200"
          >
            <span>Verify</span>
            <Icons.ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};