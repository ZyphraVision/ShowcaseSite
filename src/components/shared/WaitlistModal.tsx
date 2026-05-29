'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import GlowButton from './GlowButton';

interface WaitlistModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function WaitlistModal({
  isOpen = false,
  onClose = () => {},
}: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Resend/Loops.so
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface border border-scan/30 p-8 max-w-md w-full shadow-2xl relative"
          >
            {/* corner brackets */}
            {[
              'top-0 left-0 border-t-2 border-l-2',
              'top-0 right-0 border-t-2 border-r-2',
              'bottom-0 left-0 border-b-2 border-l-2',
              'bottom-0 right-0 border-b-2 border-r-2',
            ].map((p) => (
              <span key={p} className={`absolute w-5 h-5 border-scan ${p}`} />
            ))}

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-scan transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <span className="hud-tag mb-3">Access · Request</span>
                <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">
                  Join the Waitlist
                </h3>
                <p className="text-text-secondary mb-6">
                  Be among the first to experience ZyphraVision. Early access, beta testing, and launch updates.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="operator@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-scan/60 transition-colors"
                  />
                  <GlowButton type="submit" className="w-full">
                    Join Waitlist
                  </GlowButton>
                </form>
                <p className="text-text-secondary/60 text-xs mt-4 text-center font-mono">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-scan/15 border border-scan/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-scan">✓</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                  Access Granted
                </h3>
                <p className="text-text-secondary font-mono text-sm">
                  // you&apos;re on the list — we&apos;ll be in touch
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}