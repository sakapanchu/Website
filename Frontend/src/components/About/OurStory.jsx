import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CompanyIcon from '../../assets/companyFound.png';
import MeaningIcon from '../../assets/consultation.png';
import GrowthIcon from '../../assets/earlygrowth.png';

export default function OurStory() {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 0.6, 
        ease: "easeOut", 
        delay: 0.2,
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  const milestones = [
    {
      id: 1,
      year: "2023",
      title: "Company Founded",
      description: "Faite was founded with a vision to deliver smart, scalable, and impactful digital solutions.",
      icon: CompanyIcon,
      badgeColor: "bg-[#FFCC00]",
      textColor: "text-[#0A0A0A]",
    },
    {
      id: 2,
      year: "The Meaning / Faite Origins",
      title: "Free consultation",
      description: '"Faite" comes from the idea of faith and commitment—our belief in solving problems and creating value through technology.',
      icon: MeaningIcon,
      badgeColor: "bg-white",
      textColor: "text-[#F2A900]",
    },
    {
      id: 3,
      year: "2024",
      title: "Early Growth",
      description: "Expanded our team, built strategic partnerships, and delivered projects that made a difference for our clients.",
      icon: GrowthIcon,
      badgeColor: "bg-[#FFCC00]",
      textColor: "text-[#0A0A0A]",
    },
  ];

  return (
    <section ref={sectionRef} className="py-10 px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div className="bg-white rounded-[30px] py-12 px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#0A0A0A] leading-10 font-Plus_Jakarta_Sans mb-2">
              Our Story
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] font-normal text-[#888888] leading-6">
              A journey of purpose, innovation, and growth.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            {/* Continuous Connecting Line - spans the entire width */}
            <div className="absolute left-0 right-0 top-[5px] h-[4px] bg-[#FFCC00]/50 z-0"></div>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  variants={cardVariants}
                  className="relative flex flex-col items-center"
                >
                  {/* Yellow Circle Connector */}
                  <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] bg-[#FFCC00] border-[1px] border-black rounded-full z-20"></div>

                  {/* Card */}
                  <div className="w-full bg-[#FAFAFA] border border-[#9CA3AF]/70 rounded-2xl p-6 sm:p-8 lg:p-8 mt-8 min-h-[230px]">
                    {/* Header with icon and year badge */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px] bg-[#0A0A0A] rounded-xl flex items-center justify-center flex-shrink-0">
                        <img 
                          src={milestone.icon} 
                          alt={`${milestone.title} icon`}
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                      </div>
                      <div className={`px-3 py-1 rounded ${milestone.badgeColor}`}>
                        <span className={`text-xs sm:text-sm font-bold leading-5 ${milestone.textColor}`}>
                          {milestone.year}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-[#0A0A0A] leading-7 sm:leading-8 lg:leading-[28px] mb-2 sm:mb-3">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-[14px] font-normal text-[#888888] leading-5 sm:leading-6 lg:leading-[20px]">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}