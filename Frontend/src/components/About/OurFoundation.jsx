import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import icons from assets
import KnowledgeIcon from '../../assets/sharing.png';
import ConsultationIcon from '../../assets/freeConsultation.png';
import CommunityIcon from '../../assets/communityGrowth.png';

export default function OurFoundation() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  const foundationItems = [
    {
      id: 1,
      title: "Knowledge Sharing",
      description: "We believe in sharing knowledge and insights to help businesses and communities grow.",
      icon: KnowledgeIcon,
    },
    {
      id: 2,
      title: "Free Consultation",
      description: "We offer free consultations to guide businesses toward the right digital solutions without obligation.",
      icon: ConsultationIcon,
    },
    {
      id: 3,
      title: "Community Growth",
      description: "We are committed to uplifting communities and contributing to a better digital society.",
      icon: CommunityIcon,
    },
  ];

  return (
    <section ref={sectionRef} className="py-10 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div className="bg-white rounded-[30px] py-12 px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#000000] leading-10 font-inter mb-2">
              Our Foundation
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] font-normal text-[#6B7280] leading-6">
              The values that guide our decisions and define who we are.
            </p>
          </div>

          {/* Foundation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {foundationItems.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="bg-[#FBBF24]/5 border border-[#FFC80B] shadow-[0_4px_4px_rgba(255,200,11,0.3)] rounded-2xl p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_20px_rgba(255,200,11,0.3)] hover:bg-[#FBBF24]/10 group cursor-pointer"
              >
                {/* Icon Container - Changes to yellow on hover */}
                <div className="w-14 h-14 bg-[#000000] rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#FFC80B] group-hover:scale-110 group-hover:rotate-6">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                {/* Title - Changes color on hover */}
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-[#000000] leading-7 sm:leading-8 lg:leading-[28px] mb-2 transition-colors duration-300 group-hover:text-[#FFC80B]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-[14px] font-normal text-[#6B7280] leading-5 sm:leading-6 lg:leading-[23px] transition-colors duration-300 group-hover:text-[#4B5563]">
                  {item.description}
                </p>

                {/* Bottom accent line - appears on hover */}
                <div className="w-0 h-[2px] bg-[#FFC80B] transition-all duration-500 group-hover:w-full mt-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}