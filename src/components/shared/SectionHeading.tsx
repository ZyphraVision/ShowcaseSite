'use client';

import { motion } from 'framer-motion';
import DecodeText from './hud/DecodeText';

interface SectionHeadingProps {
  label: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      <span
        className={`hud-tag mb-4 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="w-2 h-2 rounded-full bg-scan animate-glow-pulse" />
        {label}
      </span>
      <DecodeText
        as="h2"
        text={title}
        className="font-heading font-bold text-text-primary leading-tight block"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      />
    </motion.div>
  );
}
