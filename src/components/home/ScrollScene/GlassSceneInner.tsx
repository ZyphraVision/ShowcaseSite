'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  PerspectiveCamera,
  Environment,
  ContactShadows,
  Sparkles,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';
import { type MotionValue } from 'framer-motion';
import GlassAnnotation from './GlassAnnotation';

useGLTF.preload('/models/vision_glass.glb');

const CAM_Z_START = 1.8;
const CAM_Z_END = 5.5;
const CAM_DAMPING = 0.07;
const ROT_SPEED_START = 0.004;
const ROT_SPEED_END = 0.001;

const ANNOTATIONS = [
  {
    id: 'lens',
    position: [-0.8, 0.1, 0.3] as [number, number, number],
    label: 'Wide-Angle Lens',
    sublabel: '120° FOV capture',
    enterAt: 0.15,
    peakAt: 0.30,
  },
  {
    id: 'chip',
    position: [0.9, 0.2, -0.1] as [number, number, number],
    label: 'Neural Processor',
    sublabel: 'Edge AI, zero cloud',
    enterAt: 0.25,
    peakAt: 0.40,
  },
  {
    id: 'bridge',
    position: [0, 0.5, 0.1] as [number, number, number],
    label: 'Spatial Audio',
    sublabel: 'Bone conduction array',
    enterAt: 0.35,
    peakAt: 0.50,
  },
  {
    id: 'haptic',
    position: [-0.9, -0.1, -0.1] as [number, number, number],
    label: 'Haptic Feedback',
    sublabel: 'Real-time vibration',
    enterAt: 0.45,
    peakAt: 0.60,
  },
];

interface GlassSceneInnerProps {
  scrollProgress: MotionValue<number>;
}

export default function GlassSceneInner({ scrollProgress }: GlassSceneInnerProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const modelRef = useRef<THREE.Group>(null);
  const smoothCamZ = useRef(CAM_Z_START);
  const rotation = useRef(Math.PI / -4);

  const { scene } = useGLTF('/models/vision_glass.glb');

  // Apply emissive glow to glass-like materials on the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (mat.isMeshStandardMaterial) {
          if (mat.transparent || mat.opacity < 1 || mat.name.toLowerCase().includes('glass')) {
            mat.emissive = new THREE.Color('#7c6dfa');
            mat.emissiveIntensity = 0.08;
          }
        }
      }
    });
  }, [scene]);

  useFrame(() => {
    const p = scrollProgress.get();

    const targetZ = CAM_Z_START + (CAM_Z_END - CAM_Z_START) * p;
    smoothCamZ.current = THREE.MathUtils.lerp(smoothCamZ.current, targetZ, CAM_DAMPING);
    if (cameraRef.current) {
      cameraRef.current.position.z = smoothCamZ.current;
    }

    const rotSpeed = THREE.MathUtils.lerp(ROT_SPEED_START, ROT_SPEED_END, p);
    rotation.current += rotSpeed;
    if (modelRef.current) {
      modelRef.current.rotation.y = rotation.current;
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, CAM_Z_START]}
        fov={45}
        near={0.1}
        far={100}
      />

      <Environment preset="city" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 4, 3]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-2, 1, 2]} intensity={0.8} color="#7c6dfa" />

      <primitive
        ref={modelRef}
        object={scene}
        scale={1}
        position={[0, -0.5, 0]}
        rotation={[0, Math.PI / -4, 0]}
      />

      <Sparkles
        count={60}
        scale={[4, 3, 3]}
        size={1.2}
        speed={0.3}
        opacity={0.5}
        color="#7c6dfa"
      />

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.4}
        scale={6}
        blur={2.5}
        far={3}
        frames={1}
      />

      {ANNOTATIONS.map((ann) => (
        <GlassAnnotation
          key={ann.id}
          position={ann.position}
          label={ann.label}
          sublabel={ann.sublabel}
          scrollProgress={scrollProgress}
          enterAt={ann.enterAt}
          peakAt={ann.peakAt}
        />
      ))}
    </>
  );
}
