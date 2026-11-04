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
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        </div>

        {/* Verification & Metadata - refined */}
        <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="emerald" icon={<Icons.CheckCircle className="w-3.5 h-3.5" />}>
                Verified Credential
              </Badge>
              <span className="text-xs font-mono text-slate-400/80">
                Issued: {certification.issueDate}
              </span>
            </div>

            {certification.verificationUrl && (
              <Button
                asLink
                href={certification.verificationUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={<Icons.ExternalLink className="w-3.5 h-3.5" />}
              >
                Verify on Oracle
              </Button>
            )}
          </div>

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