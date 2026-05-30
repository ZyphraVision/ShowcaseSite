'use client';

import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import ParticleHeroCanvas from './ParticleHeroCanvas';
import StageHud from './StageHud';

/**
 * Full-page morph backdrop. A fixed canvas sits behind every section on the
 * home page; the Eye → Glasses → Ear progression maps to whole-page scroll
 * (0 → 1) so the story finishes exactly when the user reaches the footer.
 *
 * Hero copy lives in a separate normal-flow component (HomeHero) so the 3D
 * is purely the background.
 */
export default function ParticleHeroContainer() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.set(p);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [progress]);

  return (
    <>
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          pointerEvents: 'none',
        }}
      >
        <ParticleHeroCanvas scrollProgress={progress} />
      </div>
      <StageHud scrollProgress={progress} />
    </>
  );
}
