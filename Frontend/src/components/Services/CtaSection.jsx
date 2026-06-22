import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import background image
import CtaBg from '../../assets/cta-bg.png';
import DoubleMessageIcon from '../../assets/cta-message.png';

export default function CtaSection() {
  const navigate = useNavigate();
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

  const handleStartProject = () => {
    navigate('/contact');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3, type: "spring", stiffness: 200 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section ref={sectionRef} className="py-8 bg-[#F1F1F1] px-8 overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-cover bg-center rounded-[32px] border border-white/5 overflow-hidden"
          style={{
            backgroundImage: `url(${CtaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20 gap-8 lg:gap-0">
            {/* Left Content */}
            <motion.div
              variants={contentVariants}
              className="flex items-center gap-6 md:gap-10"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                className="w-[80px] h-[80px] bg-[#18181B] border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <img 
                  src={DoubleMessageIcon} 
                  alt="Double Message Icon" 
                  className="w-10 h-10 object-contain"
                />
              </motion.div>

              {/* Text */}
              <div>
                <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white leading-[44px] md:leading-[48px]">
                  Let's build something<br />amazing <span className="text-[#FBBF24]">together</span>     
                </h2>
                <p className="text-[16px] font-normal text-[#9CA3AF] leading-6 mt-2 max-w-[481px]">
                  Ready to transform your ideas into reality? Get in touch with our team today.
                </p>
              </div>
            </motion.div>

            {/* Button */}
            <motion.div
              variants={buttonVariants}
              className="flex-shrink-0"
            >
              <button
                onClick={handleStartProject}
                className="inline-flex items-center gap-3 px-8 md:px-10 py-5 bg-[#FBBF24] text-black font-bold text-[18px] rounded-[30px] hover:bg-[#e6b40a] transition-colors duration-300 hover:shadow-lg hover:shadow-[#FBBF24]/30 group"
              >
                Let's Start Your Project
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 12H19M19 12L13 6M19 12L13 18" 
                    stroke="black" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}