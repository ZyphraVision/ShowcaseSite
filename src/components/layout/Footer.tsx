import { Globe, MessageCircle, Rss, Mail } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Product', href: '/product' },
    { label: 'Technology', href: '/technology' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
  ],
  connect: [
    { label: 'Beta Waitlist', href: '#waitlist' },
    { label: 'Investor Inquiries', href: '/contact?type=investor' },
    { label: 'Press', href: '/contact?type=press' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-auto bg-surface/40 backdrop-blur-sm">
      {/* system readout strip */}
      <div className="border-b border-border/60">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 py-3 font-mono text-[10px] uppercase tracking-widest text-text-secondary/60">
          <span className="text-scan/70">// END OF FEED</span>
          <span>BUILD 1.0.0 · ON-DEVICE INFERENCE · NO CLOUD</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-scan animate-glow-pulse" />
            SIGNAL NOMINAL
          </span>
        </div>
      </div>

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <a href="/" className="font-heading font-bold text-xl text-text-primary">
              Zyphra<span className="text-accent">Vision</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed">
              Vision, reconstructed. On-device AI glasses for the visually impaired.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Rss].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-text-secondary hover:text-scan transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="hud-tag mb-4">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-text-secondary hover:text-scan text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="hud-tag mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary hover:text-scan text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="hud-tag mb-4">Contact</h4>
            <a
              href="mailto:hello@zyphravision.com"
              className="flex items-center gap-2 text-text-secondary hover:text-scan text-sm transition-colors"
            >
              <Mail size={16} />
              hello@zyphravision.com
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm font-mono">
            © 2025 ZyphraVision · All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-scan transition-colors">Privacy</a>
            <a href="#" className="hover:text-scan transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
