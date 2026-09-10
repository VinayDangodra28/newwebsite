'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  threshold = 0.1, 
  rootMargin = '0px',
  className = '',
  once = true 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, once]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'visible' : ''} reveal ${className}`}
    >
      {children}
    </div>
  );
}