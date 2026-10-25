import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';
import { navigation } from '../../data/websiteData';
import { easings } from '../../hooks/useScrollAnimation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Navbar background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 20]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(26, 39, 80, ${isScrolled ? 0.9 : 0})`,
        backdropFilter: `blur(${isScrolled ? 20 : 0}px)`,
        borderBottom: `1px solid rgba(255, 255, 255, ${isScrolled ? 0.1 : 0})`,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easings.framerEaseOut }}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-medium tracking-tight text-white"
            aria-label="Recueil - Home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {navigation.logo}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative"
                style={{ fontFamily: 'Geist, sans-serif' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5, ease: easings.framerEaseOut }}
                whileHover={{ color: 'white' }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={navigation.cta.href}
              className="px-6 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              style={{ fontFamily: 'Geist, sans-serif' }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {navigation.cta.label}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isMobileOpen ? 'auto' : 0, opacity: isMobileOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: easings.framerEaseInOut }}
          style={{ 
            backgroundColor: 'rgba(26, 39, 80, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            margin: '0 -24px',
            padding: '0 24px',
          }}
        >
          <div className="py-6 space-y-4">
            {navigation.links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.4, ease: easings.framerEaseOut }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={navigation.cta.href}
              className="inline-block mt-4 px-6 py-3 text-center text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              style={{ fontFamily: 'Geist, sans-serif' }}
              onClick={() => setIsMobileOpen(false)}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navigation.links.length * 0.06, duration: 0.4, ease: easings.framerEaseOut }}
            >
              {navigation.cta.label}
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}