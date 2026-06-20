import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

export default function JobOpportunities() {
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
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', coverLetter: '', resume: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const tabs = ["All", "Development", "Design", "Marketing"];

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      category: "Development",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "Design",
      location: "Remote",
      type: "Full-time",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z" />
          <path d="M12 2V22" />
          <path d="M2 12H22" />
        </svg>
      )
    },
    {
      id: 3,
      title: "DevOps Engineer",
      category: "Development",
      location: "Kandy, Sri Lanka",
      type: "Full-time",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Marketing Specialist",
      category: "Marketing",
      location: "Colombo, Sri Lanka",
      type: "Internship",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V6" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      )
    }
  ];

  const filteredJobs = activeTab === "All" 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setSelectedJob(null);
        setFormData({ name: '', email: '', phone: '', coverLetter: '', resume: null });
      }, 2000);
    }, 1500);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="jobs-section" ref={sectionRef} className="py-20 px-8 bg-white overflow-hidden">
      <div className="max-w-[1430px] mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight text-black mb-4">
            Find Your Next Big Opportunity
          </h2>
          <p className="text-gray-600 max-w-[700px] mx-auto text-base sm:text-lg">
            We're looking for new team members to help us build state-of-the-art software solutions that empower our clients to achieve ultimate success.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#FFC80B] text-black shadow-[0_4px_15px_rgba(255,200,11,0.3)]"
                  : "bg-[#F3F4F6] text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="max-w-[1000px] mx-auto flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-[#FFC80B]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 gap-6"
              >
                {/* Left Block */}
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 border border-gray-100">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Button */}
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FFC80B] text-black font-bold text-sm leading-6 transition-all duration-300 hover:scale-105 hover:bg-[#F5B90C] hover:shadow-[0_6px_20px_rgba(255,200,11,0.25)] active:scale-95"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Application Submitted!</h3>
                  <p className="text-gray-500">Thank you for applying. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFC80B]">Apply for Position</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">{selectedJob.title}</h3>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Upload Resume</label>
                    <div className="w-full p-4 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 mb-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="text-sm text-gray-600 font-semibold">Choose PDF or DOCX</span>
                      <span className="text-xs text-gray-400 mt-1">Max file size 5MB</span>
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        className="hidden"
                        onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                      />
                      {formData.resume && (
                        <div className="mt-2 text-xs text-[#7B5901] font-bold bg-[#FFC80B]/10 px-3 py-1 rounded-full">
                          {formData.resume.name}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 mt-2 rounded-full bg-[#FFC80B] text-black font-bold text-base transition-colors hover:bg-[#F5B90C] disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
