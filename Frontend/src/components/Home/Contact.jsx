import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Import background image
import ContactBg from '../../assets/contactbg.png';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  // Animation variants
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

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <section ref={sectionRef} className="py-8 px-3 sm:px-6 bg-[#F1F1F1]  overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative bg-cover bg-center rounded-[20px] border-t border-white/5"
          style={{
            backgroundImage: `url(${ContactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col lg:flex-row p-6 md:p-8 gap-8 lg:gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              variants={leftVariants}
              className="flex-1 lg:flex-[0.7] space-y-6"
            >
              <h2 className="text-[30px] font-bold text-white leading-9 font-Public_Sans">
                Get in Touch
              </h2>
              
              <p className="text-[16px] font-normal text-white leading-6 font-Public_Sans max-w-[500px]">
                Ready to transform your business? Let's build the future together.
              </p>

              <div className="space-y-6 pt-4">
                {/* Email */}
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC80B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FFC80B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold tracking-[1.2px] uppercase text-white font-Public_Sans">
                      EMAIL US
                    </p>
                    <p className="text-[18px] font-medium text-white leading-7 font-Public_Sans">
                      contact@faite.com
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC80B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FFC80B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold tracking-[1.2px] uppercase text-white font-Public_Sans">
                      CALL US
                    </p>
                    <p className="text-[18px] font-medium text-white leading-7 font-Public_Sans">
                      +1 (555) 000-1234
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFC80B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FFC80B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold tracking-[1.2px] uppercase text-white font-Public_Sans">
                      VISIT US
                    </p>
                    <p className="text-[18px] font-medium text-white leading-7 font-Public_Sans">
                      123 Tech Plaza, Innovation Way<br />San Francisco, CA 94105
                    </p>
                  </div>
                </motion.div>

                {/* Social Icons */}
                <motion.div variants={itemVariants} className="flex gap-6 pt-4">
                  <a href="#" className="text-white hover:text-[#FFC80B] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#FFC80B] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                 
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={rightVariants}
              className="flex-1 bg-white rounded-[10px] p-6 md:p-8 shadow-2xl"
              style={{
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-semibold text-black mb-2 font-Public_Sans">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 border border-[#C2C6D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC80B] focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-semibold text-black mb-2 font-Public_Sans">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 border border-[#C2C6D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC80B] focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[14px] font-semibold text-black mb-2 font-Public_Sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[50px] px-4 border border-[#C2C6D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC80B] focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[14px] font-semibold text-black mb-2 font-Public_Sans">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-[#C2C6D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC80B] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  variants={buttonVariants}
                  type="submit"
                  className="w-full py-4 bg-[#FFC80B] text-black font-bold text-[16px] rounded-full hover:bg-[#e6b40a] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC80B]/30 font-Public_Sans"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}