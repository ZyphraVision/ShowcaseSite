'use client';

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from 'react';
import { useInView } from 'framer-motion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/<>*+';

interface DecodeTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** ms between scramble steps */
  speed?: number;
  /** stagger before each character locks (ms per char) */
  stagger?: number;
}

/**
 * Renders text as if the device is OCR-decoding it: glyphs scramble, then
 * lock left-to-right. Fires once when scrolled into view. Falls back to plain
 * text under prefers-reduced-motion.
 */
export default function DecodeText({
  text,
  as: Tag = 'span',
  className = '',
  style,
  speed = 28,
  stagger = 38,
}: DecodeTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(text);
      return;
    }

    const start = performance.now();
    let raf = 0;
    const total = text.length * stagger + 320;

    const frame = (now: number) => {
      const elapsed = now - start;
      let out = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === ' ') {
          out += ' ';
          continue;
        }
        const lockAt = i * stagger;
        if (elapsed >= lockAt + 160) {
          out += ch;
        } else if (elapsed >= lockAt - 120) {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (elapsed < total) {
        raf = window.setTimeout(() => requestAnimationFrame(frame), speed) as unknown as number;
      } else {
        setDisplay(text);
      }
    };
    raf = requestAnimationFrame(frame);
    return () => {
      clearTimeout(raf);
    };
  }, [inView, text, speed, stagger]);

  return createElement(Tag, { ref, className, style }, display);
}
