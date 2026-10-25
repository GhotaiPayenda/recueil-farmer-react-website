import { motion } from 'motion/react';
import { memberSection } from '../../data/websiteData';
import { easings, createScrollVariant, AnimatedNumber } from '../../hooks/useScrollAnimation';

/**
 * Member Card Component
 */
function MemberCard({ member, index }) {
  const cardVariants = createScrollVariant({
    y: 40,
    delay: 0.1 + index * 0.2,
    duration: 0.8,
    ease: easings.easeOutCubic,
  });

  const quoteVariants = createScrollVariant({
    y: 30,
    delay: 0.3 + index * 0.2,
    duration: 0.7,
    ease: easings.easeOutCubic,
  });

  const statsVariants = createScrollVariant({
    y: 30,
    delay: 0.5 + index * 0.2,
    duration: 0.7,
    ease: easings.easeOutCubic,
  });

  return (
    <motion.article
      className="relative flex flex-col gap-8 p-8 md:p-12"
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
      }}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Corner accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-px -left-px w-10 h-10 border-t border-l border-white/10" />
        <div className="absolute -top-px -right-px w-10 h-10 border-t border-r border-white/10" />
        <div className="absolute -bottom-px -left-px w-10 h-10 border-b border-l border-white/10" />
        <div className="absolute -bottom-px -right-px w-10 h-10 border-b border-r border-white/10" />
      </div>

      {/* Avatar & Name */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.2, duration: 0.6, ease: easings.framerEaseOut }}
      >
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center" aria-hidden="true">
            <svg className="w-8 h-8 text-white/30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        <div>
          <motion.h4
            className="text-lg font-medium text-white"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {member.name}
          </motion.h4>
          <motion.p
            className="text-sm text-white/50"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
          >
            {member.role}
          </motion.p>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="relative"
        variants={quoteVariants}
        initial="initial"
        animate="animate"
      >
        <motion.svg className="absolute -top-4 -left-2 w-10 h-10 text-white/10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609v7.391c-3.951.671-7.342 3.897-8.983 8.218zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.999-10.609v7.391c-3.934.671-7.324 3.897-8.999 8.218z"/>
        </motion.svg>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white relative z-10"
          style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: 1.3 }}
        >
          "{member.quote}"
        </motion.p>
      </motion.blockquote>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 gap-6 md:gap-8 pt-4 border-t border-white/10"
        variants={statsVariants}
        initial="initial"
        animate="animate"
      >
        {/* Stat 1: Bottles in kit */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-1">
            <AnimatedNumber
              value={member.stats.bottles}
              delay={0.5 + index * 0.2}
              fontSize="4xl"
            />
            <motion.span
              className="text-white/70"
              style={{ 
                fontFamily: '"Source Serif 4", Georgia, serif', 
                fontWeight: 300, 
                fontStyle: 'italic',
                fontSize: '2xl',
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.8, ease: easings.framerEaseOut }}
            >
              +
            </motion.span>
          </div>
          <motion.p className="text-sm font-medium text-white" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
            {member.stats.label}
          </motion.p>
          <motion.p className="text-sm text-white/50" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}>
            {member.stats.subLabel}
          </motion.p>
        </div>

        {/* Stat 2: Full bottles bought */}
        <div className="flex flex-col gap-2 text-right">
          <motion.div className="flex items-baseline justify-end gap-1">
            <AnimatedNumber
              value={member.stats2.value}
              delay={0.6 + index * 0.2}
              fontSize="4xl"
            />
            <motion.span
              className="text-white/70"
              style={{ 
                fontFamily: '"Source Serif 4", Georgia, serif', 
                fontWeight: 300, 
                fontStyle: 'italic',
                fontSize: '2xl',
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.8, ease: easings.framerEaseOut }}
            >
              +
            </motion.span>
          </motion.div>
          <motion.p className="text-sm font-medium text-white text-right" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
            {member.stats2.label}
          </motion.p>
          <motion.p className="text-sm text-white/50 text-right" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}>
            {member.stats2.subLabel}
          </motion.p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function MemberSection() {
  return (
    <section 
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="member-section-title"
      style={{ backgroundColor: '#1a2750' }}
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
            {memberSection.label}
          </motion.span>
          <motion.h2
            id="member-section-title"
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            {memberSection.title}
          </motion.h2>
        </motion.div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {memberSection.members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-5 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, #4e0822b1, #73e7cce0)' }} />
        <div className="absolute bottom-20 right-5 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, #73e7cce0, #4e0822b1)' }} />
      </div>
    </section>
  );
}