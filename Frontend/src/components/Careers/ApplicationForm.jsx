import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import ApplyBg from '../../assets/applicationFormHero.png';
import BellIcon from '../../assets/careerBell.png';
import UploadIcon from '../../assets/upload.png';

export default function ApplicationForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const jobs = [
    { id: 1, title: "Senior Frontend Developer", requirements: "5+ years of experience with React/Vite, TailwindCSS, and modern frontend tools. Strong understanding of Framer Motion and performance optimization." },
    { id: 2, title: "UI/UX Designer", requirements: "3+ years of UI/UX design experience. Proficiency in Figma, design systems, modern layouts, prototyping, and wireframing." },
    { id: 3, title: "DevOps Engineer", requirements: "4+ years of AWS/Cloud administration, CI/CD pipelines (GitHub Actions), Docker, Kubernetes, and infrastructure as code." },
    { id: 4, title: "Marketing Specialist", requirements: "Experience in SEO, content creation, social media management, Google Analytics, and growth marketing campaigns." },
    { id: 5, title: "Senior Software Engineer", requirements: "6+ years of full-stack engineering, backend systems design (Java/Spring Boot or Node.js), database architecture, and API design." }
  ];

  const matchedJob = jobs.find(job => job.id.toString() === id) || jobs[4];

  // Form section animation controls
  const formSectionRef = useRef(null);
  const isFormInView = useInView(formSectionRef, { once: false, amount: 0.1 });
  const formControls = useAnimation();

  useEffect(() => {
    if (isFormInView) {
      formControls.start('visible');
    } else {
      formControls.start('hidden');
    }
  }, [isFormInView, formControls]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentRole: '',
    expectedSalary: '',
    portfolioUrl: '',
    whyJoin: '',
    significantProject: '',
    authorized: false
  });

  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const resumeInputRef = useRef(null);
  const coverLetterInputRef = useRef(null);

  // Hero section animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  // Form section animation variants
  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const formHeaderVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formButtonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Individual form field animation
  const fieldVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 12
      },
    },
    hover: {
      scale: 1.01,
      transition: { duration: 0.2 }
    },
    focus: {
      scale: 1.02,
      borderColor: "#FFC80B",
      transition: { duration: 0.2 }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.1 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resume) {
      alert("Please upload your Resume/CV.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        navigate('/careers');
      }, 2500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F1F1F1] font-inter">
      {/* Hero Section */}
      <div className="pt-34 max-w-[1430px] mx-auto">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full overflow-hidden rounded-[20px_20px_60px_60px] md:rounded-[20px_20px_90px_90px]"
          style={{ "--hero-bg": `url(${ApplyBg})` }}
        >
          <img
            src={ApplyBg}
            alt="Apply background"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30 rounded-[20px_20px_60px_60px] md:rounded-[20px_20px_90px_90px]"></div>
          <div className="hero-orbit-layer" aria-hidden="true">
            <span className="hero-ring-motion hero-ring-motion--one" />
            <span className="hero-ring-motion hero-ring-motion--two" />
            <span className="hero-ring-motion hero-ring-motion--three" />
          </div>
          <div className="relative z-10 flex flex-col min-h-[420px] md:min-h-[500px] lg:min-h-[779px]">
            <div className="flex-1 px-3 sm:px-6 lg:px-16 pt-16 sm:pt-20 lg:pt-32 pb-6">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl lg:max-w-[700px]"
              >
                <motion.div
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFC80B]/20 border border-[#FFC80B]/40 rounded-full mb-6"
                >
                  <img src={BellIcon} alt="Bell Icon" className="w-4 h-4 object-contain" />
                  <span className="text-[#FFC80B] text-sm font-bold uppercase tracking-[1.2px]">CAREERS</span>
                </motion.div>
                <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.2] lg:leading-[70px] mb-4">
                  <span className="text-white [text-shadow:0_1px_0_#000]">Apply<br /></span>
                  <span className="text-[#FFC80B] [text-shadow:0_1px_0_#000]">{matchedJob.title}</span>
                </h1>
                <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg lg:text-[18px] font-medium leading-[1.6] lg:leading-[28px] max-w-[600px]">
                  {matchedJob.requirements}
                </p>
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <button
                    onClick={() => {
                      const formElement = document.getElementById('apply-form-section');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group flex items-center gap-2 px-3 sm:px-6 py-3 rounded-full border border-[#FFC80B] bg-[#FFC80B]/20 text-white font-bold text-base leading-6 transition-all duration-300 hover:bg-[#FFC80B]/30 hover:scale-[1.02]"
                  >
                    Apply Now
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Form Section with Scroll Animation */}
      <motion.div
        ref={formSectionRef}
        variants={formContainerVariants}
        initial="hidden"
        animate={formControls}
        id="apply-form-section"
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1430px] mx-auto"
      >
        <motion.div
          variants={formItemVariants}
          className="bg-white rounded-[24px] p-8 sm:p-12 max-w-[1430px] mx-auto "
        >
          {/* Header */}
          <motion.div variants={formHeaderVariants} className="flex items-center gap-4 pb-6 border-b border-[#F3F4F6] mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#FEFCE8] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h2 className="text-[24px] font-bold text-[#1A1A1A] leading-8">Application Form</h2>
              <p className="text-[14px] text-[#6B7280] leading-5">Please fill out the form below to apply for this position.</p>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Two Column Fields */}
            <motion.div variants={formItemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Personal Info */}
              <motion.div variants={fieldVariants} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.67">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <h3 className="text-[18px] font-bold text-[#1A1A1A] leading-7">Personal Information</h3>
                </div>

                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Full Name</motion.label>
                  <motion.input
                    whileHover="hover"
                    whileFocus="focus"
                    variants={fieldVariants}
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#6B7280] focus:outline-none focus:border-[#FFC80B] text-black bg-white text-[16px] transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Email Address</motion.label>
                  <motion.input
                    whileHover="hover"
                    whileFocus="focus"
                    variants={fieldVariants}
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#6B7280] focus:outline-none focus:border-[#FFC80B] text-black bg-white text-[16px] transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Phone Number</motion.label>
                  <motion.input
                    whileHover="hover"
                    whileFocus="focus"
                    variants={fieldVariants}
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#6B7280] focus:outline-none focus:border-[#FFC80B] text-black bg-white text-[16px] transition-all duration-300"
                  />
                </motion.div>
              </motion.div>

              {/* Right Column: Professional Info */}
              <motion.div variants={fieldVariants} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.67">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  <h3 className="text-[18px] font-bold text-[#1A1A1A] leading-7">Professional Information</h3>
                </div>

                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Years of Experience</motion.label>
                  <motion.select
                    whileHover="hover"
                    whileFocus="focus"
                    variants={fieldVariants}
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#FFC80B] text-[#1A1A1A] bg-white text-[16px] transition-all duration-300"
                  >
                    <option value="">Select experience</option>
                    <option value="Entry level (0-2 years)">Entry level (0-2 years)</option>
                    <option value="Mid level (3-5 years)">Mid level (3-5 years)</option>
                    <option value="Senior level (5+ years)">Senior level (5+ years)</option>
                  </motion.select>
                </motion.div>

                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Current Role</motion.label>
                  <motion.input
                    whileHover="hover"
                    whileFocus="focus"
                    variants={fieldVariants}
                    required
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    placeholder="Enter your current role"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#6B7280] focus:outline-none focus:border-[#FFC80B] text-black bg-white text-[16px] transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Expected Salary</motion.label>
                  <motion.input
                    whileHover="hover"
                    whileFocus="focus"
                    variants={fieldVariants}
                    required
                    type="text"
                    value={formData.expectedSalary}
                    onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                    placeholder="Enter expected salary"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#6B7280] focus:outline-none focus:border-[#FFC80B] text-black bg-white text-[16px] transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Portfolio URL</motion.label>
                  <motion.input
                    whileHover="hover"
                    whileFocus="focus"
                    variants={fieldVariants}
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#6B7280] focus:outline-none focus:border-[#FFC80B] text-black bg-white text-[16px] transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Documents Upload Section */}
            <motion.div variants={formItemVariants} className="space-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.67">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h3 className="text-[18px] font-bold text-[#1A1A1A] leading-7">Documents</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Resume Upload */}
                <motion.div
                  variants={fieldVariants}
                  whileHover="hover"
                  onClick={() => resumeInputRef.current?.click()}
                  className="border-2 border-dashed border-[#FFD700] bg-[#FEFCE8]/20 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-[#FEFCE8]/40"
                >
                  <motion.img
                    src={UploadIcon}
                    alt="Upload Resume"
                    className="w-10 h-10 mb-4 object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(79%) saturate(749%) hue-rotate(2deg) brightness(102%) contrast(103%)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h4 className="text-[16px] font-bold text-[#1A1A1A]">Upload Resume/CV</h4>
                  <p className="text-[12px] text-[#6B7280] mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                  <button
                    type="button"
                    className="px-6 py-2 rounded-full bg-[#FFD700] text-black text-[12px] font-bold transition-all duration-300 hover:scale-105"
                  >
                    Choose File
                  </button>
                  <input
                    type="file"
                    ref={resumeInputRef}
                    accept=".pdf,.docx,.doc"
                    className="hidden"
                    onChange={(e) => setResume(e.target.files?.[0] || null)}
                  />
                  {resume && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-3 text-xs text-[#000] font-bold bg-[#FFD700]/20 px-3 py-1 rounded-full"
                    >
                      {resume.name}
                    </motion.div>
                  )}
                </motion.div>

                {/* Cover Letter Upload */}
                <motion.div
                  variants={fieldVariants}
                  whileHover="hover"
                  onClick={() => coverLetterInputRef.current?.click()}
                  className="border-2 border-dashed border-[#E5E7EB] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-gray-50"
                >
                  <motion.img
                    src={UploadIcon}
                    alt="Upload Resume"
                    className="w-10 h-10 mb-4 object-contain opacity-60"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h4 className="text-[16px] font-bold text-[#374151]">Cover Letter (Optional)</h4>
                  <p className="text-[12px] text-[#9CA3AF] mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                  <button
                    type="button"
                    className="px-6 py-2 rounded-lg border border-[#D1D5DB] text-[#374151] text-[12px] font-bold hover:bg-gray-100 transition-all duration-300"
                  >
                    Choose File
                  </button>
                  <input
                    type="file"
                    ref={coverLetterInputRef}
                    accept=".pdf,.docx,.doc"
                    className="hidden"
                    onChange={(e) => setCoverLetter(e.target.files?.[0] || null)}
                  />
                  {coverLetter && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-3 text-xs text-[#374151] font-bold bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {coverLetter.name}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Additional Questions */}
            <motion.div variants={formItemVariants} className="space-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.67">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <h3 className="text-[18px] font-bold text-[#1A1A1A] leading-7">Additional Questions</h3>
              </div>

              <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Why do you want to join our team?</motion.label>
                <motion.textarea
                  whileHover="hover"
                  whileFocus="focus"
                  variants={fieldVariants}
                  rows={3}
                  value={formData.whyJoin}
                  onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                  placeholder="Tell us why you'd be a great fit..."
                  className="w-full px-3 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#FFC80B] text-black bg-[#FCFCFC] text-[16px] transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                <motion.label variants={labelVariants} className="text-[14px] font-semibold text-[#1A1A1A] leading-5">Describe your most significant project</motion.label>
                <motion.textarea
                  whileHover="hover"
                  whileFocus="focus"
                  variants={fieldVariants}
                  rows={3}
                  value={formData.significantProject}
                  onChange={(e) => setFormData({ ...formData, significantProject: e.target.value })}
                  placeholder="Tell us about your achievements..."
                  className="w-full px-3 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#FFC80B] text-black bg-[#FCFCFC] text-[16px] transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="flex items-center gap-3 cursor-pointer py-2">
                <motion.input
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="checkbox"
                  checked={formData.authorized}
                  onChange={(e) => setFormData({ ...formData, authorized: e.target.checked })}
                  className="w-5 h-5 rounded border border-[#D1D5DB] accent-[#FFC80B] focus:ring-0"
                />
                <span className="text-[14px] font-medium text-[#4B5563] select-none">I am authorized to work in this country</span>
              </motion.div>
            </motion.div>

            {/* Form Actions */}
            <motion.div variants={formButtonVariants} className="flex flex-col items-center gap-4 pt-4 border-t border-[#F3F4F6]">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-[40px] bg-[#FFD700] text-black font-bold text-[16px] transition-all duration-300 hover:bg-[#F5B90C] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <svg className="w-5 h-5 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Submit Application
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => {
                  alert("Application saved for later!");
                  navigate('/careers');
                }}
                className="text-[14px] font-semibold text-[#6B7280] hover:text-black transition-colors"
              >
                Save for Later
              </motion.button>

              <p className="text-[12px] text-[#9CA3AF] text-center max-w-[512px]">
                By submitting this application, you agree to our<span className='text-[#FFC80B]'> <a href="#" className="underline hover:text-gray-600">Privacy Policy</a> </span>and <span className='text-[#FFC80B]'> <a href="#" className="underline hover:text-gray-600">Terms of Service</a></span>
              </p>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl z-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFC80B] text-black flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(255,200,11,0.3)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-3">Request Submitted!</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
                Thank you for your interest. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  navigate('/careers');
                }}
                className="w-full py-4 rounded-full bg-[#FFC80B] text-black font-bold text-base transition-all duration-300 hover:bg-[#F5B90C] active:scale-95"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}