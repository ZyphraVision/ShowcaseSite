'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import DetectionFrame from '../shared/hud/DetectionFrame';

const founders = [
  { name: 'Faheem', role: 'CEO', tag: 'Vision & Strategy' },
  { name: 'Adhithya', role: 'CTO', tag: 'AI Architecture' },
  { name: 'JC Kawin', role: 'COO', tag: 'Execution' },
];

export default function TeamSnippet() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="hud-tag justify-center mb-4">Operators</span>
          <h2
            className="font-heading font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            Three people. One shared belief.
          </h2>
          <p className="text-text-secondary text-lg">
            Technology should remove barriers, not create them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {founders.map((founder, i) => (
            <DetectionFrame
              key={founder.name}
              label={`ID_0${i + 1}`}
              confidence={1.0}
              tone="accent"
              delay={i * 0.12}
            >
              <div className="bg-surface/25 backdrop-blur-sm border border-border p-8 text-center h-full">
                <div className="w-24 h-24 bg-surface-2 border border-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-accent/50">
                    {founder.name[0]}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary">
                  {founder.name}
                </h3>
                <p className="text-scan text-sm font-mono mb-1 tracking-widest">
                  {founder.role}
                </p>
                <p className="text-text-secondary text-sm">{founder.tag}</p>
              </div>
            </DetectionFrame>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/team"
            className="inline-flex items-center gap-2 text-scan hover:text-text-primary transition-colors font-mono text-sm uppercase tracking-widest"
          >
            Meet the team <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
