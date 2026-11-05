import React from 'react';
import { Certification } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

interface CertificateModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const getIssuerLogo = (issuer: string): React.ReactNode => {
  switch (issuer.toLowerCase()) {
    case 'oracle':
      return (
        <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      );
    case 'red hat':
    case 'redhat':
      return (
        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.52 14H6.48c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h11.04c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm0-4H6.48c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h11.04c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
        </svg>
      );
    case 'coursera':
      return (
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-1.4 0-2.5-.9-2.5-2s1.1-2 2.5-2 2.5.9 2.5 2-1.1 2-2.5 2zm-9 0c-1.4 0-2.5-.9-2.5-2s1.1-2 2.5-2 2.5.9 2.5 2-1.1 2-2.5 2z"/>
        </svg>
      );
    default:
      return <Icons.Award className="w-7 h-7 text-sky-400" />;
  }
};

const getVerificationButtonText = (issuer: string): string => {
  switch (issuer.toLowerCase()) {
    case 'oracle':
      return 'Verify on Oracle';
    case 'red hat':
    case 'redhat':
      return 'Verify on Credly';
    case 'coursera':
      return 'Verify on Coursera';
    default:
      return 'Verify Credential';
  }
};

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  isOpen,
  onClose,
}) => {
  if (!certification) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={certification.title}
      subtitle={`Issued by ${certification.issuer} • ${certification.issueDate}`}
      maxWidth="2xl"
    >
      <div className="space-y-6 animate-in fade-in duration-200">
        {/* Certificate Visual Preview - enhanced */}
        <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 p-2 shadow-2xl shadow-black/30 relative">
          <img
            src={certification.documentPath}
            alt={`${certification.title} Credential Certificate`}
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex items-center justify-center h-64 bg-slate-900 text-slate-500 text-center p-4">
            <div>
              <Icons.FileText className="w-16 h-16 mx-auto mb-4 text-slate-600" />
              <p className="text-sm">Certificate Preview</p>
              <p className="text-xs text-slate-500">Image unavailable</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        </div>

        {/* Verification & Metadata - refined */}
        <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {getIssuerLogo(certification.issuer)}
              <div className="flex items-center gap-2">
                <Badge variant="emerald" icon={<Icons.CheckCircle className="w-3.5 h-3.5" />}>
                  Verified Credential
                </Badge>
                <span className="text-xs font-mono text-slate-400/80">
                  Issued: {certification.issueDate}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {certification.verificationUrl && (
                <Button
                  asLink
                  href={certification.verificationUrl}
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon={<Icons.ExternalLink className="w-3.5 h-3.5" />}
                >
                  {getVerificationButtonText(certification.issuer)}
                </Button>
              )}
              {certification.linkedinUrl && (
                <Button
                  asLink
                  href={certification.linkedinUrl}
                  target="_blank"
                  variant="secondary"
                  size="sm"
                  icon={<Icons.Linkedin className="w-3.5 h-3.5" />}
                >
                  View on LinkedIn
                </Button>
              )}
            </div>
          </div>

          {certification.trainingDuration && (
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/60 flex items-center gap-2">
              <Icons.Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Training Duration: </span>
                {certification.trainingDuration}
              </span>
            </div>
          )}

          {certification.credentialId && (
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/60">
              <div className="text-xs font-mono text-slate-400/80 flex items-center gap-2">
                <Icons.Fingerprint className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-500">Credential ID: </span>
                <span className="text-slate-100 font-mono break-all">{certification.credentialId}</span>
              </div>
            </div>
          )}

          <p className="text-sm text-slate-300/90 leading-relaxed tracking-wide pt-2 border-t border-slate-800/60">
            {certification.summary}
          </p>
        </div>

        {/* Verified Skills - enhanced */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400/80 font-semibold flex items-center gap-1.5">
            <Icons.Award className="w-4 h-4 text-amber-400" />
            Demonstrated Competencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/90 text-sky-400/90 border border-slate-700/50 hover:border-sky-500/30 hover:bg-slate-800 hover:text-sky-300 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};