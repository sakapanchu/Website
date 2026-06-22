import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import job icons from assets
import CodeIcon from '../../assets/code.png';
import DesignIcon from '../../assets/designs.png';
import DevopsIcon from '../../assets/devops.png';
import MarketingIcon from '../../assets/marketing.png';

export default function JobOpportunities() {
  const navigate = useNavigate();
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

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Development", "Design", "Marketing"];

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      category: "Development",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      icon: CodeIcon,
      alt: "Code Icon"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "Design",
      location: "Remote",
      type: "Full-time",
      icon: DesignIcon,
      alt: "Design Icon"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      category: "Development",
      location: "Kandy, Sri Lanka",
      type: "Full-time",
      icon: DevopsIcon,
      alt: "DevOps Icon"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      category: "Marketing",
      location: "Colombo, Sri Lanka",
      type: "Internship",
      icon: MarketingIcon,
      alt: "Marketing Icon"
    }
  ];

  const filteredJobs = activeTab === "All" 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <section id="jobs-section" ref={sectionRef} className="py-10 px-8 bg-[#F1F1F1] overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* White Container */}
        <div className="bg-white rounded-[30px] py-10 px-6 md:px-10">
          {/* Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[36px] md:leading-[40px] text-black mb-3">
              Find Your Next Big Opportunity
            </h2>
            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280] max-w-[468px] mx-auto leading-5 sm:leading-6">
              We're looking for passionate individuals ready to create impactful digital solutions and shape the future of technology.
            </p>
          </motion.div>

          {/* Tab Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#FFC80B] text-black border border-[#FFC80B] shadow-[0_4px_5px_rgba(255,200,11,0.2)]"
                    : "bg-white text-black border border-[#FFC80B] shadow-[0_4px_5px_rgba(255,200,11,0.2)] hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-[1278px] mx-auto flex flex-col gap-3 sm:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 rounded-2xl border border-[#A1A1AA]/80 bg-white hover:border-[#FFC80B] transition-all duration-300 gap-3 sm:gap-4"
                >
                  {/* Left Block - Icon and Job Info */}
                  <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto flex-1">
                    {/* Icon Container */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <img 
                        src={job.icon} 
                        alt={job.alt}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>

                    {/* Job Info - Title and Location/Type on the same line */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-0.5">
                        <h3 className="text-[15px] sm:text-[18px] font-bold text-black leading-6 sm:leading-7">
                          {job.title}
                        </h3>
                        <span className="text-[#6B7280] text-xs sm:text-sm hidden sm:inline">•</span>
                        <span className="flex items-center gap-1.5 text-xs sm:text-sm text-[#6B7280]">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="text-[#6B7280] text-xs sm:text-sm">•</span>
                        <span className="flex items-center gap-1.5 text-xs sm:text-sm text-[#6B7280]">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button - Aligned to the right */}
                  <button
                    onClick={() => navigate('/careers/apply/' + job.id)}
                    className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#FFC80B] text-black font-bold text-xs sm:text-sm leading-4 sm:leading-5 transition-all duration-300 hover:scale-105 hover:bg-[#F5B90C] hover:shadow-[0_6px_20px_rgba(255,200,11,0.25)] active:scale-95 flex items-center justify-center gap-2 sm:flex-shrink-0"
                  >
                    Apply Now
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}