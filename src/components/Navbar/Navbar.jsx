import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { navigation } from '../../data/websiteData';
import { easings } from '../../hooks/useScrollAnimation';

/* CTA pill — reference: background #bae6fd, radius 99px, padding 16px 24px,
   Geist Mono 12px / 500 / 0.1em / uppercase, #192750 label, white hover wash. */
const CTA_CLASS =
  'group relative hidden items-center justify-center overflow-hidden rounded-[99px] bg-[#bae6fd] px-6 py-4 font-mono text-[12px] font-medium uppercase leading-none tracking-[0.1em] text-[#192750] min-[1200px]:inline-flex';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Transparent over the hero, glass bar once the page scrolls. */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Menu: body scroll lock, Escape to close, reset when the desktop nav returns. */
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1200) setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easings.framerEaseOut }}
    >
      <nav
        aria-label="Main navigation"
        className="relative flex w-full flex-col items-center px-4 py-4 min-[1200px]:px-8 min-[1200px]:py-8"
        style={{
          backgroundColor: isMenuOpen
            ? 'rgba(42, 63, 106, 0.98)'
            : isScrolled
              ? 'rgba(25, 39, 80, 0.9)'
              : 'rgba(0, 0, 0, 0)',
          backdropFilter: isMenuOpen || isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isMenuOpen || isScrolled ? 'blur(20px)' : 'none',
          boxShadow: !isMenuOpen && isScrolled ? 'inset 0 -1px 0 rgba(255, 255, 255, 0.12)' : 'none',
          height: isMenuOpen ? '100dvh' : undefined,
          transition:
            'background-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease',
        }}
      >
        <div
          className={`flex w-full max-w-[1280px] justify-between ${
            isMenuOpen ? 'items-start' : 'items-center'
          }`}
        >
          {/* Logo — Ortica Linear substitute, 27px / 1.4 / -0.05em */}
          <a
            href="#hero"
            aria-label="Recueil — back to top"
            className="block whitespace-pre font-serif text-[27px] leading-[1.4] tracking-[-0.05em] text-white"
          >
            {navigation.logo}
          </a>

          {/* Desktop links — rendered from 1200px up, matching the reference variant */}
          <div className="hidden items-center gap-8 min-[1200px]:flex">
            {navigation.links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="whitespace-pre text-[16px] font-light leading-[1.5] tracking-[-0.02em] text-white/70 transition-colors duration-200 hover:text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.05,
                  duration: 0.5,
                  ease: easings.framerEaseOut,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <motion.a
              href={navigation.cta.href}
              className={CTA_CLASS}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: easings.framerEaseOut }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
              <span className="relative z-[1]">{navigation.cta.label}</span>
            </motion.a>

            {/* Mobile / tablet trigger — 40px glass pill with three 16px bars */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="relative h-10 w-10 shrink-0 cursor-pointer rounded-[99px] bg-white/10 backdrop-blur-[25px] transition-colors duration-200 hover:bg-white/15 min-[1200px]:hidden"
            >
              <span
                aria-hidden="true"
                className={`absolute left-1/2 h-px w-4 -translate-x-1/2 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[15px]'
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute left-1/2 h-px w-4 -translate-x-1/2 bg-white transition-all duration-300 ${
                  isMenuOpen
                    ? 'top-1/2 -translate-y-1/2 -rotate-45'
                    : 'top-[24px]'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu — links drop in 96px from the top, same presets as the reference */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="absolute left-1/2 top-24 flex -translate-x-1/2 flex-col items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: easings.framerEaseOut }}
            >
              {navigation.links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="whitespace-pre text-sm font-light leading-[1.5] tracking-[-0.02em] text-white/70 transition-colors duration-200 hover:text-white min-[810px]:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.04, duration: 0.3, ease: easings.framerEaseOut }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
