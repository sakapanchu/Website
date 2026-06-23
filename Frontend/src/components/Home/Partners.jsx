import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import client logos
import ClientLogo1 from '../../assets/client1.jpeg';
import ClientLogo2 from '../../assets/saaral.png';
import ClientLogo3 from '../../assets/amusic.png';
import ClientLogo4 from '../../assets/battiAdd.png';
import ClientLogo5 from '../../assets/EstherSoup.jpg';
import ClientLogo6 from '../../assets/Feraix.png';
import ClientLogo7 from '../../assets/KSRender.png';
import ClientLogo8 from '../../assets/Lean.jpeg';
import ClientLogo9 from '../../assets/Mosque.png';
import ClientLogo10 from '../../assets/NPRPTAAPP.jpg';
import ClientLogo11 from '../../assets/obTaste.png';
import ClientLogo12 from '../../assets/pulamaiVithtakan.png';
import ClientLogo13 from '../../assets/roshanConsulting.png';
import ClientLogo14 from '../../assets/SPC.png';
import ClientLogo15 from '../../assets/t2jl.png';
import ClientLogo16 from '../../assets/TorontoWalPrinting.jpeg';
import ClientLogo17 from '../../assets/ViwahaMatrimony.png';

// Import partners logos
import PatnerLogo1 from '../../assets/PayHere-Logo.png';
import PatnerLogo2 from '../../assets/service2.png';
import PatnerLogo3 from '../../assets/service3.png';
import PatnerLogo4 from '../../assets/service3.png';
import PatnerLogo5 from '../../assets/service3.png';
import PatnerLogo6 from '../../assets/service3.png';
import PatnerLogo7 from '../../assets/service3.png';
import PatnerLogo8 from '../../assets/service3.png';

