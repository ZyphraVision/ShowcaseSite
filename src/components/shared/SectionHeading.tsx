import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ label, title, align = 'center', className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      <span className="inline-flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-widest mb-4">
        <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
        {label}
      </span>
      <h2 className="font-heading font-bold text-text-primary leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
        {title}
      </h2>
    </motion.div>
  );
}