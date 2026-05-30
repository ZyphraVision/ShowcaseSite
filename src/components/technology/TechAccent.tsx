'use client';

import dynamic from 'next/dynamic';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/** Slowly rotating icosahedron point lattice — a small "edge compute" motif. */
function Lattice() {
  const ref = useRef<THREE.Points>(null);
  const reduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  );

  const geo = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(2.2, 4);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', ico.getAttribute('position').clone());
    ico.dispose();
    return g;
  }, []);

  useFrame((_, delta) => {
    if (ref.current && !reduced) {
      ref.current.rotation.y += delta * 0.1;
      ref.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        color="#5fd8e6"
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function TechAccentInner() {
  return (
    <div
      aria-hidden
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Lattice />
      </Canvas>
    </div>
  );
}

const TechAccent = dynamic(() => Promise.resolve(TechAccentInner), { ssr: false });
export default TechAccent;
