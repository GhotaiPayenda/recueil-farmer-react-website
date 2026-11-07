import { motion } from 'motion/react';
import { pricing } from '../../data/websiteData';
import { easings } from '../../hooks/useScrollAnimation';

const CARD_SHADOW =
  '0 1.68px 7.05px -0.19px rgba(0,0,0,0.02), 0 3.98px 16.72px -0.38px rgba(0,0,0,0.03), 0 7.26px 30.5px -0.56px rgba(0,0,0,0.03), 0 12.07px 50.7px -0.75px rgba(0,0,0,0.03), 0 19.5px 81.88px -0.94px rgba(0,0,0,0.03), 0 31.91px 134.04px -1.13px rgba(0,0,0,0.03), 0 54.95px 230.8px -1.31px rgba(0,0,0,0.04), 0 100px 420px -1.5px rgba(0,0,0,0.06)';

const cardBackground = (plan) =>
  plan.featured
    ? 'radial-gradient(88% 50% at 50% 0, #b9b1c7 0%, #a29aad 100%)'
    : `radial-gradient(87% 106% ${plan.gradient}, rgba(89,120,160,0.5) 0%, #192750 100%)`;

const strong = (plan) => (plan.featured ? '#192750' : 'rgb(255,255,255)');
const muted = (plan) => (plan.featured ? 'rgba(25,39,80,0.75)' : 'rgba(255,255,255,0.7)');

function PlanCard({ plan, index }) {
  return (
    <motion.div
      className={[
        'relative flex w-full flex-col items-start gap-6 rounded-3xl p-8',
        plan.featured ? 'min-[1200px]:h-[105%]' : 'min-[1200px]:h-full border border-white/[0.12]',
      ].join(' ')}
      style={{ background: cardBackground(plan), boxShadow: CARD_SHADOW }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: easings.framerEaseOut, delay: index * 0.12 }}
    >
      {/* Header */}
      <div className="flex w-full items-center justify-start gap-4 min-[810px]:justify-center min-[1200px]:justify-start">
        <h4
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '21px',
            letterSpacing: '-0.065em',
            lineHeight: 1,
            color: strong(plan),
          }}
        >
          {plan.name}
        </h4>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.14em',
            lineHeight: 1,
            textTransform: 'uppercase',
            color: muted(plan),
          }}
        >
          {plan.detail}
        </p>
      </div>

      {/* Price */}
      <div className="flex w-full items-end justify-start gap-1">
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px', lineHeight: 1.5, letterSpacing: '-0.02em', color: strong(plan) }}>
          €
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 200,
            fontSize: '56px',
            lineHeight: 0.89,
            letterSpacing: '-0.05em',
            color: strong(plan),
          }}
        >
          {plan.price}
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '13px', lineHeight: 1.5, letterSpacing: '-0.02em', color: muted(plan) }}>
          {plan.suffix}
        </p>
      </div>

      {/* Features */}
      <div className="flex w-full flex-col gap-2">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex w-full items-center gap-2 border-b pb-2"
            style={{ borderColor: plan.featured ? '#8c8696' : 'rgba(255,255,255,0.12)' }}
          >
            <span
              className="h-[5px] w-[5px] flex-none rounded-full"
              style={{ backgroundColor: plan.featured ? '#192750' : '#bae6fd' }}
            />
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '13px',
                lineHeight: 1.5,
                letterSpacing: '-0.02em',
                color: muted(plan),
              }}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#subscribe"
        className="group relative flex w-full items-center justify-center overflow-hidden rounded-full transition-colors duration-300"
        style={
          plan.featured
            ? { padding: '16px 24px', backgroundColor: '#192750' }
            : { padding: '16px 24px', border: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'transparent', backdropFilter: 'blur(15px)' }
        }
        aria-label={`${plan.cta} plan`}
      >
        <span
          className="relative z-[1] text-white transition-colors duration-300 group-hover:text-[#192750]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: 1,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {plan.cta}
        </span>
        <span className="pointer-events-none absolute inset-0 z-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full pt-20 pb-10 min-[810px]:pb-20"
      aria-labelledby="pricing-title"
      style={{ scrollMarginTop: '50px' }}
    >
      <div className="container-main">
        <div className="flex w-full flex-col items-center gap-10 min-[810px]:gap-20">
          {/* Heading */}
          <motion.div
            className="flex w-full max-w-[720px] flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: easings.framerEaseOut }}
          >
            <div className="flex w-full items-center justify-center gap-6">
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.14em',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {pricing.label}
              </p>
            </div>

            <div className="flex w-full flex-col items-center">
              <h2
                id="pricing-title"
                className="w-full text-[34px] leading-none tracking-[-0.05em] text-white min-[810px]:text-[55px] min-[1200px]:text-[69px]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
              >
                {pricing.titleLine1}
              </h2>
              <h2
                className="w-full text-[34px] leading-none tracking-[-0.065em] text-white min-[810px]:text-[51px] min-[1200px]:text-[64px]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 200 }}
              >
                {pricing.titleLine2}
              </h2>
            </div>

            <div className="flex w-full max-w-[520px] items-center justify-center">
              <p
                className="max-w-[350px] text-[14px] leading-[1.5] tracking-[-0.02em] text-white/70 min-[1200px]:text-[16px]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                {pricing.description}
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex w-full flex-col items-center gap-4 min-[1200px]:h-[435px] min-[1200px]:flex-row">
            {pricing.plans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
