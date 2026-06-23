import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import service images
import AICardImage from '../../assets/ai-card.png';
import WebCardImage from '../../assets/web-card.png';
import CloudCardImage from '../../assets/cloud-card.png';
import MobileCardImage from '../../assets/mobile-card.png';
import UICardImage from '../../assets/ui-card.png';
import APICardImage from '../../assets/api-card.png';

// Import background images for cards
import CardBg from '../../assets/serviceCardBg.png';

export default function ServicesCards() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  // Icon components with dynamic color through className
  const getIcon = (colorClass) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={colorClass}>
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2.66667" />
        <path d="M10 14L13 17L10 20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 14L19 17L22 20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10L14 22" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" />
      </svg>
    );
  };

  const getWebIcon = (colorClass) => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={colorClass}>
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 2L6 4L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2L18 4L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  };

  const getCloudIcon = (colorClass) => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={colorClass}>
        <path d="M17 9C17 5.13401 13.866 2 10 2C6.13401 2 3 5.13401 3 9C3 12.866 6.13401 16 10 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  const getUIIcon = (colorClass) => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={colorClass}>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 17H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    );
  };

  const getMobileIcon = (colorClass) => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={colorClass}>
        <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="4" r="1" fill="currentColor" />
      </svg>
    );
  };

  const getAPIIcon = (colorClass) => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={colorClass}>
        <path d="M8 8L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="8" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="8" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  };

  // Service data with slugs for routing
  const services = [
    {
      id: 1,
      slug: "digital-transformation",
      title: "Digital Transformation",
      description: "Connect your systems, applications, and data with secure and reliable API integrations.",
      image: APICardImage,
      bgImage: CardBg,
      icon: getAPIIcon
    },
    {
      id: 2,
      slug: "mobile-development",
      title: "Mobile Development",
      description: "Powerful mobile apps for iOS and Android that delight users and drive business growth.",
      image: MobileCardImage,
      bgImage: CardBg,
      icon: getMobileIcon
    },
    {
      id: 3,
      slug: "saas-application",
      title: "SaaS Application",
      description: "Build scalable and secure SaaS applications that drive business growth and enhance user experience.",
      image: MobileCardImage,
      bgImage: CardBg,
      icon: getMobileIcon
    },
    {
      id: 4,
      slug: "web-development",
      title: "Web Development",
      description: "High-performance websites and web applications built for speed, security, and conversions.",
      image: WebCardImage,
      bgImage: CardBg,
      icon: getWebIcon
    },
    {
      id: 5,
      slug: "ui-ux-design",
      title: "Designs and Editing",
      description: "User-centered designs that create seamless experiences and increase customer engagement.",
      image: UICardImage,
      bgImage: CardBg,
      icon: getUIIcon
    },
    {
      id: 6,
      slug: "digital-marketing",
      title: "Digital Marketing",
      description: "Secure, scalable cloud infrastructure designed for performance, reliability, and business growth.",
      image: CloudCardImage,
      bgImage: CardBg,
      icon: getCloudIcon
    },
    {
      id: 7,
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure designed for performance, reliability, and business growth.",
      image: CloudCardImage,
      bgImage: CardBg,
      icon: getCloudIcon
    },
    {
      id: 8,
      slug: "financial-risk-analysis",
      title: "Financial Risk Analysis",
      description: "Analyze financial risks and make informed decisions with our comprehensive risk assessment solutions.",
      image: APICardImage,
      bgImage: CardBg,
      icon: getAPIIcon
    },
    {
      id: 9,
      slug: "ai-and-robotic-for-business",
      title: "AI And Robotic for Business",
      description: "Create AI-powered systems that automate workflows, predict trends, and deliver smarter business decisions.",
      image: AICardImage,
      bgImage: CardBg,
      icon: getIcon
    },






  ];

  // Group services into rows of 3
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const handleCardClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section ref={sectionRef} className="py-16 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {rows.map((row, rowIndex) => {
            const isRowHovered = row.some(service => hoveredCard === service.id);
            const hoveredServiceInRow = row.find(service => hoveredCard === service.id);

            return (
              <motion.div
                key={rowIndex}
                variants={rowVariants}
                initial="hidden"
                animate={controls}
                custom={rowIndex}
                className="flex gap-6 mb-6"
              >
                {row.map((service) => {
                  const isHovered = hoveredCard === service.id;

                  let widthClass = "flex-1";
                  let scaleClass = "";
                  let zIndexClass = "";

                  if (isHovered) {
                    widthClass = "flex-[2]";
                    scaleClass = "scale-[1.02]";
                    zIndexClass = "z-20";
                  } else if (isRowHovered && hoveredServiceInRow) {
                    widthClass = "flex-1";
                    scaleClass = "scale-[0.95]";
                    zIndexClass = "z-0";
                  }

                  return (
                    <motion.div
                      key={service.id}
                      variants={cardVariants}
                      className={`relative rounded-[32px] overflow-hidden shadow-md transition-all duration-500 ${widthClass} ${scaleClass} ${zIndexClass} h-[240px] ${isHovered ? 'shadow-2xl h-[320px]' : 'hover:shadow-xl'
                        }`}
                      style={{
                        border: isHovered ? '2px solid #FFC80B' : '1px solid #D1D5DB',
                        boxShadow: isHovered ? '0px 8px 30px rgba(0, 0, 0, 0.25)' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        backgroundImage: `url(${service.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      onMouseEnter={() => setHoveredCard(service.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => handleCardClick(service.slug)}
                    >
                      {/* Default State - Title, Description, Arrow */}
                      <div className={`absolute inset-0 flex flex-col p-6 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'
                        }`}>
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Top: Icon - Yellow (#FFC80B) on dark background */}
                          <div className="w-[55px] h-[55px] bg-[#18181B] border border-white/10 rounded-xl flex items-center justify-center">
                            <div className="text-[#FFC80B]">
                              {service.icon('text-[#FFC80B]')}
                            </div>
                          </div>

                          {/* Bottom: Title, Description, Arrow */}
                          <div className="mt-auto">
                            <h3 className="text-black font-bold text-2xl leading-8 mb-1">
                              {service.title}
                            </h3>

                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                              {service.description}
                            </p>

                            <button
                              className="mt-3 text-black font-semibold text-sm hover:text-[#FFC80B] transition-colors inline-flex items-center gap-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardClick(service.slug);
                              }}
                            >
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Hover State - Image on right, content on left */}
                      <div className={`absolute inset-0 flex items-center p-6 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                        {/* Left Side - Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full w-1/2 pr-4">
                          {/* Icon - Black on yellow background */}
                          <div className="w-[55px] h-[55px] bg-[#FFC80B] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.3)] flex-shrink-0">
                            <div className="text-black">
                              {service.icon('text-black')}
                            </div>
                          </div>

                          {/* Title, Description, Arrow */}
                          <div className="mt-auto">
                            <h3 className="text-black font-bold text-2xl leading-8 mb-1">
                              {service.title}
                            </h3>

                            <p className="text-gray-700 text-sm leading-relaxed">
                              {service.description}
                            </p>

                            <button
                              className="mt-3 inline-flex items-center gap-2 text-black font-semibold text-sm hover:text-[#FFC80B] transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardClick(service.slug);
                              }}
                            >
                              Learn More →
                            </button>
                          </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="w-1/2 h-full">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}