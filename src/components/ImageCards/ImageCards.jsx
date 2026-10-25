import { motion } from 'motion/react';
import { imageCards } from '../../data/websiteData';
import { easings, createScrollVariant } from '../../hooks/useScrollAnimation';

/**
 * Individual Image Card Component - EXACT from reference with alternating layout
 */
function ImageCard({ card, index }) {
  const cardVariants = createScrollVariant({
    y: 40,
    delay: 0.1 + index * 0.15,
    duration: 0.8,
    ease: easings.easeOutCubic,
  });

  const imageVariants = createScrollVariant({
    scale: 1.05,
    delay: 0.2 + index * 0.15,
    duration: 1,
    ease: easings.easeOutCubic,
  });

  const contentVariants = createScrollVariant({
    y: 30,
    delay: 0.3 + index * 0.15,
    duration: 0.7,
    ease: easings.easeOutCubic,
  });

  return (
    <motion.article
      className="relative group"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className={`grid lg:grid-cols-2 gap-0 items-center ${card.reverse ? '' : ''}`}>
        {/* Image Side */}
        <motion.div
          className={`relative aspect-[4/3] lg:aspect-auto lg:h-[500px] ${card.reverse ? 'lg:order-2' : ''} overflow-hidden`}
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: card.reverse ? '0 16px 16px 0' : '16px 0 0 16px',
          }}
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="absolute inset-0"
            style={{ 
              backgroundImage: `url(${card.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              transition: 'transform 0.8s ease-out',
            }}
            aria-hidden="true"
            whileHover={{ scale: 1.03 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" aria-hidden="true" />
          
          {/* Corner accents */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-px -left-px w-8 h-8 border-t border-l" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute -top-px -right-px w-8 h-8 border-t border-r" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          className={`relative p-8 md:p-12 lg:p-16 ${card.reverse ? 'lg:order-1' : ''} flex flex-col justify-center`}
          style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: card.reverse ? '16px 0 0 16px' : '0 16px 16px 0',
            minHeight: '500px',
          }}
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          {/* Corner accents */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-px -left-px w-8 h-8 border-t border-l" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute -top-px -right-px w-8 h-8 border-t border-r" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          </div>

          <div className="max-w-xl mx-auto w-full">
            <motion.span
              className="inline-block mb-6 text-xs font-medium uppercase tracking-widest"
              style={{ 
                fontFamily: 'var(--font-sans)', 
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.5)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: easings.framerEaseOut }}
            >
              Feature
            </motion.span>

            <motion.h3
              className="mb-6 tracking-tight text-white"
              style={{ 
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontStyle: 'italic',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.7, ease: easings.framerEaseOut }}
            >
              {card.title}
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
              transition={{ delay: 0.5 + index * 0.15, duration: 0.7, ease: easings.framerEaseOut }}
            >
              {card.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function ImageCards() {
  return (
    <section 
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="image-cards-title"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
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
            Details
          </motion.span>
          <motion.h2
            id="image-cards-title"
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
            Designed for the ritual
          </motion.h2>
        </motion.div>

        {/* Cards Stack */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {imageCards.map((card, index) => (
            <ImageCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}