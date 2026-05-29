'use client';

import { motion } from 'framer-motion';
import { Camera, Cpu, Volume2 } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const steps = [
  {
    num: '01',
    icon: Camera,
    title: 'See',
    op: 'CAPTURE',
    desc: 'Integrated camera continuously captures the environment in real time.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Understand',
    op: 'INFER',
    desc: 'Onboard AI chip runs YOLO, SLAM, and OCR — entirely locally. Zero cloud. Zero latency.',
  },
  {
    num: '03',
    icon: Volume2,
    title: 'Feel',
    op: 'RELAY',
    desc: 'Spatial audio and haptic vibration translate the world into feedback the user can act on. Instantly.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Processing Pipeline" title="Three steps to a new world." />

        <div className="mt-16 relative">
          {/* connector line — desktop only */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-scan/40 to-transparent" />

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
                <span className="block font-mono text-6xl font-bold text-scan/15 mb-4">
                  {step.num}
                </span>
                <div className="w-16 h-16 bg-surface/60 backdrop-blur-sm border border-border flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="text-scan" size={26} />
                  {/* corner ticks */}
                  <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-scan/60" />
                  <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-scan/60" />
                </div>
                <span className="hud-tag justify-center mb-2">{step.op}</span>
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
            className="text-center text-scan/50 text-xs mt-12 font-mono tracking-widest uppercase"
          >
            // all processing happens on the device · no internet required
          </motion.p>
        </div>
      </div>
    </section>
  );
}
