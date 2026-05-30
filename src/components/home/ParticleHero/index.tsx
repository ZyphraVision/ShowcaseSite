'use client';

import dynamic from 'next/dynamic';

const ParticleHero = dynamic(() => import('./ParticleHeroContainer'), {
  ssr: false,
  loading: () => (
    <div
      style={{ height: '100vh', width: '100%' }}
      className="flex items-center justify-center"
    >
      <div className="w-8 h-8 border-2 border-scan/30 border-t-scan rounded-full animate-spin" />
    </div>
  ),
});

export default ParticleHero;
