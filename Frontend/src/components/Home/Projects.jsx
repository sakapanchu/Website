import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Projects() {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const projects = [
    {
      id: 1,
      title: "AI Platform for Government Intelligence",
      description:
        "An AI-powered analytics platform enabling data-driven decisions and smarter governance.",
      category: "AI / GOVT",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Digital Banking Transformation",
      description: "Modern digital solutions for seamless banking experiences.",
      category: "FINTECH",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Omni-channel Retail Platform",
      description: "Unified commerce experiences across all touchpoints.",
      category: "RETAIL",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Telemedicine & Patient Portal",
      description: "Connecting patients and doctors through technology.",
      category: "HEALTHCARE",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    },
    {
      id: 5,
      title: "ERP & Workflow Automation",
      description: "Streamlined operations for better productivity at scale.",
      category: "ENTERPRISE",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
    {
      id: 6,
      title: "Smart City IoT Platform",
      description:
        "Connected infrastructure solutions for sustainable urban development and smart city management.",
      category: "IOT / SMART",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const handleViewAll = () => {
    navigate("/projects");
  };

  // Group projects into rows of 3
  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  // Animation variants - Optimized timing
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: 50,
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.3 + 0.2,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    }),
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 px-8  bg-[#F1F1F1] overflow-hidden"
    >
      <div className="max-w-[1430px] mx-auto">
        {/* Section Header with animation */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-[#FFC80B]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFC80B] mx-auto mt-2"></div>
        </motion.div>

        {/* Projects Rows with sequential animation */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => {
            const isRowHovered = row.some(
              (project) => hoveredProject === project.id,
            );
            const hoveredProjectInRow = row.find(
              (project) => hoveredProject === project.id,
            );

            return (
              <motion.div
                key={rowIndex}
                variants={rowVariants}
                initial="hidden"
                animate={controls}
                custom={rowIndex}
                className="flex gap-6"
              >
                {row.map((project) => {
                  const isHovered = hoveredProject === project.id;

                  // Calculate widths based on hover state
                  let widthClass = "flex-1";
                  let scaleClass = "";
                  let zIndexClass = "";

                  if (isHovered) {
                    widthClass = "flex-[2]";
                    scaleClass = "scale-[1.02]";
                    zIndexClass = "z-20";
                  } else if (isRowHovered && hoveredProjectInRow) {
                    widthClass = "flex-1";
                    scaleClass = "scale-[0.95]";
                    zIndexClass = "z-0";
                  }

                  return (
                    <motion.div
                      key={project.id}
                      variants={cardVariants}
                      className={`relative group cursor-pointer rounded-[32px] overflow-hidden shadow-md transition-all duration-500 ${widthClass} ${scaleClass} ${zIndexClass} h-[400px] ${
                        isHovered ? "shadow-2xl" : "hover:shadow-xl"
                      }`}
                      style={{ minHeight: "400px", maxHeight: "400px" }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      onClick={() => handleProjectClick(project.id)}
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(255, 200, 11, 0.15) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)`,
                          }}
                        ></div>
                      </div>

                      {/* Category - Top Left Corner */}
                      <div className="absolute top-5 left-6 z-10">
                        <div
                          className="inline-block px-4 border border-[#FFC80B] bg-[rgba(255,200,11,0.20)] text-white py-[3.5px] rounded-full text-[10px] font-bold tracking-[1px] uppercase"
                          style={{
                            boxShadow:
                              "0 4px 16px 0 #FBBF24, 4px 4px 25px 0 rgba(251,191,36,0.30) inset",
                          }}
                        >
                          {project.category}
                        </div>
                      </div>

                      {/* Content - Shows on hover with one-by-one animation */}
                      <div
                        className={`absolute inset-0 flex flex-col justify-end p-6 pb-6 transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="space-y-2">
                          {/* Title */}
                          <div
                            className={`transition-all duration-300 delay-100 ${
                              isHovered
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                            }`}
                          >
                            <h4 className="text-white font-bold text-[30px] leading-[28px]">
                              {project.title}
                            </h4>
                          </div>

                          {/* Description */}
                          <div
                            className={`transition-all duration-300 delay-200 ${
                              isHovered
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                            }`}
                          >
                            <p className="text-white font-extrabold text-[14px] leading-4">
                              {project.description}
                            </p>
                          </div>

                          {/* View Details Button - Only shows on hover */}
                          <div
                            className={`transition-all duration-300 delay-300 pt-2 ${
                              isHovered
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                            }`}
                          >
                            <button className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 border border-white rounded-lg text-white font-bold text-[14px] leading-5 hover:bg-white/30 transition-colors">
                              View Details
                              <svg
                                width="14"
                                height="7"
                                viewBox="0 0 14 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 3.5H10.592C10.208 3.964 9.6 5.164 9.6 5.452C9.6 5.596 9.728 5.708 9.888 5.708C10.016 5.708 10.064 5.66 10.304 5.388C10.944 4.636 11.648 4.092 12.816 3.436C13.136 3.26 13.248 3.164 13.248 3.052C13.248 2.924 13.184 2.844 13.056 2.764C11.44 1.82 11.008 1.468 10.192 0.508C10.064 0.364 10 0.332 9.888 0.332C9.728 0.332 9.6 0.444 9.6 0.588C9.6 0.684 9.792 1.212 9.92 1.468C10.096 1.836 10.288 2.124 10.592 2.54H0V3.5Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Default content - always visible when not hovered */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-6 pb-6 transition-opacity duration-500 ${
                          isHovered ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <div className="space-y-2">
                          <h4 className="text-white font-bold text-[30px] leading-[28px]">
                            {project.title}
                          </h4>
                          <p className="text-white font-extrabold text-[12px] leading-4">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Button with Montserrat font */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-12"
        >
          <button
            onClick={handleViewAll}
            className="group inline-flex items-center justify-center mx-auto gap-1.5 px-6 py-5 border border-[#FAD007] bg-[rgba(0,0,0,0.004)] text-black font-semibold rounded-full hover:bg-[#e6b40a] transition-all duration-300 font-Montserrat"
            style={{
              width: "321px",
              height: "48px",
              boxShadow: "4px 6px 20px rgba(255, 200, 11, 0.25)",
            }}
          >
            View All Projects
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
