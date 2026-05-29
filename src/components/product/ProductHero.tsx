'use client';

import { motion } from 'framer-motion';
import VisionGlassModel from '../shared/VisionGlassModelDynamic';

export default function ProductHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hud-tag mb-6">The Hardware</span>
            <h1
              className="font-heading font-bold text-text-primary leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Engineered for<br />independence.
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-lg mb-8">
              Lightweight frames. Onboard AI. All-day battery. ZyphraVision isn&apos;t a
              gadget — it&apos;s a prosthetic for perception.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono uppercase tracking-widest text-text-secondary">
              <span className="px-3 py-1.5 bg-surface/60 border border-border">Prototype Phase</span>
              <span className="px-3 py-1.5 bg-surface/60 border border-scan/30 text-scan">Beta Q3 2025</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] bg-surface/50 border border-scan/25 overflow-hidden">
              {/* corner brackets */}
              {[
                'top-0 left-0 border-t-2 border-l-2',
                'top-0 right-0 border-t-2 border-r-2',
                'bottom-0 left-0 border-b-2 border-l-2',
                'bottom-0 right-0 border-b-2 border-r-2',
              ].map((p) => (
                <span key={p} className={`absolute z-10 w-6 h-6 border-scan ${p}`} />
              ))}
              <span className="absolute top-2 left-2 z-10 font-mono text-[10px] tracking-widest text-scan/80">
                UNIT_01 · INSPECT
              </span>
              <div className="absolute inset-0">
                <VisionGlassModel />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-surface border border-scan/30 px-4 py-2 shadow-xl"
            >
              <span className="text-scan font-mono text-xs font-bold">{'<'}50ms</span>
              <span className="text-text-secondary text-xs block font-mono">Latency</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-surface border border-scan/30 px-4 py-2 shadow-xl"
            >
              <span className="text-scan font-mono text-xs font-bold">0g</span>
              <span className="text-text-secondary text-xs block font-mono">Cloud Data</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
