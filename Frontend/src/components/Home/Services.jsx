import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import icons from assets folder
import MobileIcon from '../../assets/service1.png';
import WebIcon from '../../assets/service2.png';
import UxIcon from '../../assets/service3.png';
import GameIcon from '../../assets/service4.png';
import AiIcon from '../../assets/service5.png';
import CloudIcon from '../../assets/service6.png';

export default function Services() {
  const navigate = useNavigate();
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

  const services = [
    {
      id: "01",
      slug: "mobile-development",
      title: "Mobile Development",
      description: "Native & cross-platform mobile apps that deliver exceptional user experiences.",
      icon: MobileIcon,
      alt: "Mobile Development Icon"
    },
    {
      id: "02",
      slug: "web-development",
      title: "Web Development",
      description: "Scalable, secure and high-performance web solutions for modern businesses.",
      icon: WebIcon,
      alt: "Web Development Icon"
    },
    {
      id: "03",
      slug: "ui-ux-design",
      title: "UX / UI Design",
      description: "Human-centered design that creates beautiful, intuitive and impactful interfaces.",
      icon: UxIcon,
      alt: "UX/UI Design Icon"
    },
    {
      id: "04",
      slug: "game-development",
      title: "Game Development",
      description: "Engaging games built with cutting-edge technologies for all platforms.",
      icon: GameIcon,
      alt: "Game Development Icon"
    },
    {
      id: "05",
      slug: "ai-development",
      title: "AI Development",
      description: "Intelligent AI solutions that automate, predict and unlock new opportunities.",
      icon: AiIcon,
      alt: "AI Development Icon"
    },
    {
      id: "06",
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Secure, scalable and cost-effective cloud infrastructure and migration services.",
      icon: CloudIcon,
      alt: "Cloud Solutions Icon"
    },
  ];

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  const handleViewAll = () => {
    navigate("/services");
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const rowVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: 40,
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.3,
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

  // Group services into rows of 3
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <section ref={sectionRef} className="py-8 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-[35px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-[18px] font-bold tracking-[1.4px] uppercase text-black">
              Our Services
            </span>
            <div className="w-[42px] h-[3px] bg-[#FFC80B]"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-[35px] font-bold leading-[48px] text-black">
            Smart <span className="text-[#FFC80B]">Solutions</span> For Your Business
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={rowVariants}
              initial="hidden"
              animate={controls}
              custom={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {row.map((service) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  onClick={() => handleServiceClick(service.slug)}
                  className="group bg-white border border-[#CFC8C8] rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {/* Header with Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon Box */}
                    <div className="w-12 h-12 bg-[#222222] rounded-xl flex items-center justify-center">
                      <img
                        src={service.icon}
                        alt={service.alt}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    {/* Number */}
                    <span className="text-[20px] font-bold text-[#374151]">
                      {service.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-[20px] font-bold text-black leading-[28px] group-hover:text-[#FFC80B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[14px] font-normal text-[#6B7280] leading-[23px]">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="pt-2">
                      <span
                        className="inline-flex items-center gap-2 text-[14px] font-bold text-[#FFC80B] hover:text-[#e6b40a] transition-colors group/link cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.slug);
                        }}
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="#FFC80B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* View All Services Button with Montserrat font */}
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
            View All Services
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