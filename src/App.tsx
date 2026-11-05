import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { AriaFlagshipSection } from './components/projects/AriaFlagshipSection';
import { Experience } from './components/experience/Experience';
import { Certifications } from './components/certifications/Certifications';
import { Achievements } from './components/achievements/Achievements';
import { Activities } from './components/activities/Activities';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-shell min-h-screen text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <AriaFlagshipSection />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Activities />
        <Resume />
        <Contact />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export default App;
