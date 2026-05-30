'use client';

import { motion } from 'framer-motion';
import { Camera, Cpu, Battery, Scale, Ruler, WifiOff } from 'lucide-react';

const features = [
  {
    icon: Camera,
    label: 'Camera Module',
    value: 'Wide-angle stereo pair',
    detail: '120° FOV, low-light optimized, 60fps capture',
  },
  {
    icon: Cpu,
    label: 'Onboard Chip',
    value: 'Edge AI Processor',
    detail: '4 TOPS INT8 inference, sub-2W thermal envelope',
  },
  {
    icon: Battery,
    label: 'Battery Life',
    value: '12+ hours active',
    detail: 'Li-Po cell, USB-C fast charge, hot-swappable',
  },
  {
    icon: Scale,
    label: 'Weight',
    value: 'Under 45g',
    detail: 'Titanium frame, balanced center of mass',
  },
  {
    icon: Ruler,
    label: 'Form Factor',
    value: 'Standard glasses profile',
    detail: 'Fits existing eyewear cases and accessories',
  },
  {
    icon: WifiOff,
    label: 'Connectivity',
    value: 'Fully offline',
    detail: 'No Bluetooth, WiFi, or cellular required to function',
  },
];

export default function FeatureBreakdown() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Specifications</span>
          <h2 className="font-heading font-bold text-text-primary mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Built without compromise.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface/40 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent/20 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <feat.icon size={20} className="text-accent" />
                </div>
                <span className="text-text-secondary/40 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-heading font-semibold text-text-primary mb-1">{feat.label}</h3>
              <p className="text-accent font-mono text-sm mb-2">{feat.value}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{feat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}