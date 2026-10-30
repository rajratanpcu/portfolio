import React, { useEffect, useRef, useState } from 'react';
import { TechCoreEngine } from './TechCoreEngine';
import { TechCoreFallback } from './TechCoreFallback';

export const TechCoreCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    let engine: TechCoreEngine | null = null;

    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const reducedMotion = mediaQuery.matches;

      engine = new TechCoreEngine({
        canvas: canvasRef.current,
        reducedMotion,
      });

      setIsLoading(false);

      // Handle visibility changes via IntersectionObserver to save resources
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (engine) {
              engine.setVisibility(entry.isIntersecting);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      const handleMotionPreference = (e: MediaQueryListEvent) => {
        if (engine) {
          engine.setReducedMotion(e.matches);
        }
      };

      mediaQuery.addEventListener('change', handleMotionPreference);

      return () => {
        observer.disconnect();
        mediaQuery.removeEventListener('change', handleMotionPreference);
        if (engine) {
          engine.destroy();
        }
      };
    } catch (err) {
      console.warn('Could not initialize 3D canvas context, falling back to static visual:', err);
      setHasError(true);
      setIsLoading(false);
    }
  }, []);

  if (hasError) {
    return <TechCoreFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center select-none"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm animate-pulse">
          Initializing 3D system architecture...
        </div>
      )}

      {/* Ambient background glows */}
      <div className="absolute w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing max-w-full max-h-full"
        style={{ touchAction: 'none' }}
        aria-label="Interactive 3D Tech Core representing software systems and multi-agent architecture"
      />
    </div>
  );
};
