'use client';
import { useEffect } from 'react';
import { patchUseLayoutEffect } from '../utils/useIsomorphicLayoutEffect';

/**
 * This component patches React's useLayoutEffect to prevent SSR warnings
 * It should be imported and used in the root layout component
 */
export function LayoutEffectFix() {
  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    // Apply the global patch to React's useLayoutEffect
    const cleanup = patchUseLayoutEffect();
    
    // Cleanup function to restore original when component unmounts
    return cleanup;
  }, []);

  // This component doesn't render anything
  return null;
}