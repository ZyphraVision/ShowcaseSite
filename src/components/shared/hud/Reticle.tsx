'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A subtle targeting reticle that trails the cursor — the device "looking" at
 * whatever the user points to. Desktop + fine-pointer only, disabled under
 * reduced-motion. Position is written directly to the DOM (no re-renders).
 */
export default function Reticle() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { ...pos };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const loop = () => {
      cur.x += (pos.x - cur.x) * 0.18;
      cur.y += (pos.y - cur.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cur.x - 18}px, ${cur.y - 18}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 z-40 pointer-events-none w-9 h-9 will-change-transform"
    >
      <div className="absolute inset-0 rounded-full border border-scan/40" />
      <div className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-scan/70" />
      <div className="absolute left-1/2 bottom-0 h-2 w-px -translate-x-1/2 bg-scan/70" />
      <div className="absolute top-1/2 left-0 w-2 h-px -translate-y-1/2 bg-scan/70" />
      <div className="absolute top-1/2 right-0 w-2 h-px -translate-y-1/2 bg-scan/70" />
      <div className="absolute left-1/2 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-scan" />
    </div>
  );
}
