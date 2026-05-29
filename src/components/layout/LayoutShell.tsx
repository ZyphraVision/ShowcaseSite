'use client';

import { useState } from 'react';
import { WaitlistContext } from './WaitlistContext';
import Navbar from './Navbar';
import Footer from './Footer';
import WaitlistModal from '../shared/WaitlistModal';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <WaitlistContext.Provider value={() => setOpen(true)}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />
    </WaitlistContext.Provider>
  );
}
