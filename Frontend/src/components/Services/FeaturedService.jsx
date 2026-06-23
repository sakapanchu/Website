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

export default function FeaturedService() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const services = [
    {
      id: 1,
      slug: "digital-transformation",
      title: "Digital Transformation",
      description: "Connect your systems, applications, and data with secure and reliable API integrations.",
      features: [
        { title: "System Integration", description: "Seamlessly connect your existing systems" },
        { title: "Data Synchronization", description: "Real-time data sync across platforms" },
        { title: "Secure APIs", description: "Enterprise-grade security for your integrations" }
      ],
      buttonText: "Explore Digital Solutions",
      image: APICardImage,
    },
     {
      id: 2,
      slug: "mobile-development",
      title: "Mobile Development",
      description: "Powerful mobile apps for iOS and Android that delight users and drive business growth.",
      features: [
        { title: "Native & Cross-Platform", description: "Choose the right approach for your needs" },
        { title: "User-Centric Design", description: "Intuitive interfaces that users love" },
        { title: "App Store Optimization", description: "Maximize your app's visibility and downloads" }
      ],
      buttonText: "Explore Mobile Solutions",
      image: MobileCardImage,
    },
     {
      id: 3,
      slug: "saas-application",
      title: "SaaS Application",
      description: "Build scalable and secure SaaS applications that drive business growth and enhance user experience.",
      features: [
        { title: "Multi-Tenant Architecture", description: "Scalable SaaS infrastructure" },
        { title: "Subscription Management", description: "Flexible billing and pricing models" },
        { title: "User Management", description: "Secure user authentication and roles" }
      ],
      buttonText: "Explore SaaS Solutions",
      image: MobileCardImage,
    },
     {
      id: 4,
      slug: "web-development",
      title: "Web Development",
      description: "High-performance websites and web applications built for speed, security, and conversions.",
      features: [
        { title: "Custom Web Applications", description: "Tailored solutions for your specific business needs" },
        { title: "Responsive Design", description: "Optimized for all devices and screen sizes" },
        { title: "SEO & Performance", description: "Fast loading and search engine optimized" }
      ],
      buttonText: "Explore Web Solutions",
      image: WebCardImage,
    },
     {
      id: 5,
      slug: "ui-ux-design",
      title: "Designs and Editing",
      description: "User-centered designs that create seamless experiences and increase customer engagement.",
      features: [
        { title: "User Research", description: "Deep understanding of your users" },
        { title: "Interactive Prototypes", description: "Validate designs before development" },
        { title: "Design Systems", description: "Consistent and scalable design" }
      ],
      buttonText: "Explore Design Solutions",
      image: UICardImage,
    },
    {
      id: 6,
      slug: "digital-marketing",
      title: "Digital Marketing",
      description: "Secure, scalable cloud infrastructure designed for performance, reliability, and business growth.",
      features: [
        { title: "SEO Optimization", description: "Rank higher in search results" },
        { title: "Social Media Marketing", description: "Engage your audience effectively" },
        { title: "Analytics & Reporting", description: "Data-driven marketing decisions" }
      ],
      buttonText: "Explore Marketing Solutions",
      image: CloudCardImage,
    },
     {
      id: 7,
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure designed for performance, reliability, and business growth.",
      features: [
        { title: "Cloud Migration", description: "Seamless transition to the cloud" },
        { title: "Scalable Infrastructure", description: "Grow your business without limits" },
        { title: "Security & Compliance", description: "Enterprise-grade security and compliance" }
      ],
      buttonText: "Explore Cloud Solutions",
      image: CloudCardImage,
    },
     {
      id: 8,
      slug: "financial-risk-analysis",
      title: "Financial Risk Analysis",
      description: "Analyze financial risks and make informed decisions with our comprehensive risk assessment solutions.",
      features: [
        { title: "Risk Assessment", description: "Comprehensive risk evaluation tools" },
        { title: "Predictive Analytics", description: "Forecast financial risks with AI" },
        { title: "Compliance Management", description: "Stay compliant with regulations" }
      ],
      buttonText: "Explore Risk Solutions",
      image: APICardImage,
    },
    {
      id: 9,
      slug: "ai-and-robotic-for-business",
      title: "AI And Robotic for Business",
      description: "Create AI-powered systems that automate workflows, predict trends, and deliver smarter business decisions.",
      features: [
        { title: "Custom AI Models", description: "Tailored solutions for your specific business needs" },
        { title: "Automation at Scale", description: "Streamline operations and reduce manual work" },
        { title: "Predictive Insights", description: "Make data-driven decisions with confidence" }
      ],
      buttonText: "Explore AI Solutions",
      image: AICardImage,
    },
   
    
   
   
   
   
   
    
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  const currentService = services[currentIndex];

  // Animation variants
  const containerVariants = {
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
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section ref={sectionRef} className="py-8 bg-[#F1F1F1] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-white rounded-[40px] shadow-md overflow-hidden"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Content */}
            <motion.div
              variants={contentVariants}
              className="flex-1 p-6 sm:p-8 md:p-12 lg:p-20"
            >
              {/* FEATURED SERVICE Badge */}
              <div className="inline-block px-4 py-1 bg-[#FFC80B] rounded-full mb-6">
                <span className="text-[10px] font-extrabold uppercase text-black tracking-wide">
                  FEATURED SERVICE
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-black leading-[36px] sm:leading-[44px] md:leading-[48px] mb-4 sm:mb-6">
                {currentService.title}
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[16px] font-normal text-[#4B5563] leading-[22px] sm:leading-[26px] max-w-[535px] mb-6 sm:mb-8">
                {currentService.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#FBBF24] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M4.5 8.5L2 6L1 7L4.5 10.5L11 4L10 3L4.5 8.5Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] sm:text-[14px] font-bold text-black leading-5">
                        {feature.title}
                      </p>
                      <p className="text-[11px] sm:text-[12px] font-normal text-[#6B7280] leading-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explore Button */}
              <button
                onClick={() => handleServiceClick(currentService.slug)}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#FBBF24] text-black font-bold text-[13px] sm:text-[14px] rounded-[30px] hover:bg-[#e6b40a] transition-colors"
              >
                {currentService.buttonText}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={imageVariants}
              className="relative lg:w-[695px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-auto bg-black"
            >
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows - Positioned on the image */}
              <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  aria-label="Previous service"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  aria-label="Next service"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-[#FFC80B]'
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}