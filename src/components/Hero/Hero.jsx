import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { hero } from '../../data/websiteData';
import { easings } from '../../hooks/useScrollAnimation';

/* Count-up used by the statistic numbers (reference animates 0 -> value). */
function CountUp({ value, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return undefined;
    }

    let frame = 0;
    let start = 0;

    const timeout = window.setTimeout(() => {
      start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / 1400, 1);
        const eased = 1 - (1 - progress) ** 3;
        setDisplay(Math.round(value * eased));

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    }, delay * 1000);

    /* Safety net for throttled / background tabs where rAF can stall. */
    const fallback = window.setTimeout(() => {
      setDisplay(value);
    }, delay * 1000 + 1600);

    return () => {
      window.clearTimeout(timeout);
      window.clearTimeout(fallback);
      window.cancelAnimationFrame(frame);
    };
  }, [value, delay, prefersReduced]);

  return <>{display}</>;
}

function Statistic({ stat, index }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="flex w-full items-center gap-4 min-[810px]:h-[100px] min-[1200px]:w-[205px]"
      initial={prefersReduced ? false : { opacity: 0.001, y: -90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.55 + index * 0.1,
        duration: 1.1,
        ease: easings.framerEaseInOut,
      }}
    >
      <span
        className="relative inline-flex h-[42px] shrink-0 items-center text-[50px] text-white"
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 300,
          letterSpacing: '-0.065em',
          lineHeight: 1,
        }}
      >
        {/* Reserves the width of the final value so the label never shifts while counting. */}
        <span aria-hidden="true" className="invisible">
          {stat.value}
        </span>
        <span className="absolute inset-y-0 left-0 inline-flex items-center">
          <CountUp value={stat.value} delay={0.8 + index * 0.1} />
        </span>
      </span>

      <div
        className="relative flex min-w-0 flex-1 flex-col items-start gap-2"
        style={{ paddingLeft: '16px' }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-0"
          style={{ borderLeft: '1px dotted rgba(255, 255, 255, 0.12)' }}
        />
        <p
          className="whitespace-nowrap text-[21px] text-white/70 min-[1200px]:text-[26px]"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 300,
            letterSpacing: '-0.065em',
            lineHeight: 1,
          }}
        >
          {stat.label}
        </p>
        <p
          className="text-[13px] min-[1200px]:max-w-[120px]"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 1.5,
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