export default function Partners() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const clientScrollRef = useRef(null);
  const partnerScrollRef = useRef(null);
  const [isClientHovering, setIsClientHovering] = useState(false);
  const [isPartnerHovering, setIsPartnerHovering] = useState(false);
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
    { id: 9, src: ClientLogo9, alt: "Client 9" },
    { id: 10, src: ClientLogo10, alt: "Client 10" },
    { id: 11, src: ClientLogo11, alt: "Client 11" },
    { id: 12, src: ClientLogo12, alt: "Client 12" },
    { id: 13, src: ClientLogo13, alt: "Client 13" },
    { id: 14, src: ClientLogo14, alt: "Client 14" },
    { id: 15, src: ClientLogo15, alt: "Client 15" },
    { id: 16, src: ClientLogo16, alt: "Client 16" },
    { id: 17, src: ClientLogo17, alt: "Client 17" },
  ];

  const PartnersLogos = [
    { id: 1, src: PatnerLogo1, alt: "Partner 1" },
    { id: 2, src: PatnerLogo2, alt: "Partner 2" },
    { id: 3, src: PatnerLogo3, alt: "Partner 3" },
    { id: 4, src: PatnerLogo4, alt: "Partner 4" },
    { id: 5, src: PatnerLogo5, alt: "Partner 5" },
    { id: 6, src: PatnerLogo6, alt: "Partner 6" },
    { id: 7, src: PatnerLogo7, alt: "Partner 7" },
    { id: 8, src: PatnerLogo8, alt: "Partner 8" },
  ];

  // Duplicate logos for seamless scrolling (3x for smooth loop)
  const scrollingLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  const scrollingLogosPartners = [...PartnersLogos, ...PartnersLogos, ...PartnersLogos];

  // Auto-scroll for Client Logos
  useEffect(() => {
    const container = clientScrollRef.current;
    if (!container) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 0.8;

    const scroll = () => {
      if (!container) {
        animationId = requestAnimationFrame(scroll);
        return;
      }

      if (!isClientHovering) {
        scrollPosition += speed;

        // Calculate the total width of one set of logos
        const totalWidth = container.scrollWidth / 3;

        if (scrollPosition >= totalWidth) {
          // Reset position smoothly
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosition;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isClientHovering]);

  // Auto-scroll for Partner Logos
  useEffect(() => {
    const container = partnerScrollRef.current;
    if (!container) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 0.7;

    const scroll = () => {
      if (!container) {
        animationId = requestAnimationFrame(scroll);
        return;
      }

      if (!isPartnerHovering) {
        scrollPosition += speed;

        // Calculate the total width of one set of logos
        const totalWidth = container.scrollWidth / 3;

        if (scrollPosition >= totalWidth) {
          // Reset position smoothly
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosition;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPartnerHovering]);

  const handleLogoHover = (logoId, type) => {
    setHoveredLogo(logoId);
    if (type === 'client') {
      setIsClientHovering(true);
    } else {
      setIsPartnerHovering(true);
    }
  };

  const handleLogoLeave = (type) => {
    setHoveredLogo(null);
    if (type === 'client') {
      setIsClientHovering(false);
    } else {
      setIsPartnerHovering(false);
    }
  };

  const handleOurCapabilities = () => {
    navigate('/capabilities');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  // Animation variants
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
        delay: 0.6,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-8 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Client Logos Row */}
        <motion.div
          variants={logosVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-white rounded-[20px] min-h-[150px] py-8 px-0 mb-10 shadow-sm overflow-hidden"
        >
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={clientScrollRef}
            className="flex items-center gap-12 md:gap-16 lg:gap-20 min-h-[120px] overflow-x-hidden scroll-smooth px-3 sm:px-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {scrollingLogos.map((logo, index) => (
              <div
                key={`client-${logo.id}-${index}`}
                className={`flex-shrink-0 transition-all duration-300 cursor-pointer ${hoveredLogo === logo.id
                    ? 'scale-110 opacity-100'
                    : 'opacity-90 hover:opacity-100'
                  }`}
                onMouseEnter={() => handleLogoHover(logo.id, 'client')}
                onMouseLeave={() => handleLogoLeave('client')}
                style={{
                  transform: hoveredLogo === logo.id ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-16 lg:h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Banner */}
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
              <div className="flex items-center gap-8 px-3 sm:px-6 py-8 bg-[#F9FAFB] border border-black/5 rounded-2xl" style={{
                boxShadow: "0px 4px 20px #9CA3AF",
              }}>
                <div className="text-[24px] font-bold tracking-[-1.2px] text-red-600">
                  ORACLE
                </div>
                <div className="w-px h-12 bg-[#D1D5DB]"></div>
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
              <div className="text-[14px] font-bold text-[#FFC80B]">
                Oracle Gold Partner
              </div>
              <h2 className="text-[35px] font-bold text-black leading-[40px] mt-1">
                Leading Oracle Solutions Provider in Sri Lanka
              </h2>
              <p className="text-[16px] font-normal text-[#6B7280] leading-6 mt-4">
                Delivering best-in-class Oracle solutions and services that empower businesses to innovate, transform and grow.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={handleOurCapabilities}
                  className="px-3 sm:px-6 py-[13px] bg-[#FFC80B] text-black font-bold text-[14px] rounded-full hover:bg-[#e6b40a] transition-all duration-300"
                  style={{
                    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Our Capabilities →
                </button>
                <button
                  onClick={handleLearnMore}
                  className="px-3 sm:px-6 py-3 border border-black/10 text-black font-bold text-[14px] rounded-full hover:bg-gray-50 transition-all duration-300"
                >
                  Learn more →
                </button>
              </div>
            </div>

            {/* Award Badge */}
            <div className="flex-shrink-0">
              <div className="bg-white border border-black/5 rounded-2xl px-3 sm:px-6 py-8 text-center" style={{
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

        {/* Partners Logos Row */}
        <motion.div
          variants={logosVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-white rounded-[20px] min-h-[150px] py-8 px-0 mt-10 shadow-sm overflow-hidden"
        >
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={partnerScrollRef}
            className="flex items-center gap-12 md:gap-16 lg:gap-20 min-h-[100px] overflow-x-hidden scroll-smooth px-3 sm:px-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {scrollingLogosPartners.map((logo, index) => (
              <div
                key={`partner-${logo.id}-${index}`}
                className={`flex-shrink-0 transition-all duration-300 cursor-pointer ${hoveredLogo === logo.id
                    ? 'scale-110 opacity-100'
                    : 'opacity-80 hover:opacity-100'
                  }`}
                onMouseEnter={() => handleLogoHover(logo.id, 'partner')}
                onMouseLeave={() => handleLogoLeave('partner')}
                style={{
                  transform: hoveredLogo === logo.id ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-16 lg:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}