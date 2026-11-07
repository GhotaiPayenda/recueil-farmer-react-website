import { motion } from 'motion/react';
import { howItWorks } from '../../data/websiteData';
import { easings } from '../../hooks/useScrollAnimation';

/* Layered shadow used by the timeline circles in the reference */
const CIRCLE_SHADOW =
  '0 0.84px 0.5px -0.09px rgba(0,0,0,0.02), 0 1.99px 1.19px -0.19px rgba(0,0,0,0.02), 0 3.63px 2.18px -0.28px rgba(0,0,0,0.02), 0 6.04px 3.62px -0.38px rgba(0,0,0,0.02), 0 9.75px 5.85px -0.47px rgba(0,0,0,0.03), 0 15.96px 9.57px -0.56px rgba(0,0,0,0.04), 0 27.48px 16.49px -0.66px rgba(0,0,0,0.05), 0 50px 30px -0.75px rgba(0,0,0,0.09)';

/* Line icons from the reference (checklist, bottle/box, heart) */
const STEP_ICONS = [
  <>
    <path d="M0 0H8" transform="translate(13 5)" />
    <path d="M0 0H8" transform="translate(13 12)" />
    <path d="M0 0H8" transform="translate(13 19)" />
    <path d="M0 2L2 4L6 0" transform="translate(3 15)" />
    <path d="M0 2L2 4L6 0" transform="translate(3 5)" />
  </>,
  <>
    <path
      d="M8 19.728c.619.357 1.381.357 2 0l7-4c.618-.357.999-1.016 1-1.73v-8c-.001-.714-.382-1.373-1-1.73l-7-4c-.619-.357-1.381-.357-2 0l-7 4c-.618.357-.999 1.016-1 1.73v8c.001.714.382 1.373 1 1.73z"
      transform="translate(3 2.002)"
    />
    <path d="M0 10V0" transform="translate(12 12)" />
    <path d="M0 0l8.71 5L17.42 0" transform="translate(3.29 7)" />
    <path d="M0 0l9 5.15" transform="translate(7.5 4.27)" />
  </>,
  <>
    <path
      d="M0 5.516c0-2.278 1.404-4.32 3.532-5.135 2.127-.816 4.536-.235 6.059 1.459.106.114.254.178.409.178s.303-.064.409-.178C11.927.135 14.343-.453 16.475.364c2.132.817 3.536 2.869 3.525 5.152 0 2.29-1.5 4-3 5.5l-5.492 5.313a2.075 2.075 0 0 1-3 0L3 11.016c-1.5-1.5-3-3.2-3-5.5"
      transform="translate(2 3.984)"
    />
  </>,
];

