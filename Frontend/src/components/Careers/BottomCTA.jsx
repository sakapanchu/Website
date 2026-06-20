import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function BottomCTA() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto rounded-[30px] bg-gradient-to-r from-[#0E0F11] via-[#1A1C1E] to-[#0E0F11] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-[#FFC80B]/10 shadow-2xl text-center"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[120px] bg-[#FFC80B]/10 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Logo Icon Accent */}
          <div className="w-12 h-12 rounded-full bg-[#FFC80B]/20 text-[#FFC80B] flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Build the Future <span className="text-[#FFC80B]">With Us</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
            Take the next steps in your career and become part of a team committed to innovation, collaboration, and impactful digital transformation.
          </p>

          <button
            onClick={() => {
              const jobsSection = document.getElementById('jobs-section');
              if (jobsSection) {
                jobsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3.5 rounded-full bg-[#FFC80B] text-black font-bold text-base transition-all duration-300 hover:scale-105 hover:bg-[#F5B90C] hover:shadow-[0_10px_25px_rgba(251,191,36,0.3)] active:scale-95"
          >
            Explore Openings
          </button>
        </div>
      </motion.div>
    </section>
  );
}
