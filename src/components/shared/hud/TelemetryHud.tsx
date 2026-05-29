'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Fixed corner telemetry — the device's live status chrome, present on every
 * page. Reads like a heads-up display: system mode, latency, frame, and a
 * live clock. Values tick via direct DOM mutation (no per-frame re-render).
 */
export default function TelemetryHud() {
  const latencyRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<HTMLSpanElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let frame = 0;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      if (now - last > 90) {
        last = now;
        frame++;
        if (latencyRef.current) {
          const ms = (6 + Math.random() * 4).toFixed(1);
          latencyRef.current.textContent = `${ms}ms`;
        }
        if (frameRef.current) {
          frameRef.current.textContent = String(frame % 9999).padStart(4, '0');
        }
        if (clockRef.current) {
          clockRef.current.textContent = new Date().toLocaleTimeString('en-GB');
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-30 pointer-events-none hidden md:block font-mono text-[10px] tracking-widest uppercase text-scan/70"
    >
      {/* top-left: system status */}
      <div className="absolute top-24 left-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-scan animate-ping-slow" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-scan" />
        </span>
        <span>SYS · ONLINE</span>
      </div>

      {/* top-right: mode */}
      <div className="absolute top-24 right-4 text-right text-text-secondary/60">
        MODE · NAVIGATION
      </div>

      {/* bottom-left: latency + frame */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1 text-text-secondary/60">
        <span>LAT&nbsp;<span ref={latencyRef} className="text-scan/80">8.0ms</span></span>
        <span>FRM&nbsp;<span ref={frameRef} className="text-scan/80">0000</span></span>
      </div>

      {/* bottom-right: clock */}
      <div className="absolute bottom-4 right-4 text-right text-text-secondary/60">
        <span ref={clockRef}>--:--:--</span> UTC
      </div>
    </div>
  );
}
