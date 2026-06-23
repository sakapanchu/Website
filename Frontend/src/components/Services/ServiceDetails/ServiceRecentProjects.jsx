import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ServiceRecentProjects({ service }) {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#FACC15] rounded-full"></span>
            <span className="text-lg font-bold tracking-[1.2px] uppercase text-black">Recent Projects</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black">Our Latest Work</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {service.recentProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-[#A1A1AA] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
            >
              {/* Image - Left Side */}
              <div className="md:w-[40%] h-[200px] md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content - Right Side */}
              <div className="md:w-[60%] p-4 md:p-6 flex flex-col justify-center">
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-1">{project.title}</h4>
                <p className="text-xs font-bold text-[#FACC15] uppercase tracking-wide mb-2">{project.category}</p>
                <p className="text-sm text-[#6B7280] mb-3 leading-relaxed line-clamp-3">{project.description}</p>
                <button
                  onClick={() => navigate(`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`)}
                  className="font-bold text-sm text-black hover:text-[#FACC15] transition-colors flex items-center gap-2 self-start"
                >
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}