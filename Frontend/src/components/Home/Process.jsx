import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import ResearchIcon from '../../assets/research.png';
import DesignIcon from '../../assets/design.png';
import DevelopIcon from '../../assets/develop.png';
import DeployIcon from '../../assets/deploy.png';

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Research",
      description: "We analyze your requirements and plan the best strategy for successful execution.",
      icon: ResearchIcon,
      alt: "Research Icon"
    },
    {
      id: 2,
      number: "02",
      title: "Design",
      description: "We create intuitive designs and interactive prototypes for validation.",
      icon: DesignIcon,
      alt: "Design Icon"
    },
    {
      id: 3,
      number: "03",
      title: "Develop",
      description: "We build robust solutions with rigorous testing for quality assurance.",
      icon: DevelopIcon,
      alt: "Develop Icon"
    },
    {
      id: 4,
      number: "04",
      title: "Deploy",
      description: "We deploy seamlessly and provide ongoing support for continuous success.",
      icon: DeployIcon,
      alt: "Deploy Icon"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const stepsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2, staggerChildren: 0.15 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-[20px] h-[3px] bg-[#FFC80B]"></div>
            <div className="w-[20px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-[18px] font-bold tracking-[1.4px] uppercase text-black">
              OUR PROCESS
            </span>
            <div className="w-[20px] h-[3px] bg-[#FFC80B]"></div>
            <div className="w-[20px] h-[3px] bg-[#FFC80B]"></div>
          </div>
          {/* Main Title */}
          <h2 className="text-[35px] font-bold leading-[48px] text-black">
            How We Work
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stepsVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connective Line - Desktop only */}
          <div className="hidden lg:block absolute top-[48px] left-10 right-10 h-[2px] bg-[#FBBF24]"></div>

          {steps.map((step, index) => {
            const isHovered = hoveredStep === step.id;
            const isFirst = index === 0;

            return (
              <motion.div
                key={step.id}
                variants={stepVariants}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div
                  className={`relative w-24 h-24 rounded-full border-4 border-white flex items-center justify-center transition-all duration-500 ${isHovered
                      ? 'bg-[#FFC107] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]'
                      : 'bg-black'
                    }`}
                  style={{
                    boxShadow: isHovered
                      ? '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)'
                      : 'none'
                  }}
                >
                  <img
                    src={step.icon}
                    alt={step.alt}
                    className={`w-8 h-8 object-contain transition-all duration-500 ${isHovered ? 'brightness-0' : 'text-[#FBBF24] '
                      }`}
                  />
                </div>

                {/* Title */}
                <h3 className={`text-[16px] font-bold mt-3 transition-all duration-500 ${isHovered ? 'text-black' : 'text-black'
                  }`}>
                  {step.number}. {step.title}
                </h3>

                {/* Description */}
                <p className={`text-[14px] leading-5 px-4 mt-1 transition-all duration-500 ${isHovered ? 'text-black' : 'text-black/70'
                  }`}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}