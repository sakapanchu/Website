import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import client logos
import ClientLogo1 from '../../assets/service1.png';
import ClientLogo2 from '../../assets/service2.png';
import ClientLogo3 from '../../assets/service3.png';
import ClientLogo4 from '../../assets/service3.png';
import ClientLogo5 from '../../assets/service3.png';
import ClientLogo6 from '../../assets/service3.png';
import ClientLogo7 from '../../assets/service3.png';
import ClientLogo8 from '../../assets/service3.png';

export default function Partners() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls, hasAnimated]);

  const clientLogos = [
    { id: 1, src: ClientLogo1, alt: "Client 1" },
    { id: 2, src: ClientLogo2, alt: "Client 2" },
    { id: 3, src: ClientLogo3, alt: "Client 3" },
    { id: 4, src: ClientLogo4, alt: "Client 4" },
    { id: 5, src: ClientLogo5, alt: "Client 5" },
    { id: 6, src: ClientLogo6, alt: "Client 6" },
    { id: 7, src: ClientLogo7, alt: "Client 7" },
    { id: 8, src: ClientLogo8, alt: "Client 8" },
  ];

  // Duplicate logos for seamless scrolling
  const scrollingLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // Auto-scroll functionality - starts immediately
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 1.5;

    const scroll = () => {
      if (!container || isHovering) {
        animationId = requestAnimationFrame(scroll);
        return;
      }
      
      scrollPosition += speed;
      
      if (scrollPosition >= container.scrollWidth / 3) {
        scrollPosition = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollPosition;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovering]);

  const handleLogoHover = (logoId) => {
    setHoveredLogo(logoId);
    setIsHovering(true);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
    setIsHovering(false);
  };

  const handleOurCapabilities = () => {
    navigate('/capabilities');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  // Client logos - slide from right to left
  const logosVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // Partnership banner - slide from left to right
  const bannerVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.6, // Delayed until after logos appear
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 px-8 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Client Logos Row - Slides from right to left */}
        <motion.div
          variants={logosVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-white rounded-[20px] py-8 px-0 mb-8 shadow-sm overflow-hidden"
        >
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-12 md:gap-16 lg:gap-20 overflow-x-hidden scroll-smooth px-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {scrollingLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className={`flex-shrink-0 transition-all duration-300 cursor-pointer ${
                  hoveredLogo === logo.id 
                    ? 'scale-110 opacity-100' 
                    : 'opacity-80 hover:opacity-100'
                }`}
                onMouseEnter={() => handleLogoHover(logo.id)}
                onMouseLeave={handleLogoLeave}
                style={{
                  transform: hoveredLogo === logo.id ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Banner - Slides from left to right */}
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-white rounded-[20px] px-[30px] py-20 shadow-md overflow-hidden"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Dot Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(70.71% 70.71% at 50% 50%, #000000 3.54%, rgba(0, 0, 0, 0) 3.54%)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Oracle Gold Partner Badge */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-8 px-8 py-8 bg-[#F9FAFB] border border-black/5 rounded-2xl" style={{
                boxShadow: "0px 4px 20px #9CA3AF",
              }}>
                {/* ORACLE Text */}
                <div className="text-[24px] font-bold tracking-[-1.2px] text-red-600">
                  ORACLE
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-12 bg-[#D1D5DB]"></div>

                {/* Gold Partner */}
                <div>
                  <div className="text-[18px] font-bold tracking-[1.8px] uppercase text-black">
                    GOLD
                  </div>
                  <div className="text-[12px] font-normal text-[#9CA3AF]">
                    Partner
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-[576px]">
              {/* Oracle Gold Partner Label */}
              <div className="text-[14px] font-bold text-[#FFC80B]">
                Oracle Gold Partner
              </div>

              {/* Heading */}
              <h2 className="text-[35px] font-bold text-black leading-[40px] mt-1">
                Leading Oracle Solutions Provider in Sri Lanka
              </h2>

              {/* Description */}
              <p className="text-[16px] font-normal text-[#6B7280] leading-6 mt-4">
                Delivering best-in-class Oracle solutions and services that empower businesses to innovate, transform and grow.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={handleOurCapabilities}
                  className="px-8 py-[13px] bg-[#FFC80B] text-black font-bold text-[14px] rounded-full hover:bg-[#e6b40a] transition-all duration-300"
                  style={{
                    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Our Capabilities →
                </button>
                <button
                  onClick={handleLearnMore}
                  className="px-8 py-3 border border-black/10 text-black font-bold text-[14px] rounded-full hover:bg-gray-50 transition-all duration-300"
                >
                  Learn more →
                </button>
              </div>
            </div>

            {/* Award Badge */}
            <div className="flex-shrink-0">
              <div className="bg-white border border-black/5 rounded-2xl px-8 py-8 text-center" style={{
                boxShadow: "0px 4px 20px #9CA3AF",
              }}>
                <div className="text-[36px] font-bold text-black">
                  2025
                </div>
                <div className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#9CA3AF] mt-1">
                  Innovation Excellence Award
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}