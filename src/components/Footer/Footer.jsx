import { motion } from 'motion/react';
import { footer } from '../../data/websiteData';
import { easings, createScrollVariant } from '../../hooks/useScrollAnimation';

export function Footer() {
  const footerVariants = createScrollVariant({
    y: 40,
    delay: 0.1,
    duration: 0.8,
    ease: easings.easeOutCubic,
  });

  const columnVariants = createScrollVariant({
    y: 30,
    delay: 0.2,
    duration: 0.7,
    ease: easings.easeOutCubic,
  });

  const getSocialIcon = (name) => {
    const icons = {
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      ),
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      email: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    };
    return icons[name] || icons.email;
  };

  return (
    <footer 
      className="relative py-16 md:py-24 px-6"
      style={{ backgroundColor: '#0f1a3a' }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="md:col-span-2"
            variants={footerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a href="#" className="inline-block mb-6" aria-label="Recueil - Home">
              <span className="text-2xl font-medium tracking-tight text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
                {footer.logo}
              </span>
            </motion.a>
            <motion.p
              className="text-base md:text-lg text-white/50 leading-relaxed max-w-xs"
              style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: easings.framerEaseOut }}
            >
              {footer.description}
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: easings.framerEaseOut }}
            >
              {footer.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  aria-label={social.label}
                  whileHover={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Columns */}
          {footer.columns.map((column, colIndex) => (
            <motion.nav
              key={column.title}
              className="flex flex-col gap-3"
              variants={columnVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h4
                className="text-sm font-medium uppercase tracking-widest text-white/40 mb-2"
                style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.14em' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + colIndex * 0.05, duration: 0.5, ease: easings.framerEaseOut }}
              >
                {column.title}
              </motion.h4>
              <ul className="space-y-3" role="list">
                {column.links.map((link, linkIndex) => (
                  <motion.li key={link.href}>
                    <motion.a
                      href={link.href}
                      className="text-base text-white/70 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Geist, sans-serif', fontWeight: 400 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + colIndex * 0.05 + linkIndex * 0.03, duration: 0.4, ease: easings.framerEaseOut }}
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </div>

        {/* Divider */}
        <motion.hr
          className="mb-8 border-white/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easings.framerEaseOut }}
          style={{ transformOrigin: 'left center' }}
          aria-hidden="true"
        />

        {/* Copyright & Legal */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: easings.framerEaseOut }}
        >
          <p className="text-sm text-white/40" style={{ fontFamily: 'Geist, sans-serif' }}>
            {footer.copyright}
          </p>
          
          <motion.div className="flex items-center gap-6">
            {footer.columns.flatMap(c => c.links).slice(0, 3).map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/60 transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
                whileHover={{ color: 'white' }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, #4e0822b1, #73e7cce0)' }} />
      </div>
    </footer>
  );
}