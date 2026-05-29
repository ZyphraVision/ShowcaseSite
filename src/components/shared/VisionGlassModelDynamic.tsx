'use client';

import dynamic from 'next/dynamic';

const VisionGlassModel = dynamic(() => import('./VisionGlassModel'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

export default VisionGlassModel;
