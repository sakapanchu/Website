import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import AboutBg from '../../assets/about-bg.png';
import MissionIcon from '../../assets/flexible.png';
import VisionIcon from '../../assets/vision-icon.png';
import YearExperience from "../../assets/yearExperience.png"

export default function AboutHero() {
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const statBadgeVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  return (
    <main ref={sectionRef} className="min-h-screen mt-32 bg-[#F1F1F1] p-4 sm:p-6 lg:p-8 lg:pt-2 font-inter">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full max-w-[1430px] mx-auto overflow-hidden rounded-[20px_20px_120px_120px] lg:rounded-[20px_20px_300px_300px] lg:border-b-[20px] border-b-0 border-[#FACC15] bg-no-repeat bg-[length:100%_135%] bg-[position:center_top] lg:bg-cover lg:bg-[position:bottom_center] bg-[#111111] lg:min-h-[779px] min-h-[580px]"
        style={{
          backgroundImage: `url(${AboutBg})`,
        }}
      >


        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col lg:min-h-[779px] min-h-[580px] px-3 sm:px-6 sm:px-12 lg:px-16 pt-12 sm:pt-20 lg:pt-32 pb-8">
          {/* Left Content */}
          <motion.div
            variants={contentVariants}
            className="max-w-xl lg:max-w-[653px]"
          >
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC80B]/10 border border-[#FFC80B]/20 text-[#FFC80B] text-xs font-bold uppercase tracking-[0.6px] mb-6"
            >
              ABOUT US
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold leading-[50px] lg:leading-[60px] text-white mb-4">
              Who We Are
            </h1>

            {/* Description */}
            <p className="text-white text-base sm:text-lg lg:text-[18px] font-normal leading-[26px] lg:leading-[29px] max-w-[521px] mb-8">
              We are a team of passionate innovators dedicated to building impactful digital solutions that drive growth, improve experiences, and create meaningful digital connections.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6">
              {/* 10+ Industries Served */}
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-[#161617] border border-white/5 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base leading-6">10+ Industries</h4>
                  <span className="text-white text-sm font-normal leading-5">Served</span>

                </div>
              </div>

              {/* 50+ Projects Completed */}
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-[#161617] border border-white/5 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base leading-6">50+ Projects</h4>
                  <span className="text-white text-sm font-normal leading-5">Completed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 
            Floating Stat Badge - 3+ Years Experience 
            Centered horizontally & placed lower so it overlaps the bottom part of the bg image
          */}
          <motion.div
            variants={statBadgeVariants}
            className="absolute left-200 -translate-x-1/2 bottom-20 lg:bottom-60 w-[208px] bg-white/5 border border-[#FFC80B] backdrop-blur-sm rounded-2xl p-6"
          >
            <div className="w-10 h-10 bg-[#FFCC00] rounded-lg flex items-center justify-center mb-4">
              <img
                src={YearExperience}
                alt="Year Experience Icon"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-[36px] font-extrabold text-[#FFCC00] leading-10 text-left">3+</h3>
            <p className="text-white text-[14px] font-bold uppercase tracking-[0.35px] text-left">YEARS EXPERIENCE</p>
            <p className="text-white text-[14px] font-normal leading-[15px] mt-1 text-left">Delivering digital excellence</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Cards - positioned below the hero image on mobile, and overlapping on desktop */}
      <div className="max-w-[1330px] mx-auto px-6 lg:-mt-58 mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E5E5E5] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-start gap-6 lg:max-h-[220px] max-h-none"
          >
            <div className="w-16 h-16 rounded-full bg-[#FFCC00]/20 border border-[#FFCC00]/50 flex items-center justify-center flex-shrink-0">
              <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center">
                <img
                  src={MissionIcon}
                  alt="Mission Icon"
                  className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[24px] font-extrabold text-[#0A0A0A] leading-8 font-Plus_Jakarta_Sans">Our Mission</h2>
              <p className="text-[16px] font-normal text-[#4B5563] leading-[26px] mt-4">
                To empower businesses by transforming innovative ideas into functional, scalable and efficient digital products that solve real-world problems. Faite emphasizes client-centric solutions, quality and technology-driven growth.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E5E5E5] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-start gap-6 lg:max-h-[220px] max-h-none"
          >
            <div className="w-16 h-16 rounded-full bg-[#FFCC00]/20 border border-[#FFCC00]/50 flex items-center justify-center flex-shrink-0">
              <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center">
                <img
                  src={VisionIcon}
                  alt="Vision Icon"
                  className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[24px] font-extrabold text-[#0A0A0A] leading-8 font-Plus_Jakarta_Sans">Our Vision</h2>
              <p className="text-[16px] font-normal text-[#4B5563] leading-[26px] mt-4">
                To be a leading digital technology partner enabling organizations to leverage AI, cloud, mobile and web technologies for sustainable growth, operational efficiency and competitive advantage.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}