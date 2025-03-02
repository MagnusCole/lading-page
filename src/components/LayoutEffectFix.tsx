'use client';
import { useEffect } from 'react';

/**
 * This component patches React's useLayoutEffect to prevent SSR warnings
 * It should be imported and used in the root layout component
 */
export function LayoutEffectFix() {
  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    // Access the React object from the window
    const React = (window as any).React;
    if (!React) return; // Safety check

    // Save the original useLayoutEffect
    const originalUseLayoutEffect = React.useLayoutEffect;

    // Override useLayoutEffect to use useEffect during SSR
    React.useLayoutEffect = typeof window !== 'undefined' 
      ? originalUseLayoutEffect 
      : React.useEffect;

    // Cleanup function to restore original when component unmounts
    return () => {
      React.useLayoutEffect = originalUseLayoutEffect;
    };
  }, []);

  // This component doesn't render anything
  return null;
}