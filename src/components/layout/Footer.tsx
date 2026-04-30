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
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="container-custom py-space-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <a href="/" className="font-heading font-bold text-xl text-text-primary">
              Zyphra<span className="text-accent">Vision</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed">
              Vision Redefined. AI-powered glasses for the visually impaired.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Rss].map((Icon, i) => (
                <a key={i} href="#" className="text-text-secondary hover:text-accent transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-text-secondary hover:text-accent text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary hover:text-accent text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Contact
            </h4>
            <a href="mailto:hello@zyphravision.com" className="flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors">
              <Mail size={16} />
              hello@zyphravision.com
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © 2025 ZyphraVision. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}