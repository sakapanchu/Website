import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaBg from '../../assets/project-cta.png';

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const navigate = useNavigate();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  // Arrow icon component
  const ArrowIcon = () => (
    <svg className="w-3 h-1.5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2.5H9.25C8.875 2.9375 8.4375 3.625 8.4375 3.875C8.4375 4 8.5625 4.0625 8.6875 4.0625C8.8125 4.0625 8.875 4.03125 9.0625 3.8125C9.5625 3.25 10.125 2.8125 11.0625 2.3125C11.3125 2.1875 11.4375 2.125 11.4375 2C11.4375 1.875 11.375 1.8125 11.25 1.75C10 1.0625 9.6875 0.8125 9.0625 0.0625C8.9375 -0.0625 8.875 -0.0625 8.6875 -0.0625C8.5625 -0.0625 8.4375 0.0625 8.4375 0.1875C8.4375 0.3125 8.625 0.75 8.75 0.9375C8.875 1.25 9.0625 1.4375 9.25 1.75H0V2.5Z" fill="#FFB800"/>
    </svg>
  );

  // Navigate to Contact page
  const handleGetInTouch = () => {
    navigate('/contact');
  };

  // Navigate to Projects page
  const handleViewPortfolio = () => {
    navigate('/projects');
  };

  // Alternative: Scroll to Projects Showcase section if on same page
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      navigate('/projects');
    }
  };

  return (
    <section ref={sectionRef} className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <motion.div 
          variants={contentVariants}
          className="relative rounded-[40px] overflow-hidden border border-white/10"
          style={{ 
            minHeight: '381px',
            backgroundImage: `url(${CtaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-[40px]"></div>

          {/* Content - Left Aligned */}
          <div className="relative z-10 flex flex-col justify-center min-h-[381px] px-6 sm:px-10 lg:px-24 py-12 sm:py-16 lg:py-20">
            {/* Heading - Left Aligned */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-10 sm:leading-12 lg:leading-[48px] text-left mb-3 max-w-[800px]">
              Ready to Start Your Project?
            </h2>

            {/* Description - Left Aligned */}
            <p className="text-sm sm:text-base lg:text-[18px] font-normal text-white leading-6 sm:leading-7 lg:leading-[29px] text-left max-w-[664px] mb-6 lg:mb-8">
              Join industry and organizations like yours. Let's meet and turn the opportunity into business. Let's grow together!
            </p>

            {/* Buttons - Left Aligned */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <motion.button 
                variants={buttonVariants}
                onClick={handleGetInTouch}
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-full border border-[#FFC80B] bg-white/10 text-[#FFC80B] font-bold text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <span>Get in Touch</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </motion.button>

              <motion.button 
                variants={buttonVariants}
                onClick={handleViewPortfolio}
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-full border border-[#FFC80B] bg-white/10 text-[#FFC80B] font-bold text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <span>View Portfolio</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}