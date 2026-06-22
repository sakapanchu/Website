import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Import project images from assets
import TransportProjectImg from '../../assets/nprpta.png';
import BattiAdsProjectImg from '../../assets/battiAd.png';
import LearnAppProjectImg from '../../assets/learnApp.png';

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [cardStates, setCardStates] = useState({});

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      setCardStates({});
    }
  }, [isInView, controls]);

  // Individual card visibility observer
  useEffect(() => {
    const observers = [];
    
    projects.forEach((_, index) => {
      const cardElement = document.getElementById(`card-${index}`);
      if (cardElement) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setCardStates(prev => ({
                  ...prev,
                  [index]: { 
                    card: true,
                    content: false,
                    image: false 
                  }
                }));
                
                setTimeout(() => {
                  setCardStates(prev => ({
                    ...prev,
                    [index]: { 
                      ...prev[index],
                      content: true 
                    }
                  }));
                }, 400);
                
                setTimeout(() => {
                  setCardStates(prev => ({
                    ...prev,
                    [index]: { 
                      ...prev[index],
                      image: true 
                    }
                  }));
                }, 800);
              }
            });
          },
          { threshold: 0.2 }
        );
        
        observer.observe(cardElement);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        stiffness: 70,
        damping: 20
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.85, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        stiffness: 60,
        damping: 15
      },
    },
  };

  const filterTabs = [
    { label: "All Projects", id: "All Projects" },
    { label: "Web Development", id: "Web Development" },
    { label: "Mobile Development", id: "Mobile Development" },
    { label: "UI/UX Design", id: "UI/UX Design" },
    { label: "Enterprise Solutions", id: "Enterprise Solutions" },
    { label: "Cloud Solutions", id: "Cloud Solutions" },
  ];

  const projects = [
    {
      id: 1,
      title: "Northern Province Transport Authority",
      description: "A responsive marketplace with smart filtering, user management, and ad monetization.",
      tag: "WEB APP",
      tagColor: "#DC2626",
      tagBg: "#DC2626",
      buttonText: "View Case Study",
      buttonColor: "#DC2626",
      borderColor: "#5A0F28",
      bgGradient: "linear-gradient(111.53deg, #F6E2E0 6.33%, #FFFFFF 20.96%, #FFFFFF 35.6%, #FFFFFF 49.13%)",
      image: TransportProjectImg,
      imagePosition: "right",
      coverStyle: "rounded-[20px_70px_20px_20px]",
      cardStyle: "rounded-[10px_70px]",
      lineColor: "#DC2626",
      innerBorderColor: "#5A0F28",
      // Right top corner has the curve, so border should be on the right side
      borderPosition: "right",
    },
    {
      id: 2,
      title: "BattaiAds Local Classifieds & Marketplace",
      description: "A modern classifieds platform with advanced search, real-time chat, and secure payments.",
      tag: "MARKETPLACE",
      tagColor: "#FFFFFF",
      tagBg: "#FFD700",
      buttonText: "View case study →",
      buttonColor: "#000000",
      borderColor: "#FFC80B",
      bgGradient: "linear-gradient(111.53deg, #FFF8E4 6.33%, #FFF8E4 20.96%, #FFFFFF 35.6%, #FFFFFF 49.13%)",
      image: BattiAdsProjectImg,
      imagePosition: "right",
      coverStyle: "rounded-[70px_10px_20px_20px]",
      cardStyle: "rounded-[70px_10px]",
      lineColor: "#FFD700",
      innerBorderColor: "#FFC80B",
      // Left top corner has the curve, so border should be on the left side
      borderPosition: "left",
    },
    {
      id: 3,
      title: "LearnApp — Smart Classroom Platform",
      description: "An interactive learning platform with live classes, assignments, and performance tracking.",
      tag: "EDTECH",
      tagColor: "#FFFFFF",
      tagBg: "#2563EB",
      buttonText: "View Case Study →",
      buttonColor: "#1D4ED8",
      borderColor: "#061E8A",
      bgGradient: "linear-gradient(111.53deg, #A5B4F8 6.33%, #FFFFFF 20.96%, #FFFFFF 35.6%, #FFFFFF 49.13%)",
      image: LearnAppProjectImg,
      imagePosition: "left",
      coverStyle: "rounded-[20px_70px_20px_20px]",
      cardStyle: "rounded-[10px_70px]",
      lineColor: "#2563EB",
      innerBorderColor: "#061E8A",
      // Right top corner has the curve, so border should be on the right side
      borderPosition: "right",
    },
  ];

  // Arrow icon component
  const ArrowIcon = ({ color = "#000000" }) => (
    <svg className="w-3 h-3" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 3.168H10.592C10.208 3.632 9.6 4.832 9.6 5.12C9.6 5.264 9.728 5.376 9.888 5.376C10.016 5.376 10.064 5.328 10.304 5.056C10.944 4.304 11.648 3.76 12.816 3.104C13.136 2.928 13.248 2.832 13.248 2.72C13.248 2.592 13.184 2.512 13.056 2.432C11.44 1.488 11.008 1.136 10.192 0.176C10.064 0.032 10 0 9.888 0C9.728 0 9.6 0.112 9.6 0.256C9.6 0.352 9.792 0.88 9.92 1.136C10.096 1.504 10.288 1.792 10.592 2.208H0V3.168Z" fill={color}/>
    </svg>
  );

  // Dot pattern component - 2 rows of 6 columns
  const DotPattern = ({ color = "#DC2626" }) => (
    <div className="grid grid-cols-6 gap-1.5 w-24 opacity-30">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} id="projects-section" className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1440px] mx-auto"
      >
        {/* Filter Tabs */}
        <motion.div 
          variants={cardVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 lg:mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.label)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === tab.label
                  ? 'bg-[#FFB800]/20 border border-[#FFC80B] shadow-[5px_5px_9px_rgba(255,200,11,0.2)] text-black'
                  : 'bg-white/5 border border-white/10 text-[#060606] hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => {
            const state = cardStates[index] || { card: false, content: false, image: false };
            
            // Determine border position based on cover style
            const getBorderStyle = () => {
              if (project.borderPosition === 'right') {
                return { borderRight: `2px solid ${project.innerBorderColor}` };
              } else {
                return { borderLeft: `2px solid ${project.innerBorderColor}` };
              }
            };

            // Determine color line position
            const getLinePosition = () => {
              if (project.borderPosition === 'right') {
                return { right: '0', left: 'auto' };
              } else {
                return { left: '0', right: 'auto' };
              }
            };

            return (
              <motion.div
                key={project.id}
                id={`card-${index}`}
                variants={cardVariants}
                initial="hidden"
                animate={state.card ? "visible" : "hidden"}
                className={`relative overflow-hidden border ${project.cardStyle}`}
                style={{ 
                  borderColor: project.borderColor,
                  background: project.bgGradient,
                }}
              >
                <div className="flex flex-col lg:flex-row items-stretch">
                  {/* Content - Left Side */}
                  <motion.div 
                    variants={contentVariants}
                    initial="hidden"
                    animate={state.content ? "visible" : "hidden"}
                    className={`w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 ${
                      project.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative max-w-[600px]">
                     
                      
                      <div 
                        className={`bg-white shadow-[0_4px_4px_rgba(156,163,175,0.25)] ${project.coverStyle} p-6 sm:p-8 lg:p-10 ${
                          project.borderPosition === 'right' ? 'mr-4' : 'ml-4'
                        }`}
                        style={getBorderStyle()}
                      >
                        {/* Tag */}
                        <div 
                          className="inline-block px-3 py-1 rounded-md text-white text-[10px] font-bold tracking-[1px] uppercase mb-4"
                          style={{ backgroundColor: project.tagBg }}
                        >
                          {project.tag}
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#111827] leading-8 sm:leading-10 lg:leading-[45px] mb-3">
                          {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm sm:text-base lg:text-[18px] font-normal text-[#6B7280] leading-6 sm:leading-7 lg:leading-[29px] mb-6">
                          {project.description}
                        </p>

                        {/* Button */}
                        <button 
                          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border transition-all duration-300 hover:scale-105 group"
                          style={{ borderColor: project.buttonColor === "#000000" ? "#FFB800" : project.buttonColor }}
                        >
                          <span 
                            className="text-sm sm:text-base font-semibold"
                            style={{ color: project.buttonColor }}
                          >
                            {project.buttonText}
                          </span>
                          {project.buttonColor === "#000000" ? (
                            <ArrowIcon color="#000000" />
                          ) : (
                            <ArrowIcon color={project.buttonColor} />
                          )}
                        </button>

                        {/* Dot Pattern - 2 rows of 6 columns */}
                        <div className="mt-5">
                          <DotPattern color={project.buttonColor === "#000000" ? "#FFD700" : project.buttonColor} />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image - Right Side */}
                  <motion.div 
                    variants={imageVariants}
                    initial="hidden"
                    animate={state.image ? "visible" : "hidden"}
                    className={`w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 ${
                      project.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full max-w-[624px] h-auto object-contain rounded-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}