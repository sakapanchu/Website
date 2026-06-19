import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Import profile images
import AlexImage from '../../assets/profile.png';
import SarahImage from '../../assets/profile.png';
import MichaelImage from '../../assets/profile.png';
import EmilyImage from '../../assets/profile.png';
import DavidImage from '../../assets/profile.png';

export default function Testimonials() {
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

  const testimonials = [
    {
      id: 1,
      name: "Alex M.",
      initials: "AM",
      verified: true,
      image: AlexImage,
      text: "FAITE delivered a powerful and scalable solution that transformed our business operations. Their team demonstrated exceptional professionalism, technical expertise, and commitment throughout the project.",
      date: "June 14, 2025",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah J.",
      initials: "SJ",
      verified: true,
      image: SarahImage,
      text: "The team truly understood our business requirements and delivered innovative solutions beyond expectations. Their responsiveness and technical knowledge made the entire process seamless.",
      date: "June 14, 2025",
      rating: 5
    },
    {
      id: 3,
      name: "Michael R.",
      initials: "MR",
      verified: true,
      image: MichaelImage,
      text: "Highly recommended for businesses looking for reliable technology partners. FAITE provided outstanding support, modern solutions, and excellent project execution.",
      date: "June 14, 2025",
      rating: 5
    },
    {
      id: 4,
      name: "Emily K.",
      initials: "EK",
      verified: true,
      image: EmilyImage,
      text: "Working with FAITE was a game-changer for our business. Their innovative approach and technical expertise helped us achieve our goals faster than we expected.",
      date: "June 14, 2025",
      rating: 5
    },
    {
      id: 5,
      name: "David L.",
      initials: "DL",
      verified: true,
      image: DavidImage,
      text: "FAITE's team went above and beyond to deliver a solution that perfectly matched our needs. Their dedication and professionalism are truly commendable.",
      date: "June 14, 2025",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const cards = [];
    const total = testimonials.length;
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + total) % total;
      cards.push({
        ...testimonials[index],
        position: i
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-[#FFC80B]' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 px-8 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Testimonials Section - Dark Background */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="bg-[#1E1E1E] rounded-[20px] p-10"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[18px] font-bold tracking-[1.2px] uppercase text-[#FFC107]">
              — CLIENT TESTIMONIALS -
            </div>
            <h2 className="text-[35px] font-bold text-[#FFC80B] leading-[62px] tracking-[-1.12px]">
              What Our Partners Say
            </h2>
          </div>

          {/* Carousel - Full width */}
          <div className="relative w-full">
            <div className="flex items-stretch justify-center gap-4 md:gap-6 min-h-[420px]">
              {visibleCards.map((card, index) => {
                const isCenter = card.position === 0;
                return (
                  <motion.div
                    key={`${card.id}-${card.position}`}
                    initial={{ opacity: 0, scale: 0.9, x: card.position * 30 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isCenter ? 1 : 0.88,
                      x: 0,
                      y: isCenter ? -10 : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 flex-1 ${
                      isCenter 
                        ? 'bg-gradient-to-br from-white/12 to-white/5 border border-white/30 shadow-[0px_0px_15px_rgba(255,255,255,0.05)] min-h-[400px]' 
                        : 'bg-gradient-to-br from-white/8 to-white/2 border border-white/10 shadow-[0px_8px_32px_rgba(0,0,0,0.37)] min-h-[360px]'
                    }`}
                  >
                    {/* Gradient Top */}
                    <div className="absolute top-0 left-0 right-0 h-[87px] bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header: Initials + Stars */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-[#FBBF24] text-sm font-medium">
                          {card.initials}
                        </div>
                        <StarRating rating={card.rating} />
                      </div>

                      {/* Profile Image and Name */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                          <img 
                            src={card.image} 
                            alt={card.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-white text-base font-semibold">{card.name}</div>
                          <div className="text-[#FFC80B] text-[10px] tracking-[1px] uppercase font-medium">
                            {card.verified ? '✓ VERIFIED PURCHASE' : ''}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className={`text-sm leading-[23px] italic flex-1 ${
                        isCenter ? 'text-[#E5E7EB]' : 'text-[#D1D5DB]'
                      }`}>
                        "{card.text}"
                      </p>

                      {/* Date */}
                      <div className="text-white/50 text-[11px] mt-4 pt-3 border-t border-white/5">
                        {card.date}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-[#FFC80B] rounded-full flex items-center justify-center hover:bg-[#FFC80B]/10 transition-colors z-20 bg-[#1E1E1E]/80 backdrop-blur-sm"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-[#FFC80B] rounded-full flex items-center justify-center hover:bg-[#FFC80B]/10 transition-colors z-20 bg-[#1E1E1E]/80 backdrop-blur-sm"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}