'use client';

import { motion } from 'framer-motion';

export default function OriginStory() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">
            Origin Story
          </span>
          <h2 className="font-heading font-bold text-text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            How we started.
          </h2>
        </motion.div>

        <div className="space-y-8 text-lg text-text-secondary leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-primary text-2xl md:text-3xl font-heading leading-relaxed"
          >
            Think of the last thing you saw today. A face. A sign. The road you walked home on.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Now imagine losing 85% of how you experience the world. Not just sight — your independence, your confidence, your ability to do the things everyone else takes for granted.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            ZyphraVision started with a simple question: how far can we close that gap?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-background border-l-4 border-accent rounded-r-2xl p-8 my-12"
          >
            <p className="text-text-primary font-heading text-xl md:text-2xl italic leading-relaxed">
              "Their inborn or fate disability inability should not restrict them from living a normal life"
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We are building more than glasses. We are building independence. The ability to navigate a new city alone, to read a menu without asking for help, to recognize a loved one's face across the room.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Three founders. One shared belief: technology should remove barriers, not create them. From late-night hardware hacking to embedded model optimization, every decision we make is filtered through one question — does this give someone their autonomy back?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8 border-t border-border"
          >
            <h3 className="font-heading font-bold text-text-primary text-xl mb-4">Where we are headed</h3>
            <p>
              In 3–5 years, ZyphraVision will be the standard for assistive visual technology. Not because we are the biggest, but because we are the most trusted. A device that works everywhere, respects everyone, and never asks for more than it gives back.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}