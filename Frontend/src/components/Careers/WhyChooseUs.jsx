import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Import icons from assets
import GrowthIcon from '../../assets/grow.png';
import LearningIcon from '../../assets/learn.png';
import FlexibleIcon from '../../assets/flexible.png';
import TeamIcon from '../../assets/team.png';

export default function WhyChooseUs() {
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

  const cards = [
    {
      title: "Growth Opportunities",
      description: "Accelerate your professional journey through leadership mentorship, real-world projects, and continuous career advancement opportunities.",
      icon: GrowthIcon,
      alt: "Growth Opportunities Icon"
    },
    {
      title: "Learning Culture",
      description: "Expand your expertise with access to certifications, industry workshops, technology conferences, and continuous skill development programs.",
      icon: LearningIcon,
      alt: "Learning Culture Icon"
    },
    {
      title: "Flexible Work",
      description: "Enjoy a modern work culture that values flexibility, productivity, and a healthy balance between professional and personal growth.",
      icon: FlexibleIcon,
      alt: "Flexible Work Icon"
    },
    {
      title: "Friendly Team",
      description: "Collaborate with passionate professionals in an inclusive and supportive environment built on teamwork, innovation, and shared success.",
      icon: TeamIcon,
      alt: "Friendly Team Icon"
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="py-10 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* White Background Container */}
        <div className="bg-white rounded-[30px] py-10 px-3 sm:px-6">
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
                WHY US
              </span>
              <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
            </div>

            {/* Title */}
            <h2 className="text-[36px] font-bold leading-[40px] text-black mb-4">
              Why Exceptional Talent Chooses Us
            </h2>

            {/* Description */}
            <p className="text-[16px] font-normal text-[#9CA3AF] max-w-[582px] mx-auto leading-6">
              We foster a culture of innovation, collaboration, and continuous growth where talented individuals are empowered to make meaningful contributions.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  borderColor: '#FFCD29',
                  boxShadow: '0 20px 40px rgba(255, 200, 11, 0.12)'
                }}
                className="bg-white rounded-2xl p-8 border border-[#FFCD29] transition-all duration-300 flex flex-col items-center text-center h-[285px]"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#FFC80B] flex items-center justify-center flex-shrink-0 mb-4">
                  <img
                    src={card.icon}
                    alt={card.alt}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold text-black leading-[28px] mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] font-normal text-[#9CA3AF] leading-[23px] max-w-[302px]">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}