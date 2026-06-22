import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import images from assets
import AnniversaryImage from '../../assets/anniversary.png';
import TechMeetupImage from '../../assets/tech-meetup.png';
import TeamEventsImage from '../../assets/team-events.png';

// Import icons from assets
import AnniversaryIcon from '../../assets/anniversaryIcon.png';
import TechMeetupIcon from '../../assets/tech-meetup-icon.png';
import TeamEventsIcon from '../../assets/team-events-icon.png';

export default function OurJourneySection() {
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

  const journeyItems = [
    {
      id: 1,
      title: "Anniversary",
      description: "Celebrating milestones and the people who make our journey possible.",
      image: AnniversaryImage,
      icon: AnniversaryIcon
    },
    {
      id: 2,
      title: "Tech Meetup",
      description: "Engaging with the tech community to share ideas and insights.",
      image: TechMeetupImage,
      icon: TechMeetupIcon
    },
    {
      id: 3,
      title: "Team Events",
      description: "Building stronger bonds and creating memorable experiences together.",
      image: TeamEventsImage,
      icon: TeamEventsIcon
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

          {/* Journey Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {journeyItems.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay - with hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60"></div>
                  
                  {/* Yellow Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#FFC80B]/0 transition-all duration-500 group-hover:bg-[#FFC80B]/10"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#FBBF24]/20 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-[#FBBF24]/40 group-hover:scale-110">
                        <img 
                          src={item.icon} 
                          alt={`${item.title} icon`}
                          className="w-6 h-6 object-contain transition-transform duration-300 group-hover:rotate-12"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-[16px] font-bold text-white transition-colors duration-300 group-hover:text-[#FFC80B]">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-[14px] font-normal text-white/90 leading-4 sm:leading-5 lg:leading-4 max-w-[378px] transition-all duration-300 group-hover:text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}