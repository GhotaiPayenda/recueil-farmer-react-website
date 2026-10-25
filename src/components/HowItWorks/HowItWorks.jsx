import { motion } from 'motion/react';
import { howItWorks } from '../../data/websiteData';
import { easings, createScrollVariant } from '../../hooks/useScrollAnimation';

/**
 * Step Card Component
 */
function StepCard({ step, index }) {
  const cardVariants = createScrollVariant({
    y: 40,
    delay: 0.2 + index * 0.15,
    duration: 0.8,
    ease: easings.easeOutCubic,
  });

  const imageVariants = createScrollVariant({
    y: 60,
    delay: 0.3 + index * 0.15,
    duration: 1,
    ease: easings.easeOutCubic,
  });

  return (
    <motion.article
      className="relative flex flex-col gap-6"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Step Number */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + index * 0.15, duration: 0.6, ease: easings.framerEaseOut }}
      >
        <motion.span
          className="font-light text-white/20"
          style={{ 
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '-0.065em',
            lineHeight: 1,
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
          }}
        >
          {step.number}
        </motion.span>
        <motion.div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)' }} />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <motion.h3
          className="font-light tracking-tight text-white"
          style={{ 
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.7, ease: easings.framerEaseOut }}
        >
          {step.title}
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          style={{ 
            fontFamily: 'var(--font-sans)', 
            fontWeight: 400,
            color: 'rgba(255,255,255,0.6)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.15, duration: 0.7, ease: easings.framerEaseOut }}
        >
          {step.description}
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <div className="absolute inset-0" style={{ backgroundImage: `url(${step.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
        
        {/* Corner accents */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-px -left-px w-8 h-8 border-t border-l" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="absolute -top-px -right-px w-8 h-8 border-t border-r" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        </div>
      </motion.div>
    </motion.article>
  );
}

export function HowItWorks() {
  return (
    <section 
      id="howitworks"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="how-it-works-title"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div className="container-main">
        {/* Section Header */}
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
            {howItWorks.label}
          </motion.span>
          <motion.h2
            id="how-it-works-title"
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
            {howItWorks.title}
          </motion.h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {howItWorks.steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-5 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, rgba(78, 8, 34, 0.7), rgba(186, 230, 253, 0.3))' }} />
        <div className="absolute bottom-20 right-5 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, rgba(186, 230, 253, 0.3), rgba(78, 8, 34, 0.7))' }} />
      </div>
    </section>
  );
}