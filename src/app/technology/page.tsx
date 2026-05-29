import type { Metadata } from 'next';
import TechHero from '@/components/technology/TechHero';
import WhyLocal from '@/components/technology/WhyLocal';
import ProcessingPipeline from '@/components/technology/ProcessingPipeline';

export const metadata: Metadata = {
  title: 'Technology',
};

const aiStack = [
  { model: 'YOLO', task: 'Object Detection', desc: 'Identifies obstacles, people, objects in real time from the camera feed.' },
  { model: 'SLAM', task: 'Spatial Navigation', desc: 'Builds a live map of unknown environments. Enables confident navigation in new spaces.' },
  { model: 'OCR', task: 'Text Recognition', desc: "Reads signs, menus, labels, and anything with text in the camera's field of view." },
  { model: 'TTS', task: 'Voice Output', desc: 'Converts all detections into natural, spoken audio feedback in real time.' },
];

export default function TechnologyPage() {
  return (
    <>
      <TechHero />
      <WhyLocal />
      <ProcessingPipeline />
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm uppercase tracking-widest">AI Stack</span>
            <h2 className="font-heading font-bold text-text-primary mt-4 text-3xl">
              What's running on the chip
            </h2>
          </div>
          <div className="space-y-4">
            {aiStack.map((item) => (
              <div
                key={item.model}
                className="bg-surface border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-accent/20 transition-colors"
              >
                <div className="md:w-48 shrink-0">
                  <span className="text-accent font-mono font-bold">{item.model}</span>
                  <span className="text-text-secondary text-sm block">{item.task}</span>
                </div>
                <div className="h-px md:w-px md:h-12 bg-border" />
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-surface/30">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-heading text-text-primary leading-relaxed">
            "We built ZyphraVision for people whose trust matters most. People who are already vulnerable.
            That's why privacy isn't a feature. It's the foundation."
          </p>
        </div>
      </section>
    </>
  );
}
