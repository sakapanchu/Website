import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  // Filled SVG Icons
  const UserIcon = () => (
    <svg className="w-3.5 h-3.5 text-[#9CA3AF]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-3.5 h-3.5 text-[#9CA3AF]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-3.5 h-3.5 text-[#9CA3AF]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );

  const MessageIcon = () => (
    <svg className="w-3.5 h-3.5 text-[#9CA3AF]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
      <path d="M7 9h10v2H7zm0 4h7v2H7z" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );

  const DropdownArrow = () => (
    <svg className="w-4 h-4 text-[#6B7280]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );

  return (
    <section ref={sectionRef}  id="contact-section" className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        <div className="bg-white shadow-[0_25px_50px_-12px_rgba(242,169,0,0.2)] rounded-[20px] p-6 sm:p-8 lg:p-14">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-sm font-bold text-[#111827] leading-5 block">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full h-10 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg pl-10 pr-4 text-sm text-[#6B7280] focus:outline-none focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-sm font-bold text-[#111827] leading-5 block">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <EmailIcon />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full h-10 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg pl-10 pr-4 text-sm text-[#6B7280] focus:outline-none focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] transition-all duration-300"
                  />
                </div>
              </motion.div>
            </div>

            {/* Row 2: Phone & Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-sm font-bold text-[#111827] leading-5 block">
                  Phone (optional)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <PhoneIcon />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 XXX XXX XXX"
                    className="w-full h-10 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg pl-10 pr-4 text-sm text-[#6B7280] focus:outline-none focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-sm font-bold text-[#111827] leading-5 block">
                  Service
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 pr-10 text-sm text-[#111827] appearance-none focus:outline-none focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] transition-all duration-300 cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="consulting">Consulting</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <DropdownArrow />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Message */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-bold text-[#111827] leading-5 block">
                Message
              </label>
              <div className="relative">
                <div className="absolute left-4 top-4">
                  <MessageIcon />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg pl-10 pr-4 py-3 text-sm text-[#6B7280] focus:outline-none focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] transition-all duration-300 resize-none"
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full bg-[#F4B400] hover:bg-[#E0A000] text-black font-bold text-base leading-6 py-4 px-6 rounded-[50px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </div>
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}