import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ServiceCTA({ service }) {
  const navigate = useNavigate();

  return (
    <section 
      className="relative bg-cover bg-center rounded-[30px] mx-8 my-8 overflow-hidden" 
      style={{ backgroundImage: `url(${service.ctaBg})` }}
    >
     
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut", type: "spring" }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[240px] p-12 lg:p-16 gap-8"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16  rounded-2xl flex items-center justify-center">
            
          </div>
          <div>
            <span className="text-[#FFC80B]">Ready to start your</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{service.ctaTitle}</h3>
            <p className="text-sm text-white/50">{service.ctaDescription}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-[#FACC15] text-black font-bold rounded-full hover:bg-[#e6b40a] transition-colors"
          >
            {service.ctaButtonText} →
          </button>
          <button 
            onClick={() => navigate('/projects')}
            className="px-8 py-3 bg-white/10 border border-white/40 text-white font-bold rounded-full hover:bg-white/20 transition-colors"
          >
            {service.ctaButtonSecondary}
          </button>
        </div>
      </motion.div>
    </section>
  );
}