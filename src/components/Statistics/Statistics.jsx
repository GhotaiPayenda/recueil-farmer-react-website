import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { statistics } from '../../data/websiteData';
import { easings, framerVariants, createScrollVariant } from '../../hooks/useScrollAnimation';

/**
 * Animated number counter component
 * Reproduces the number-flow-react behavior from Framer
 */
function AnimatedNumber({ value, suffix = '', prefix = '', delay = 0, className = '', fontSize = '4xl' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef(null);

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
 * Statistic Item Component
 */
function StatisticItem({ stat, index, isMobile = false }) {
  const variants = createScrollVariant({
    y: 60,
    delay: 0.2 + index * 0.15,
    duration: 0.9,
    ease: easings.easeOutCubic,
  });

  return (
    <motion.div
      className="relative flex flex-col gap-6"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      style={{ 
        flex: 1,
        minWidth: isMobile ? '100%' : '0',
      }}
    >
      {/* Vertical divider line */}
      {stat.borderSide && (
        <motion.div
          className="absolute top-0 bottom-0 w-px"
          style={{ 
            left: stat.borderSide === 'left' ? 0 : 'auto',
            right: stat.borderSide === 'right' ? 0 : 'auto',
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)',
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.15, duration: 1.1, ease: easings.framerEaseInOut }}
          transformOrigin="top center"
        />
      )}

      {/* Number */}
      <div className="flex items-baseline gap-2">
        <AnimatedNumber
          value={stat.value}
          suffix={stat.suffix || ''}
          prefix={stat.prefix || ''}
          delay={0.5 + index * 0.15}
          className="font-light"
          fontSize={isMobile ? '5xl' : '6xl'}
        />
        {stat.suffix && stat.suffix !== '+' && (
          <motion.span
            className="text-white/70"
            style={{ 
              fontFamily: '"Source Serif 4", Georgia, serif', 
              fontWeight: 300, 
              fontStyle: 'italic',
              fontSize: isMobile ? '3xl' : '4xl',
              lineHeight: 1,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.15, duration: 0.8, ease: easings.framerEaseOut }}
          >
            {stat.suffix}
          </motion.span>
        )}
      </div>

      {/* Label */}
      <motion.h3
        className="text-lg md:text-xl font-medium text-white"
        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 + index * 0.15, duration: 0.8, ease: easings.framerEaseOut }}
      >
        {stat.label}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-base md:text-lg text-white/60 leading-relaxed max-w-xs"
        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 + index * 0.15, duration: 0.8, ease: easings.framerEaseOut }}
      >
        {stat.description}
      </motion.p>
    </motion.div>
  );
}

export function Statistics() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 810);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="statistics-title"
      style={{ backgroundColor: '#2a3f6a' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easings.easeOutCubic }}
        >
          <motion.span
            className="inline-block mb-4 text-xs font-medium uppercase tracking-widest text-white/50"
            style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.14em' }}
          >
            By the numbers
          </motion.span>
          <motion.h2
            id="statistics-title"
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            The math behind the scent
          </motion.h2>
        </motion.div>

        {/* Statistics Grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {statistics.map((stat, index) => (
            <StatisticItem key={stat.id} stat={stat} index={index} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}