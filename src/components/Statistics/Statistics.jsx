import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { statistics } from '../../data/websiteData';
import { easings, createScrollVariant } from '../../hooks/useScrollAnimation';
import { AnimatedNumber } from '../AnimatedNumber/AnimatedNumber';

/**
 * Statistic Item Component - EXACT layout from reference with vertical dotted border
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
        paddingRight: isMobile ? 0 : '24px',
      }}
    >
      {/* Vertical divider line - EXACT from reference: dotted, left side, rgba(255,255,255,0.12) */}
      {stat.borderSide && (
        <motion.div
          className="absolute top-0 bottom-0 w-px"
          style={{ 
            left: stat.borderSide === 'left' ? 0 : 'auto',
            right: stat.borderSide === 'right' ? 0 : 'auto',
            backgroundImage: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1px 100%',
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.15, duration: 1.1, ease: easings.framerEaseInOut }}
          transformOrigin="top center"
        />
      )}

      {/* Number - EXACT from reference with number-flow-react style animation */}
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
              fontFamily: 'var(--font-serif)', 
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

      {/* Label - EXACT typography from reference */}
      <motion.h3
        className="text-lg md:text-xl font-medium text-white"
        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 + index * 0.15, duration: 0.8, ease: easings.framerEaseOut }}
      >
        {stat.label}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-base md:text-lg leading-relaxed max-w-xs"
        style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}
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
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="container-main">
        {/* Section Header - EXACT from reference */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easings.easeOutCubic }}
        >
          <motion.span
            className="inline-block mb-4 text-xs font-medium uppercase tracking-widest"
            style={{ 
              fontFamily: 'var(--font-sans)', 
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            By the numbers
          </motion.span>
          <motion.h2
            id="statistics-title"
            className="tracking-tight text-white"
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            The math behind the scent
          </motion.h2>
        </motion.div>

        {/* Statistics Grid - EXACT 4-column layout from reference */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {statistics.map((stat, index) => (
            <StatisticItem key={stat.id} stat={stat} index={index} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}