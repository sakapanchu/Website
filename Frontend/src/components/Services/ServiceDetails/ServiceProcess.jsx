import { motion } from 'framer-motion';

export default function ServiceProcess({ service }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Different hover effects for each card
  const hoverEffects = [
    {
      // Card 1 - Scale & Rotate
      className: "hover:scale-105 hover:rotate-1 hover:bg-[#FFF8E1]",
      iconBg: "hover:bg-[#FFC80B] hover:rotate-12",
      border: "hover:border-[#FFC80B]"
    },
    {
      // Card 2 - Translate Y & Shadow
      className: "hover:-translate-y-2 hover:shadow-xl hover:bg-[#FFF3E0]",
      iconBg: "hover:bg-[#FFC80B] hover:scale-110",
      border: "hover:border-[#FFC80B]"
    },
    {
      // Card 3 - Scale & Glow
      className: "hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,200,11,0.2)] hover:bg-[#FFFDE7]",
      iconBg: "hover:bg-[#FFC80B] hover:shadow-[0_0_20px_rgba(255,200,11,0.4)]",
      border: "hover:border-[#FFC80B]"
    },
    {
      // Card 4 - Translate X & Rotate
      className: "hover:translate-x-1 hover:-rotate-1 hover:bg-[#FFF3E0]",
      iconBg: "hover:bg-[#FFC80B] hover:-rotate-12",
      border: "hover:border-[#FFC80B]"
    }
  ];

  return (
    <section className="bg-white max-w-[1430px] mx-auto rounded-3xl py-12 px-3 sm:px-6 my-8">
      <div className="max-w-[1430px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-[42px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-lg font-bold tracking-[1.4px] uppercase text-black">Our Development Process</span>
            <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">A Proven 4-Step Approach</h3>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {service.process.map((step, index) => {
            const effect = hoverEffects[index % hoverEffects.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 border border-[#FBBF24] rounded-2xl transition-all duration-500 ${effect.className} ${effect.border}`}
                whileHover={{
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 bg-[#FBBF24] rounded-xl flex items-center justify-center transition-all duration-500 ${effect.iconBg}`}>
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold text-[#FACC15] transition-all duration-500 group-hover:text-[#FFC80B]">
                    {step.step}
                  </span>
                </div>
                <h4 className="font-bold text-[#1A1A1A] text-lg mb-2 transition-colors duration-500 group-hover:text-[#FFC80B]">
                  {step.title}
                </h4>
                <p className="text-sm text-[#6B7280] leading-relaxed transition-colors duration-500 group-hover:text-[#4B5563]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}