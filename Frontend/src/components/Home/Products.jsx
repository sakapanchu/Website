import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import product images from assets
import HospitalImage from '../../assets/HospitalManagement.png';
import HospitalImage2 from '../../assets/HospitalManagement2.png';

export default function Products() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const products = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A comprehensive platform to streamline hospital operations and enhance patient care.",
      // Left side content (different from right side)
      leftTitle: "Hospital Management System",
      leftDescription: "Streamline hospital operations, enhance patient care, and improve administrative efficiency with our comprehensive healthcare platform.",
      image: HospitalImage,
      category: "Healthcare",
      stats: [
        { value: "10+", label: "HOSPITALS" },
        { value: "95%", label: "SATISFACTION" },
        { value: "24/7", label: "SUPPORT" }
      ],
      subtitle: "Healthcare Innovation",
      // Right side content (different from left side)
      rightTitle: "Healthcare Management Platform",
      rightDescription: "A comprehensive platform to streamline hospital operations and enhance patient care.",
      color: "#FFC80B"
    },
    {
      id: 2,
      title: "AI Platform for Government Intelligence",
      description: "An AI-powered analytics platform enabling data-driven decisions and smarter governance.",
      leftTitle: "AI-Powered Government Intelligence",
      leftDescription: "Empower government agencies with AI-driven insights, predictive analytics, and real-time intelligence for better decision-making and governance.",
      image: HospitalImage2,
      category: "AI / GOVT",
      stats: [
        { value: "15+", label: "AGENCIES" },
        { value: "98%", label: "ACCURACY" },
        { value: "24/7", label: "OPERATIONAL" }
      ],
      subtitle: "Government Intelligence",
      rightTitle: "AI Platform for Government Intelligence",
      rightDescription: "An AI-powered analytics platform enabling data-driven decisions and smarter governance.",
      color: "#FFC80B"
    },
    {
      id: 3,
      title: "Digital Banking Transformation",
      description: "Modern digital solutions for seamless banking experiences.",
      leftTitle: "Digital Banking Transformation",
      leftDescription: "Transform your banking operations with modern digital solutions, seamless customer experiences, and innovative financial technology.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      category: "FinTech",
      stats: [
        { value: "50+", label: "BANKS" },
        { value: "99.9%", label: "UPTIME" },
        { value: "1M+", label: "USERS" }
      ],
      subtitle: "Financial Technology",
      rightTitle: "Digital Banking Transformation",
      rightDescription: "Modern digital solutions for seamless banking experiences.",
      color: "#FFC80B"
    }
  ];

  const currentProduct = products[currentSlide];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, products.length]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    resetAutoPlayTimer();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    resetAutoPlayTimer();
  };

  const resetAutoPlayTimer = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
  };

  const handleViewAll = () => {
    navigate('/products');
  };

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
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

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const sliderVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  };

  // Slide change animation for content
  const slideContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="py-8 px-3 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
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
            <div className="w-[37px] h-[3px] bg-[#FFC80B]"></div>
            <span className="text-[18px] font-bold tracking-[1.4px] uppercase text-black">
              Our Products
            </span>
            <div className="w-[45px] h-[3px] bg-[#FFC80B]"></div>
          </div>

          {/* Main Title with colored words */}
          <h2 className="text-[28px] sm:text-[35px] font-bold leading-[38px] sm:leading-[48px] text-black">
            Built to simplify. <span className="text-[#FFC80B]">Designed</span> to scale. <span className="text-[#FFC80B]">Created</span> for impact.
          </h2>
        </motion.div>

        {/* Featured Product Section */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={controls}
          className="bg-[#121212] rounded-[48px] border border-white/5 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar - Dynamic Content with different heading/description */}
            <div className="w-full lg:w-[420px] p-6 sm:p-8 lg:p-12 xl:p-14 border-r border-white/5">
              <motion.div
                key={currentSlide}
                variants={slideContentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Category / Subtitle */}
                <div>
                  <p className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#FFC80B]">
                    {currentProduct.subtitle}
                  </p>
                </div>

                {/* Main Heading - Left side specific */}
                <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold text-white leading-[40px] md:leading-[48px] lg:leading-[52px]">
                  {currentProduct.leftTitle}
                </h2>

                {/* Description - Left side specific */}
                <p className="text-[14px] font-normal text-[#6B7280] leading-5 pt-2">
                  {currentProduct.leftDescription}
                </p>

                {/* Dynamic Stats - Changes with product */}
                <div className="space-y-6 pt-6">
                  {currentProduct.stats.map((stat, index) => (
                    <div key={index} className="space-y-0.5">
                      <p className="text-[24px] font-bold text-[#FFC80B] leading-8">
                        {stat.value}
                      </p>
                      <p className="text-[12px] font-bold text-[#6B7280] uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* View All Products Button */}
                <button
                  onClick={handleViewAll}
                  className="mt-8 px-3 sm:px-6 py-3 bg-[#FFC80B] text-black font-bold rounded-full hover:bg-[#e6b40a] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC80B]/30"
                >
                  View All Products →
                </button>
              </motion.div>
            </div>

            {/* Right Side - Product Slider with different heading/description */}
            <motion.div
              variants={sliderVariants}
              initial="hidden"
              animate={controls}
              className="flex-1 relative min-h-[400px] lg:min-h-[500px]"
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0" style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 52.88%, rgba(255, 200, 11, 0.25) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.8) -2.45%, rgba(0, 0, 0, 0) 47.55%, rgba(0, 0, 0, 0) 97.55%)`
                    }}></div>
                  </div>

                  {/* Right Side Content - uses rightTitle and rightDescription */}
                  <div className="absolute bottom-32 left-8 right-8 md:bottom-32 md:left-12 md:right-12 space-y-4 z-10">
                    <h3 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-white leading-[36px] md:leading-[40px]">
                      {product.rightTitle}
                    </h3>
                    <p className="text-white text-[14px] md:text-[16px] font-semibold leading-6 max-w-[512px]">
                      {product.rightDescription}
                    </p>
                    <button
                      onClick={() => handleViewDetails(product.id)}
                      className="inline-flex items-center gap-2 text-white font-bold text-[14px] border-b-2 border-[#FFC80B] pb-1 hover:text-[#FFC80B] transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows - Left */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/90 transition-colors z-20 shadow-lg"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Navigation Arrows - Right */}
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/90 transition-colors z-20 shadow-lg"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-18 left-8 right-8 md:left-12 md:right-12 flex items-center gap-2 z-20">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      resetAutoPlayTimer();
                    }}
                    className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'w-8 bg-[#FFC80B]'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* View All Products Link */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-8"
        >
          <button
            onClick={handleViewAll}
            className="group inline-flex items-center justify-center mx-auto gap-1.5 px-6 py-5 border border-[#FAD007] bg-[rgba(0,0,0,0.004)] text-black font-semibold rounded-full hover:bg-[#e6b40a] transition-all duration-300"
            style={{
              width: "321px",
              height: "48px",
              boxShadow: "4px 6px 20px rgba(255, 200, 11, 0.25)",
            }}
          >
            View All Products
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