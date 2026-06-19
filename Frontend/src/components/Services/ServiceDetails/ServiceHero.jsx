import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ServiceHero({ service }) {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section 
      className="relative mt-34 bg-cover bg-center min-h-[779px] flex items-center w-full max-w-[1430px] mx-auto overflow-hidden rounded-[20px_20px_60px_60px] md:rounded-[20px_20px_90px_90px]"
      style={{ backgroundImage: `url(${service.heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10  mx-auto px-16 py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block border border-[#FBBF24]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#FBBF24] text-sm font-bold uppercase tracking-wide">{service.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[50px] font-bold text-white leading-[1.2] lg:leading-[70px] mb-4">
            {service.title} <span className="text-[#FFC80B]">Services</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
            {service.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 px-8 py-3 bg-[#FFC80B]/20 border border-[#FFC80B] text-white font-bold rounded-full hover:bg-[#FFC80B]/30 transition-colors"
            >
              {service.buttonText} →
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-colors"
            >
              {service.buttonSecondaryText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}