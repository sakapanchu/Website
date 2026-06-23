import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import icons from assets
import UserIcon from "../../assets/user.png";
import DurationIcon from "../../assets/duration.png";
import PlatformIcon from "../../assets/meeting.png";
import TimezoneIcon from "../../assets/timeZone.png";
import SecurityImage from "../../assets/secure.png";

// Import country codes from separate file
import { countryCodes } from "../../data/countryCodes";

export function BookingInterface() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  // Search states for country dropdown
  const [searchCountry, setSearchCountry] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef(null);
  const [phoneError, setPhoneError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyWebsite: '',
    countryCode: '+94',
    contactNumber: '',
    estimatedBudget: '',
    preferredTimeline: '',
    projectType: '',
    projectDetails: '',
    agreeTerms: false
  });

  // Filtered countries based on search
  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(searchCountry.toLowerCase()) ||
    country.code.includes(searchCountry)
  );

  // Click outside handler for country dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get current date and time for highlighting
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonthName = today.getMonth();
  const currentYearName = today.getFullYear();
  const currentHour = today.getHours();
  const currentMinutes = today.getMinutes();

  // Time slots from 8:30 AM to 5:30 PM
  const timeSlots = [
    "08:30 am", "08:45 am", "09:00 am", "09:15 am", "09:30 am", "09:45 am",
    "10:00 am", "10:15 am", "10:30 am", "10:45 am", "11:00 am", "11:15 am",
    "11:30 am", "11:45 am", "12:00 pm", "12:15 pm", "12:30 pm", "12:45 pm",
    "01:00 pm", "01:15 pm", "01:30 pm", "01:45 pm", "02:00 pm", "02:15 pm",
    "02:30 pm", "02:45 pm", "03:00 pm", "03:15 pm", "03:30 pm", "03:45 pm",
    "04:00 pm", "04:15 pm", "04:30 pm", "04:45 pm", "05:00 pm", "05:15 pm",
    "05:30 pm"
  ];

  // Parse time string to get hours and minutes
  const parseTime = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let hour24 = hours;
    if (period === 'pm' && hours !== 12) hour24 = hours + 12;
    if (period === 'am' && hours === 12) hour24 = 0;
    return { hours: hour24, minutes };
  };


  const validatePhoneNumber = (countryCode, phoneNumber) => {
    const country = countryCodes.find(c => c.code === countryCode);
    if (!country) return { isValid: false, message: 'Invalid country code' };

    // Remove any non-digit characters for validation
    const cleanNumber = phoneNumber.replace(/\D/g, '');

    // Check if the number matches the country pattern
    const pattern = new RegExp(`^${country.pattern}$`);
    if (pattern.test(cleanNumber)) {
      return { isValid: true, message: 'Valid phone number' };
    }

    return {
      isValid: false,
      message: `Please enter a valid ${country.country} phone number (e.g., ${country.example})`
    };
  };

  // Check if a time slot is in the past for today
  const isPastTime = (timeStr) => {
    const { hours, minutes } = parseTime(timeStr);
    if (hours < currentHour) return true;
    if (hours === currentHour && minutes < currentMinutes) return true;
    return false;
  };

  // Check if a time slot is selectable
  const isTimeSelectable = (timeStr) => {
    const dateToCheck = selectedDate || currentDate;
    const isTodayDate = dateToCheck === currentDate &&
      currentMonthIndex === currentMonthName &&
      currentYear === currentYearName;
    if (isTodayDate && isPastTime(timeStr)) {
      return false;
    }
    return true;
  };

  // Generate calendar days
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonthIndex, currentYear);

  // Month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Navigate months
  const prevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  // Check if a date is today
  const isToday = (day) => {
    return day === currentDate &&
      currentMonthIndex === currentMonthName &&
      currentYear === currentYearName;
  };

  // Check if a date is selected
  const isSelected = (day) => {
    return selectedDate === day;
  };

  // Check if a date is in the past
  const isPastDate = (day) => {
    const dateObj = new Date(currentYear, currentMonthIndex, day);
    const todayObj = new Date();
    todayObj.setHours(0, 0, 0, 0);
    return dateObj < todayObj;
  };

  // Handle date selection
  const handleDateSelect = (day) => {
    if (isPastDate(day)) return;
    setSelectedDate(day);
    setSelectedTime(null);
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    if (!isTimeSelectable(time)) return;
    setSelectedTime(time);
    if (!selectedDate) {
      setSelectedDate(currentDate);
    }
  };

  // Handle next step - show form
  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep(2);
    }
  };

  // Handle back to step 1
  const handleBack = () => {
    setCurrentStep(1);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'contactNumber') {
      // Only allow digits
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: digitsOnly
      }));

      // Validate if enough digits entered
      if (digitsOnly.length >= 4) {
        const validation = validatePhoneNumber(formData.countryCode, digitsOnly);
        setPhoneError(validation.isValid ? '' : validation.message);
      } else {
        setPhoneError('');
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone number before submission
    if (formData.contactNumber) {
      const validation = validatePhoneNumber(formData.countryCode, formData.contactNumber);
      if (!validation.isValid) {
        setPhoneError(validation.message);
        return;
      }
    }

    console.log('Form submitted:', { ...formData, selectedDate, selectedTime });
    navigate('/lets-talk/confirmation');
  };

  // Get selected date display
  const getSelectedDateDisplay = () => {
    const dateToShow = selectedDate || currentDate;
    const date = new Date(currentYear, currentMonthIndex, dateToShow);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  // Check if a date is selectable (not past)
  const isSelectable = (day) => {
    return !isPastDate(day);
  };

  // Animation variants
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] py-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-[1430px] mx-auto rounded-[32px] border border-[#D3C5AE]/30 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden"
      >

        {/* Step Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#F6F3F2]/30 border-b border-[#D3C5AE]/20 px-6 sm:px-8 py-4 sm:py-6"
        >
          <div className="flex items-center gap-3 sm:gap-4 justify-center flex-wrap">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${currentStep === 1 ? 'bg-[#FFC80B]' : 'border-2 border-[#D3C5AE]'
                  }`}
                animate={{
                  scale: currentStep === 1 ? 1.1 : 1,
                  transition: { duration: 0.3, type: "spring" }
                }}
              >
                <span className={`text-xs sm:text-sm font-bold ${currentStep === 1 ? 'text-[#503A00]' : 'text-[#4F4634]'}`}>
                  1
                </span>
              </motion.div>
              <span className={`text-xs sm:text-sm font-medium ${currentStep === 1 ? 'text-[#795900]' : 'text-[#4F4634]/60'}`}>
                Select Date & Time
              </span>
            </motion.div>

            <div className="w-12 sm:w-20 h-px bg-[#D3C5AE]/50"></div>

            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${currentStep === 2 ? 'bg-[#FFC80B]' : 'border-2 border-[#D3C5AE]'
                  }`}
                animate={{
                  scale: currentStep === 2 ? 1.1 : 1,
                  transition: { duration: 0.3, type: "spring" }
                }}
              >
                <span className={`text-xs sm:text-sm font-bold ${currentStep === 2 ? 'text-[#503A00]' : 'text-[#4F4634]'}`}>
                  2
                </span>
              </motion.div>
              <span className={`text-xs sm:text-sm font-medium ${currentStep === 2 ? 'text-[#795900]' : 'text-[#4F4634]/60'}`}>
                Enter Details
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Step 1: Select Date & Time */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col lg:flex-row"
            >
              {/* Left Panel - Details */}
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-[35%] p-6 sm:p-8 border-r border-[#D3C5AE]/20"
              >
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6 sm:space-y-8">
                  <motion.div variants={fadeInUp} className="flex gap-4">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-[30px] bg-[#FFC80B]/10 border border-[#FFC80B] flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={UserIcon} alt="User" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-[#1C1B1B]">Let's connect for 15 minutes</h3>
                      <p className="text-xs sm:text-sm text-[#4F4634]/80 leading-relaxed max-w-[291px]">
                        Let's explore your project needs, structure, timeline, and tech stack. No pressure, just a shared discovery to see how Faite can help.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-8">
                    <motion.div
                      className="flex items-center gap-6"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={DurationIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div>
                        <p className="text-[10px] sm:text-xs text-[#7B5901]/60 font-medium">Duration</p>
                        <p className="text-xs sm:text-sm font-semibold text-[#1C1B1B]">15 mins</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-6"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={PlatformIcon} alt="Platform" className="w-5 h-4 sm:w-6 sm:h-4.5" />
                      <div>
                        <p className="text-[10px] sm:text-xs text-[#7B5901]/60 font-medium">Platform</p>
                        <p className="text-xs sm:text-sm font-semibold text-[#1C1B1B]">Google Meet</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-6"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={TimezoneIcon} alt="Time Zone" className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div>
                        <p className="text-[10px] sm:text-xs text-[#7B5901]/60 font-medium">Time Zone</p>
                        <p className="text-xs sm:text-sm font-semibold text-[#1C1B1B]">Asia/Colombo (+05:30)</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Center - Calendar */}
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-[35%] p-6 sm:p-8 border-r border-[#D3C5AE]/20"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm sm:text-base font-medium text-[#1C1B1B] mb-6">Select date and time</h3>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center justify-between mb-4">
                    <motion.button
                      onClick={prevMonth}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-3 h-3 text-[#1C1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    <motion.span
                      className="font-semibold text-sm sm:text-base text-[#1C1B1B]"
                      key={`${currentMonthIndex}-${currentYear}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {monthNames[currentMonthIndex]} {currentYear}
                    </motion.span>
                    <motion.button
                      onClick={nextMonth}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-3 h-3 text-[#1C1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <div key={i} className="text-center text-[10px] sm:text-xs font-semibold text-[#1C1B1B] py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-7 gap-1"
                >
                  {Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-8 sm:h-10"></div>
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isTodayDate = isToday(day);
                    const isSelectedDate = isSelected(day);
                    const isPast = isPastDate(day);
                    const selectable = isSelectable(day);

                    let bgColor = '';
                    let textColor = 'text-[#4F4634]/60';
                    let hoverClass = 'hover:bg-gray-50';
                    let fontWeight = 'font-medium';

                    if (isSelectedDate) {
                      bgColor = 'bg-[#FFC80B]';
                      textColor = 'text-[#503A00]';
                      fontWeight = 'font-bold';
                      hoverClass = '';
                    } else if (isTodayDate && !selectedDate) {
                      bgColor = 'bg-[#FFC80B]';
                      textColor = 'text-[#503A00]';
                      fontWeight = 'font-bold';
                      hoverClass = 'hover:bg-[#e6b40a]';
                    } else if (isTodayDate && selectedDate) {
                      bgColor = 'bg-gray-200';
                      textColor = 'text-[#1C1B1B]';
                      fontWeight = 'font-medium';
                      hoverClass = 'hover:bg-gray-300';
                    } else if (isPast) {
                      bgColor = '';
                      textColor = 'text-[#D3C5AE]';
                      hoverClass = 'cursor-not-allowed';
                      fontWeight = 'font-medium';
                    } else {
                      bgColor = '';
                      textColor = 'text-[#4F4634]/60';
                      hoverClass = 'hover:bg-gray-50';
                      fontWeight = 'font-medium';
                    }

                    return (
                      <motion.button
                        key={day}
                        variants={fadeInUp}
                        onClick={() => handleDateSelect(day)}
                        disabled={!selectable}
                        className={`h-8 sm:h-10 rounded-lg text-xs sm:text-sm ${fontWeight} transition-all duration-200 ${bgColor} ${textColor} ${hoverClass}`}
                        whileHover={selectable ? { scale: 1.05 } : {}}
                        whileTap={selectable ? { scale: 0.95 } : {}}
                      >
                        {day}
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Right - Time Slots */}
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-[30%] p-6 sm:p-8"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm sm:text-base font-medium text-[#1C1B1B] mb-4">
                    {getSelectedDateDisplay()}
                  </h3>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2 sm:space-y-3 max-h-[300px] sm:max-h-[362px] overflow-y-auto pr-2"
                >
                  {timeSlots.map((time, index) => {
                    const selectable = isTimeSelectable(time);
                    const isSelectedTime = selectedTime === time;

                    return (
                      <motion.button
                        key={index}
                        variants={fadeInUp}
                        onClick={() => handleTimeSelect(time)}
                        disabled={!selectable}
                        className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-center text-xs sm:text-sm transition-all duration-200 ${isSelectedTime
                            ? 'bg-[#FFC80B]/10 border-2 border-[#FFC80B] text-[#1C1B1B] font-semibold'
                            : selectable
                              ? 'border border-[#D3C5AE]/30 text-[#4F4634] hover:border-[#FFC80B] hover:bg-[#FFC80B]/5'
                              : 'border border-[#D3C5AE]/20 text-[#D3C5AE] cursor-not-allowed opacity-50'
                          }`}
                        whileHover={selectable ? { scale: 1.02, x: 3 } : {}}
                        whileTap={selectable ? { scale: 0.98 } : {}}
                      >
                        {time}
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer with Next Button - Step 1 */}
        <AnimatePresence>
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="border-t border-[#D3C5AE]/30 px-6 sm:px-8 py-3 sm:py-4 flex justify-end"
            >
              <motion.button
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${selectedDate && selectedTime
                    ? 'bg-[#FFC80B] text-[#503A00] hover:bg-[#e6b40a] shadow-lg shadow-[#FFC80B]/30'
                    : 'bg-[#FFC80B]/50 text-[#503A00]/50 cursor-not-allowed min-w-[120px] sm:min-w-[150px]'
                  }`}
                whileHover={selectedDate && selectedTime ? { scale: 1.05 } : {}}
                whileTap={selectedDate && selectedTime ? { scale: 0.95 } : {}}
              >
                Next →
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Enter Details */}
        <AnimatePresence mode="wait">
          {currentStep === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col lg:flex-row gap-6 p-6 sm:p-8"
            >
              {/* Left - Form Box */}
              <motion.div
                variants={itemVariants}
                className="flex-1 bg-white rounded-[32px] border border-[#D3C5AE]/30 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <motion.h2
                    variants={fadeInUp}
                    className="text-base font-medium text-[#1C1B1B] mb-6"
                  >
                    Please enter your details
                  </motion.h2>

                  <motion.form
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* First Name & Last Name */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          First Name <span className="text-[#BA1A1A]">*</span>
                        </label>
                        <motion.input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter first name"
                          className="w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#6B7280] focus:outline-none focus:border-[#FFC80B] transition-colors"
                          required
                          whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          Last Name <span className="text-[#BA1A1A]">*</span>
                        </label>
                        <motion.input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter last name"
                          className="w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#6B7280] focus:outline-none focus:border-[#FFC80B] transition-colors"
                          required
                          whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                        />
                      </div>
                    </motion.div>

                    {/* Email & Contact Number */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          Email <span className="text-[#BA1A1A]">*</span>
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#6B7280] focus:outline-none focus:border-[#FFC80B] transition-colors"
                          required
                          whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                        />
                      </div>

                      {/* Contact Number with Country Code - Searchable Dropdown with Validation */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          Contact Number <span className="text-[#BA1A1A]">*</span>
                        </label>
                        <div className="flex">
                          {/* Country Code Select - Searchable Dropdown */}
                          <div className="relative" ref={countryDropdownRef}>
                            <div
                              className="h-[48.39px] px-3 pr-8 bg-[#F6F3F2]/40 border border-r-0 border-[#D3C5AE]/40 rounded-l-lg text-sm text-[#1C1B1B] flex items-center cursor-pointer min-w-[120px]"
                              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                            >
                              <span className="truncate">
                                {formData.countryCode ? `${countryCodes.find(c => c.code === formData.countryCode)?.flag || '🌍'} ${formData.countryCode}` : '🌍 Select'}
                              </span>
                              <svg className="w-3 h-3 text-[#6B7280] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>

                            {isCountryDropdownOpen && (
                              <div className="absolute z-50 top-full left-0 mt-1 w-[280px] bg-white border border-[#D3C5AE]/40 rounded-lg shadow-lg max-h-[300px] overflow-hidden">
                                <div className="p-2 border-b border-[#D3C5AE]/20">
                                  <input
                                    type="text"
                                    placeholder="Search country..."
                                    value={searchCountry}
                                    onChange={(e) => setSearchCountry(e.target.value)}
                                    className="w-full px-3 py-2 border border-[#D3C5AE]/30 rounded-lg text-sm focus:outline-none focus:border-[#FFC80B]"
                                    autoFocus
                                  />
                                </div>
                                <div className="overflow-y-auto max-h-[250px]">
                                  {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country) => (
                                      <div
                                        key={country.code}
                                        onClick={() => {
                                          setFormData(prev => ({ ...prev, countryCode: country.code, contactNumber: '' }));
                                          setIsCountryDropdownOpen(false);
                                          setSearchCountry('');
                                          setPhoneError('');
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2.5 hover:bg-[#F6F3F2] cursor-pointer transition-colors ${formData.countryCode === country.code ? 'bg-[#FFC80B]/10' : ''
                                          }`}
                                      >
                                        <span className="text-lg">{country.flag}</span>
                                        <span className="text-sm font-medium text-[#1C1B1B]">{country.code}</span>
                                        <span className="text-sm text-[#6B7280]">{country.country}</span>
                                        <span className="text-xs text-[#9CA3AF] ml-auto">ex: {country.example}</span>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="px-4 py-3 text-sm text-[#6B7280]">No countries found</div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                          {/* Phone Number Input */}
                          <div className="flex-1">
                            <motion.input
                              type="tel"
                              name="contactNumber"
                              value={formData.contactNumber}
                              onChange={handleInputChange}
                              placeholder="Enter your contact number"
                              className={`w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-r-lg text-sm text-[#6B7280] focus:outline-none transition-colors ${phoneError ? 'border-red-500 focus:border-red-500' : 'focus:border-[#FFC80B]'
                                }`}
                              required
                              whileFocus={{ scale: 1.01 }}
                            />
                            {phoneError && (
                              <p className="text-xs text-red-500 mt-1">{phoneError}</p>
                            )}
                            {formData.contactNumber && !phoneError && formData.contactNumber.length >= 4 && (
                              <p className="text-xs text-green-500 mt-1">✓ Valid phone number</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Company Website & Project Type */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          Company Website
                        </label>
                        <motion.input
                          type="text"
                          name="companyWebsite"
                          value={formData.companyWebsite}
                          onChange={handleInputChange}
                          placeholder="https://yourcompany.com"
                          className="w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#6B7280] focus:outline-none focus:border-[#FFC80B] transition-colors"
                          whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          Project Type <span className="text-[#BA1A1A]">*</span>
                        </label>
                        <motion.select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#1C1B1B] focus:outline-none focus:border-[#FFC80B] transition-colors appearance-none"
                          required
                          whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                        >
                          <option value="">Select project type</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile Development">Mobile Development</option>
                          <option value="AI Development">AI Development</option>
                          <option value="Cloud Solutions">Cloud Solutions</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="API Integration">API Integration</option>
                          <option value="Game Development">Game Development</option>
                          <option value="Healthcare Solutions">Healthcare Solutions</option>
                          <option value="Digital Transformation">Digital Transformation</option>
                          <option value="Other">Other</option>
                        </motion.select>
                      </div>
                    </motion.div>

                    {/* Estimated Budget & Preferred Timeline */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          Estimated Budget <span className="text-[#BA1A1A]">*</span>
                        </label>
                        <motion.select
                          name="estimatedBudget"
                          value={formData.estimatedBudget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#1C1B1B] focus:outline-none focus:border-[#FFC80B] transition-colors appearance-none"
                          required
                          whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                        >
                          <option value="">Select budget range</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="$100,000+">$100,000+</option>
                        </motion.select>
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                          Preferred Timeline <span className="text-[#BA1A1A]">*</span>
                        </label>
                        <motion.select
                          name="preferredTimeline"
                          value={formData.preferredTimeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#1C1B1B] focus:outline-none focus:border-[#FFC80B] transition-colors appearance-none"
                          required
                          whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                        >
                          <option value="">Select timeline</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="6-12 Months">6-12 Months</option>
                          <option value="12+ Months">12+ Months</option>
                        </motion.select>
                      </div>
                    </motion.div>

                    {/* Project Details */}
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label className="flex items-center gap-1 text-sm font-semibold text-[#4F4634]">
                        Please share what you'd like to cover about your project in our meeting. <span className="text-[#BA1A1A]">*</span>
                      </label>
                      <motion.textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Tell us about your goals, challenges, and how we can help..."
                        rows="4"
                        className="w-full px-4 py-3 bg-[#F6F3F2]/20 border border-[#D3C5AE]/40 rounded-lg text-sm text-[#6B7280] focus:outline-none focus:border-[#FFC80B] transition-colors resize-none"
                        required
                        whileFocus={{ scale: 1.01, borderColor: "#FFC80B" }}
                      />
                    </motion.div>

                    {/* Terms & Conditions */}
                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                      <motion.input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 mt-0.5 border border-[#D3C5AE]/60 rounded bg-white focus:ring-[#FFC80B]"
                        required
                        whileTap={{ scale: 0.9 }}
                      />
                      <label className="text-sm text-[#4F4634]/80">
                        I have read and agree to Faité's Terms and Conditions and Privacy Policy.
                      </label>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={fadeInUp} className="flex gap-4">
                      <motion.button
                        type="button"
                        onClick={handleBack}
                        className="px-3 sm:px-6 py-3 rounded-xl border border-[#D3C5AE]/40 text-[#4F4634] font-semibold text-sm hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="submit"
                        disabled={!formData.agreeTerms}
                        className={`flex-1 sm:flex-none px-12 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${formData.agreeTerms
                            ? 'bg-gradient-to-r from-[#FFC80B] to-[#E0A20B] text-white shadow-lg shadow-[#D4A017]/30 hover:shadow-xl hover:shadow-[#D4A017]/40'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        whileHover={formData.agreeTerms ? { scale: 1.03 } : {}}
                        whileTap={formData.agreeTerms ? { scale: 0.97 } : {}}
                      >
                        Schedule Appointment →
                      </motion.button>
                    </motion.div>
                  </motion.form>
                </div>
              </motion.div>

              {/* Right - Security Sidebar */}
              <motion.div
                variants={itemVariants}
                className="lg:w-[340px] xl:w-[400px] flex-shrink-0"
              >
                <motion.div
                  className="bg-white rounded-[32px] border border-[#D3C5AE]/30 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden sticky top-6 h-full"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="p-6 sm:p-8 flex flex-col h-full">
                    <motion.div
                      className="w-full h-[200px] sm:h-[250px] bg-gradient-to-br from-[#FFC80B]/10 to-[#FFC80B]/5 rounded-2xl flex items-center justify-center mb-4 overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={SecurityImage}
                        alt="Security"
                        className="w-full h-full object-cover"
                        animate={{
                          y: [0, -8, 0],
                          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                      />
                    </motion.div>

                    <motion.h4
                      className="text-center text-base font-medium text-[#1C1B1B] mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Your data is secure
                    </motion.h4>
                    <motion.p
                      className="text-center text-sm text-[#4F4634]/70 leading-relaxed max-w-[280px] mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      We respect your privacy and protect your information with enterprise-grade security.
                    </motion.p>

                    <div className="border-t border-[#D3C5AE]/10 my-4"></div>

                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="w-10 h-10 rounded-[30px] bg-[#FFC80B]/10 border border-[#FFC80B] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#795900]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm italic text-[#4F4634]/80 leading-relaxed">
                          You'll receive a confirmation email with meeting details and a calendar invite.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}