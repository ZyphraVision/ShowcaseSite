'use client';

import { motion } from 'framer-motion';
import { Navigation, Type, Users, Building2 } from 'lucide-react';

const cases = [
  {
    icon: Navigation,
    title: 'Navigating Streets',
    description: 'Real-time obstacle detection and spatial audio cues guide you through crowded sidewalks, crosswalks, and unfamiliar neighborhoods with confidence.',
    stat: '360° awareness',
  },
  {
    icon: Type,
    title: 'Reading Signs',
    description: 'OCR reads street signs, storefronts, menus, and labels instantly. No more asking strangers what something says.',
    stat: '30+ languages',
  },
  {
    icon: Users,
    title: 'Recognizing Faces',
    description: 'On-device facial recognition tells you who is in front of you — friends, family, colleagues — with discrete audio prompts.',
    stat: 'Private & local',
  },
  {
    icon: Building2,
    title: 'Indoor Navigation',
    description: 'SLAM builds a real-time map of indoor spaces. Find exits, bathrooms, and meeting rooms in buildings you have never visited.',
    stat: 'Unknown environments',
  },
];

export default function UseCases() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Use Cases</span>
          <h2 className="font-heading font-bold text-text-primary mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            A new way to move through the world.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary text-lg">{item.title}</h3>
                  <span className="text-accent/80 font-mono text-xs">{item.stat}</span>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}