import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CareersBg from "../../assets/careerBg.png";
import BellIcon from "../../assets/careerBell.png";

export default function CareersHero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    <main
      ref={sectionRef}
      className="min-h-screen mt-32 bg-[#F1F1F1] p-4 sm:p-6 lg:p-8 lg:pt-2 font-inter"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full max-w-[1430px] mx-auto overflow-hidden rounded-[20px_20px_60px_60px] md:rounded-[20px_20px_90px_90px]"
        style={{ "--hero-bg": `url(${CareersBg})` }}
      >
        {/* Background image */}
        <img
          src={CareersBg}
          alt="Faite Careers background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />



        {/* Animated ring layers */}
        <div className="hero-orbit-layer" aria-hidden="true">
          <span className="hero-ring-motion hero-ring-motion--one" />
          <span className="hero-ring-motion hero-ring-motion--two" />
          <span className="hero-ring-motion hero-ring-motion--three" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col min-h-[520px] md:min-h-[680px] lg:min-h-[779px]">
          <div className="flex-1 px-3 sm:px-6 lg:px-16 pt-20 sm:pt-24 lg:pt-36 pb-6">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={controls}
              className="max-w-xl lg:max-w-[700px]"
            >
              {/* Badge with Bell Icon from assets */}
              <motion.div
                variants={badgeVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFC80B]/20 border border-[#FFC80B]/40 rounded-full mb-6"
              >
                <img
                  src={BellIcon}
                  alt="Bell Icon"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-[#FFC80B] text-sm font-bold uppercase tracking-[1.2px]">
                  CAREERS
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.2] lg:leading-[70px] mb-4">
                <span className="text-white [text-shadow:0_1px_0_#000]">
                  Shape the Future of
                  <br />
                </span>
                <span className="text-[#FFC80B] [text-shadow:0_1px_0_#000]">
                  Innovation With Us
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 text-white text-base sm:text-lg lg:text-[18px] font-medium leading-[1.6] lg:leading-[28px] max-w-[600px]">
                We empower passionate individuals to grow, innovate, and build
                transformative solutions that drive businesses and communities
                forward.
              </p>

              {/* Button */}
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={controls}
                className="flex flex-wrap gap-4 mt-8"
              >
                <button
                  onClick={() => {
                    const jobsSection = document.getElementById("jobs-section");
                    if (jobsSection) {
                      jobsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group flex items-center gap-2 px-3 sm:px-6 py-3 rounded-full border border-[#FFC80B] bg-[#FFC80B]/20 text-white font-bold text-base leading-6 transition-all duration-300 hover:bg-[#FFC80B]/30 hover:scale-[1.02]"
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
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
