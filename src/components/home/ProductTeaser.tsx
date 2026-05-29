'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Radio } from 'lucide-react';
import GlowButton from '../shared/GlowButton';

const specs = [
  { icon: Zap, text: 'Sub-50ms response time' },
  { icon: Brain, text: 'Onboard AI processing' },
  { icon: Radio, text: 'Dual feedback: audio + haptic' },
];

/* simulated detections layered over the product viewport */
const detections = [
  { label: 'DOORWAY', conf: 0.96, top: '14%', left: '12%', w: '34%', h: '52%', d: 0.2 },
  { label: 'PERSON', conf: 0.99, top: '30%', left: '56%', w: '28%', h: '46%', d: 0.45 },
  { label: 'STAIRS', conf: 0.91, top: '64%', left: '20%', w: '40%', h: '24%', d: 0.7 },
];

export default function ProductTeaser() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* detection viewport */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-scan/25 bg-background/60">
              {/* scene wash */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(80% 80% at 60% 40%, oklch(0.22 0.06 200 / 0.35), transparent 70%),' +
                    'repeating-linear-gradient(0deg, transparent 0 3px, oklch(0 0 0 / 0.25) 3px 4px)',
                }}
              />
              {/* corner readout */}
              <span className="absolute top-2 left-2 z-10 font-mono text-[10px] tracking-widest text-scan/80">
                CAM_00 · LIVE
              </span>
              <span className="absolute top-2 right-2 z-10 font-mono text-[10px] tracking-widest text-text-secondary/60">
                30 FPS
              </span>

              {/* bounding boxes */}
              {detections.map((d) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: d.d }}
                  className="absolute border border-scan/80"
                  style={{ top: d.top, left: d.left, width: d.w, height: d.h }}
                >
                  <span className="absolute -top-[18px] left-0 bg-scan px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-background whitespace-nowrap">
                    {d.label} {d.conf.toFixed(2)}
                  </span>
                </motion.div>
              ))}

              {/* center reticle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-50">
                <div className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-scan" />
                <div className="absolute left-1/2 bottom-0 h-2 w-px -translate-x-1/2 bg-scan" />
                <div className="absolute top-1/2 left-0 w-2 h-px -translate-y-1/2 bg-scan" />
                <div className="absolute top-1/2 right-0 w-2 h-px -translate-y-1/2 bg-scan" />
              </div>
            </div>
          </motion.div>

          {/* copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="hud-tag mb-4">The Product</span>
            <h2
              className="font-heading font-bold text-text-primary mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Engineered for independence.
            </h2>
            <ul className="space-y-4 mb-8">
              {specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <spec.icon size={18} className="text-scan" />
                  <span className="font-mono text-sm">{spec.text}</span>
                </li>
              ))}
            </ul>
            <GlowButton variant="ghost" href="/product">
              Explore the Product
              <ArrowRight size={16} className="ml-2" />
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
