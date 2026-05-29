import type { Metadata } from 'next';
import FounderCard from '@/components/team/FounderCard';

export const metadata: Metadata = {
  title: 'Team',
};

const founders = [
  {
    index: 0,
    name: 'Faheem',
    role: 'CEO',
    initials: 'F',
    bio: 'The vision and voice of ZyphraVision. Drives strategy, partnerships, and the mission to put the product in the hands of the people who need it most.',
    links: { linkedin: '#', twitter: '#' },
  },
  {
    index: 1,
    name: 'Adhithya',
    role: 'CTO',
    initials: 'A',
    bio: 'Architect of the onboard AI pipeline. Owns everything from the YOLO model to SLAM navigation running on embedded hardware.',
    links: { linkedin: '#', github: '#' },
  },
  {
    index: 2,
    name: 'JC Kawin',
    role: 'COO',
    initials: 'J',
    bio: 'Turns ideas into execution. Manages product development cycles, timelines, and makes sure what gets built actually ships.',
    links: { linkedin: '#', twitter: '#' },
  },
];

export default function TeamPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom text-center mb-16">
        <span className="text-accent font-mono text-sm uppercase tracking-widest">The Team</span>
        <h1 className="font-heading font-bold text-text-primary mt-4 text-4xl md:text-6xl">
          Three people.<br />One shared belief.
        </h1>
        <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
          Technology should remove barriers, not create them.
        </p>
      </div>
      <div className="container-custom max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((f) => (
            <FounderCard key={f.name} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
