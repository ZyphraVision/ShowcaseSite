import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom text-center mb-12">
        <span className="text-accent font-mono text-sm uppercase tracking-widest">Contact</span>
        <h1 className="font-heading font-bold text-text-primary mt-4 text-4xl md:text-5xl">Get in touch.</h1>
        <p className="text-text-secondary mt-4 text-lg">Three ways to reach us. One team reading every message.</p>
      </div>
      <ContactForm />
    </section>
  );
}
