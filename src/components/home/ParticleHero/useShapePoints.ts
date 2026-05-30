'use client';

import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import {
  sampleGeometry,
  fibonacciEye,
  makeRandoms,
} from '@/lib/sampleGeometry';

const GLASSES_URL = '/models/vision_glass.glb';
const EAR_URL = '/models/ear/scene.gltf';

export interface ShapeData {
  /** [eye, glasses, ear] — all length count*3, normalized to one scale */
  shapes: Float32Array[];
  randoms: Float32Array;
  /** per-stage colors, matched to `shapes` order */
  colors: THREE.Color[];
}

/**
 * Builds the Eye → Glasses → Ear point sets once. Glasses are sampled from the
 * GLB; eye + ear are procedural (ear swaps to a sampled GLB if one is added).
 */
export function useShapePoints(count: number): ShapeData {
  const { scene: glassesScene } = useGLTF(GLASSES_URL);
  const { scene: earScene } = useGLTF(EAR_URL);

  return useMemo(() => {
    const eye = fibonacciEye(count);
    const glasses = sampleGeometry(glassesScene, count);
    const ear = sampleGeometry(earScene, count);

    const colors = [
      new THREE.Color('#5fd8e6'), // eye — cyan (sight)
      new THREE.Color('#7c6dfa'), // glasses — violet (the device)
      new THREE.Color('#5fd8e6'), // ear — cyan (sound)
    ];

    return { shapes: [eye, glasses, ear], randoms: makeRandoms(count), colors };
  }, [glassesScene, earScene, count]);
}

useGLTF.preload(GLASSES_URL);
useGLTF.preload(EAR_URL);
