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
      
      // Convert to absolute positions
      const startAbs = startPos + scrollY;
      const endAbs = endPos + scrollY;
      const currentAbs = scrollY + window.innerHeight / 2; // viewport center

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
 * Custom easing curves matching Framer's defaults
 */
export const easings = {
  // Framer's default ease-out
  framerEaseOut: [0, 1.03, 0.56, 1],
  // Framer's ease-in-out variant
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
 * Reproduces the exact Framer appear animations from the reference site
 */
export const framerVariants = {
  // Hero slogan/title animation
  heroTitle: {
    initial: { opacity: 1, x: -400, y: 0 },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { delay: 0.7, duration: 1, ease: easings.framerEaseOut }
    },
  },
  // Standard fade-in from bottom
  fadeInUp: {
    initial: { opacity: 0.001, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.1, ease: easings.framerEaseInOut }
    },
  },
  // Fade-in up with skew (used for some elements)
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
  // Scroll-triggered fade in up (for sections)
  scrollRevealUp: (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay, duration: 0.8, ease: easings.easeOutCubic }
    },
  }),
  // Larger scroll reveal for cards
  scrollRevealCard: (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay, duration: 0.7, ease: easings.easeOutCubic }
    },
  }),
  // Large translate for hero elements
  scrollRevealLarge: (delay = 0) => ({
    initial: { opacity: 0, y: 150 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay, duration: 1, ease: easings.easeOutCubic }
    },
  }),
  // Number counter animation
  numberCount: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.5, duration: 1.1, ease: easings.framerEaseInOut }
    },
  },
  // Border line animation
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
 * Animated Number Counter Component
 * Reproduces the number-flow-react counting animation
 */
export function AnimatedNumber({ value, suffix = '', prefix = '', delay = 0, className = '', fontSize = '4xl' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef(null);
  const prefersReduced = useReducedMotion();

  // Scroll-triggered animation
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, 
    [window.innerHeight * 0.5, window.innerHeight * 1.2], 
    [0, 1], 
    { clamp: true }
  );

  useMotionValueEvent(progress, 'change', (latest) => {
    if (latest > 0.1 && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setTimeout(() => {
        animateNumber();
      }, delay * 1000);
    }
  });

  const animateNumber = () => {
    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }
    
    const target = typeof value === 'number' ? value : parseFloat(value);
    const isDecimal = value.toString().includes('.');
    const duration = 1500; // ms
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      
      if (isDecimal) {
        setDisplayValue(current.toFixed(1));
      } else {
        setDisplayValue(Math.floor(current));
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(value); // Ensure exact final value
      }
    };

    requestAnimationFrame(tick);
  };

  // Also support Intersection Observer as fallback
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setTimeout(() => animateNumber(), delay * 1000);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [delay]);

  return (
    <motion.span
      ref={elementRef}
      className={`${className} inline-block`}
      style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.065em', lineHeight: 1 }}
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + delay, duration: 1.1, ease: easings.framerEaseInOut }}
    >
      {prefix}
      <span style={{ fontSize: getFontSize(fontSize) }}>{displayValue}</span>
      {suffix}
    </motion.span>
  );
}

function getFontSize(size) {
  const sizes = {
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  };
  return sizes[size] || '2.25rem';
}

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