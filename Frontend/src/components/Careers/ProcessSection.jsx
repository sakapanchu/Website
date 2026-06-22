import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function ProcessSection() {
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

  const steps = [
    {
      number: "1",
      title: "Apply",
      description: "Submit your application",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Interview",
      description: "Connect with our experts through meaningful conversations focused on your skills, goals, and potential.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Assessment",
      description: "Demonstrate your technical expertise and problem-solving abilities through practical evaluations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <polyline points="9 15 11 17 15 13" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Offer",
      description: "Begin your journey with a team committed to innovation, growth, and long-term success.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
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
            {/* Subtitle Accent */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
              <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#FFC80B]">
                PROCESS
              </span>
              <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
            </div>

            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[36px] md:leading-[40px] text-black mb-3">
              Your Journey Starts Here
            </h2>
            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280] max-w-[468px] mx-auto leading-5 sm:leading-6">
              Simple, transparent, and designed to help you succeed.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {/* Connective Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-[43px] left-[10%] right-[10%] h-[2px] bg-gray-300 z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Icon / Number Badge */}
                <div className="relative mb-6">
                  {/* Number Pill */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-[#FFC80B] text-xs font-bold flex items-center justify-center border-2 border-white">
                    {step.number}
                  </div>
                  
                  {/* Main Circle Icon */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#FFC80B] text-[#7B5901] flex items-center justify-center group-hover:border-[#FFC80B] group-hover:bg-[#FFC80B] group-hover:text-black transition-all duration-300 shadow-md">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-[#FFC80B] transition-colors duration-300">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-500 text-sm max-w-[240px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}