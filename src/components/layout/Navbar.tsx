'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlowButton from '../shared/GlowButton';

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Technology', href: '/technology' },
  { label: 'Team', href: '/team' },
  { label: 'About', href: '/about' },
];

interface NavbarProps {
  onWaitlistClick?: () => void;
}

export default function Navbar({ onWaitlistClick = () => {} }: NavbarProps) {
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
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          <a href="/" className="font-heading font-bold text-xl tracking-tight text-text-primary">
            Zyphra<span className="text-accent">Vision</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <GlowButton size="sm" onClick={onWaitlistClick}>
              Join Waitlist
            </GlowButton>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
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
              className="text-2xl font-heading text-text-primary hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <GlowButton onClick={() => { setMobileOpen(false); onWaitlistClick(); }}>
            Join Waitlist
          </GlowButton>
        </div>
      )}
    </>
  );
}