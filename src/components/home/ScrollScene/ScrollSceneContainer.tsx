'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ScrollSceneCanvas from './ScrollSceneCanvas';
import HeroOverlay from './HeroOverlay';

export default function ScrollSceneContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: '300vh', position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <ScrollSceneCanvas scrollProgress={scrollYProgress} />
        <HeroOverlay scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
}
