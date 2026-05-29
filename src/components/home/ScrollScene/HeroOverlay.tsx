'use client';

import { motion, useTransform, type MotionValue } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import GlowButton from '@/components/shared/GlowButton';
import { useWaitlist } from '@/components/layout/WaitlistContext';

interface HeroOverlayProps {
  scrollProgress: MotionValue<number>;
}

export default function HeroOverlay({ scrollProgress }: HeroOverlayProps) {
  const openWaitlist = useWaitlist();

  const heroOpacity   = useTransform(scrollProgress, [0.65, 0.80], [0, 1]);
  const heroX         = useTransform(scrollProgress, [0.65, 0.80], [-40, 0]);
  const labelOpacity  = useTransform(scrollProgress, [0.62, 0.72], [0, 1]);
  const hintOpacity   = useTransform(scrollProgress, [0, 0.08], [1, 0]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      {/* Hero text — left side, vertically centered */}
      <motion.div
        style={{
          opacity: heroOpacity,
          x: heroX,
          position: 'absolute',
          left: 'clamp(24px, 5vw, 80px)',
          top: '50%',
          translateY: '-50%',
          pointerEvents: 'auto',
          maxWidth: '480px',
        }}
      >
        <motion.span
          style={{ opacity: labelOpacity }}
          className="inline-block text-accent font-mono text-sm uppercase tracking-widest mb-6"
        >
          Introducing ZyphraVision
        </motion.span>

        <h1
          className="font-heading font-bold text-text-primary leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)' }}
        >
          Vision<br />Redefined.
        </h1>

        <p className="text-text-secondary text-lg leading-relaxed mb-8">
          We give the world back to those who can't see it.
          <br />No cloud. No delay. No compromise.
        </p>

        <div className="flex flex-wrap gap-4">
          <GlowButton onClick={openWaitlist}>
            Join the Waitlist
          </GlowButton>
          <GlowButton variant="ghost" href="#how-it-works">
            See How It Works
            <ChevronRight size={18} className="ml-1" />
          </GlowButton>
        </div>
      </motion.div>

      {/* Scroll-to-explore hint — fades out as soon as user starts scrolling */}
      <motion.div
        style={{
          opacity: hintOpacity,
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          x: '-50%',
          pointerEvents: 'none',
        }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-text-secondary/60 text-xs font-mono uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent" />
      </motion.div>

      {/* Bottom gradient — blends 3D scene into the next page section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #08080f)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </div>
  );
}
