import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ProjectsBg from '../../assets/projectBg.png';

export default function ProjectsHero() {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const statVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  // SVG Icons
  const ProjectsIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_512_1710)">
        <path d="M8.28571 2.31481H6.14286C4.96018 2.31481 4 3.35205 4 4.62963V18.5185C4 19.7961 4.96018 20.8333 6.14286 20.8333H16.8571C18.0398 20.8333 19 19.7961 19 18.5185V4.62963C19 3.35205 18.0398 2.31481 16.8571 2.31481H14.7143M8.28571 2.31481C8.28571 3.5924 9.2459 4.62963 10.4286 4.62963H12.5714C13.7541 4.62963 14.7143 3.5924 14.7143 2.31481M8.28571 2.31481C8.28571 1.03723 9.2459 0 10.4286 0H12.5714C13.7541 0 14.7143 1.03723 14.7143 2.31481M8.28571 12.7315L10.4286 15.0463L14.7143 10.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_512_1710">
          <rect width="24" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const IndustryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_512_1740)">
        <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 6C12.2449 6.00003 12.4813 6.08996 12.6644 6.25272C12.8474 6.41547 12.9643 6.63975 12.993 6.883L13 7V11.586L15.707 14.293C15.8863 14.473 15.9905 14.7144 15.9982 14.9684C16.006 15.2223 15.9168 15.4697 15.7488 15.6603C15.5807 15.8508 15.3464 15.9703 15.0935 15.9944C14.8406 16.0185 14.588 15.9454 14.387 15.79L14.293 15.707L11.293 12.707C11.1376 12.5514 11.0378 12.349 11.009 12.131L11 12V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_512_1740">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const DevelopersIcon = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 2.875C13.5628 2.875 15.2375 4.54969 15.2375 6.6125C15.2375 8.67531 13.5628 10.35 11.5 10.35C9.43719 10.35 7.7625 8.67531 7.7625 6.6125C7.7625 4.54969 9.43719 2.875 11.5 2.875ZM3.45 5.4625C4.88031 5.4625 6.0375 6.61969 6.0375 8.05C6.0375 9.48031 4.88031 10.6375 3.45 10.6375C2.01969 10.6375 0.8625 9.48031 0.8625 8.05C0.8625 6.61969 2.01969 5.4625 3.45 5.4625ZM0 17.25C0 14.7092 2.05922 12.65 4.6 12.65C5.06 12.65 5.50562 12.7183 5.92609 12.8441C4.74375 14.1666 4.025 15.9131 4.025 17.825V18.4C4.025 18.8097 4.11125 19.1978 4.26578 19.55H1.15C0.513906 19.55 0 19.0361 0 18.4V17.25ZM18.7342 19.55C18.8888 19.1978 18.975 18.8097 18.975 18.4V17.825C18.975 15.9131 18.2563 14.1666 17.0739 12.8441C17.4944 12.7183 17.94 12.65 18.4 12.65C20.9408 12.65 23 14.7092 23 17.25V18.4C23 19.0361 22.4861 19.55 21.85 19.55H18.7342ZM16.9625 8.05C16.9625 6.61969 18.1197 5.4625 19.55 5.4625C20.9803 5.4625 22.1375 6.61969 22.1375 8.05C22.1375 9.48031 20.9803 10.6375 19.55 10.6375C18.1197 10.6375 16.9625 9.48031 16.9625 8.05ZM5.75 17.825C5.75 14.6481 8.32312 12.075 11.5 12.075C14.6769 12.075 17.25 14.6481 17.25 17.825V18.4C17.25 19.0361 16.7361 19.55 16.1 19.55H6.9C6.26391 19.55 5.75 19.0361 5.75 18.4V17.825Z" fill="black" />
    </svg>
  );

  const SatisfactionIcon = () => (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6937 20.3302L14.5 18.0343L18.3062 20.3604L17.3093 16.0104L20.6625 13.1104L16.252 12.7177L14.5 8.60933L12.7479 12.6875L8.33746 13.0802L11.6906 16.0104L10.6937 20.3302ZM7.0385 25.375L9.00204 16.8864L2.41663 11.177L11.1166 10.4218L14.5 2.41663L17.8833 10.4218L26.5833 11.177L19.9979 16.8864L21.9614 25.375L14.5 20.8739L7.0385 25.375Z" fill="black" />
    </svg>
  );

  const ArrowRight = () => (
    <svg className="w-3.5 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  const stats = [
    {
      value: "200+",
      label: "PROJECTS DELIVERED",
      icon: ProjectsIcon,
    },
    {
      value: "15+",
      label: "INDUSTRIES SERVED",
      icon: IndustryIcon,
    },
    {
      value: "50+",
      label: "EXPERT DEVELOPERS",
      icon: DevelopersIcon,
    },
    {
      value: "98%",
      label: "CLIENT SATISFACTION",
      icon: SatisfactionIcon,
    },
  ];

  return (
    <section ref={sectionRef} className="w-full mt-24 py-10 px-3 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1432px] mx-auto"
      >
        <div
          className="relative w-full rounded-[20px_20px_90px_90px] overflow-hidden"
          style={{
            minHeight: '779px',
            backgroundImage: `url(${ProjectsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >


          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between min-h-[779px] py-12 px-6 sm:px-10 lg:px-16">
            {/* Left Content */}
            <motion.div
              variants={contentVariants}
              className="max-w-[584px] mt-16 lg:mt-20"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <div className="w-3 h-3 bg-[#FFB800] rounded-full"></div>
                <span className="text-xs font-semibold text-white">Projects</span>
                <span className="text-xs font-normal text-white/70 pl-1">Real Impact.</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-white leading-[56px] sm:leading-[72px] lg:leading-[96px] mb-4">
                Our Projects
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-[20px] font-normal text-white/90 leading-7 sm:leading-8 lg:leading-[32px] max-w-[576px] mb-8">
                Explore our successful projects and innovative solutions delivered to clients worldwide.
              </p>

              {/* Explore Button */}
              <button className="inline-flex items-center gap-2 px-3 sm:px-6 py-4 rounded-full bg-[#FFC80B]/20 border border-[#FFC80B] text-white font-bold text-base hover:bg-[#FFC80B]/30 transition-all duration-300 hover:scale-105 group">
                <span>Explore Projects</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              variants={statVariants}
              className="w-full max-w-[1190px] mx-auto mb-8 lg:mb-12"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 bg-white/10 border border-white rounded-[60px] backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFC80B] rounded-xl flex items-center justify-center flex-shrink-0">
                      <stat.icon />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-xl sm:text-2xl lg:text-[30px] font-bold text-white leading-7 sm:leading-8 lg:leading-9">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-white/90 tracking-[1.2px] uppercase leading-4">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}