import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Import icons from assets
import PhoneIcon from '../../assets/phone-icon.png';
import EmailIcon from '../../assets/email-icon.png';
import LocationIcon from '../../assets/location-icon.png';

export default function ReachUsSection() {
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

  const contactMethods = [
    {
      id: 1,
      title: "Call Us",
      subtitle: "Mon-Fri from 9am to 6pm",
      detail: "+94 72 080 4389",
      icon: PhoneIcon,
    },
    {
      id: 2,
      title: "Email Us",
      subtitle: "We'll respond within 24 hours",
      detail: "faiiteplus1@gmail.com",
      icon: EmailIcon,
    },
    {
      id: 3,
      title: "Visit Us",
      subtitle: "Come say hello at our office",
      detail: "Jaffna, Sri Lanka",
      icon: LocationIcon,
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div className="bg-white rounded-[20px] p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#F4B400] block mb-2">
              QUICK CONTACT
            </span>
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#111827] leading-8 sm:leading-9 lg:leading-[36px]">
                Reach Our Team Anytime
              </h2>
              {/* Underline */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#F4B400]"></div>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {contactMethods.map((method) => (
              <motion.div
                key={method.id}
                variants={cardVariants}
                className="bg-[#F4B400]/10 border border-[#F4B400] rounded-2xl p-6 sm:p-7 lg:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(244,180,0,0.3)] group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#FFC80B] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <img 
                    src={method.icon} 
                    alt={`${method.title} icon`}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-[16px] font-bold text-[#111827] leading-6 mb-1">
                  {method.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm lg:text-[12px] font-normal text-[#6B7280] leading-4 mb-3">
                  {method.subtitle}
                </p>

                {/* Detail */}
                <p className="text-base sm:text-lg lg:text-[18px] font-bold text-[#111827] leading-6 sm:leading-7 lg:leading-[28px]">
                  {method.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}