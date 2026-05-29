'use client';

import { createContext, useContext } from 'react';

export const WaitlistContext = createContext<() => void>(() => {});
export const useWaitlist = () => useContext(WaitlistContext);
