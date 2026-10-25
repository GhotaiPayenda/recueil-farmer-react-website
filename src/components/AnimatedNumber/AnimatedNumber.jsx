import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { easings, useReducedMotion } from '../../hooks/useScrollAnimation';

/**
 * Animated Number Counter Component
 * Reproduces the EXACT number-flow-react counting animation from the reference
 */
export function AnimatedNumber({ 
  value, 
  suffix = '', 
  prefix = '', 
  delay = 0, 
  className = '', 
  fontSize = '4xl' 
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef(null);
  const prefersReduced = useReducedMotion();

  // Scroll-triggered animation using motion values
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
      
      // Easing: easeOutCubic matching Framer's default
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
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(tick);
  };

  // Intersection Observer fallback
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