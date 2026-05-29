'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { type MotionValue } from 'framer-motion';

interface GlassAnnotationProps {
  position: [number, number, number];
  label: string;
  sublabel: string;
  scrollProgress: MotionValue<number>;
  enterAt: number;
  peakAt: number;
}

export default function GlassAnnotation({
  position,
  label,
  sublabel,
  scrollProgress,
  enterAt,
  peakAt,
}: GlassAnnotationProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const smoothOpacity = useRef(0);

  useFrame(() => {
    const p = scrollProgress.get();

    let target = 0;
    if (p >= enterAt && p < peakAt) {
      target = THREE.MathUtils.smoothstep(p, enterAt, peakAt);
    } else if (p >= peakAt) {
      target = 1;
    }

    smoothOpacity.current = THREE.MathUtils.lerp(smoothOpacity.current, target, 0.08);

    if (divRef.current) {
      divRef.current.style.opacity = String(smoothOpacity.current);
      const tx = (1 - smoothOpacity.current) * -12;
      divRef.current.style.transform = `translateX(${tx.toFixed(2)}px)`;
    }
  });

  return (
    <Html
      position={position}
      center={false}
      distanceFactor={8}
      zIndexRange={[20, 10]}
      occlude={false}
      pointerEvents="none"
      style={{ pointerEvents: 'none' }}
    >
      <div
        ref={divRef}
        className="annotation-label"
        style={{ opacity: 0, willChange: 'opacity, transform' }}
      >
        <span className="annotation-label__title">{label}</span>
        <span className="annotation-label__sub">{sublabel}</span>
      </div>
    </Html>
  );
}
