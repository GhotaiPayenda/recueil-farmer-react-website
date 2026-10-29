import { motion } from 'motion/react';
import { library } from '../../data/websiteData';
import { easings } from '../../hooks/useScrollAnimation';

/* Radial glow positions taken from the reference card variants */
const glowOrigins = {
  right: '97% 0%',
  center: '54.6% 0%',
  left: '0% 0%',
};

/* Layered shadow stack copied from the reference card */
const cardShadow = [
  '0px 1.68px 7.05px -0.19px rgba(0, 0, 0, 0.02)',
  '0px 3.98px 16.72px -0.38px rgba(0, 0, 0, 0.03)',
  '0px 7.26px 30.5px -0.56px rgba(0, 0, 0, 0.03)',
  '0px 12.07px 50.7px -0.75px rgba(0, 0, 0, 0.03)',
  '0px 19.5px 81.88px -0.94px rgba(0, 0, 0, 0.03)',
  '0px 31.91px 134.04px -1.13px rgba(0, 0, 0, 0.03)',
  '0px 54.95px 230.8px -1.31px rgba(0, 0, 0, 0.04)',
  '0px 100px 420px -1.5px rgba(0, 0, 0, 0.06)',
].join(', ');

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.9, ease: easings.framerEaseOut },
  }),
};

function LibraryCard({ card, index }) {
  return (
    <motion.li
      custom={0.1 + index * 0.1}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <article
        className="flex h-full flex-col gap-4 rounded-[16px] p-6"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: `radial-gradient(87% 106% at ${glowOrigins[card.glow] ?? glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
          boxShadow: cardShadow,
        }}
      >
        <div
          className="relative w-full shrink-0 overflow-hidden rounded-[8px]"
          style={{
            aspectRatio: '1.33',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <img
            src={card.image}
            alt={card.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          <h3
            className="text-[26px] text-white min-[810px]:text-[34px] min-[1200px]:text-[36px]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1,
            }}
          >
            {card.name}
          </h3>

          <p
            className="text-[13px]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {card.description}
          </p>

          <div
            className="flex w-full items-center justify-between pt-4"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}
          >
            <p
              className="text-[12px] uppercase text-white/50"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                letterSpacing: '0.14em',
                lineHeight: 1,
              }}
            >
              {`${card.status} · ${card.month}`}
            </p>
          </div>
        </div>
      </article>
    </motion.li>
  );
}

export function Library() {
  return (
    <section
      id="library"
      aria-labelledby="library-title"
      className="relative overflow-hidden pt-20 pb-10 min-[810px]:pb-20"
    >
      {/* Soft glow at the top of the section, as in the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[13%]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 0%, #4d638f 0%, rgba(42, 63, 106, 0) 95%)',
        }}
      />

      <div className="container-main relative">
        <motion.header
          className="flex flex-col items-center gap-4 text-center min-[810px]:gap-6 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-between min-[1200px]:gap-12 min-[1200px]:text-left"
          custom={0.05}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2
            id="library-title"
            aria-label={library.heading.map((part) => part.text).join(' ')}
            className="flex flex-wrap items-end justify-center gap-x-3 min-[1200px]:justify-start"
          >
            {library.heading.map((part) =>
              part.variant === 'serif' ? (
                <span
                  key={part.text}
                  aria-hidden="true"
                  className="text-[32px] text-white min-[810px]:text-[40px] min-[1200px]:text-[50px]"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.05,
                  }}
                >
                  {part.text}
                </span>
              ) : (
                <span
                  key={part.text}
                  aria-hidden="true"
                  className="text-[31px] text-white min-[810px]:text-[38px] min-[1200px]:text-[48px]"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 200,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.05,
                  }}
                >
                  {part.text}
                </span>
              )
            )}
          </h2>

          <p
            className="max-w-[700px] text-[14px] min-[810px]:text-base min-[1200px]:max-w-[350px] min-[1200px]:text-right"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {library.description}
          </p>
        </motion.header>

        <ul className="mt-10 grid grid-cols-1 gap-4 min-[810px]:mt-20 min-[810px]:gap-y-6 min-[1200px]:grid-cols-3 min-[1200px]:gap-y-4">
          {library.cards.map((card, index) => (
            <LibraryCard key={card.id} card={card} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Library;
