'use client';

import { motion } from 'framer-motion';
import { Lock, Zap, Compass } from 'lucide-react';

const highlights = [
  {
    icon: Lock,
    title: 'On-Device AI',
    body: 'All inference runs locally. Your data never leaves the glasses.',
  },
  {
    icon: Zap,
    title: 'Zero Latency',
    body: 'No cloud round-trip. Detection and feedback in real time.',
  },
  {
    icon: Compass,
    title: 'Spatial Awareness',
    body: 'SLAM navigation builds a live map of unknown environments.',
  },
];

export default function TechHighlights() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(124,109,250,0.3)' }}
              className="bg-surface border border-border rounded-2xl p-8 transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,109,250,0.1)]"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}