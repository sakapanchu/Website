import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import ChatbotImage from '../../assets/AI_Product.png';
import ChatIcon from '../../assets/AI_Product1.png';

export default function AIProducts() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls, hasAnimated]);

  const handleExploreSolutions = () => {
    navigate('/ai-solutions');
  };

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const bgVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.9,
      }
    }
  };

  // Thunder/Lightning effect - plays once
  const thunderVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: [0, 1, 0.8, 1, 0.5, 1, 0.9, 1],
      scale: [0.8, 1.3, 1.1, 1.2, 1, 1.1, 1, 1],
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.9,
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1],
      }
    }
  };

  // Glow flash effect
  const glowVariants = {
    hidden: { 
      boxShadow: "0 0 0 0 rgba(255, 200, 11, 0)",
    },
    visible: {
      boxShadow: [
        "0 0 0 0 rgba(255, 200, 11, 0)",
        "0 0 40px 20px rgba(255, 200, 11, 0.6)",
        "0 0 80px 40px rgba(255, 200, 11, 0.3)",
        "0 0 40px 20px rgba(255, 200, 11, 0.2)",
        "0 0 0 0 rgba(255, 200, 11, 0)"
      ],
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.9,
        times: [0, 0.2, 0.4, 0.6, 1],
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-8 px-3 sm:px-6 bg-[#F1F1F1]  overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-[37px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-[18px] font-bold tracking-[1.4px] uppercase text-black">
              Our AI Products
            </span>
            <div className="w-[44px] h-[3px] bg-[#FFC80B]"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-[35px] font-bold leading-[48px] text-black">
            Built to simplify. <span className="text-[#FFC80B]">Designed</span> to scale. <span className="text-[#FFC80B]">Created</span> for impact.
          </h2>
        </motion.div>

        {/* AI Product Card */}
        <motion.div
          variants={bgVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-cover bg-center rounded-[48px] overflow-hidden min-h-[458px]"
          style={{ 
            backgroundImage: `url(${ChatbotImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark Overlay for better readability */}
          <div className="absolute inset-0 bg-black/40 rounded-[48px]"></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 xl:p-14 min-h-[458px]">
            {/* ChatIcon - Positioned in marked area with thunder effect */}
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={controls}
              className="absolute left-[320px] top-[240px] -translate-y-3/4"
            >
              {/* Thunder/Lightning flash effect */}
              <motion.div
                variants={thunderVariants}
                initial="hidden"
                animate={controls}
                className="absolute inset-0 rounded-full bg-[#FFC80B]/20"
                style={{ filter: 'blur(20px)' }}
              />
              
              {/* Glow effect */}
              <motion.div
                variants={glowVariants}
                initial="hidden"
                animate={controls}
                className="rounded-full"
              >
                <img 
                  src={ChatIcon} 
                  alt="Chat Icon" 
                  className="w-40 h-48 object-contain relative z-10"
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Content - Kept as original */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={controls}
              className="flex-1 ml-auto max-w-[581px]"
            >
              {/* WHARE AUTOMATION */}
              <div className="mb-2">
                <p className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#FFC80B]">
                  WHARE AUTOMATION
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white leading-[44px] md:leading-[52px] lg:leading-[60px] mb-4">
                Chatbot & Virtual Assistance
              </h2>

              {/* Description */}
              <p className="text-[16px] md:text-[18px] font-normal text-[#9CA3AF] leading-[26px] md:leading-[29px] mb-6 max-w-[581px]">
                Intelligent virtual assistants that engage customers, automate support and boost business efficiency 24/7 across all channels.
              </p>

              {/* Explore Solutions Button */}
              <button
                onClick={handleExploreSolutions}
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 bg-[#FFC80B] text-black font-bold text-[16px] rounded-full hover:bg-[#e6b40a] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC80B]/30 group"
              >
                Explore Solutions
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 12H19M19 12L13 6M19 12L13 18" 
                    stroke="black" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* View All Products Link */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-8"
        >
          <button
            onClick={handleViewAllProducts}
            className="group inline-flex items-center justify-center mx-auto gap-1.5 px-6 py-5 border border-[#FAD007] bg-[rgba(0,0,0,0.004)] text-black font-semibold rounded-full hover:bg-[#e6b40a] transition-all duration-300 font-Montserrat"
            style={{
              width: "321px",
              height: "48px",
              boxShadow: "4px 6px 20px rgba(255, 200, 11, 0.25)",
            }}
          >
            View all products →
          </button>
        </motion.div>
      </div>
    </section>
  );
}