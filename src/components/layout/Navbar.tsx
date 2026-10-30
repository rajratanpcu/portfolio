import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profile';
import { Icons } from '../ui/Icons';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Activities', href: '#activities' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', ...NAV_LINKS.map((link) => link.href.replace('#', ''))];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              RR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-base tracking-tight group-hover:text-sky-400 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-tight -mt-1">
                Portfolio // PCU Pune
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-sky-400 bg-sky-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              asLink
              href="#contact"
              variant="primary"
              size="sm"
              icon={<Icons.Mail className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Home
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <Button
                asLink
                href="#contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Me
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
