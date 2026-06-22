import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CtaBg from '../../assets/decisionBg.png';

export default function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [openIndex, setOpenIndex] = useState(null);

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const faqs = [
    {
      question: "How long does a project take?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. After discussing your requirements, we'll provide a detailed timeline estimate."
    },
    {
      question: "How can I get a quote?",
      answer: "You can get a quote by contacting us through our contact form, email, or phone. We'll discuss your requirements and provide a detailed estimate."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, e-commerce solutions, cloud services, and digital marketing. Our team can handle projects of any size and complexity."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide ongoing support and maintenance for all our projects to ensure they continue to perform optimally."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to scroll to ContactForm section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Plus Icon
  const PlusIcon = () => (
    <svg className="w-4 h-4 text-[#9CA3AF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
    </svg>
  );

  // Minus Icon
  const MinusIcon = () => (
    <svg className="w-4 h-4 text-[#F4B400] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
    </svg>
  );

  const ArrowRight = () => (
    <svg className="w-3.5 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1440px] mx-auto"
      >
        {/* FAQ Section */}
        <div className="bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[20px] p-6 sm:p-8 lg:p-12 mb-8">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#F4B400] block mb-2">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#111827] leading-8 sm:leading-10 mb-2">
              Helping You Make Informed Decisions
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] font-normal text-[#6B7280] leading-6">
              Everything you need to know
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#F9FAFB] border border-[#A1A1AA] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#F4B400]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none group"
                >
                  <span className="text-sm sm:text-[14px] font-bold text-[#111827] leading-5 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-[14px] font-normal text-[#6B7280] leading-5">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Footer Banner */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={controls}
          className="relative flex items-center overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] border border-[#222222] shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[230px] sm:min-h-[240px] lg:min-h-[228px]"
        >
          {/* Background Image */}
          <img
            src={CtaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[center_75%] sm:object-center scale-[1.14] sm:scale-[1.1] lg:scale-[1.00] pointer-events-none select-none"
          />

          <div className="relative z-10 flex w-full flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 lg:gap-7 px-4 py-5 sm:px-8 sm:py-8 lg:px-14 lg:py-10">
            {/* Left - Text */}
            <div className="w-full lg:max-w-[72%] lg:ml-22">
              <div>
                <h2 className="text-[19px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-extrabold text-white leading-[26px] sm:leading-[34px] lg:leading-[36px]">
                  Your Next Big <span className="text-[#FFC80B]">Innovation Starts Here</span>
                </h2>
                <p className="mt-2 max-w-[800px] text-white text-[13px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-[19px] sm:leading-[24px] lg:leading-[27px]">
                  Ready to start your next project? Get in touch and let's make it happen.
                </p>
              </div>
            </div>

            {/* Right - Get Started Button */}
            <button
              onClick={scrollToContact}
              className="self-start lg:self-center mt-1 sm:mt-2 lg:mt-0 px-5 sm:px-8 lg:px-10 py-2.5 sm:py-3.5 rounded-full bg-[#FFC80B] text-black font-bold text-[15px] sm:text-base transition-all duration-300 hover:scale-105 hover:bg-[#F5B90C] hover:shadow-[0_10px_25px_rgba(251,191,36,0.3)] active:scale-95 shrink-0 whitespace-nowrap flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}