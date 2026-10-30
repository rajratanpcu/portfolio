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
      <div className="space-y-6">
        {/* Certificate Visual Preview */}
        <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 p-2 shadow-2xl">
          <img
            src={certification.documentPath}
            alt={`${certification.title} Credential Certificate`}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Verification & Metadata */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="emerald" icon={<Icons.CheckCircle className="w-3.5 h-3.5" />}>
                Verified Credential
              </Badge>
              <span className="text-xs font-mono text-slate-400">
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
            <div className="text-xs font-mono text-slate-400">
              <span className="text-slate-500">Credential ID: </span>
              <span className="text-slate-200">{certification.credentialId}</span>
            </div>
          )}

          <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
            {certification.summary}
          </p>
        </div>

        {/* Verified Skills */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Demonstrated Competencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-800 text-sky-400 border border-slate-700"
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
