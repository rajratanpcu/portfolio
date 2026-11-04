import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errors.message = 'Please write a brief message.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Build mailto link so user's client opens with verified fields
      const mailtoLink = `mailto:${profileData.social.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setIsPrepared(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      label: 'Email Address',
      value: profileData.social.email,
      href: `mailto:${profileData.social.email}`,
      icon: Icons.Mail,
      color: 'sky',
      external: false,
    },
    {
      label: 'Direct Phone',
      value: profileData.social.phone || '+91 6203683567',
      href: `tel:${profileData.social.phone || '+916203683567'}`,
      icon: Icons.CheckCircle,
      color: 'emerald',
      external: false,
    },
    {
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/rajratanpcu',
      href: profileData.social.linkedin,
      icon: Icons.Linkedin,
      color: 'indigo',
      external: true,
    },
    {
      label: 'GitHub Repositories',
      value: 'github.com/rajratanpcu',
      href: profileData.social.github,
      icon: Icons.Github,
      color: 'slate',
      external: true,
    },
    {
      label: 'LeetCode Practice',
      value: 'leetcode.com/u/Rajratan60',
      href: profileData.social.leetcode,
      icon: Icons.Code,
      color: 'amber',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - refined */}
        <div className="mb-14 animate-in fade-in duration-200">
          <Badge variant="cyan" size="sm" icon={<Icons.Mail className="w-3.5 h-3.5" />}>
            Get In Touch
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
            Contact & Collaboration
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Open to Java backend engineering internships, developer community collaborations, and technical discussions.
          </p>
        </div>

        {/* Content Grid - enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/60 space-y-5 relative overflow-hidden group hover:border-sky-500/30 transition-all duration-300">
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              <h3 className="text-lg font-bold text-white tracking-tight relative z-10">
                Direct Contact Channels
              </h3>

              <div className="space-y-3 relative z-10">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-current/40 hover:bg-slate-950 transition-all duration-300 group"
                  >
                    <div className={`p-2.5 rounded-lg bg-${link.color}-500/10 text-${link.color}-400 group-hover:bg-${link.color}-500 group-hover:text-slate-950 transition-colors duration-300 shrink-0`}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono text-slate-500/80 uppercase tracking-wider group-hover:text-${link.color}-400/80 transition-colors duration-200">
                        {link.label}
                      </div>
                      <div className="font-semibold text-slate-100 group-hover:text-current transition-colors duration-200 truncate">
                        {link.value}
                      </div>
                    </div>
                    {link.external && (
                      <Icons.ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-current transition-colors duration-200 shrink-0 mt-0.5" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Note - enhanced */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400/90 space-y-2 relative overflow-hidden group hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all duration-300">
              <div className="flex items-center gap-2 font-mono uppercase text-slate-500/80 font-bold">
                <Icons.MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Location & Availability:</span>
              </div>
              <p className="leading-relaxed tracking-wide">
                Based in <strong className="text-slate-200">Pune, Maharashtra, India (412106)</strong>. Actively seeking Java Backend Engineering Internships, co-ops, and student developer opportunities.
              </p>
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                <Badge variant="emerald" size="xs" icon={<Icons.CheckCircle className="w-2.5 h-2.5" />}>
                  Open to Relocation
                </Badge>
                <Badge variant="cyan" size="xs" icon={<Icons.Clock className="w-2.5 h-2.5" />}>
                  Available Immediately
                </Badge>
                <Badge variant="indigo" size="xs" icon={<Icons.Globe className="w-2.5 h-2.5" />}>
                  Remote / Hybrid
                </Badge>
              </div>
            </div>

            {/* Quick Stats - new */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'CGPA', value: '7.71/10', icon: Icons.Award, color: 'amber' },
                { label: 'Year', value: '2025–2029', icon: Icons.Calendar, color: 'sky' },
                { label: 'Projects', value: '6+', icon: Icons.GitBranch, color: 'emerald' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 text-center"
                >
                  <div className={`p-2 rounded-lg bg-${stat.color}-500/10 text-${stat.color}-400 mx-auto mb-2 w-8 h-8`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-white text-sm">{stat.value}</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800/60 shadow-2xl shadow-black/30 space-y-6 relative overflow-hidden"
            >
              {/* Subtle form accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 opacity-60" aria-hidden="true" />

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400/80 mt-1">
                  Fills and launches your default mail client directly addressed to Raj Ratan ({profileData.social.email}).
                </p>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300/80 font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? 'name-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {formErrors.name && (
                    <p id="name-error" className="text-xs text-red-400 font-medium flex items-center gap-1" role="alert">
                      <Icons.AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300/80 font-medium">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-xs text-red-400 font-medium flex items-center gap-1" role="alert">
                      <Icons.AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5 relative z-10">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300/80 font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Java Backend Internship / Technical Discussion"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
                  aria-invalid={!!formErrors.subject}
                  aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                  disabled={isSubmitting}
                />
                {formErrors.subject && (
                  <p id="subject-error" className="text-xs text-red-400 font-medium flex items-center gap-1" role="alert">
                    <Icons.AlertCircle className="w-3.5 h-3.5" />
                    {formErrors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5 relative z-10">
                <label htmlFor="message" className="text-xs font-mono text-slate-300/80 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Raj, I reviewed your SANCHAY and SANJEEV backend projects and would like to discuss..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none transition-all duration-200"
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                  disabled={isSubmitting}
                />
                {formErrors.message && (
                  <p id="message-error" className="text-xs text-red-400 font-medium flex items-center gap-1" role="alert">
                    <Icons.AlertCircle className="w-3.5 h-3.5" />
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Icons.Send className="w-4 h-4" />}
                  loading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Opening Email Client...' : 'Open Email Client'}
                </Button>

                {isPrepared && (
                  <div className="animate-in fade-in duration-200 flex items-center gap-2 text-sm text-emerald-400 font-medium">
                    <Icons.CheckCircle className="w-5 h-5" />
                    <span>Email client launched successfully!</span>
                  </div>
                )}

                <div className="text-xs text-slate-500/80 shrink-0">
                  <Icons.Shield className="w-3.5 h-3.5 inline-block mr-1" />
                  No data stored — opens your local mail client only
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};