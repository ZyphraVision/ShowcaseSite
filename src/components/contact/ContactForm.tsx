'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Briefcase, Newspaper, Send, Check } from 'lucide-react';
import GlowButton from '../shared/GlowButton';

type ContactType = 'beta' | 'investor' | 'press';

const tabs: { id: ContactType; label: string; icon: typeof FlaskConical; desc: string }[] = [
  { id: 'beta', label: 'I want to try it', icon: FlaskConical, desc: 'Beta tester' },
  { id: 'investor', label: 'I want to fund it', icon: Briefcase, desc: 'Investor inquiry' },
  { id: 'press', label: 'I want to cover it', icon: Newspaper, desc: 'Press / Media' },
];

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<ContactType>('beta');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    country: '',
    angle: '',
    message: '',
    visuallyImpaired: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to Formspree or API route
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getExtraFields = () => {
    switch (activeTab) {
      case 'beta':
        return (
          <>
            <div>
              <label className="block text-sm text-text-secondary mb-2">Country / Region</label>
              <input
                type="text"
                value={formData.country}
                onChange={e => updateField('country', e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">Are you visually impaired or a caregiver?</label>
              <select
                value={formData.visuallyImpaired}
                onChange={e => updateField('visuallyImpaired', e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
              >
                <option value="">Select...</option>
                <option value="visually-impaired">I am visually impaired</option>
                <option value="caregiver">I am a caregiver</option>
                <option value="neither">Neither (interested observer)</option>
              </select>
            </div>
          </>
        );
      case 'investor':
        return (
          <div>
            <label className="block text-sm text-text-secondary mb-2">Organization / Fund</label>
            <input
              type="text"
              value={formData.org}
              onChange={e => updateField('org', e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
        );
      case 'press':
        return (
          <>
            <div>
              <label className="block text-sm text-text-secondary mb-2">Outlet / Publication</label>
              <input
                type="text"
                value={formData.org}
                onChange={e => updateField('org', e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">Story Angle</label>
              <input
                type="text"
                value={formData.angle}
                onChange={e => updateField('angle', e.target.value)}
                placeholder="e.g., Assistive tech, AI hardware, startup journey"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-2 mb-8 p-1 bg-background border border-border rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-accent text-white shadow-glow'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface'
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.desc}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-surface border border-accent/20 rounded-2xl p-12 text-center"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">Message sent.</h3>
            <p className="text-text-secondary">We will get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-2xl p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2">Name *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => updateField('name', e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2">Email *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => updateField('email', e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid sm:grid-cols-2 gap-6 overflow-hidden"
              >
                {getExtraFields()}
              </motion.div>
            </AnimatePresence>

            <div>
              <label className="block text-sm text-text-secondary mb-2">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={e => updateField('message', e.target.value)}
                placeholder={
                  activeTab === 'beta' ? 'Tell us about your experience with assistive tech...' :
                  activeTab === 'investor' ? 'What stage are you interested in? Any specific questions?' :
                  'What is the story angle and timeline?'
                }
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>

            <GlowButton type="submit" className="w-full sm:w-auto">
              <Send size={18} className="mr-2" />
              Send Message
            </GlowButton>

            <p className="text-text-secondary/40 text-xs">
              Your information is kept confidential and never shared with third parties.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}