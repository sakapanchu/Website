import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
      description: "Unlock your full potential with clear career pathways, training budgets, and mentorship from industry leaders.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: "Learning Culture",
      description: "Stay ahead with developer-first learning resources, peer sessions, workshops, and conference opportunities.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      )
    },
    {
      title: "Flexible Work",
      description: "Enjoy a balanced life with remote-first options, flexible working hours, and wellness benefits.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Friendly Team",
      description: "Collaborate with talented, warm, and supportive peers in a diverse and inclusive environment.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
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
    <section ref={sectionRef} className="py-20 px-8 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          {/* Subtitle Accent */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-[16px] font-bold tracking-[2px] uppercase text-black">
              WHY US
            </span>
            <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight text-black mb-4">
            Why Exceptional Talent Chooses Us
          </h2>
          <p className="text-gray-600 max-w-[700px] mx-auto text-base sm:text-lg">
            Our dynamic culture of innovation, collaboration, and continuous growth makes Faite the best place to accelerate your career and make a global impact.
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
                y: -10, 
                borderColor: '#FFC80B', 
                boxShadow: '0 20px 40px rgba(255, 200, 11, 0.12)' 
              }}
              className="bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 flex flex-col items-center text-center relative group"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-[#FFC80B] rounded-tl-2xl transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-[#FFC80B] rounded-br-2xl transition-all duration-300" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#FFC80B]/10 text-[#7B5901] flex items-center justify-center mb-6 group-hover:bg-[#FFC80B] group-hover:text-black transition-colors duration-300">
                {card.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
