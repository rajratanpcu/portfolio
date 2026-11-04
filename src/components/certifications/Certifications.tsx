import React, { useState } from 'react';
import { certificationsData } from '../../data/certifications';
import { Certification } from '../../types';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';
import { Badge } from '../ui/Badge';
import { Icons } from '../ui/Icons';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="mb-12 animate-in fade-in duration-200">
          <Badge variant="cyan" size="sm" icon={<Icons.Award className="w-3.5 h-3.5" />}>
            Industry Credentials
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Verified credentials in cloud infrastructure and artificial intelligence foundations.
          </p>
        </div>

        {/* Certifications Grid - improved spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              certification={cert}
              onView={(c) => setSelectedCert(c)}
            />
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          certification={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
};