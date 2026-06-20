import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function CultureBanner() {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    }
  };

  const iconsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } 
    }
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto rounded-[30px] bg-gradient-to-r from-[#0E0F11] via-[#1A1C1E] to-[#0E0F11] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#FFC80B]/10 shadow-2xl"
      >
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#FFC80B]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-[#FFC80B]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Block */}
          <motion.div variants={textVariants} className="max-w-2xl">
            {/* Play Button Icon & Pill Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FFC80B] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(255,200,11,0.4)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <span className="text-[#FFC80B] text-sm font-bold uppercase tracking-wider block">
                  A Culture Built for
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Creative Thinkers & Future Leaders
                </h3>
              </div>
            </div>

            <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
              We believe extraordinary answers emerge when passionate people are empowered to move forward. We foster an environment that encourages creativity, complete ownership, and continuous lifelong learning.
            </p>
          </motion.div>

          {/* Right Icon Visual Block */}
          <motion.div variants={iconsVariants} className="relative flex items-center justify-center w-full max-w-[350px] aspect-square">
            {/* Orbit Lines */}
            <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-[#FFC80B]/15 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-[#FFC80B]/20 animate-[spin_30s_linear_infinite_reverse]" />
            
            {/* Central Team Silhouette */}
            <div className="absolute w-24 h-24 rounded-full bg-[#FFC80B]/10 border border-[#FFC80B]/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,200,11,0.1)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFC80B" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            {/* Orbiting Icons */}
            {/* Lightbulb (Creativity) */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1A1C1E] border border-[#FFC80B]/30 flex items-center justify-center text-[#FFC80B] shadow-md hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <line x1="9" y1="18" x2="15" y2="18" />
                <line x1="10" y1="22" x2="14" y2="22" />
              </svg>
            </div>

            {/* Rocket (Growth) */}
            <div className="absolute right-4 top-1/4 w-10 h-10 rounded-full bg-[#1A1C1E] border border-[#FFC80B]/30 flex items-center justify-center text-[#FFC80B] shadow-md hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                <path d="M12 2C7.5 2 4 7.5 4 13.5v3h16v-3C20 7.5 16.5 2 12 2Z" />
              </svg>
            </div>

            {/* Trophy (Success) */}
            <div className="absolute right-4 bottom-1/4 w-10 h-10 rounded-full bg-[#1A1C1E] border border-[#FFC80B]/30 flex items-center justify-center text-[#FFC80B] shadow-md hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Z" />
              </svg>
            </div>

            {/* Heart (Care/Community) */}
            <div className="absolute left-4 bottom-1/4 w-10 h-10 rounded-full bg-[#1A1C1E] border border-[#FFC80B]/30 flex items-center justify-center text-[#FFC80B] shadow-md hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
