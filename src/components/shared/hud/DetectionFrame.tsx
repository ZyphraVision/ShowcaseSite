'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface DetectionFrameProps {
  children: ReactNode;
  /** YOLO-style detection label stamped on the top-left corner */
  label?: string;
  /** confidence score shown beside the label, e.g. 0.98 */
  confidence?: number;
  className?: string;
  /** corner bracket accent color */
  tone?: 'scan' | 'accent' | 'alert';
  /** delay the draw-in (seconds) */
  delay?: number;
}

const toneMap = {
  scan: 'var(--color-scan)',
  accent: 'var(--color-accent)',
  alert: 'var(--color-alert)',
};

/**
 * Wraps content in a computer-vision detection box: animated corner brackets
 * that draw in on scroll, plus an optional classification tag + confidence.
 * The signature element of the whole site's machine-vision language.
 */
export default function DetectionFrame({
  children,
  label,
  confidence,
  className = '',
  tone = 'scan',
  delay = 0,
}: DetectionFrameProps) {
  const color = toneMap[tone];
  const corner = 'absolute w-5 h-5 pointer-events-none';

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={`relative ${className}`}
    >
      {/* corner brackets */}
      {[
        'top-0 left-0 border-t-2 border-l-2',
        'top-0 right-0 border-t-2 border-r-2',
        'bottom-0 left-0 border-b-2 border-l-2',
        'bottom-0 right-0 border-b-2 border-r-2',
      ].map((pos, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`${corner} ${pos}`}
          style={{ borderColor: color }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, delay: delay + i * 0.06, ease: 'easeOut' }}
        />
      ))}

      {/* classification tag */}
      {label && (
        <motion.span
          aria-hidden
          className="absolute -top-3 left-3 z-10 px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase"
          style={{
            color: 'var(--color-background)',
            background: color,
          }}
          variants={{
            hidden: { opacity: 0, y: 4 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.35, delay: delay + 0.25 }}
        >
          {label}
          {confidence !== undefined && (
            <span className="ml-1.5 opacity-70">{confidence.toFixed(2)}</span>
          )}
        </motion.span>
      )}

      {children}
    </motion.div>
  );
}
