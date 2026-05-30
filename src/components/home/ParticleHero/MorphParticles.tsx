'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { type MotionValue } from 'framer-motion';
import { morphVertexShader, morphFragmentShader } from './morphShaders';

interface MorphParticlesProps {
  /** point sets, all length count*3, normalized to the same scale */
  shapes: Float32Array[];
  /** per-particle random [0,1] */
  randoms: Float32Array;
  /** one color per shape (matched to stages) */
  colors: THREE.Color[];
  count: number;
  scrollProgress: MotionValue<number>;
  /** static render, no animation */
  reduced?: boolean;
}

export default function MorphParticles({
  shapes,
  randoms,
  colors,
  count,
  scrollProgress,
  reduced = false,
}: MorphParticlesProps) {
  const groupRef = useRef<THREE.Group>(null);
  const currentSeg = useRef(-1);
  const { gl } = useThree();

  // Separate buffers for the two morph endpoints so we never mutate `shapes`.
  const { geometry, material } = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const aPos0 = new Float32Array(count * 3);
    const aPos1 = new Float32Array(count * 3);
    aPos0.set(shapes[0]);
    aPos1.set(shapes[1 % shapes.length]);

    geom.setAttribute('position', new THREE.BufferAttribute(aPos0.slice(), 3));
    geom.setAttribute('aPos0', new THREE.BufferAttribute(aPos0, 3));
    geom.setAttribute('aPos1', new THREE.BufferAttribute(aPos1, 3));
    geom.setAttribute('aRnd', new THREE.BufferAttribute(randoms, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uProgress: { value: 0 },
        uTime: { value: 0 },
        uSize: { value: 14 },
        uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
        uColorA: { value: colors[0].clone() },
        uColorB: { value: colors[1 % colors.length].clone() },
      },
      vertexShader: morphVertexShader,
      fragmentShader: morphFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return { geometry: geom, material: mat };
  }, [shapes, randoms, colors, count, gl]);

  useFrame((_, delta) => {
    if (reduced) return;
    const u = material.uniforms;
    u.uTime.value += delta;

    // gentle sway keeps shapes front-facing — flat targets (ear) never go edge-on
    const g = groupRef.current;
    if (g) {
      g.rotation.y = Math.sin(u.uTime.value * 0.28) * 0.4;
      g.rotation.x = 0.12 + Math.sin(u.uTime.value * 0.21) * 0.06;
    }

    const len = shapes.length;
    const t = THREE.MathUtils.clamp(scrollProgress.get(), 0, 0.9999);
    const idx = t * len; // 0 .. len
    const seg = Math.floor(idx) % len;
    const next = (seg + 1) % len;
    const frac = idx - Math.floor(idx);

    if (seg !== currentSeg.current) {
      currentSeg.current = seg;
      const a0 = geometry.getAttribute('aPos0') as THREE.BufferAttribute;
      const a1 = geometry.getAttribute('aPos1') as THREE.BufferAttribute;
      (a0.array as Float32Array).set(shapes[seg]);
      (a1.array as Float32Array).set(shapes[next]);
      a0.needsUpdate = true;
      a1.needsUpdate = true;
      (u.uColorA.value as THREE.Color).copy(colors[seg]);
      (u.uColorB.value as THREE.Color).copy(colors[next]);
    }

    u.uProgress.value = frac;
  });

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0]}>
      <points geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
}
