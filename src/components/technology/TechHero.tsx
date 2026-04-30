import { motion } from 'framer-motion';

export default function TechHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(124, 109, 250, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 109, 250, 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-xs uppercase tracking-widest mb-8">
            On-Device Architecture
          </span>
          
          <h1 className="font-heading font-bold text-text-primary leading-[1.1] mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
            Intelligence at<br />the edge.
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every inference. Every decision. On the device. In milliseconds. 
            No data centers. No subscription. No compromise.
          </p>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['YOLOv8', 'SLAM', 'OCR', 'TTS', 'INT8 Quantized', '4 TOPS'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="px-4 py-2 bg-surface border border-border rounded-lg text-text-secondary font-mono text-sm hover:border-accent/30 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}