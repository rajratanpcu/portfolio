import React from 'react';
import { Certification } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

interface CertificateCardProps {
  certification: Certification;
  onView: (cert: Certification) => void;
}

const getIssuerLogo = (issuer: string): React.ReactNode => {
  switch (issuer.toLowerCase()) {
    case 'oracle':
      return (
        <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      );
    case 'red hat':
    case 'redhat':
      return (
        <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.52 14H6.48c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h11.04c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm0-4H6.48c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h11.04c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
        </svg>
      );
    case 'coursera':
      return (
        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-1.4 0-2.5-.9-2.5-2s1.1-2 2.5-2 2.5.9 2.5 2-1.1 2-2.5 2zm-9 0c-1.4 0-2.5-.9-2.5-2s1.1-2 2.5-2 2.5.9 2.5 2-1.1 2-2.5 2z"/>
        </svg>
      );
    default:
      return <Icons.Award className="w-5 h-5 text-sky-400" />;
  }
};

export const CertificateCard: React.FC<CertificateCardProps> = ({ certification, onView }) => {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20 relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      <a
        href={certification.documentPath}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${certification.title} certificate document`}
        className="block h-40 overflow-hidden border-b border-slate-800 bg-slate-950 p-3"
      >
        <img
          src={certification.documentPath}
          alt={`${certification.title} certificate preview`}
          className="h-full w-full object-contain opacity-90 transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden h-full w-full flex items-center justify-center bg-slate-900 text-slate-500 text-xs font-mono">
          Certificate Preview
        </div>
      </a>

      <div className="space-y-4 p-6 relative z-10">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="emerald" size="sm" icon={<Icons.CheckCircle className="w-3.5 h-3.5" />}>
            Verified Credential
          </Badge>
          <span className="text-xs font-mono text-slate-500/80">{certification.issueDate}</span>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            {getIssuerLogo(certification.issuer)}
            <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors duration-200 tracking-tight leading-snug">
              {certification.title}
            </h3>
          </div>
          <p className="text-xs text-sky-400/80 font-medium mt-1">
            Issuing Body: {certification.issuer}
          </p>
          {certification.trainingDuration && (
            <p className="text-xs text-amber-400/80 font-medium mt-1 flex items-center gap-1">
              <Icons.Clock className="w-3.5 h-3.5" />
              Training Duration: {certification.trainingDuration}
            </p>
          )}
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

      <div className="pt-4 mt-4 border-t border-slate-800/60 flex flex-col gap-3 relative z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onView(certification)}
          icon={<Icons.Eye className="w-4 h-4" />}
          className="w-full"
        >
          View Credential Details
        </Button>

        <div className="flex flex-wrap items-center gap-2">
        {certification.documentPath && (
          <a
            href={certification.documentPath}
            download
            aria-label={`Download ${certification.title} certificate`}
            className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1 font-mono transition-colors duration-200"
          >
            <Icons.Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </a>
        )}
        {certification.verificationUrl && (
          <a
            href={certification.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${certification.title} on ${certification.issuer}`}
            className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1 font-mono transition-colors duration-200"
          >
            <span>Verify Credential</span>
            <Icons.ExternalLink className="w-3.5 w-3.5" />
          </a>
        )}
        {certification.linkedinUrl && (
          <a
            href={certification.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certification.title} on LinkedIn`}
            className="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 font-mono transition-colors duration-200"
          >
            <Icons.Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
        )}
        </div>
      </div>
    </div>
  );
};