import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Import icons from assets
import SalaryIcon from '../../assets/salary.png';
import LearningIcon from '../../assets/budget.png';
import FlexibleIcon from '../../assets/hour.png';
import TeamIcon from '../../assets/teamEvent.png';

export default function BenefitsSection() {
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

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Fair compensation that reflects your skills and experience.",
      icon: SalaryIcon,
      alt: "Competitive Salary Icon"
    },
    {
      title: "Learning Budget",
      description: "Access dedicated resources for certifications, training programs, conferences, and continuous learning opportunities.",
      icon: LearningIcon,
      alt: "Learning Budget Icon"
    },
    {
      title: "Flexible Hours",
      description: "Work in a flexible environment designed to support productivity, creativity, and work-life balance.",
      icon: FlexibleIcon,
      alt: "Flexible Hours Icon"
    },
    {
      title: "Team Events",
      description: "Enjoy engaging team-building activities, networking events, and collaborative experiences that strengthen company culture.",
      icon: TeamIcon,
      alt: "Team Events Icon"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section ref={sectionRef} className="py-10 px-8 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* White Container */}
        <div className="bg-white rounded-[30px] py-12 px-6 md:px-10">
          {/* Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-12"
          >
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
              <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#FFC80B]">
                BENEFITS
              </span>
              <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
            </div>

            {/* Title */}
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[36px] md:leading-[40px] text-black mb-3">
              Supporting Your Career Beyond the Workplace
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] font-normal text-[#9CA3AF] max-w-[319px] mx-auto leading-5 sm:leading-6">
              We care about your wellbeing and growth.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  borderColor: '#FBBF24',
                  boxShadow: '0 20px 40px rgba(255, 200, 11, 0.08)' 
                }}
                className="bg-[rgba(251,191,36,0.05)] rounded-2xl p-6 border border-[#FBBF24] transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#FFC80B] flex items-center justify-center flex-shrink-0 mb-4">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.alt}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold text-black leading-[28px] mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] font-normal text-[#9CA3AF] leading-[20px] max-w-[255px]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}