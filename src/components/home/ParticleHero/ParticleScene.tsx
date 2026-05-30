'use client';

import { useMemo } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { type MotionValue } from 'framer-motion';
import { useShapePoints } from './useShapePoints';
import MorphParticles from './MorphParticles';

interface ParticleSceneProps {
  scrollProgress: MotionValue<number>;
}

export default function ParticleScene({ scrollProgress }: ParticleSceneProps) {
  const { count, reduced } = useMemo(() => {
    const coarse =
      window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return { count: coarse ? 18000 : 60000, reduced: reducedMotion };
  }, []);

  const { shapes, randoms, colors } = useShapePoints(count);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={45} near={0.1} far={100} />
      <MorphParticles
        shapes={shapes}
        randoms={randoms}
        colors={colors}
        count={count}
        scrollProgress={scrollProgress}
        reduced={reduced}
      />
    </>
  );
}
