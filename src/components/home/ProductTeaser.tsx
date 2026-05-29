'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Radio } from 'lucide-react';
import GlowButton from '../shared/GlowButton';

const specs = [
  { icon: Zap, text: 'Sub-50ms response time' },
  { icon: Brain, text: 'Onboard AI processing' },
  { icon: Radio, text: 'Dual feedback: audio + haptic' },
];

export default function ProductTeaser() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-background rounded-3xl border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-accent/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-text-secondary font-mono text-sm">Product Render</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">
              The Product
            </span>
            <h2 className="font-heading font-bold text-text-primary mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Engineered for independence.
            </h2>
            <ul className="space-y-4 mb-8">
              {specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <spec.icon size={20} className="text-accent" />
                  {spec.text}
                </li>
              ))}
            </ul>
            <GlowButton variant="ghost" href="/product">
              Explore the Product
              <ArrowRight size={18} className="ml-2" />
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}