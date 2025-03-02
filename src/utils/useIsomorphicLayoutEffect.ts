import { useEffect, useLayoutEffect } from 'react';

// This custom hook safely handles useLayoutEffect during SSR
// It uses useLayoutEffect on the client side and falls back to useEffect during SSR
// This prevents the "useLayoutEffect does nothing on the server" warning
export const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Export a function to patch React's useLayoutEffect globally
// This can be called from the LayoutEffectFix component
export function patchUseLayoutEffect() {
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
  
  return () => {
    // Cleanup function to restore original
    if (React) React.useLayoutEffect = originalUseLayoutEffect;
  };
}