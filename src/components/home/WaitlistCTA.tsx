'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GlowButton from '../shared/GlowButton';
import AnimatedCounter from '../shared/AnimatedCounter';
import { useWaitlist } from '../layout/WaitlistContext';

export default function WaitlistCTA() {
  const openWaitlist = useWaitlist();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWaitlist();
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center border border-scan/20 bg-surface/40 backdrop-blur-sm p-10 md:p-16"
        >
          {/* corner brackets */}
          {[
            'top-0 left-0 border-t-2 border-l-2',
            'top-0 right-0 border-t-2 border-r-2',
            'bottom-0 left-0 border-b-2 border-l-2',
            'bottom-0 right-0 border-b-2 border-r-2',
          ].map((p) => (
            <span key={p} className={`absolute w-6 h-6 border-scan ${p}`} />
          ))}

          <span className="hud-tag justify-center mb-6">Access · Request</span>
          <h2
            className="font-heading font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Be among the first to see<br />the world differently.
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Join the waitlist for early access, beta testing, and launch updates.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
          >
            <input
              type="email"
              required
              placeholder="operator@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border border-border px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-scan/60 transition-colors"
            />
            <GlowButton type="submit">Join Waitlist</GlowButton>
          </form>

          <div className="flex items-center justify-center gap-2 text-text-secondary font-mono">
            <AnimatedCounter target={1247} className="text-lg text-scan" />
            <span className="text-sm">operators in queue</span>
          </div>

          <p className="text-text-secondary/40 text-xs mt-4 font-mono">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
