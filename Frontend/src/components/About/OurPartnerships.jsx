import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import images from assets
import ScoutingImage from '../../assets/scouting-association.png';
import GovernmentImage from '../../assets/government-sri-lanka.png';
import DavidPierisImage from '../../assets/david-pieris-group.png';
import WPRPTAImage from '../../assets/wprpta-sri-lanka.png';
import PROSENSEImage from '../../assets/prosense.png';
import AlbertaHealthServicesImage from '../../assets/AHS.jpg';
import RealtorImage from '../../assets/realtor.jpg';

export default function OurPartnerships() {
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
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

  const partnerships = [
    {
      id: 1,
      name: "Scouting Association",
      image: ScoutingImage,
      imageWidth: "w-10 h-10",
    },
    {
      id: 2,
      name: "Government of Sri Lanka",
      image: GovernmentImage,
      imageWidth: "w-10 h-10",
    },
    {
      id: 3,
      name: "David Pieris Group",
      image: DavidPierisImage,
      imageWidth: "w-16 h-10",
    },
    {
      id: 4,
      name: "W.P.R.P.T.A Sri Lanka",
      image: WPRPTAImage,
      imageWidth: "w-10 h-10",
    },
    {
      id: 5,
      name: "Prosense Reality Brokerage",
      image: PROSENSEImage,
      imageWidth: "w-10 h-10",
    },
    {
      id: 6,
      name: "Alberta Health Services",
      image: AlbertaHealthServicesImage,
      imageWidth: "w-10 h-10",
    },
    {
      id: 7,
      name: "Realtor.ca",
      image: RealtorImage,
      imageWidth: "w-10 h-10",
    },
  ];

  return (
    <section ref={sectionRef} className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div className="bg-white rounded-[30px] py-12 px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#000000] leading-10 font-inter mb-2">
              Our Partnerships
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] font-normal text-[#A1A1AA] leading-6">
              Proud to collaborate with forward-thinking organizations.
            </p>
          </div>

          {/* Partnerships Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {partnerships.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                className="bg-[#FFC80B]/10 border border-[#FFC80B] rounded-[50px] px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 hover:bg-[#FFC80B]/20 transition-all duration-300 min-h-[80px] sm:min-h-[96px]"
              >
                {/* Logo - Left side */}
                <div className={`${partner.imageWidth} flex-shrink-0 flex items-center justify-center`}>
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Partner Name - Right side */}
                <h3 className="text-sm whitespace-nowrap sm:text-base lg:text-[18px] font-bold text-[#000000] leading-5 sm:leading-6 lg:leading-[28px] opacity-70 text-left flex-1">
                  {partner.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}