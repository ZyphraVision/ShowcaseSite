'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Scan, Brain, GitBranch, Ear, Move } from 'lucide-react';

const stages = [
  {
    icon: Camera,
    label: 'Camera',
    desc: 'Stereo capture\n60fps, 120° FOV',
  },
  {
    icon: Scan,
    label: 'Frame Capture',
    desc: 'Pre-processing\nNormalization',
  },
  {
    icon: Brain,
    label: 'YOLO / OCR / SLAM',
    desc: 'Parallel inference\nOn-chip NPU',
  },
  {
    icon: GitBranch,
    label: 'Decision Engine',
    desc: 'Priority ranking\nContext filtering',
  },
  {
    icon: Ear,
    label: 'TTS / Haptic',
    desc: 'Spatial audio\nVibration patterns',
  },
];

export default function ProcessingPipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-surface/30 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Pipeline</span>
          <h2 className="font-heading font-bold text-text-primary mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            From photon to perception.
          </h2>
        </motion.div>

        <div ref={ref} className="relative max-w-6xl mx-auto">
          {/* Connecting line - SVG for animation */}
          <svg className="absolute top-12 left-0 w-full h-2 hidden lg:block" preserveAspectRatio="none">
            <motion.line
              x1="10%" y1="50%" x2="90%" y2="50%"
              stroke="rgba(124, 109, 250, 0.3)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative text-center group"
              >
                <div className="relative z-10 w-24 h-24 bg-background border-2 border-border rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(124,109,250,0.15)]">
                  <stage.icon size={24} className="text-accent mb-1" />
                  <span className="text-[10px] font-mono text-text-secondary">{stage.label}</span>
                </div>
                
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 -z-0">
                  <motion.div
                    className="h-full bg-accent/30"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }}
                  />
                </div>

                <p className="text-text-secondary text-xs leading-relaxed whitespace-pre-line font-mono">
                  {stage.desc}
                </p>

                {/* Latency badge */}
                {i < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.5 }}
                    className="hidden lg:block absolute -right-6 top-10 text-[10px] text-accent/60 font-mono"
                  >
                    ~{i === 0 ? '5' : i === 1 ? '2' : i === 2 ? '15' : i === 3 ? '3' : '0'}ms
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Total latency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
              <Move size={18} className="text-accent" />
              <span className="text-accent font-mono font-bold">Total Pipeline Latency: {'<'}50ms</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}