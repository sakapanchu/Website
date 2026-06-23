import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ServiceTransformation({ service }) {
  const navigate = useNavigate();

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    })
  };

  return (
    <section className="bg-white rounded-3xl max-w-[1430px] mx-auto py-12 px-3 sm:px-6 my-8">
      <div className="max-w-[1430px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#1A1A1A] mb-4"
        >
          Transform Your  <span className="text-[#FFC80B]">Digital Presence</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#4B5563] max-w-2xl mx-auto mb-8"
        >
          We specialize in creating powerful, scalable web solutions that drive business growth. Our expert team combines technical excellence with creative design to deliver exceptional results.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {service.featuresList.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="text-[#FACC15] text-xl">✦</span>
              <span className="text-[#1A1A1A] font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-[#FACC15] text-black font-bold rounded-full hover:bg-[#e6b40a] transition-colors shadow-lg shadow-[#FACC15]/20"
          >
            Request a Quote →
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 border border-[#FBBF24] text-black font-bold rounded-full hover:bg-gray-50 transition-colors"
          >
            Talk to an Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}