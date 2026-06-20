import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
      description: "Fair compensation matched with performance bonuses and reviews.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Learning Budget",
      description: "Annual stipend for courses, books, certifications, and conferences.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: "Flexible Hours",
      description: "Core hours approach designed to promote healthy work-life balance.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Team Events",
      description: "Regular gatherings, hackathons, outings, and team-building retreats.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-white overflow-hidden">
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
              BENEFITS
            </span>
            <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight text-black mb-4">
            Supporting Your Career Beyond the Workplace
          </h2>
          <p className="text-gray-600 max-w-[700px] mx-auto text-base sm:text-lg">
            We care about your growth, well-being, and progress.
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
                scale: 1.03, 
                borderColor: '#FFC80B', 
                boxShadow: '0 20px 40px rgba(255, 200, 11, 0.1)' 
              }}
              className="bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 flex flex-col items-center text-center relative group"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-[#FFC80B]/10 text-[#7B5901] flex items-center justify-center mb-6 group-hover:bg-[#FFC80B] group-hover:text-black transition-colors duration-300">
                {benefit.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#FFC80B] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
