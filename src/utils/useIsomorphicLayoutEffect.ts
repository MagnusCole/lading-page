import { useEffect, useLayoutEffect } from 'react';

// This custom hook safely handles useLayoutEffect during SSR
// It uses useLayoutEffect on the client side and falls back to useEffect during SSR
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;