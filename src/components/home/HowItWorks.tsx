'use client';

import { motion } from 'framer-motion';
import { Camera, Cpu, Volume2 } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const steps = [
  {
    num: '01',
    icon: Camera,
    title: 'See',
    desc: 'Integrated camera continuously captures the environment in real time.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Understand',
    desc: 'Onboard AI chip runs YOLO, SLAM, and OCR — entirely locally. Zero cloud. Zero latency.',
  },
  {
    num: '03',
    icon: Volume2,
    title: 'Feel',
    desc: 'Spatial audio and haptic vibration translate the world into feedback the user can act on. Instantly.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading label="How It Works" title="Three steps to a new world." />

        <div className="mt-16 relative">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-px bg-border" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative text-center"
              >
                <span className="block font-mono text-6xl font-bold text-accent/20 mb-4">
                  {step.num}
                </span>
                <div className="w-16 h-16 bg-surface border border-border rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-text-secondary/60 text-sm mt-12 font-mono"
          >
            All processing happens on the device. No internet required.
          </motion.p>
        </div>
      </div>
    </section>
  );
}