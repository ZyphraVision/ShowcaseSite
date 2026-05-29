'use client';

import { motion } from 'framer-motion';
import DecodeText from '../shared/hud/DecodeText';

const lines = [
  { text: '85% of human perception is visual.', delay: 0 },
  { text: '250 million people live without it.', delay: 0.15 },
  { text: '', delay: 0.3 },
  { text: 'Not just sight. Independence. Confidence.', delay: 0.45 },
  { text: 'The ability to walk to a shop alone.', delay: 0.6 },
  { text: 'To read a menu. To recognize a face.', delay: 0.75 },
  { text: '', delay: 0.9 },
  { text: 'Their disability should not be their ceiling.', delay: 1.05, accent: true },
];

export default function ProblemStatement() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hud-tag justify-center mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-alert animate-glow-pulse" />
          Problem · Detected
        </motion.span>

        {lines.map((line, i) =>
          line.text ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: line.delay }}
            >
              {line.accent ? (
                <DecodeText
                  as="p"
                  text={line.text}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading leading-relaxed mb-4 text-scan font-semibold block"
                />
              ) : (
                <p className="text-2xl md:text-3xl lg:text-4xl font-heading leading-relaxed mb-4 text-text-primary">
                  {line.text}
                </p>
              )}
            </motion.div>
          ) : (
            <div key={i} className="h-8 md:h-12" />
          )
        )}
      </div>
    </section>
  );
}
