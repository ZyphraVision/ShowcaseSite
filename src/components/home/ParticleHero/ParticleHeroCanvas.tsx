'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { type MotionValue } from 'framer-motion';
import ParticleScene from './ParticleScene';

interface ParticleHeroCanvasProps {
  scrollProgress: MotionValue<number>;
}

export default function ParticleHeroCanvas({ scrollProgress }: ParticleHeroCanvasProps) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.8]}
        frameloop="always"
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ParticleScene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
