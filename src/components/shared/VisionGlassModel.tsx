import React, { Suspense, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';

// Error Boundary to prevent the whole app from crashing if the model is missing
class ErrorBoundary extends Component<{children: React.ReactNode, fallback: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode, fallback: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('3D Model failed to load:', error);
  }

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return this.props.children;
  }
}

interface ModelProps {
  modelPath: string;
}

function GlassModel({ modelPath }: ModelProps) {
  // This hook loads the .glb file. 
  // It will suspend the component until the model is ready.
  const { scene } = useGLTF(modelPath);

  return (
    <primitive 
      object={scene} 
      scale={1}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI / -4, 0]}
    />
  );
}

interface VisionGlassModelProps {
  modelPath?: string;
  autoRotate?: boolean;
}

export default function VisionGlassModel({ 
  modelPath = `${import.meta.env.BASE_URL}models/vision_glass.glb`,
  
  autoRotate = true
}: VisionGlassModelProps) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <ErrorBoundary fallback={
        <div className="w-full h-full flex flex-col items-center justify-center text-text-secondary border border-dashed border-border rounded-3xl">
          <span className="text-4xl mb-2">⚠️</span>
          <span>Missing 3D Model</span>
          <span className="text-xs opacity-50 mt-1">Please add vision_glass.glb to /public/models/</span>
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <GlassModel modelPath={modelPath} />
            <ContactShadows 
              position={[0, -1, 0]} 
              opacity={0.5} 
              scale={10} 
              blur={2} 
              far={4} 
            />
          </Suspense>
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
            minDistance={2}
            maxDistance={10}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

// Prefetch the model so it loads faster
useGLTF.preload('/models/vision_glass.glb');