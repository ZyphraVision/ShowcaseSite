import { motion } from 'framer-motion';
import GlowButton from '../shared/GlowButton';
import VisionGlassModel from '../shared/VisionGlassModel';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onWaitlistClick: () => void;
}

export default function Hero({ onWaitlistClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block text-accent font-mono text-sm uppercase tracking-widest mb-6">
              Introducing ZyphraVision
            </span>
            <h1 className="font-heading font-bold text-text-primary leading-[1.1] mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
              Vision<br />Redefined.
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              We give the world back to those who can't see it. 
              No cloud. No delay. No compromise.
            </p>
            <div className="flex flex-wrap gap-4">
              <GlowButton onClick={onWaitlistClick}>
                Join the Waitlist
              </GlowButton>
              <GlowButton variant="ghost" href="#how-it-works">
                See How It Works
                <ChevronRight size={18} className="ml-1" />
              </GlowButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative animate-float w-[3000px] h-[300px] md:w-[500px] md:h-[400px]">
              {/* 3D Model Render */}
              <div className="absolute inset-0 z-20">
                <VisionGlassModel />
              </div>
              {/* Radial glow behind */}
              <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}