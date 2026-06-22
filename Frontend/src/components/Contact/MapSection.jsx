import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function MapSection() {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [isFullscreen, setIsFullscreen] = useState(false);

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Google Maps Embed URL - FAITE PVT LTD, Jaffna, Sri Lanka
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.9672256319272!2d80.08965577480242!3d9.683838290406005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53003a84d0ed%3A0x1a541afbf3c3262b!2sFAITE%20PVT%20LTD!5e0!3m2!1sen!2slk!4v1782125466957!5m2!1sen!2slk";

  // Function to handle fullscreen
  const toggleFullscreen = () => {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    if (!document.fullscreenElement) {
      mapContainer.requestFullscreen().catch(err => {
        console.log('Error attempting to enable fullscreen:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Function to zoom in (using Google Maps URL parameters)
  const zoomIn = () => {
    const currentSrc = iframeRef.current?.src;
    if (currentSrc) {
      const zoomMatch = currentSrc.match(/!(\d+)z/);
      const currentZoom = zoomMatch ? parseInt(zoomMatch[1]) : 15;
      const newZoom = Math.min(currentZoom + 1, 21);
      
      const newSrc = currentSrc.replace(/!(\d+)z/, `!${newZoom}z`);
      iframeRef.current.src = newSrc;
    }
  };

  // Function to zoom out
  const zoomOut = () => {
    const currentSrc = iframeRef.current?.src;
    if (currentSrc) {
      const zoomMatch = currentSrc.match(/!(\d+)z/);
      const currentZoom = zoomMatch ? parseInt(zoomMatch[1]) : 15;
      const newZoom = Math.max(currentZoom - 1, 1);
      
      const newSrc = currentSrc.replace(/!(\d+)z/, `!${newZoom}z`);
      iframeRef.current.src = newSrc;
    }
  };

  // Function to search (opens Google Maps in new tab with search)
  const handleSearch = () => {
    const searchQuery = "FAITE PVT LTD, Jaffna, Sri Lanka";
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[#F1F1F1] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto"
      >
        {/* Description Text */}
        <motion.p 
          variants={contentVariants}
          className="text-sm sm:text-base lg:text-[16px] font-medium text-[#000000] leading-6 sm:leading-7 lg:leading-[36px] text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10"
        >
          Faite located in Jaffna, our workspace is where creativity, collaboration, and technology come together to build impact digital experiences.
        </motion.p>

        {/* Map Container */}
        <motion.div 
          id="map-container"
          variants={contentVariants}
          className="relative w-full bg-[#E5E7EB] border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden"
        >
          {/* Google Maps Iframe - Using Google Maps Embed API */}
          <iframe
            ref={iframeRef}
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map - FAITE PVT LTD, Jaffna, Sri Lanka"
            className="w-full"
          />

          {/* Search Bar - Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="FAITE PVT LTD, Jaffna"
                onClick={handleSearch}
                className="w-48 sm:w-56 md:w-72 h-9 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] rounded-lg pl-4 pr-10 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F4B400] cursor-pointer hover:bg-gray-50 transition-colors"
                readOnly
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Zoom Controls - Moved to Top Right to avoid overlapping with Google's controls */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <button 
              onClick={zoomIn}
              className="w-8 h-8 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Zoom in"
            >
              <svg className="w-3.5 h-3.5 text-[#4B5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button 
              onClick={zoomOut}
              className="w-8 h-8 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Zoom out"
            >
              <svg className="w-3.5 h-3.5 text-[#4B5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
          </div>

          {/* Fullscreen Button - Bottom Right */}
          <button 
            onClick={toggleFullscreen}
            className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Fullscreen"
          >
            <svg className="w-3.5 h-3.5 text-[#4B5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}