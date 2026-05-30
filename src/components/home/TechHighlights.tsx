'use client';

import { motion } from 'framer-motion';
import { Lock, Zap, Compass } from 'lucide-react';
import DetectionFrame from '../shared/hud/DetectionFrame';

const highlights = [
  {
    icon: Lock,
    title: 'On-Device AI',
    body: 'All inference runs locally. Your data never leaves the glasses.',
    tag: 'PRIVACY',
    conf: 1.0,
  },
  {
    icon: Zap,
    title: 'Zero Latency',
    body: 'No cloud round-trip. Detection and feedback in real time.',
    tag: 'LATENCY',
    conf: 0.99,
  },
  {
    icon: Compass,
    title: 'Spatial Awareness',
    body: 'SLAM navigation builds a live map of unknown environments.',
    tag: 'SLAM',
    conf: 0.97,
  },
];

export default function TechHighlights() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-7">
          {highlights.map((item, i) => (
            <DetectionFrame
              key={item.title}
              label={item.tag}
              confidence={item.conf}
              delay={i * 0.12}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full bg-surface/25 backdrop-blur-sm border border-border p-8 transition-colors duration-200 hover:border-scan/30"
              >
                <div className="w-12 h-12 bg-scan/10 border border-scan/20 flex items-center justify-center mb-6">
                  <item.icon className="text-scan" size={22} />
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{item.body}</p>
              </motion.div>
            </DetectionFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
