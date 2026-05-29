'use client';

import { useState } from 'react';
import { WaitlistContext } from './WaitlistContext';
import Navbar from './Navbar';
import Footer from './Footer';
import WaitlistModal from '../shared/WaitlistModal';
import ScanField from '../shared/hud/ScanField';
import TelemetryHud from '../shared/hud/TelemetryHud';
import Reticle from '../shared/hud/Reticle';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <WaitlistContext.Provider value={() => setOpen(true)}>
      <ScanField />
      <TelemetryHud />
      <Reticle />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />
    </WaitlistContext.Provider>
  );
}
