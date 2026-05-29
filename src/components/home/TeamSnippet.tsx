'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const founders = [
  { name: 'Faheem', role: 'CEO', tag: 'Vision & Strategy' },
  { name: 'Adhithya', role: 'CTO', tag: 'AI Architecture' },
  { name: 'JC Kawin', role: 'COO', tag: 'Execution' },
];

export default function TeamSnippet() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-text-primary mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Three people. One shared belief.
          </h2>
          <p className="text-text-secondary text-lg">
            Technology should remove barriers, not create them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-surface border border-border rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="font-heading font-bold text-2xl text-accent/40">
                  {founder.name[0]}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-text-primary">{founder.name}</h3>
              <p className="text-accent text-sm font-mono mb-1">{founder.role}</p>
              <p className="text-text-secondary text-sm">{founder.tag}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="/team" className="inline-flex items-center gap-2 text-accent hover:text-text-primary transition-colors font-medium">
            Meet the team <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}