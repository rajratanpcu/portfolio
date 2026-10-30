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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="cyan" size="sm" icon={<Icons.Mail className="w-3.5 h-3.5" />}>
            Get In Touch
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Collaboration
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Open to Java backend engineering internships, developer community collaborations, and technical discussions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <a
                  href={`mailto:${profileData.social.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shrink-0">
                    <Icons.Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">Email Address</div>
                    <div className="font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">
                      {profileData.social.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                {profileData.social.phone && (
                  <a
                    href={`tel:${profileData.social.phone}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-950 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                      <Icons.CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">Direct Phone</div>
                      <div className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                        {profileData.social.phone}
                      </div>
                    </div>
                  </a>
                )}

                {/* LinkedIn */}
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors shrink-0">
                    <Icons.Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">LinkedIn Profile</div>
                    <div className="font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
                      linkedin.com/in/rajratanpcu
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-white group-hover:text-slate-950 transition-colors shrink-0">
                    <Icons.Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">GitHub Repositories</div>
                    <div className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                      github.com/rajratanpcu
                    </div>
                  </div>
                </a>

                {/* LeetCode */}
                <a
                  href={profileData.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shrink-0">
                    <Icons.Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">LeetCode Practice</div>
                    <div className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors">
                      leetcode.com/u/Rajratan60
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
              <span className="font-mono uppercase text-slate-500 font-bold">Location &amp; Availability:</span>
              <p>
                Based in <strong>Pune, Maharashtra, India (412106)</strong>. Actively seeking Java Backend Engineering Internships, co-ops, and student developer opportunities.
              </p>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5"
            >
              <h3 className="text-lg font-bold text-white tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400">
                Fills and launches your default mail client directly addressed to Raj Ratan ({profileData.social.email}).
              </p>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-400 font-medium">{formErrors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-400 font-medium">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 font-medium">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Java Backend Internship / Technical Discussion"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                {formErrors.subject && (
                  <p className="text-xs text-red-400 font-medium">{formErrors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 font-medium">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Raj, I reviewed your SANCHAY and SANJEEV backend projects and would like to discuss..."
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
                />
                {formErrors.message && (
                  <p className="text-xs text-red-400 font-medium">{formErrors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Icons.Send className="w-4 h-4" />}
                >
                  Open Email Client
                </Button>

                {isPrepared && (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                    <Icons.CheckCircle className="w-4 h-4" />
                    Email client launched!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
