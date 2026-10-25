import { motion } from 'motion/react';
import { videoSection } from '../../data/websiteData';
import { easings, createScrollVariant } from '../../hooks/useScrollAnimation';

export function VideoSection() {
  const contentVariants = createScrollVariant({
    y: 40,
    delay: 0.2,
    duration: 0.8,
    ease: easings.easeOutCubic,
  });

  const videoVariants = createScrollVariant({
    y: 60,
    delay: 0.4,
    duration: 1,
    ease: easings.easeOutCubic,
  });

  return (
    <section 
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      aria-labelledby="video-section-title"
      style={{ backgroundColor: '#1a2750' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <motion.div
            className="lg:pr-8"
            variants={contentVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span
              className="inline-block mb-6 text-xs font-medium uppercase tracking-widest text-white/50"
              style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.14em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: easings.framerEaseOut }}
            >
              Process
            </motion.span>
            
            <motion.h2
              id="video-section-title"
              className="mb-6 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: easings.framerEaseOut }}
            >
              {videoSection.title}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/60 leading-relaxed"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: easings.framerEaseOut }}
            >
              {videoSection.description}
            </motion.p>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            className="relative aspect-[16/9] rounded-xl overflow-hidden"
            style={{ 
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: 'rgba(255,255,255,0.02)',
            }}
            variants={videoVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ pointerEvents: 'none' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster={videoSection.videoPoster}
                aria-hidden="true"
              >
                <source src={videoSection.videoSrc} type="video/mp4" />
              </video>
            </div>
            
            {/* Play button overlay */}
            <motion.button
              className="absolute inset-0 flex items-center justify-center z-20 bg-black/20 hover:bg-black/30 transition-colors duration-300"
              style={{ pointerEvents: 'auto' }}
              aria-label="Play process video"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </motion.button>

            {/* Corner accents */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-white/10" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-white/10" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b border-l border-white/10" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-white/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, #4e0822b1, #73e7cce0)' }} />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, #73e7cce0, #4e0822b1)' }} />
      </div>
    </section>
  );
}