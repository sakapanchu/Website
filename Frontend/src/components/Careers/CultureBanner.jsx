import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import CultureBg from '../../assets/culturalBanner.png';

export default function CultureBanner() {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    }
  };

  const iconsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } 
    }
  };

  // Orbiting icon animation variants
  const orbitIconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + (i * 0.1),
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: (i) => i * 0.5
      }
    }
  };

  // Central icon float animation
  const centralIconVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    },
    float: {
      y: [0, -6, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Floating particles animation
  const particlesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -30, -60],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };



  return (
    <section ref={sectionRef} className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto rounded-[40px] bg-cover bg-center border border-[#222222] p-12 relative overflow-hidden"
        style={{
          backgroundImage: `url(${CultureBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '301px',
        }}
      >
       

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side - Play Button & Text */}
          <motion.div 
            variants={textVariants} 
            className="flex items-start gap-6"
          >
            {/* Play Button */}
            <motion.div 
              className="w-20 h-20 rounded-full bg-[#FFC80B] flex items-center justify-center flex-shrink-0 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>

            {/* Text Content */}
            <div className="max-w-[608px]">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[35px] font-extrabold text-white leading-[36px] lg:leading-[40px]">
                A Culture Built for <br className="hidden sm:block" />
                Creative Thinkers & Future Leaders
              </h2>
              <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[22px] lg:leading-[24px] mt-4 max-w-[608px]">
                We believe extraordinary ideas emerge when passionate people collaborate in an environment that encourages creativity, ownership, and lifelong learning.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Animated Visual Elements */}
          <motion.div 
            variants={iconsVariants} 
            className="relative flex items-center justify-center w-full max-w-[280px] lg:max-w-[320px] aspect-square flex-shrink-0"
          >
            {/* Orbiting Lines */}
            <motion.div 
              className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-[#FFC80B]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-[#FFC80B]/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            

          

            {/* Floating Particles */}
            <motion.div
              variants={particlesVariants}
              initial="hidden"
              animate={controls}
              className="absolute inset-0 pointer-events-none"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  variants={particleVariants}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#FFC80B]"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}