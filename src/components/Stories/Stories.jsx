import { motion } from 'motion/react';
import { stories } from '../../data/websiteData';
import { easings, createScrollVariant } from '../../hooks/useScrollAnimation';
import { AnimatedNumber } from '../AnimatedNumber/AnimatedNumber';

const cardShadow = [
  '0px 1.68px 7.05px -0.19px rgba(0, 0, 0, 0.02)',
  '0px 3.98px 16.72px -0.38px rgba(0, 0, 0, 0.03)',
  '0px 7.26px 30.5px -0.56px rgba(0, 0, 0, 0.03)',
  '0px 12.07px 50.7px -0.75px rgba(0, 0, 0, 0.03)',
  '0px 19.5px 81.88px -0.94px rgba(0, 0, 0, 0.03)',
  '0px 31.91px 134.04px -1.31px rgba(0, 0, 0, 0.03)',
  '0px 54.95px 230.8px -1.31px rgba(0, 0, 0, 0.04)',
  '0px 100px 420px -1.5px rgba(0, 0, 0, 0.06)',
].join(', ');

function StoryCard({ story, index }) {
  const delay = 0.2 + index * 0.3;

  return (
    <motion.article
      className="relative group flex flex-col md:flex-row gap-0 md:gap-12 rounded-[24px] overflow-hidden"
      style={{
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: cardShadow,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: easings.easeOutCubic }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Image card - left side */}
      <motion.div
        className="flex-shrink-0 w-full md:w-[45%] aspect-[1/1] md:aspect-auto h-[340px] md:h-full relative overflow-hidden rounded-[24px]"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay, duration: 0.9, ease: easings.easeOutCubic }}
      >
        <img
          src={story.image}
          alt={story.imageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Overlay at bottom-left */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <motion.h4
              className="text-lg font-medium text-white"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: delay + 0.1, duration: 0.5, ease: easings.framerEaseOut }}
            >
              {story.name}
            </motion.h4>
            <motion.p
              className="text-sm"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: delay + 0.2, duration: 0.5, ease: easings.framerEaseOut }}
            >
              {story.memberInfo}
            </motion.p>
            <motion.div
              className="inline-flex items-center gap-1 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgb(25,39,80)] px-3 py-1 text-xs font-medium text-white/70"
              style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: delay + 0.3, duration: 0.5, ease: easings.framerEaseOut }}
            >
              {story.plan}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Story content - right side */}
      <motion.div
        className="flex w-full min-w-0 flex-col gap-6 p-6 md:w-auto md:p-8"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay, duration: 0.9, ease: easings.easeOutCubic }}
      >
        <motion.p
          className="text-xs uppercase tracking-widest font-medium text-white/70"
          style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.1, duration: 0.5, ease: easings.framerEaseOut }}
        >
          {story.tag}
        </motion.p>

        <motion.div className="flex flex-col gap-2">
          <motion.h3
            className="text-2xl md:text-3xl font-light italic leading-tight text-white"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.04em', lineHeight: 1.1 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.6, ease: easings.framerEaseOut }}
          >
            {story.title}
          </motion.h3>
          <motion.h3
            className="text-lg md:text-xl font-light italic leading-tight text-white/80"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.04em', lineHeight: 1.1 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.3, duration: 0.6, ease: easings.framerEaseOut }}
          >
            {story.subtitle}
          </motion.h3>
        </motion.div>

        <motion.p
          className="text-sm md:text-base leading-relaxed text-white/70"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.6 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.4, duration: 0.7, ease: easings.framerEaseOut }}
        >
          {story.description}
        </motion.p>

        {/* Stats */}
        {story.stats && (
          <motion.div
            className="grid grid-cols-2 gap-4 mt-2 border-t border-[rgba(255,255,255,0.1)] pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.7, ease: easings.easeOutCubic }}
          >
            {story.stats.map((stat, sIdx) => (
              <div key={sIdx} className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <AnimatedNumber value={parseInt(stat.value)} delay={delay + 0.6 + sIdx * 0.1} fontSize="2xl" />
                  {stat.suffix && (
                    <motion.span
                      className="text-white/70"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', fontSize: '1.5rem', lineHeight: 1 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: delay + 0.7 + sIdx * 0.1, duration: 0.8, ease: easings.framerEaseOut }}
                    >
                      {stat.suffix}
                    </motion.span>
                  )}
                </div>
                <motion.p className="text-sm font-medium text-white" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                  {stat.label}
                </motion.p>
                <motion.p className="text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
                  {stat.subLabel}
                </motion.p>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.article>
  );
}

export function Stories() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden border-t border-[rgba(255,255,255,0.08)] px-6 py-24 md:py-32"
      aria-labelledby="stories-title"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easings.easeOutCubic }}
        >
          <motion.span
            className="inline-block mb-4 text-xs font-medium uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {stories.label}
          </motion.span>
          <motion.h2
            id="stories-title"
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
            {stories.titlePart1}
            <span style={{ display: 'block' }}>{stories.titlePart2}</span>
          </motion.h2>
          <motion.p
            className="mt-6 max-w-[600px] mx-auto text-sm md:text-base text-white/70"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.6 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: easings.framerEaseOut }}
          >
            {stories.description}
          </motion.p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {stories.items.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, rgba(78, 8, 34, 0.7), rgba(186, 230, 253, 0.3))' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, rgba(186, 230, 253, 0.3), rgba(78, 8, 34, 0.7))' }} />
      </div>
    </section>
  );
}

export default Stories;
