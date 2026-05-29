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
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-text-primary mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Be among the first to see<br />the world differently.
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Join the waitlist for early access, beta testing, and launch updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <GlowButton type="submit">Join Waitlist</GlowButton>
          </form>

          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <AnimatedCounter target={1247} className="text-lg" />
            <span className="text-sm">people already on the list</span>
          </div>

          <p className="text-text-secondary/40 text-xs mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}