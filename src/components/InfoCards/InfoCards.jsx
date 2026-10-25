import { motion } from 'motion/react';
import { infoCards } from '../../data/websiteData';
import { easings, createScrollVariant } from '../../hooks/useScrollAnimation';

/**
 * Individual Info Card Component
 */
function InfoCard({ card, index }) {
  const cardVariants = createScrollVariant({
    y: 30,
    delay: card.animationDelay,
    duration: 0.7,
    ease: easings.easeOutCubic,
  });

  const numberVariants = createScrollVariant({
    y: 20,
    delay: card.animationDelay + 0.2,
    duration: 0.8,
    ease: easings.framerEaseInOut,
  });

  const getIcon = (iconName) => {
    const icons = {
      percent: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m-7 7l-4-4m10 10l-4-4m0 0l4 4m-4-4l-4 4" />
        </svg>
      ),
      calendar: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      tag: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      bottle: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'shopping-bag': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a2 2 0 00-2-2H6a2 2 0 00-2 2v4m8 0h8m-8 0l-1 1m0 0l1 1m-2 2v5a2 2 0 002 2h4a2 2 0 002-2v-5" />
        </svg>
      ),
    };
    return icons[iconName] || icons.percent;
  };

  return (
    <motion.article
      className="relative flex flex-col gap-4 p-6 md:p-8"
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        minHeight: '280px',
      }}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Corner accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-px -left-px w-6 h-6 border-t border-l border-white/10" />
        <div className="absolute -top-px -right-px w-6 h-6 border-t border-r border-white/10" />
        <div className="absolute -bottom-px -left-px w-6 h-6 border-b border-l border-white/10" />
        <div className="absolute -bottom-px -right-px w-6 h-6 border-b border-r border-white/10" />
      </div>

      {/* Icon */}
      <motion.div
        className="w-12 h-12 flex items-center justify-center"
        style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
        }}
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: card.animationDelay + 0.1, duration: 0.6, ease: easings.springGentle }}
      >
        {getIcon(card.icon)}
      </motion.div>

      {/* Number */}
      <motion.div
        className="flex items-baseline gap-1"
        variants={numberVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          className="font-light"
          style={{ 
            fontFamily: '"Source Serif 4", Georgia, serif', 
            fontWeight: 300, 
            fontStyle: 'italic',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            letterSpacing: '-0.065em',
            lineHeight: 1,
            color: 'white',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: card.animationDelay + 0.2, duration: 0.9, ease: easings.framerEaseInOut }}
        >
          {card.value}
        </motion.span>
        {card.suffix && (
          <motion.span
            className="text-white/70"
            style={{ 
              fontFamily: '"Source Serif 4", Georgia, serif', 
              fontWeight: 300, 
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              lineHeight: 1,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.animationDelay + 0.3, duration: 0.8, ease: easings.framerEaseOut }}
          >
            {card.suffix}
          </motion.span>
        )}
      </motion.div>

      {/* Label */}
      <motion.h3
        className="text-lg md:text-xl font-medium text-white leading-tight"
        style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: card.animationDelay + 0.3, duration: 0.7, ease: easings.framerEaseOut }}
      >
        {card.label}
      </motion.h3>

      {/* Sub-label */}
      {card.subLabel && (
        <motion.p
          className="text-base text-white/50 leading-relaxed"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: card.animationDelay + 0.4, duration: 0.7, ease: easings.framerEaseOut }}
        >
          {card.subLabel}
        </motion.p>
      )}
    </motion.article>
  );
}

export function InfoCards() {
  return (
    <section 
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="info-cards-title"
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
            Member data
          </motion.span>
          <motion.h2
            id="info-cards-title"
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            What members experience
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {infoCards.map((card, index) => (
            <InfoCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}