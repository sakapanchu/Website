import { motion } from 'framer-motion';

export default function ServiceTechStack({ service }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white max-w-[1430px] mx-auto rounded-3xl py-12 px-8 my-8">
      <div className="max-w-[1430px] mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#1A1A1A] mb-8"
        >
          Technologies we used
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-4"
        >
          {service.techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-3 px-8 py-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-9 h-9 object-contain"
              />
              <span className="font-semibold text-[#111827] text-lg">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}