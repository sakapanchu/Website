import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import images
import TeamImage from '../../assets/about1.png';
import OfficeImage from '../../assets/about2.png';

// Import stat icons
import ExperienceIcon from '../../assets/about3.png';
import ProjectsIcon from '../../assets/about4.png';
import ProfessionalsIcon from '../../assets/about5.png';
import SatisfactionIcon from '../../assets/about6.png';

export default function AboutUs() {
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

  const stats = [
    { 
      id: 1, 
      value: "05+", 
      label: "YEARS EXPERIENCE",
      icon: ExperienceIcon,
      alt: "Years Experience Icon"
    },
    { 
      id: 2, 
      value: "100+", 
      label: "PROJECTS COMPLETED",
      icon: ProjectsIcon,
      alt: "Projects Completed Icon"
    },
    { 
      id: 3, 
      value: "20+", 
      label: "EXPERT PROFESSIONALS",
      icon: ProfessionalsIcon,
      alt: "Expert Professionals Icon"
    },
    { 
      id: 4, 
      value: "95%", 
      label: "CLIENT SATISFACTION",
      icon: SatisfactionIcon,
      alt: "Client Satisfaction Icon"
    }
  ];

  const handleLearnMore = () => {
    navigate('/about');
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

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4, staggerChildren: 0.1 },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
  };

  // Right side images animations - appear after content
  const imageContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        delay: 0.8,
        staggerChildren: 0.3,
        when: "beforeChildren"
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20
      },
    },
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="py-8 px-3 sm:px-6 bg-[#F1F1F1]   overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-8"
        >
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-[35.61px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-[18px] font-bold tracking-[1.4px] uppercase text-black">
              About Us
            </span>
            <div className="w-[42.57px] h-[3px] bg-[#FFC80B]"></div>
          </div>

           {/* Main Title */}
          <h2 className="text-[35px] font-bold leading-[48px] text-black">
            We build  <span className="text-[#FFC80B]"> smart solutions </span> that drive real impact. 
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="flex-1">

            {/* Description */}
            <motion.p
              variants={contentVariants}
              initial="hidden"
              animate={controls}
              className="text-[18px] text-black leading-[29px] font-Manrope max-w-[663px] mb-8 "
            >
              Faite is a team of passionate technologists, designers and strategists delivering innovative digital solutions that help businesses grow, transform and succeed in the digital era.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-2 gap-4 mb-8 max-w-[663px]"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={statItemVariants}
                  className="bg-[#191C1E] border border-[#D4C5AB] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <img 
                      src={stat.icon} 
                      alt={stat.alt}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-[16px] font-normal text-[#FFD700]">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-[14px] font-bold text-white uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
              onClick={handleLearnMore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FACC15] text-black font-bold text-[16px] rounded-full hover:bg-[#e6b40a] transition-all duration-300 hover:shadow-lg hover:shadow-[#FACC15]/30"
            >
              Learn More About Us →
            </motion.button>
          </div>

          {/* Right Side - Images (appear after content) */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={controls}
            className="flex-1 flex flex-col sm:flex-row gap-0 max-w-[600px]"
          >
            {/* Team Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              custom={imageHoverVariants}
              className="flex-1"
            >
              <div 
               className="relative h-[280px] sm:h-[400px] mt-10 rounded-2xl overflow-hidden"
                
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${TeamImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                 
                </div>
              </div>
            </motion.div>

            {/* Office Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              custom={imageHoverVariants}
              className="flex-1"
            >
              <div 
                className="relative h-[280px] sm:h-[400px] rounded-2xl overflow-hidden"
               
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${OfficeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}