function HeroButton({ label, href, variant, className = '' }) {
  const isPrimary = variant === 'primary';

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-[99px] px-6 py-4 text-center transition-colors duration-300 min-[810px]:px-8 min-[810px]:py-6 ${className}`}
      style={{
        backgroundColor: isPrimary ? '#bae6fd' : 'rgba(186, 230, 253, 0)',
        boxShadow: isPrimary ? 'none' : 'inset 0 0 0 1px rgba(255, 255, 255, 0.12)',
        backdropFilter: isPrimary ? 'none' : 'blur(15px)',
        WebkitBackdropFilter: isPrimary ? 'none' : 'blur(15px)',
        color: isPrimary ? '#192750' : '#ffffff',
      }}
    >
      <span
        className="relative z-10 whitespace-nowrap uppercase transition-colors duration-300 group-hover:text-white"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          lineHeight: 1,
        }}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-[99px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: '#192750' }}
      />
    </a>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const headingLabel = `${hero.heading.lead} ${hero.heading.accent} ${hero.heading.tagline}`;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="sticky top-0 z-[1] flex h-screen w-full flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Background video */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <motion.video
          className="h-full w-full object-cover"
          src={hero.videoSrc}
          poster={hero.videoPoster}
          autoPlay
          loop
          muted
          playsInline
          initial={prefersReduced ? false : { scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: easings.framerEaseOut }}
        />
      </div>

      {/* Bottom fade to the section colour */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[470px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(42, 64, 107, 0) 0%, rgb(42, 64, 107) 100%)',
        }}
      />

      {/* Side fade, strongest on the left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-3 opacity-80"
        style={{
          background:
            'linear-gradient(270deg, rgba(42, 64, 107, 0) 0%, rgb(42, 64, 107) 100%)',
        }}
      />

      <div className="container-main relative z-5] flex flex-1 flex-col items-center justify-center gap-10 pb-4 min-[810px]:justify-between min-[810px]:gap-0 min-[810px]:pb-[120px] min-[1200px]:items-start min-[1200px]:pb-20">
          {/* Top spacer (desktop + tablet only) */}
          <div className="hidden h-8 w-px shrink-0 min-[810px]:block" aria-hidden="true" />

          <div className="flex w-full flex-col items-center gap-8 min-[1200px]:items-start">
            <div className="flex w-full flex-col items-center gap-2 min-[1200px]:items-start">
              {/* Label */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                }}
                initial={prefersReduced ? false : { x: -400 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.1, ease: easings.framerEaseOut }}
              >
                <span
                  className="h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ backgroundColor: '#bae6fd' }}
                  aria-hidden="true"
                />
                <span
                  className="text-[13px] text-white"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.5,
                  }}
                >
                  {hero.label}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                id="hero-title"
                aria-label={headingLabel}
                className="flex w-full flex-col items-center min-[1200px]:max-w-[840px] min-[1200px]:flex-row min-[1200px]:flex-wrap min-[1200px]:items-start min-[1200px]:gap-x-4"
                initial={prefersReduced ? false : { opacity: 0.001, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1.1,
                  ease: easings.framerEaseInOut,
                }}
              >
                <span
                  aria-hidden="true"
                  className="flex w-full items-center justify-center gap-2 min-[1200px]:w-auto min-[1200px]:flex-1 min-[1200px]:justify-start"
                >
                  <span
                    className="whitespace-nowrap text-[42px] text-white min-[810px]:text-[88px] min-[1200px]:text-[110px]"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 200,
                      letterSpacing: '-0.065em',
                      lineHeight: 1,
                    }}
                  >
                    {hero.heading.lead}
                  </span>
                  <span
                    className="whitespace-nowrap text-[45px] leading-[32px] text-white min-[810px]:text-[94px] min-[810px]:leading-[84px] min-[1200px]:text-[117px] min-[1200px]:leading-[107px]"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {hero.heading.accent}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="block w-full text-center text-[42px] text-white min-[810px]:text-[88px] min-[1200px]:whitespace-nowrap min-[1200px]:text-left min-[1200px]:text-[110px]"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 200,
                    letterSpacing: '-0.065em',
                    lineHeight: 1,
                  }}
                >
                  {hero.heading.tagline}
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="w-full max-w-[500px] text-center text-[14px] text-white min-[810px]:text-[16px] min-[1200px]:text-left"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.5,
              }}
              initial={prefersReduced ? false : { opacity: 0.001, y: 60, skewX: -3 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                delay: 0.7,
                duration: 1.1,
                ease: easings.framerEaseInOut,
              }}
            >
              A monthly fragrance club from the Lumen atelier. Each delivery brings{' '}
              <br className="hidden min-[810px]:inline" />
              a hand-picked 8ml bottle to your door — drawn from our library of 60 rare parfums,
              chosen for the season and for you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex w-fit flex-col items-stretch gap-3 min-[810px]:flex-row min-[810px]:items-center"
              initial={prefersReduced ? false : { opacity: 0.001, y: 60, skewX: -3 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                delay: 0.9,
                duration: 1.1,
                ease: easings.framerEaseInOut,
              }}
            >
              <HeroButton
                label={hero.primaryCta.label}
                href={hero.primaryCta.href}
                variant="primary"
              />
              <HeroButton
                label={hero.secondaryCta.label}
                href={hero.secondaryCta.href}
                variant="secondary"
                className="min-[810px]:w-[257px] min-[1200px]:w-auto"
              />
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="hidden w-full min-[810px]:grid min-[810px]:w-[680px] min-[810px]:grid-cols-2 min-[810px]:gap-6 min-[1200px]:flex min-[1200px]:h-[100px] min-[1200px]:w-full min-[1200px]:items-start min-[1200px]:justify-between">
            {hero.stats.map((stat, index) => (
              <Statistic key={stat.id} stat={stat} index={index} />
            ))}
          </div>
      </div>
    </section>
  );
}

export default Hero;
