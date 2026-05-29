import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ProblemStatement from '@/components/home/ProblemStatement';
import HowItWorks from '@/components/home/HowItWorks';
import ProductTeaser from '@/components/home/ProductTeaser';
import TechHighlights from '@/components/home/TechHighlights';
import TeamSnippet from '@/components/home/TeamSnippet';
import WaitlistCTA from '@/components/home/WaitlistCTA';

export const metadata: Metadata = {
  title: 'ZyphraVision — Vision Redefined',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <ProductTeaser />
      <TechHighlights />
      <TeamSnippet />
      <WaitlistCTA />
    </>
  );
}
