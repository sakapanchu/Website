import { motion } from 'framer-motion';

export default function ServiceCoreFeatures({ service }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white rounded-3xl max-w-[1430px] mx-auto py-12 px-3 sm:px-6 my-8">
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
            <div className="w-[37px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-lg font-bold tracking-[1.4px] uppercase text-black">Core Features</span>
            <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Everything You Need to Succeed</h3>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 p-4 border border-[#FBBF24] rounded-[60px] hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#1A1A1A]">{feature.title}</h4>
                <p className="text-sm text-[#6B7280]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}