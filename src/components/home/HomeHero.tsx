'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import GlowButton from '@/components/shared/GlowButton';
import { useWaitlist } from '@/components/layout/WaitlistContext';

/**
 * Top-of-page hero copy. Sits in normal document flow on top of the
 * full-page particle morph backdrop — so as you scroll past this, the morph
 * keeps running behind every subsequent section.
 */
export default function HomeHero() {
  const openWaitlist = useWaitlist();

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32">
      <div className="w-full pl-[clamp(24px,5vw,80px)] pr-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="max-w-[480px]"
        >
          <span className="hud-tag mb-6">
            <span className="w-2 h-2 rounded-full bg-scan animate-glow-pulse" />
            Introducing ZyphraVision
          </span>

          <h1
            className="font-heading font-bold text-text-primary leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.75rem, 5vw, 5rem)' }}
          >
            Vision,<br />Reconstructed.
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            We turn what the camera sees into sound and touch — in real time,
            on the device. No cloud. No delay. No compromise.
          </p>

          <div className="flex flex-wrap gap-4">
            <GlowButton onClick={openWaitlist}>Join the Waitlist</GlowButton>
            <GlowButton variant="ghost" href="#how-it-works">
              See How It Works
              <ChevronRight size={16} className="ml-1" />
            </GlowButton>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-16 flex items-center gap-3 text-text-secondary/60 font-mono text-xs uppercase tracking-widest"
          >
            <div className="w-px h-8 bg-gradient-to-b from-scan/60 to-transparent" />
            Scroll to transform
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
