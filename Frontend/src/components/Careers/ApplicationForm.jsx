import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProgrammerImg from '../../assets/programmer_at_desk.png';

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

  const matchedJob = jobs.find(job => job.id.toString() === id) || jobs[4]; // Fallback to Senior Software Engineer

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
      <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-[1430px] mx-auto">
        <div className="relative w-full overflow-hidden rounded-[20px_20px_60px_60px] md:rounded-[20px_20px_90px_90px] bg-[#0E0F11] text-white min-h-[420px] flex items-center">
          {/* Glowing accents */}
          <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(circle_at_right,rgba(245,185,12,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 lg:px-16 py-12 gap-8">
            <div className="flex-1 max-w-xl">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B90C]/10 border border-[#F5B90C]/30 text-[#F5B90C] text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B90C] animate-pulse" />
                Careers
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight text-white mb-4">
                Apply <span className="text-[#FFC80B]">{matchedJob.title}</span>
              </h1>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Requirements</h4>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[500px]">
                  {matchedJob.requirements}
                </p>
              </div>

              {/* Scroll Button */}
              <button
                onClick={() => {
                  const formElement = document.getElementById('apply-form-section');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFC80B] text-black font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-[#F5B90C]"
              >
                Apply Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-[420px] flex justify-center relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#FFC80B]/20 shadow-2xl">
                <img
                  src={ProgrammerImg}
                  alt="Programmer working"
                  className="w-[380px] h-[260px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="apply-form-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1430px] mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex items-start gap-4 pb-8 border-b border-gray-100 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#FFC80B]/10 text-[#7B5901] flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black mb-1">Application Form</h2>
              <p className="text-gray-500 text-sm">Please fill out the form below to apply for this position.</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-3xl font-extrabold text-black mb-3">Application Submitted!</h3>
                <p className="text-gray-500 max-w-md">Your application for the {matchedJob.title} role has been successfully submitted. We will review it and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Two Column Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column: Personal Info */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-black flex items-center gap-2 mb-2">
                      <span className="text-[#FFC80B]">👤</span> Personal Information
                    </h3>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                      />
                    </div>
                  </div>

                  {/* Right Column: Professional Info */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-black flex items-center gap-2 mb-2">
                      <span className="text-[#FFC80B]">💼</span> Professional Information
                    </h3>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Years of Experience</label>
                      <select
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                      >
                        <option value="">Select experience</option>
                        <option value="Entry level (0-2 years)">Entry level (0-2 years)</option>
                        <option value="Mid level (3-5 years)">Mid level (3-5 years)</option>
                        <option value="Senior level (5+ years)">Senior level (5+ years)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Current Role</label>
                      <input
                        required
                        type="text"
                        value={formData.currentRole}
                        onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                        placeholder="Enter your current role"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Expected Salary</label>
                      <input
                        required
                        type="text"
                        value={formData.expectedSalary}
                        onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                        placeholder="Enter expected salary"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Portfolio URL</label>
                      <input
                        type="url"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        placeholder="https://"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Documents Upload Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-black flex items-center gap-2">
                    <span className="text-[#FFC80B]">📁</span> Documents
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Resume Upload */}
                    <div
                      onClick={() => resumeInputRef.current?.click()}
                      className="border border-dashed border-[#FFC80B] bg-white hover:bg-[#FFC80B]/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#FFC80B]/10 text-[#7B5901] flex items-center justify-center mb-4 group-hover:bg-[#FFC80B] group-hover:text-black transition-colors duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-black mb-1">Upload Resume/CV</h4>
                      <p className="text-xs text-gray-400 mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                      <button
                        type="button"
                        className="px-4 py-1.5 rounded-full bg-[#FFC80B] text-black text-xs font-bold"
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
                        <div className="mt-3 text-xs text-[#7B5901] font-bold bg-[#FFC80B]/10 px-3 py-1 rounded-full">
                          {resume.name}
                        </div>
                      )}
                    </div>

                    {/* Cover Letter Upload */}
                    <div
                      onClick={() => coverLetterInputRef.current?.click()}
                      className="border border-dashed border-gray-200 bg-white hover:bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-black mb-1">Cover Letter (Optional)</h4>
                      <p className="text-xs text-gray-400 mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                      <button
                        type="button"
                        className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:bg-gray-200"
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
                        <div className="mt-3 text-xs text-gray-600 font-bold bg-gray-100 px-3 py-1 rounded-full">
                          {coverLetter.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Questions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-black flex items-center gap-2">
                    <span className="text-[#FFC80B]">🎨</span> Additional Questions
                  </h3>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Why do you want to join our team?</label>
                    <textarea
                      rows={4}
                      value={formData.whyJoin}
                      onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                      placeholder="Tell us why you'd be a great fit..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Describe your most significant project</label>
                    <textarea
                      rows={4}
                      value={formData.significantProject}
                      onChange={(e) => setFormData({ ...formData, significantProject: e.target.value })}
                      placeholder="Tell us about your achievements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FFC80B] text-black bg-white"
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer py-2">
                    <input
                      type="checkbox"
                      checked={formData.authorized}
                      onChange={(e) => setFormData({ ...formData, authorized: e.target.checked })}
                      className="w-5 h-5 accent-[#FFC80B] rounded border-gray-300 focus:ring-0"
                    />
                    <span className="text-sm text-gray-600 font-semibold select-none">I am authorized to work in this country</span>
                  </label>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col items-center gap-4 pt-4 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#FFC80B] text-black font-bold text-base transition-all duration-300 hover:scale-103 hover:bg-[#F5B90C] hover:shadow-[0_8px_25px_rgba(255,200,11,0.25)] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform -rotate-45">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Submit Application
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      alert("Application saved for later!");
                      navigate('/careers');
                    }}
                    className="text-gray-500 hover:text-black font-bold text-sm transition-colors"
                  >
                    Save for Later
                  </button>

                  <p className="text-[11px] text-gray-400 text-center max-w-[400px]">
                    By submitting this application, you agree to our <a href="#" className="underline hover:text-gray-600">Privacy Policy</a> and <a href="#" className="underline hover:text-gray-600">Terms of Service</a>
                  </p>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
