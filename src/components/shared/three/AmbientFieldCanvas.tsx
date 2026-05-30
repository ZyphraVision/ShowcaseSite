'use client';

import dynamic from 'next/dynamic';

const AmbientFieldCanvas = dynamic(() => import('./ParticleField'), {
  ssr: false,
});

export default AmbientFieldCanvas;
