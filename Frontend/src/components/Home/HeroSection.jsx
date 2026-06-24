import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HeroImage from "../../assets/heroImage.png";

export default function HeroSection() {
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

  const stats = [
    {
      id: 1,
      value: "98%",
      label: "Client Retention",
      order: 1,
      icon: (
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6937 20.3302L14.5 18.0343L18.3062 20.3604L17.3093 16.0104L20.6625 13.1104L16.252 12.7177L14.5 8.60933L12.7479 12.6875L8.33746 13.0802L11.6906 16.0104L10.6937 20.3302ZM7.0385 25.375L9.00204 16.8864L2.41663 11.177L11.1166 10.4218L14.5 2.41663L17.8833 10.4218L26.5833 11.177L19.9979 16.8864L21.9614 25.375L14.5 20.8739L7.0385 25.375Z" fill="black" />
        </svg>
      )
    },
    {
      id: 2,
      value: "20+",
      label: "Happy Clients",
      order: 2,
      icon: (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 2.875C13.5628 2.875 15.2375 4.54969 15.2375 6.6125C15.2375 8.67531 13.5628 10.35 11.5 10.35C9.43719 10.35 7.7625 8.67531 7.7625 6.6125C7.7625 4.54969 9.43719 2.875 11.5 2.875ZM3.45 5.4625C4.88031 5.4625 6.0375 6.61969 6.0375 8.05C6.0375 9.48031 4.88031 10.6375 3.45 10.6375C2.01969 10.6375 0.8625 9.48031 0.8625 8.05C0.8625 6.61969 2.01969 5.4625 3.45 5.4625ZM0 17.25C0 14.7092 2.05922 12.65 4.6 12.65C5.06 12.65 5.50562 12.7183 5.92609 12.8441C4.74375 14.1666 4.025 15.9131 4.025 17.825V18.4C4.025 18.8097 4.11125 19.1978 4.26578 19.55H1.15C0.513906 19.55 0 19.0361 0 18.4V17.25ZM18.7342 19.55C18.8888 19.1978 18.975 18.8097 18.975 18.4V17.825C18.975 15.9131 18.2563 14.1666 17.0739 12.8441C17.4944 12.7183 17.94 12.65 18.4 12.65C20.9408 12.65 23 14.7092 23 17.25V18.4C23 19.0361 22.4861 19.55 21.85 19.55H18.7342ZM16.9625 8.05C16.9625 6.61969 18.1197 5.4625 19.55 5.4625C20.9803 5.4625 22.1375 6.61969 22.1375 8.05C22.1375 9.48031 20.9803 10.6375 19.55 10.6375C18.1197 10.6375 16.9625 9.48031 16.9625 8.05ZM5.75 17.825C5.75 14.6481 8.32312 12.075 11.5 12.075C14.6769 12.075 17.25 14.6481 17.25 17.825V18.4C17.25 19.0361 16.7361 19.55 16.1 19.55H6.9C6.26391 19.55 5.75 19.0361 5.75 18.4V17.825Z" fill="black" />
        </svg>
      )
    },
    {
      id: 3,
      value: "3+",
      label: "Years Experience",
      order: 3,
      icon: (
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
      )
    },
    {
      id: 4,
      value: "50+",
      label: "Projects Delivered",
      order: 4,
      icon: (
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
      )
    }
  ];

  // Sort stats by order
  const sortedStats = [...stats].sort((a, b) => a.order - b.order);

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
  // Animation variants for content - Same as ServiceHeroSection
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

  // Animation variants for stats
  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <main ref={sectionRef} className="min-h-screen mt-32 bg-[#F1F1F1] p-4 sm:p-6 lg:p-8 lg:pt-2 font-inter">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full max-w-[1430px] mx-auto overflow-hidden rounded-[20px_20px_60px_60px] md:rounded-[20px_20px_90px_90px]"
        style={{ "--hero-bg": `url(${HeroImage})` }}
      >
        {/* Background image - stays static */}
        <img
          src={HeroImage}
          alt="Faite hero background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Animated ring layers - only rings rotate */}
        <div className="hero-orbit-layer" aria-hidden="true">
          <span className="hero-ring-motion hero-ring-motion--one" />
          <span className="hero-ring-motion hero-ring-motion--two" />
          <span className="hero-ring-motion hero-ring-motion--three" />
        </div>

        {/* Content wrapper - stays above everything */}
        <div className="relative z-10 flex flex-col min-h-[520px] md:min-h-[680px] lg:min-h-[779px]">
          <div className="flex-1 px-3 sm:px-6 lg:px-16 pt-16 sm:pt-20 lg:pt-32 pb-6">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={controls}
              className="max-w-xl lg:max-w-[528px]"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.2] lg:leading-[70px] mb-0">
                <span className="text-white [text-shadow:0_1px_0_#000]">
                  Innovate. Transform.
                  <br />
                </span>
                <span className="text-[#FFC80B] [text-shadow:0_1px_0_#000]">
                  Succeed
                </span>
              </h1>

              <p className="mt-6 text-white text-base sm:text-lg lg:text-[20px] font-semibold leading-[1.4] lg:leading-[28px] max-w-[505px]">
                At Faite, we deliver AI-powered solutions, enterprise software,
                cloud platforms, and digital products that help businesses
                innovate faster, operate smarter, and achieve sustainable
                growth.
              </p>

              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={controls}
                className="flex flex-wrap gap-4 mt-6"
              >
                <button className="flex items-center gap-2 px-3 sm:px-6 py-3 max-w-[272.5px] max-h-[50px] rounded-full border border-[#FFC80B] bg-[#FFC80B]/20 text-white font-bold text-base leading-6 transition-colors hover:bg-[#FFC80B]/30">
                  Explore Services
                  <svg
                    width="14"
                    height="6"
                    viewBox="0 0 14 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 3.168H10.592C10.208 3.632 9.6 4.832 9.6 5.12C9.6 5.264 9.728 5.376 9.888 5.376C10.016 5.376 10.064 5.328 10.304 5.056C10.944 4.304 11.648 3.76 12.816 3.104C13.136 2.928 13.248 2.832 13.248 2.72C13.248 2.592 13.184 2.512 13.056 2.432C11.44 1.488 11.008 1.136 10.192 0.176C10.064 0.032 10 0 9.888 0C9.728 0 9.6 0.112 9.6 0.256C9.6 0.352 9.792 0.88 9.92 1.136C10.096 1.504 10.288 1.792 10.592 2.208H0V3.168Z"
                      fill="white"
                    />
                  </svg>
                </button>

                <button className="flex items-center gap-2 px-3 sm:px-6 py-3 max-w-[176.88px] max-h-[50px] rounded-full border border-white/20 bg-white/10 text-white font-bold text-base leading-6 transition-colors hover:bg-white/20">
                  Contact us
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12.6641 8.9375L5.91406 12.8359C5.72656 12.9453 5.53776 12.9453 5.34766 12.8359C5.15755 12.7266 5.0625 12.5651 5.0625 12.3516V4.54688C5.0625 4.32812 5.15755 4.16536 5.34766 4.05859C5.53776 3.95182 5.72656 3.95052 5.91406 4.05469L12.6641 7.96094C12.8568 8.07031 12.9531 8.23307 12.9531 8.44922C12.9531 8.66536 12.8568 8.82812 12.6641 8.9375ZM2.8125 0H14.0781C14.5938 0 15.0651 0.126302 15.4922 0.378906C15.9193 0.63151 16.2591 0.971354 16.5117 1.39844C16.7643 1.82552 16.8906 2.29688 16.8906 2.8125V14.0781C16.8906 14.5938 16.7643 15.0651 16.5117 15.4922C16.2591 15.9193 15.9193 16.2591 15.4922 16.5117C15.0651 16.7643 14.5938 16.8906 14.0781 16.8906H2.8125C2.29688 16.8906 1.82552 16.7643 1.39844 16.5117C0.971354 16.2591 0.63151 15.9193 0.378906 15.4922C0.126302 15.0651 0 14.5938 0 14.0781V2.8125C0 2.29688 0.126302 1.82552 0.378906 1.39844C0.63151 0.971354 0.971354 0.63151 1.39844 0.378906C1.82552 0.126302 2.29688 0 2.8125 0ZM1.125 2.8125V14.0781C1.125 14.5417 1.29036 14.9388 1.62109 15.2695C1.95182 15.6003 2.34896 15.7656 2.8125 15.7656H14.0781C14.5469 15.7656 14.9453 15.6003 15.2734 15.2695C15.6016 14.9388 15.7656 14.5417 15.7656 14.0781V2.8125C15.7656 2.34896 15.6016 1.95182 15.2734 1.62109C14.9453 1.29036 14.5469 1.125 14.0781 1.125H2.8125C2.34896 1.125 1.95182 1.29036 1.62109 1.62109C1.29036 1.95182 1.125 2.34896 1.125 2.8125Z"
                      fill="#FFC80B"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar with sequential animation */}
          <div className="px-4 sm:px-6 lg:px-0 pb-8 lg:pb-0">
            <div className="lg:mx-auto lg:max-w-[1190px] lg:px-5 py-8 lg:py-10">
              <motion.div
                variants={statsContainerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5"
              >
                {sortedStats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    variants={statItemVariants}
                    className="flex items-center gap-3 max-h-[100px] max-w-[272.5px] lg:gap-4 px-4 lg:px-5 py-5 lg:py-6 rounded-[40px] lg:rounded-[60px] border border-white bg-white/10 backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0 w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl bg-[#FFC80B]">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-white text-2xl lg:text-[30px] font-bold leading-none lg:leading-[36px]">
                        {stat.value}
                      </div>
                      <div className="text-white text-[10px] lg:text-[12px] font-bold uppercase tracking-[1.2px] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}