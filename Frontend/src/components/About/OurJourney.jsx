import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import images from assets
import ThalirImage from '../../assets/thalir.png';
import EORunnerImage from '../../assets/eo-runner-up.png';
import TransportImage from '../../assets/transport-authority.png';
import DevelopmentImage from '../../assets/development-team.png';
import ProductLaunchImage from '../../assets/product-launch-meetup.png';
import AIProjectImage from '../../assets/ai-project-meetup.png';

export default function OurJourney() {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  const journeyData = [
    {
      id: 1,
      number: "01",
      title: "Thalir Startup Award",
      image: ThalirImage,
      details: [
        "Seed Funding Award Ceremony",
        "THALIR",
        "David Pieris",
        "STARTUP INDIA CHAMPION",
        "Rs. 500,000/-"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "EO-Runner Up",
      image: EORunnerImage,
      details: [
        "GSEA Finalists",
        "Saruja",
        "Theivayokanathan",
        "University - University of California",
        "CUB SPONSORS",
        "dp partnership"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Transport Authority - NP",
      image: TransportImage,
      details: [
        "Transport Authority - NP"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Development Team",
      image: DevelopmentImage,
      details: [
        "Development Team"
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Product Launch Meetup",
      image: ProductLaunchImage,
      details: [
        "Product Launch Meetup"
      ]
    },
    {
      id: 6,
      number: "06",
      title: "AI Project - Meetup",
      image: AIProjectImage,
      details: [
        "AI Project - Meetup"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-10 px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div className="bg-white rounded-[30px] py-12 px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#000000] leading-10 font-inter">
              Our Journey
            </h2>
          </div>

          {/* Cards Grid Container */}
          <div className="bg-white rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {journeyData.map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="relative rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] bg-white"
                >
                 
                  <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Bottom Overlay with Number and Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                      {/* Number Badge */}
                      <div className="bg-[#FFCC00] rounded px-2 py-1 flex-shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-black leading-5">
                          {item.number}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] leading-5 sm:leading-6 truncate">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}