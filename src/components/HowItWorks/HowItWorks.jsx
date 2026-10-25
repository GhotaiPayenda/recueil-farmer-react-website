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
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white/20"
          style={{ 
            fontFamily: '"Source Serif 4", Georgia, serif', 
            fontWeight: 300, 
            fontStyle: 'italic',
            letterSpacing: '-0.065em',
            lineHeight: 1,
          }}
        >
          {step.number}
        </motion.span>
        <motion.div className="h-px flex-1 max-w-xs bg-gradient-to-r from-white/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <motion.h3
          className="text-2xl md:text-3xl font-light tracking-tight text-white"
          style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.7, ease: easings.framerEaseOut }}
        >
          {step.title}
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl text-white/60 leading-relaxed"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.15, duration: 0.7, ease: easings.framerEaseOut }}
        >
          {step.description}
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        className="relative aspect-[4/3] rounded-xl overflow-hidden"
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
          <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-white/10" />
          <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-white/10" />
          <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l border-white/10" />
          <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-white/10" />
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
            {howItWorks.label}
          </motion.span>
          <motion.h2
            id="how-it-works-title"
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1 }}
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
        <div className="absolute top-20 left-5 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, #4e0822b1, #73e7cce0)' }} />
        <div className="absolute bottom-20 right-5 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, #73e7cce0, #4e0822b1)' }} />
      </div>
    </section>
  );
}