'use client';

import { useWaitlist } from '../layout/WaitlistContext';

export default function WaitlistButton() {
  const openWaitlist = useWaitlist();
  return (
    <button
      onClick={openWaitlist}
      className="px-6 py-3 bg-accent text-white rounded-lg font-medium shadow-glow hover:shadow-glow-lg transition-all"
    >
      Join Waitlist
    </button>
  );
}
