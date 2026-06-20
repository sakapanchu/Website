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
      description: "Submit your application and resume through our careers portal.",
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
      description: "Talk with our recruiters and technical team to discuss alignment.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Assessment",
      description: "Demonstrate your skills with a tailored, practical task.",
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
      description: "Receive your offer letter and welcome package to join the team.",
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
              PROCESS
            </span>
            <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight text-black mb-4">
            Your Journey Starts Here
          </h2>
          <p className="text-gray-600 max-w-[700px] mx-auto text-base sm:text-lg">
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
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-[#FFC80B] text-xs font-bold flex items-center justify-center border-2 border-[#F1F1F1]">
                  {step.number}
                </div>
                
                {/* Main Circle Icon */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 text-[#7B5901] flex items-center justify-center group-hover:border-[#FFC80B] group-hover:bg-[#FFC80B] group-hover:text-black transition-all duration-300 shadow-md">
                  {step.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FFC80B] transition-colors duration-300">
                {step.number}. {step.title}
              </h3>
              <p className="text-gray-500 text-sm max-w-[240px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
