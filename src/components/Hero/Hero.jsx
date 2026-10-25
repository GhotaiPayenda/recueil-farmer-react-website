import { motion } from 'motion/react';
import { hero } from '../../data/websiteData';
import { framerVariants, easings } from '../../hooks/useScrollAnimation';

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      aria-labelledby="hero-title"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Background Video - exact from reference */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={hero.videoPoster}
          aria-hidden="true"
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability - exact gradient from reference */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(180deg, rgba(25, 39, 80, 0.8) 0%, rgba(25, 39, 80, 0.6) 50%, var(--color-bg-primary) 100%)' 
        }} />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content - exact structure from reference */}
      <div className="relative z-10 container-main py-32">
        <div className="text-center">
          {/* Label / Pre-title - EXACT from reference */}
          <motion.div
            className="mb-8"
            style={{ fontFamily: 'var(--font-sans)' }}
            variants={framerVariants.heroTitle}
            initial="initial"
            animate="animate"
            custom={{ delay: 0.2 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70"
              style={{ 
                fontFamily: 'var(--font-sans)', 
                letterSpacing: '0.14em',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '9999px',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: easings.framerEaseOut }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                animate={{ scale: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {hero.label}
            </motion.span>
          </motion.div>

          {/* Main Slogan/Title - EXACT character-by-character animation from reference */}
          <motion.h1
            id="hero-title"
            className="mb-8 tracking-tight text-white"
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.065em',
              lineHeight: 1.05,
              fontSize: 'clamp(4rem, 8vw, 8rem)',
            }}
            variants={framerVariants.heroTitle}
            initial="initial"
            animate="animate"
          >
            {hero.slogan.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.7 + index * 0.04, 
                  duration: 1, 
                  ease: easings.framerEaseOut 
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext - EXACT from reference */}
          <motion.p
            className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: easings.framerEaseOut }}
          >
            {hero.subtext}
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <motion.p 
              className="text-xs uppercase tracking-widest" 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              Scroll to explore
            </motion.p>
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M19 12l-7 7-7-7" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}