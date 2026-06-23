import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import CtaBg from '../../assets/bottomCTA.png';

export default function BottomCTA() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#F1F1F1] overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="max-w-[1430px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative flex items-center overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] border border-[#222222] shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[230px] sm:min-h-[240px] lg:min-h-[228px]"
        >
          {/* Background Image - Fully covering the container */}
          <img
            src={CtaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[center_75%] sm:object-center scale-[1.14] sm:scale-[1.1] lg:scale-[1.06] pointer-events-none select-none"
          />



          <div className="relative z-10 flex w-full flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 lg:gap-7 px-4 py-5 sm:px-8 sm:py-8 lg:px-14 lg:py-10">
            {/* Left - Icon and Text */}
            <div className="w-full lg:max-w-[72%] lg:ml-16">
              {/* Text Content */}
              <div>
                <h2 className="text-[19px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-extrabold text-white leading-[26px] sm:leading-[34px] lg:leading-[36px]">
                  Build the Future <span className="text-[#FFC80B]">With Us</span>
                </h2>
                <p className="mt-2 max-w-[800px] text-white text-[13px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-[19px] sm:leading-[24px] lg:leading-[27px]">
                  Take the next step in your career and become part of a team committed to innovation, collaboration, and impactful digital transformation.
                </p>
              </div>
            </div>

            {/* Right - Explore Button */}
            <button
              onClick={() => {
                const jobsSection = document.getElementById('jobs-section');
                if (jobsSection) {
                  jobsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="self-start lg:self-center mt-1 sm:mt-2 lg:mt-0 px-5 sm:px-8 lg:px-10 py-2.5 sm:py-3.5 rounded-full bg-[#FFC80B] text-black font-bold text-[15px] sm:text-base transition-all duration-300 hover:scale-105 hover:bg-[#F5B90C] hover:shadow-[0_10px_25px_rgba(251,191,36,0.3)] active:scale-95 shrink-0 whitespace-nowrap"
            >
              Explore Openings
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}