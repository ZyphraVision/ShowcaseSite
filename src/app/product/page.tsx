import type { Metadata } from 'next';
import ProductHero from '@/components/product/ProductHero';
import FeatureBreakdown from '@/components/product/FeatureBreakdown';
import UseCases from '@/components/product/UseCases';
import FeedbackModes from '@/components/product/FeedbackModes';
import WaitlistButton from '@/components/shared/WaitlistButton';

export const metadata: Metadata = {
  title: 'Product',
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <FeatureBreakdown />
      <UseCases />
      <FeedbackModes />
      <section className="section-padding bg-surface/50">
        <div className="container-custom text-center">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <span className="text-accent font-mono text-sm uppercase tracking-widest">Prototype Status</span>
            <h3 className="font-heading font-bold text-2xl text-text-primary mt-3 mb-4">
              Currently in prototype phase
            </h3>
            <p className="text-text-secondary mb-6">
              Join the waitlist for early access and beta testing opportunities.
            </p>
            <WaitlistButton />
          </div>
        </div>
      </section>
    </>
  );
}
