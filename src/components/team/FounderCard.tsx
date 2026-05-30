'use client';

import { motion } from 'framer-motion';
import { Code, Globe, MessageCircle } from 'lucide-react';

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  links?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  index?: number;
}

export default function FounderCard({ name, role, bio, initials, links = {}, index = 0 }: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-surface/40 backdrop-blur-sm border border-border rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-300 group"
    >
      <div className="relative mb-6 inline-block">
        <div className="w-28 h-28 bg-surface/60 border-2 border-border rounded-full mx-auto flex items-center justify-center group-hover:border-accent/50 transition-colors relative overflow-hidden">
          <span className="font-heading font-bold text-4xl text-accent/40 group-hover:text-accent/60 transition-colors">
            {initials}
          </span>
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-surface">
          {String(index + 1)}
        </div>
      </div>

      <h3 className="font-heading font-bold text-xl text-text-primary mb-1">{name}</h3>
      <p className="text-accent font-mono text-sm mb-4">{role}</p>
      
      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {bio}
      </p>

      <div className="flex justify-center gap-4">
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <Globe size={18} />
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <Code size={18} />
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <MessageCircle size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
}