import React from 'react'
import { easings } from '../../hooks/useScrollAnimation';
import { motion } from 'motion/react';

export default function Benefits() {

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




  return (
    <>
      <section className='p-10 '>
        <motion.header className='flex justify-between
        
        '>
          <h2 className='text-4xl font-semibold max-w-60 '>Small details, considered.</h2>

          <p className='max-w-80'>Each bottle is a small commitment, but the surrounding choices — the perfumers, the rotation, the unhurried pace — are what keep the wardrobe interesting month after month.
          </p>
        </motion.header>



        {/* cards container of Benefits.jsx */}
        <div className='grid grid-cols-6 grid-rows-4 justify-center  items-center gap-12 '>

          <div
            className="col-span-3 row-span-2  flex h-full flex-col gap-4 rounded-[16px] p-6"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: `radial-gradient(87% 106% at ${glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
              boxShadow: cardShadow,
            }}
          >
            <p>Hand-picked</p>
            <h3 className='text-3xl max-w-90 '>A perfumer's
              shortlist,
              not an algorithm.</h3>
            <div className="h-65 w-full bg-cover bg-center bg-no-repeat
            rounded-2xl
            "
              style={{ backgroundImage: `url("https://framerusercontent.com/images/TU7BpZTzNA2q3ayegKLZ1F985g4.png?scale-down-to=1024&width=2688&height=1792")` }}
            ></div>
            <p>Three perfumers curate the rotation. You can see the reasoning in every monthly note.</p>
          </div>

          <div
            className="col-span-3 row-span-2 flex h-full flex-col gap-4 rounded-[16px] p-6"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: `radial-gradient(87% 106% at ${glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
              boxShadow: cardShadow,
            }}
          >
            <p>The library</p>
            <h3 className='text-3xl max-w-100 '>A perfumer's
              Over 60 bottles
              in seasonal rotation.</h3>
            <div className="h-65 w-full bg-cover bg-center bg-no-repeat
            rounded-2xl
            "
              style={{ backgroundImage: `url("https://framerusercontent.com/images/BTZBQca24mCCPCCLKtpjsy9gM.png?scale-down-to=512&width=2048&height=2048")` }}
            ></div>
            <p>Three perfumers curate the rotation. You can see the reasoning in every monthly note.</p>
          </div>



          <div
            className="col-span-2 flex h-45 flex-col gap-4 rounded-[16px] p-6"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: `radial-gradient(87% 106% at ${glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
              boxShadow: cardShadow,
            }}
          >
            <p>House mark</p>

            <div className="h-35 w-full bg-cover bg-center bg-no-repeat
            rounded-2xl
            "
            ></div>
            <p>Identity over
              intensity.</p>
          </div>

          <video
            className="col-span-2 flex w-full h-45 flex-col gap-4 rounded-[16px] p-6absolute inset-0 object-cover"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: `radial-gradient(87% 106% at ${glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
              boxShadow: cardShadow,
            }}
            autoPlay
            loop
            muted
            playsInline

          >
            <source src="https://framerusercontent.com/assets/7Li7TbSjPT1dEsMcW7RkBNVQc.mp4" type="video/mp4" />
          </video>


          <div
            className="col-span-2 flex w-full h-45 flex-col gap-4 rounded-[16px] p-6"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: `radial-gradient(87% 106% at ${glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
              boxShadow: cardShadow,
            }}
          >
            <p>92%</p>

            <div className=" h-35 w-full bg-cover bg-center bg-no-repeat
            rounded-2xl
            "
            ></div>
            <p>of members find a signature within their first six months.</p>
          </div>


          <div
            className="col-span-4 flex justify-between w-full h-45 gap-4 rounded-[16px] p-6"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: `radial-gradient(87% 106% at ${glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
              boxShadow: cardShadow,
            }}
          >
            <h5 className='text-2xl max-w-50 '>An unhurried
              correspondence
              with scent.</h5>


            <p className='max-w-90 '>The pace is the point. Most members don't keep every bottle, and that's intended; the library is built around honest rotation, not volume.</p>
          </div>


          <div
            className="col-span-2 flex justify-center items-center w-full h-45 gap-4 rounded-[16px] p-6"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: `radial-gradient(87% 106% at ${glowOrigins.right}, rgb(89, 120, 160) 0%, rgba(36, 61, 107, 0) 100%)`,
              boxShadow: cardShadow,
            }}
          >
            <h3 className='text-7xl '>R</h3>
          </div>



        </div>
      </section>
    </>
  )
}
