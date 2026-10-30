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
    <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="emerald" size="sm" icon={<Icons.CheckCircle className="w-3.5 h-3.5" />}>
            Verified Credential
          </Badge>
          <span className="text-xs font-mono text-slate-500">{certification.issueDate}</span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">
            {certification.title}
          </h3>
          <p className="text-xs text-sky-400 font-medium mt-1">
            Issuing Body: {certification.issuer}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {certification.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {certification.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
            >
              {skill}
            </span>
          ))}
          {certification.skills.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-500">
              +{certification.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
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
            className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1 font-mono transition-colors"
          >
            <span>Verify</span>
            <Icons.ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
