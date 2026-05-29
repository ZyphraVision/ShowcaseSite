'use client';

import { motion } from 'framer-motion';
import DecodeText from '../shared/hud/DecodeText';

export default function TechHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hud-tag justify-center mb-8">
            <span className="w-2 h-2 rounded-full bg-scan animate-glow-pulse" />
            On-Device Architecture
          </span>

          <DecodeText
            as="h1"
            text="Intelligence at the edge."
            className="font-heading font-bold text-text-primary leading-[1.1] mb-6 block"
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
          />

          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every inference. Every decision. On the device. In milliseconds.
            No data centers. No subscription. No compromise.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['YOLOv8', 'SLAM', 'OCR', 'TTS', 'INT8 Quantized', '4 TOPS'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="px-4 py-2 bg-surface/60 border border-border text-text-secondary font-mono text-sm hover:border-scan/40 hover:text-scan transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
