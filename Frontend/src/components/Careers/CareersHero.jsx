import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import TeamImage from '../../assets/about1.png';

export default function CareersHero() {
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
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 50 },
    },
  };

  return (
    <main ref={sectionRef} className="min-h-screen mt-32 bg-[#F1F1F1] p-4 sm:p-6 lg:p-8 lg:pt-2 font-inter">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full max-w-[1430px] mx-auto overflow-hidden rounded-[20px_20px_60px_60px] md:rounded-[20px_20px_90px_90px] bg-[#0E0F11]"
      >
        {/* Animated Glowing Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(245,185,12,0.15)_0%,transparent_70%)] blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(245,185,12,0.08)_0%,transparent_70%)] blur-[60px]" />
          
          {/* Wave shapes */}
          <svg className="absolute bottom-0 left-0 w-full h-[150px] opacity-20" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96 L80,112 C160,128 320,160 480,154.7 C640,149 800,107 960,90.7 C1120,75 1280,85 1360,90.7 L1440,96 L1440,150 L1360,150 C1280,150 1120,150 1080,150 L0,150 Z" fill="url(#goldGradient)" />
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F5B90C" />
                <stop offset="100%" stopColor="#FFC80B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 gap-12">
          {/* Left Text Block */}
          <div className="flex-1 max-w-xl lg:max-w-[580px]">
            {/* Pill Tag */}
            <motion.div
              variants={textVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B90C]/10 border border-[#F5B90C]/30 text-[#F5B90C] text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B90C] animate-pulse" />
              Careers
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] text-white mb-6"
            >
              Shape the Future of <br />
              <span className="text-[#FFC80B] bg-gradient-to-r from-[#FFC80B] to-[#F5B90C] bg-clip-text text-transparent">
                Innovation With Us
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-[#9CA3AF] text-base sm:text-lg lg:text-[18px] leading-[1.6] mb-8 max-w-[500px]"
            >
              We are always on the lookout for visionary, motivated, and collaborative talent to join our team and drive the next wave of industry transformation.
            </motion.p>

            {/* Action Button */}
            <motion.div variants={textVariants}>
              <button
                onClick={() => {
                  const jobsSection = document.getElementById('jobs-section');
                  if (jobsSection) {
                    jobsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFC80B] text-black font-bold text-base transition-all duration-300 hover:scale-105 hover:bg-[#F5B90C] hover:shadow-[0_10px_25px_rgba(251,191,36,0.3)]"
              >
                Explore career opportunities
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Image/Illustration Section */}
          <div className="flex-1 w-full max-w-[520px] lg:max-w-none flex justify-center relative">
            <motion.div
              variants={imageVariants}
              className="relative rounded-3xl overflow-hidden border-2 border-[#FFC80B]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
              {/* Image hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Gold light ring around image */}
              <div className="absolute inset-0 border border-[#FFC80B]/30 rounded-3xl pointer-events-none z-20 m-2" />
              
              <img
                src={TeamImage}
                alt="Faite Career Team"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Glowing gold dot accents */}
            <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-[#FFC80B] blur-[4px] animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-[#F5B90C] blur-[6px] animate-pulse delay-1000" />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
