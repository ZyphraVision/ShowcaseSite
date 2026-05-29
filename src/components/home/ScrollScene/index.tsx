'use client';

import dynamic from 'next/dynamic';

const ScrollScene = dynamic(() => import('./ScrollSceneContainer'), {
  ssr: false,
  loading: () => (
    <div
      style={{ height: '100vh', width: '100%' }}
      className="flex items-center justify-center bg-background"
    >
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

export default ScrollScene;
