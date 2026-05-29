'use client';

import { motion } from 'framer-motion';
import { Shield, WifiOff, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Privacy First',
    body: 'No data ever leaves the device. No server. No cloud. No one watching. For a community that is already vulnerable, privacy is not a feature — it is the foundation.',
    stat: '0 bytes uploaded',
  },
  {
    icon: WifiOff,
    title: 'Always On',
    body: 'Works in dead zones, basements, remote areas, anywhere. Zero dependency on internet connectivity. Your independence should not require a signal bar.',
    stat: '100% offline',
  },
  {
    icon: Zap,
    title: 'Real Time',
    body: 'Cloud AI adds 200-800ms latency. On-device inference: under 50ms. That difference is not just performance. That difference is someone\'s safety.',
    stat: '<50ms response',
  },
];

export default function WhyLocal() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Why Local?</span>
          <h2 className="font-heading font-bold text-text-primary mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            The cloud is a liability.<br />The edge is a promise.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-accent/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-8 -translate-y-1/2 w-16 h-16 bg-background border border-border rounded-2xl flex items-center justify-center">
                <pillar.icon size={28} className="text-accent" />
              </div>

              <div className="mt-6">
                <span className="text-accent font-mono text-xs uppercase tracking-wider block mb-3">
                  {pillar.stat}
                </span>
                <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {pillar.body}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
                  <span className="text-text-secondary text-xs font-mono">Verified on-device</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}