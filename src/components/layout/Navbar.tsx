'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlowButton from '../shared/GlowButton';
import { useWaitlist } from './WaitlistContext';

const navLinks = [
  { label: 'Product', href: '/product', id: '01' },
  { label: 'Technology', href: '/technology', id: '02' },
  { label: 'Team', href: '/team', id: '03' },
  { label: 'About', href: '/about', id: '04' },
];

export default function Navbar() {
  const openWaitlist = useWaitlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/70 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          <a
            href="/"
            className="group flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-text-primary"
          >
            <span aria-hidden className="text-scan font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">
              [
            </span>
            Zyphra<span className="text-accent">Vision</span>
            <span aria-hidden className="text-scan font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">
              ]
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1.5 text-sm text-text-secondary hover:text-scan transition-colors duration-200"
              >
                <span className="font-mono text-[10px] text-scan/40 group-hover:text-scan/80 transition-colors">
                  {link.id}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <GlowButton size="sm" onClick={openWaitlist}>
              Join Waitlist
            </GlowButton>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-baseline gap-2 text-2xl font-heading text-text-primary hover:text-scan transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <span className="font-mono text-sm text-scan/50">{link.id}</span>
              {link.label}
            </a>
          ))}
          <GlowButton onClick={() => { setMobileOpen(false); openWaitlist(); }}>
            Join Waitlist
          </GlowButton>
        </div>
      )}
    </>
  );
}
