import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ContactBg from '../../assets/contactHero.png';

export default function ContactHero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section ref={sectionRef} className="py-10 mt-24 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div
          className="relative w-full rounded-[20px_20px_90px_90px] overflow-hidden"
          style={{ "--hero-bg": `url(${ContactBg})` }}
        >
          {/* Background image */}
          <img
            src={ContactBg}
            alt="Faite Contact background"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />



          {/* Animated ring layers */}
          <div className="hero-orbit-layer" aria-hidden="true">
            <span className="hero-ring-motion hero-ring-motion--one" />
            <span className="hero-ring-motion hero-ring-motion--two" />
            <span className="hero-ring-motion hero-ring-motion--three" />
          </div>


          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center min-h-[779px] px-6 sm:px-10 lg:px-16 py-10 bottom-20">
            <motion.div
              variants={contentVariants}
              className="max-w-[592px] lg:max-w-[730px]"
            >
              {/* Badge with dot */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[#F4B400] rounded-full"></div>
                <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#F4B400]">
                  CONTACT
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-white leading-[44px] sm:leading-[56px] lg:leading-[72px] mb-4 pt-2">
                Innovative Solutions Begin <br className="hidden sm:block" />
                <span className="text-[#F4B400]">With a Conversation</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-[18px] font-normal text-white/90 leading-6 sm:leading-7 lg:leading-[28px] max-w-[455px]">
                Have an idea or need a solution? Our team is ready to help you build something amazing.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}