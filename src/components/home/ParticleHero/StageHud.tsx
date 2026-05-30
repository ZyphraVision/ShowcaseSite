'use client';

import { motion, useTransform, type MotionValue } from 'framer-motion';

interface StageHudProps {
  scrollProgress: MotionValue<number>;
}

const stages = [
  { num: '01', title: 'SIGHT', line: 'Perception — the way it was.' },
  { num: '02', title: 'THE DEVICE', line: 'ZyphraVision reads the world in real time.' },
  { num: '03', title: 'SOUND', line: 'Translated into spatial audio you can act on.' },
];

/**
 * Fixed bottom-center stage caption — three lines cross-fade with the
 * page-wide morph (eye / glasses / ear). Mounted globally on home so it
 * stays in view through every section, not just the hero.
 */
export default function StageHud({ scrollProgress }: StageHudProps) {
  // Non-overlapping ranges so only one caption is ever visible.
  const sightOpacity = useTransform(scrollProgress, [0, 0.04, 0.22], [1, 1, 0]);
  const deviceOpacity = useTransform(scrollProgress, [0.28, 0.42, 0.56], [0, 1, 0]);
  const soundOpacity = useTransform(scrollProgress, [0.62, 0.78, 0.96], [0, 1, 1]);
  const opacities = [sightOpacity, deviceOpacity, soundOpacity];

  return (
    <div
      aria-hidden
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-[min(90vw,420px)] text-center"
    >
      <div className="relative h-12">
        {stages.map((s, i) => (
          <motion.div
            key={s.num}
            style={{ opacity: opacities[i] }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span className="hud-tag justify-center mb-1">
              {s.num} · {s.title}
            </span>
            <p className="text-text-secondary text-xs font-mono">{s.line}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