function StepCard({ step, index }) {
  return (
    <motion.div
      className="flex w-full max-w-[368px] flex-col items-center gap-4 p-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: easings.framerEaseOut, delay: index * 0.12 }}
    >
      <motion.p
        className="font-serif text-[42px] uppercase leading-[1.1] tracking-[-0.01em] text-white"
        style={{ fontWeight: 300 }}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: easings.easeOutCubic, delay: 0.25 + index * 0.12 }}
      >
        {step.number}
      </motion.p>

      <h4
        className="text-[20px] leading-none tracking-[-1px] text-white min-[810px]:text-[22px] min-[810px]:leading-[24px]"
        style={{ fontFamily: 'var(--font-sans)', fontWeight: 200 }}
      >
        {step.title}
      </h4>

      <p
        className="max-w-[260px] text-[13px] leading-[1.5] tracking-[-0.02em]"
        style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}
      >
        {step.description}
      </p>
    </motion.div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="w-full py-8 md:py-10"
      aria-labelledby="howitworks-title"
      style={{ scrollMarginTop: '120px' }}
    >
      <div className="container-main">
        <div className="relative flex w-full flex-col items-center gap-12 overflow-hidden rounded-[16px] border border-white/[0.12] px-4 py-10 min-[810px]:rounded-[32px] min-[810px]:px-10 min-[810px]:py-20 min-[1200px]:gap-16 min-[1200px]:rounded-[48px] min-[1200px]:px-0">
          {/* Flare */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[150px] -left-[28.5%] z-[1] h-[120%] w-[157%]"
            style={{ background: 'radial-gradient(50% 50% at 50% 0, rgba(77,99,143,0.5) 0%, rgba(42,63,106,0) 95%)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: easings.easeOutCubic }}
          />

          {/* Heading */}
          <motion.div
            className="relative z-[2] flex w-full max-w-[720px] flex-col items-center gap-4 text-center max-[809px]:w-[95%]"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: easings.framerEaseOut }}
          >
            <p
              className="uppercase"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {howItWorks.label}
            </p>

            <div className="flex w-full flex-col items-center">
              <h3
                id="howitworks-title"
                className="w-full text-[32px] leading-[1.05] tracking-[-0.025em] text-white min-[810px]:text-[40px] min-[1200px]:text-[50px]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}
              >
                {howItWorks.titlePart1}
              </h3>
              <h3
                className="w-full text-[31px] leading-[1.05] tracking-[-0.025em] text-white min-[810px]:text-[38px] min-[1200px]:text-[48px]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 200 }}
              >
                {howItWorks.titlePart2}
              </h3>
            </div>

            <div className="flex w-full max-w-[560px] items-center justify-center">
              <p
                className="text-[14px] leading-[1.5] tracking-[-0.02em] min-[1200px]:text-[16px]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}
              >
                {howItWorks.description}
              </p>
            </div>
          </motion.div>

          {/* Timeline + steps */}
          <div className="relative z-[2] flex w-full max-w-[400px] flex-row justify-end gap-4 min-[810px]:mx-auto min-[810px]:h-[624px] min-[810px]:max-w-[670px] min-[810px]:items-stretch min-[810px]:justify-end min-[810px]:gap-4 min-[810px]:pl-16 min-[1200px]:h-auto min-[1200px]:max-w-none min-[1200px]:flex-col min-[1200px]:items-center min-[1200px]:gap-0 min-[1200px]:pl-0">
            {/* Timeline */}
            <motion.div
              className="absolute left-0 top-6 z-[1] flex h-[90%] w-[90px] flex-col items-center justify-between min-[810px]:relative min-[810px]:left-auto min-[810px]:top-auto min-[810px]:h-[580px] min-[810px]:w-[134px] min-[810px]:flex-none min-[1200px]:h-auto min-[1200px]:w-[74%] min-[1200px]:flex-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: easings.framerEaseOut, delay: 0.1 }}
            >
              {/* Track */}
              <div className="absolute left-[calc(50%-1px)] top-0 h-full w-[2px] bg-white/[0.12] min-[1200px]:left-0 min-[1200px]:top-[calc(50%-1px)] min-[1200px]:h-[2px] min-[1200px]:w-full" />

              {/* Fill — vertical */}
              <motion.div
                className="absolute left-[calc(50%-1px)] top-0 w-[2px] bg-white/50 min-[1200px]:hidden"
                initial={{ height: '1%' }}
                whileInView={{ height: '99%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.6, ease: easings.easeOutCubic, delay: 0.4 }}
              />

              {/* Fill — horizontal */}
              <motion.div
                className="absolute left-0 top-[calc(50%-1px)] hidden h-[2px] bg-white/50 min-[1200px]:block"
                initial={{ width: '1%' }}
                whileInView={{ width: '99%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.6, ease: easings.easeOutCubic, delay: 0.4 }}
              />

              {howItWorks.steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative z-[2] flex h-[76px] w-[76px] flex-none items-center justify-center rounded-full border border-white/[0.12]"
                  style={{ backgroundColor: 'var(--color-bg-primary)', boxShadow: CIRCLE_SHADOW }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-8 w-8"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {STEP_ICONS[index]}
                  </svg>
                </div>
              ))}
            </motion.div>

            {/* Steps */}
            <div className="flex w-[70%] flex-col items-end gap-14 pl-4 min-[810px]:w-auto min-[810px]:flex-1 min-[810px]:items-stretch min-[810px]:justify-between min-[810px]:gap-0 min-[810px]:pl-0 min-[1200px]:grid min-[1200px]:w-full min-[1200px]:grid-cols-3 min-[1200px]:items-start min-[1200px]:justify-items-center min-[1200px]:gap-4">
              {howItWorks.steps.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
