'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { type MotionValue } from 'framer-motion';
import GlassSceneInner from './GlassSceneInner';

interface ScrollSceneCanvasProps {
  scrollProgress: MotionValue<number>;
}

export default function ScrollSceneCanvas({ scrollProgress }: ScrollSceneCanvasProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={undefined}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        frameloop="always"
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <GlassSceneInner scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
