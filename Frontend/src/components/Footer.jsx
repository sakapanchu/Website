import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    setEmail('');
  };

  const footerLinks = {
    company: ['About Us', 'Our Team', 'Careers', 'News & Press'],
    services: ['Mobile Development', 'Web Development', 'UI/UX Design', 'AI Development', 'Cloud Solutions'],
    industries: ['Healthcare', 'FinTech', 'Retail', 'Education', 'Government']
  };

  // Animation variants
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
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <footer ref={sectionRef} className="py-6 px-3 sm:px-6 md:px-8 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-black rounded-[20px] p-8 md:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-[30px] font-bold text-white leading-9 font-Inter">
                Faite.
              </h2>
              <p className="text-[16px] font-normal text-[#6B7280] leading-6 max-w-[384px] mt-4 font-Inter">
                We build custom software that helps businesses innovate, scale and lead in the digital era.
              </p>
              <div className="flex gap-4 mt-6">
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center hover:bg-[#FFC80B]/20 transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:text-[#FFC80B] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* Twitter/X */}
                <a href="#" className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center hover:bg-[#FFC80B]/20 transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:text-[#FFC80B] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center hover:bg-[#FFC80B]/20 transition-colors group">
                  <svg className="w-5 h-5 text-white group-hover:text-[#FFC80B] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[16px] font-bold text-white leading-6 font-Inter mb-4">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="text-[14px] font-normal text-[#6B7280] hover:text-[#FFC80B] transition-colors duration-300 font-Inter"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[16px] font-bold text-white leading-6 font-Inter mb-4">
                Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`/services/${item.toLowerCase().replace(/ /g, '-').replace(/\//g, '')}`}
                      className="text-[14px] font-normal text-[#6B7280] hover:text-[#FFC80B] transition-colors duration-300 font-Inter"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[16px] font-bold text-white leading-6 font-Inter mb-4">
                Industries
              </h4>
              <ul className="space-y-4">
                {footerLinks.industries.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`/industries/${item.toLowerCase()}`}
                      className="text-[14px] font-normal text-[#6B7280] hover:text-[#FFC80B] transition-colors duration-300 font-Inter"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stay Connected - Newsletter */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[16px] font-bold text-white leading-6 font-Inter mb-4">
                Stay Connected
              </h4>
              <p className="text-[14px] font-normal text-[#6B7280] leading-5 max-w-[330px] mb-4 font-Inter">
                Get the latest updates and insights delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-[50px] px-6 pr-14 bg-[#121212] text-white placeholder-[#6B7280] rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC80B] transition-all duration-300 font-Inter"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FFC80B] rounded-full flex items-center justify-center hover:bg-[#e6b40a] transition-colors"
                  >
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#FFC80B] text-black font-bold text-[14px] rounded-full hover:bg-[#e6b40a] transition-colors font-Inter"
                >
                  Subscribe →
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}