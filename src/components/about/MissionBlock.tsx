'use client';

import { motion } from 'framer-motion';

export default function MissionBlock() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest mb-6 block">
            Our Mission
          </span>
          
          <h2 className="font-heading font-bold text-text-primary leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            We believe sight<br />should not be a privilege.
          </h2>
          
          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Independence is not a luxury. It is a right. And technology should be the bridge that gets us there — not a wall that keeps people out.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: '250M+', label: 'Visually impaired worldwide' },
            { value: '85%', label: 'Of perception is visual' },
            { value: '0', label: 'Data leaves our devices' },
            { value: '<50ms', label: 'Average response time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-accent mb-2">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}