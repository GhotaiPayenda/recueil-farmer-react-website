import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

/**
 * Hook for scroll-triggered animations using Intersection Observer
 * Reproduces the Framer-style scroll animations with staggered reveals
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const setRef = useCallback((node) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || (triggerOnce && hasAnimated)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) setHasAnimated(true);
            }, delay * 1000);
          } else {
            setIsVisible(true);
            if (triggerOnce) setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { ref: setRef, isVisible, hasAnimated };
}

/**
 * Hook for scroll-linked animations (parallax, progress-based transforms)
 * Returns scroll progress (0-1) for an element relative to viewport
 */
export function useScrollProgress(options = {}) {
  const { 
    start = 'top bottom', 
    end = 'bottom top',
    clamp = true 
  } = options;

  const [progress, setProgress] = useState(0);
  const elementRef = useRef(null);

  const setRef = useCallback((node) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const parsePosition = (pos) => {
      const [ref, edge] = pos.split(' ');
      return { ref, edge };
    };

    const { ref: startRef, edge: startEdge } = parsePosition(start);
    const { ref: endRef, edge: endEdge } = parsePosition(end);

    const getElementPosition = (el, edge) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      switch (edge) {
        case 'top': return rect.top;
        case 'bottom': return rect.bottom;
        case 'center': return (rect.top + rect.bottom) / 2;
        default: return rect.top;
      }
    };

    const updateProgress = () => {
      const el = elementRef.current;
      if (!el) return;

      const startEl = startRef === 'viewport' ? { getBoundingClientRect: () => ({ top: 0, bottom: window.innerHeight }) } : el;
      const endEl = endRef === 'viewport' ? { getBoundingClientRect: () => ({ top: 0, bottom: window.innerHeight }) } : el;

      const startPos = getElementPosition(startEl, startEdge);
      const endPos = getElementPosition(endEl, endEdge);
      const scrollY = window.scrollY || window.pageYOffset;
      
      const startAbs = startPos + scrollY;
      const endAbs = endPos + scrollY;
      const currentAbs = scrollY + window.innerHeight / 2;

      let p = (currentAbs - startAbs) / (endAbs - startAbs);
      
      if (clamp) {
        p = Math.max(0, Math.min(1, p));
      }
      
      setProgress(p);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [start, end, clamp]);

  return { ref: setRef, progress };
}

/**
 * Hook for reduced motion preference
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const handler = (event) => setPrefersReduced(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}

/**
 * Hook for staggered child animations
 * Returns delay values for each child index
 */
export function useStaggeredDelay(baseDelay = 0, stagger = 0.1) {
  return useCallback((index) => baseDelay + index * stagger, [baseDelay, stagger]);
}

/**
 * Custom easing curves matching Framer's defaults from the reference site
 */
export const easings = {
  // Framer's default ease-out: [0, 1.03, 0.56, 1]
  framerEaseOut: [0, 1.03, 0.56, 1],
  // Framer's ease-in-out variant: [0.6, 0, 0.38, 1.01]
  framerEaseInOut: [0.6, 0, 0.38, 1.01],
  // Standard CSS easings
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
  // Spring-like
  springGentle: [0.34, 1.56, 0.64, 1],
  springBouncy: [0.34, 1.8, 0.64, 1],
};

/**
 * Animation variants for Framer Motion
 * Reproduces the EXACT Framer appear animations from the reference site
 */
export const framerVariants = {
  // Hero slogan/title animation - EXACT from reference: x: -400, delay: 0.7, duration: 1, ease: [0, 1.03, 0.56, 1]
  heroTitle: {
    initial: { opacity: 1, x: -400, y: 0 },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { delay: 0.7, duration: 1, ease: easings.framerEaseOut }
    },
  },
  // Standard fade-in from bottom - EXACT from reference: opacity: 0.001, y: 60, delay: 0.5, duration: 1.1, ease: [0.6, 0, 0.38, 1.01]
  fadeInUp: {
    initial: { opacity: 0.001, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.1, ease: easings.framerEaseInOut }
    },
  },
  // Fade-in up with skew (used for some elements) - EXACT: skewX: -3
  fadeInUpSkew: {
    initial: { opacity: 0.001, y: 60, skewX: -3 },
    animate: { 
      opacity: 1, 
      y: 0, 
      skewX: 0,
      transition: { duration: 1.1, ease: easings.framerEaseInOut }
    },
  },
  // Staggered children container
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  },
  // Scroll-triggered fade in up (for sections) - matches reference: opacity: 0, transform: translateY(40px)
  scrollRevealUp: (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay, duration: 0.8, ease: easings.easeOutCubic }
    },
  }),
  // Larger scroll reveal for cards - matches reference: opacity: 0, transform: translateY(30px)
  scrollRevealCard: (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay, duration: 0.7, ease: easings.easeOutCubic }
    },
  }),
  // Large translate for hero elements - matches reference: opacity: 0, transform: translateY(150px)
  scrollRevealLarge: (delay = 0) => ({
    initial: { opacity: 0, y: 150 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay, duration: 1, ease: easings.easeOutCubic }
    },
  }),
  // Number counter animation - matches reference: opacity: 0, scale: 1.2
  numberCount: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.5, duration: 1.1, ease: easings.framerEaseInOut }
    },
  },
  // Border line animation - matches reference: opacity: 0.001, y: 10
  borderReveal: {
    initial: { opacity: 0.001, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5, duration: 1.1, ease: easings.framerEaseInOut }
    },
  },
};

/**
 * Creates a scroll-triggered variant with custom parameters
 */
export function createScrollVariant(customOptions = {}) {
  const {
    y = 40,
    x = 0,
    opacity = 0,
    scale = 1,
    rotateX = 0,
    rotateY = 0,
    skewX = 0,
    duration = 0.8,
    ease = easings.easeOutCubic,
    delay = 0,
  } = customOptions;

  return {
    initial: { opacity, y, x, scale, rotateX, rotateY, skewX },
    animate: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0, 
      skewX: 0,
      transition: { delay, duration, ease }
    },
  };
}