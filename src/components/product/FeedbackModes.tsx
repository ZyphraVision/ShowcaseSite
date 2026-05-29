'use client';

import { motion } from 'framer-motion';
import { Volume2, Vibrate, Ear, AlertTriangle } from 'lucide-react';

const modes = [
  {
    icon: Volume2,
    title: 'Spatial Audio',
    subtitle: 'Primary feedback channel',
    description: 'Directional sound cues tell you where things are, not just what they are. A car approaching from the left sounds from the left earpiece. A sign overhead has an upward tonal sweep.',
    details: ['3D positional audio', 'Natural language TTS', 'Adjustable speech rate', 'Bone conduction optional'],
    color: 'from-accent/20 to-transparent',
  },
  {
    icon: Vibrate,
    title: 'Haptic Vibration',
    subtitle: 'Discrete secondary channel',
    description: 'For situations where audio is impractical — loud environments, private settings, or when you want zero auditory footprint. Vibrations encode distance and urgency through intensity and pattern.',
    details: ['Temple-arm vibration motors', 'Distance = intensity mapping', 'Pattern language for common objects', 'Silent mode capable'],
    color: 'from-purple-500/10 to-transparent',
  },
];

export default function FeedbackModes() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Feedback</span>
          <h2 className="font-heading font-bold text-text-primary mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Two senses. One clear picture.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-background border border-border rounded-3xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-50`} />
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-surface border border-border rounded-2xl flex items-center justify-center">
                    <mode.icon size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-text-primary">{mode.title}</h3>
                    <span className="text-text-secondary text-sm">{mode.subtitle}</span>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                  {mode.description}
                </p>

                <div className="space-y-3">
                  {mode.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-3 text-text-secondary/60 text-sm"
        >
          <AlertTriangle size={16} />
          <span>Both modes work simultaneously and adapt to ambient noise levels automatically.</span>
        </motion.div>
      </div>
    </section>
  );
}