import type { Metadata } from 'next';
import MissionBlock from '@/components/about/MissionBlock';
import OriginStory from '@/components/about/OriginStory';

export const metadata: Metadata = {
  title: 'About',
};

const values = [
  { title: 'Privacy First', desc: 'Data never leaves the device. Ever.' },
  { title: 'Accessibility', desc: 'Built with and for the visually impaired community.' },
  { title: 'Independence', desc: 'Technology should enable, not replace, human capability.' },
  { title: 'Transparency', desc: 'We share our progress, our challenges, and our roadmap openly.' },
];

export default function AboutPage() {
  return (
    <>
      <MissionBlock />
      <OriginStory />
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-text-primary text-3xl mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-surface border border-border rounded-xl p-6 border-l-4 border-l-accent">
                <h3 className="font-heading font-bold text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-secondary text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
