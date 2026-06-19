import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import product image from assets
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

  const stats = [
    { value: "10+", label: "INDUSTRIES SERVED" },
    { value: "5+", label: "YEARS PARTNERSHIP" },
    { value: "40%", label: "EFFICIENCY BOOST" }
  ];

  const products = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A comprehensive platform to streamline hospital operations and enhance patient care.",
      image: HospitalImage,
      category: "Healthcare"
    },
    {
      id: 2,
      title: "AI Platform for Government Intelligence",
      description: "An AI-powered analytics platform enabling data-driven decisions and smarter governance.",
      image: HospitalImage2,
      category: "AI / GOVT"
    },
    {
      id: 3,
      title: "Digital Banking Transformation",
      description: "Modern digital solutions for seamless banking experiences.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      category: "FinTech"
    }
  ];

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

  // Pause autoplay on hover
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

  return (
    <section ref={sectionRef} className="py-8 px-8 bg-[#F1F1F1] overflow-hidden">
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
          <h2 className="text-[35px] font-bold leading-[48px] text-black">
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
            {/* Left Sidebar - Stats */}
            <div className="w-full lg:w-[420px] p-8 lg:p-12 xl:p-14 border-r border-white/5">
              <div className="space-y-6">
                {/* WHERE IDEAS BECOME */}
                <div>
                  <p className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#FFC80B]">
                    WHERE IDEAS BECOME
                  </p>
                </div>

                {/* Main Heading */}
                <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white leading-[50px] md:leading-[55px] lg:leading-[60px]">
                  Impactful Digital Solutions.
                </h2>

                {/* Description */}
                <p className="text-[14px] font-normal text-[#6B7280] leading-5 pt-2">
                  From concept to scale, we turn ideas into high-performing digital products that create measurable impact.
                </p>

                {/* Stats */}
                <div className="space-y-6 pt-6">
                  {stats.map((stat, index) => (
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

                {/* View All Projects Button */}
                <button
                  onClick={handleViewAll}
                  className="mt-8 px-8 py-3 bg-[#FFC80B] text-black font-bold rounded-full hover:bg-[#e6b40a] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC80B]/30"
                >
                  View All Projects →
                </button>
              </div>
            </div>

            {/* Right Side - Product Slider */}
            <motion.div
              variants={sliderVariants}
              initial="hidden"
              animate={controls}
              className="flex-1 relative min-h-[400px] lg:min-h-[500px]"
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
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

                  {/* Content - positioned higher from bottom */}
                  <div className="absolute bottom-32 left-8 right-8 md:bottom-32 md:left-12 md:right-12 space-y-4 z-10">
                    <h3 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-white leading-[36px] md:leading-[40px]">
                      {product.title}
                    </h3>
                    <p className="text-white text-[14px] md:text-[16px] font-semibold leading-6 max-w-[512px]">
                      {product.description}
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

              {/* Slide Indicators - Moved under View Details button */}
              <div className="absolute bottom-18 left-8 right-8 md:left-12 md:right-12 flex items-center gap-2 z-20">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      resetAutoPlayTimer();
                    }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
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
            className="group inline-flex items-center justify-center mx-auto gap-1.5 px-6 py-5 border border-[#FAD007] bg-[rgba(0,0,0,0.004)] text-black font-semibold rounded-full hover:bg-[#e6b40a] transition-all duration-300 font-Montserrat"
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