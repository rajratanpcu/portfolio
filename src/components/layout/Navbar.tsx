import React, { useEffect, useState } from 'react';
import { profileData } from '../../data/profile';
import { Icons } from '../ui/Icons';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = ['home', ...NAV_LINKS.map((link) => link.href.slice(1))];
      const current = sections
        .slice()
        .reverse()
        .find((id) => document.getElementById(id)?.offsetTop <= window.scrollY + 140);
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md' : 'bg-slate-950/70 backdrop-blur-sm'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={(event) => handleNavClick(event, '#home')} className="group flex items-center gap-3" aria-label="Go to homepage">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-amber-300/50 bg-amber-300 text-sm font-semibold text-slate-950">RR</span>
          <span className="hidden text-sm font-medium tracking-tight text-slate-100 sm:block">
            {profileData.name}<span className="ml-2 text-slate-500">/ portfolio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`rounded-md px-3 py-2 text-sm ${activeSection === id ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'}`}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="measured hidden text-xs text-slate-500 xl:block">PUNE · IN</span>
          <Button asLink href="#contact" variant="primary" size="sm" icon={<Icons.Mail className="h-3.5 w-3.5" />}>
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-md border border-slate-700 p-2 text-slate-300 lg:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <Icons.X className="h-5 w-5" /> : <Icons.Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-800 bg-slate-950 px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={(event) => handleNavClick(event, link.href)} className="rounded-md px-3 py-3 text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-100">
                {link.label}
              </a>
            ))}
            <Button asLink href="#contact" variant="primary" size="md" className="mt-2 w-full" onClick={() => setMobileMenuOpen(false)}>
              Contact me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
