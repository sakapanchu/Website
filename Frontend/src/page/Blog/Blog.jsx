import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Heder";
import Footer from "../../components/Footer";

// Assets imports
import ColomboLotusTower from "../../assets/colombo_lotus_tower_night.png";
import AIFutureRobot from "../../assets/ai_future_robot_neon.png";
import BlockchainCrypto from "../../assets/blockchain_crypto_bitcoin.png";
import GreenTechSolar from "../../assets/green_tech_solar_plant.png";
import QuantumComputing from "../../assets/quantum_computing_breakthrough.png";
import MetaverseVR from "../../assets/metaverse_vr_glasses.png";
import AutonomousVehicles from "../../assets/autonomous_self_driving_car.png";
import MarsMission from "../../assets/mars_mission_rocket.png";

export default function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const latestRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, amount: 0.2 });
  const featuredInView = useInView(featuredRef, { once: false, amount: 0.2 });
  const latestInView = useInView(latestRef, { once: false, amount: 0.1 });

  const heroControls = useAnimation();
  const featuredControls = useAnimation();
  const latestControls = useAnimation();

  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    } else {
      heroControls.start('hidden');
    }
  }, [heroInView, heroControls]);

  useEffect(() => {
    if (featuredInView) {
      featuredControls.start('visible');
    } else {
      featuredControls.start('hidden');
    }
  }, [featuredInView, featuredControls]);

  useEffect(() => {
    if (latestInView) {
      latestControls.start('visible');
    } else {
      latestControls.start('hidden');
    }
  }, [latestInView, latestControls]);

  // Define all blog posts with slugs for routing
  const allPosts = [
    {
      id: 1,
      slug: "blockchain-revolution-web3",
      category: "TECHNOLOGY",
      badgeColor: "bg-[#2563EB]",
      title: "Blockchain Revolution: Web3 Technologies Transform Digital Economy",
      description: "Explore how decentralized technologies are creating new opportunities for businesses and reshaping the digital landscape.",
      date: "DEC 12, 2024",
      image: BlockchainCrypto,
      content: "Full content for Blockchain Revolution article goes here..."
    },
    {
      id: 2,
      slug: "green-tech-innovation",
      category: "SUSTAINABILITY",
      badgeColor: "bg-[#16A34A]",
      title: "Green Tech Innovation: Sustainable Solutions for Tomorrow",
      description: "Discover breakthrough technologies that are driving the transition to a more sustainable and environmentally conscious future.",
      date: "DEC 10, 2024",
      image: GreenTechSolar,
      content: "Full content for Green Tech Innovation article goes here..."
    },
    {
      id: 3,
      slug: "quantum-computing-breakthrough",
      category: "RESEARCH",
      badgeColor: "bg-[#9333EA]",
      title: "Quantum Computing Breakthrough: New Horizons in Processing Power",
      description: "Scientists achieve major milestone in quantum computing, opening doors to unprecedented computational capabilities.",
      date: "DEC 8, 2024",
      image: QuantumComputing,
      content: "Full content for Quantum Computing article goes here..."
    },
    {
      id: 4,
      slug: "metaverse-evolution",
      category: "VR/AR",
      badgeColor: "bg-[#DB2777]",
      title: "Metaverse Evolution: Virtual Worlds Become Reality",
      description: "The metaverse is evolving rapidly with new VR/AR technologies creating immersive digital experiences.",
      date: "DEC 6, 2024",
      image: MetaverseVR,
      content: "Full content for Metaverse Evolution article goes here..."
    },
    {
      id: 5,
      slug: "autonomous-vehicles-future",
      category: "AUTOMOTIVE",
      badgeColor: "bg-[#4F46E5]",
      title: "Autonomous Vehicles: The Road to Self-Driving Future",
      description: "Major automakers announce breakthrough in autonomous driving technology, bringing us closer to fully self-driving cars.",
      date: "DEC 4, 2024",
      image: AutonomousVehicles,
      content: "Full content for Autonomous Vehicles article goes here..."
    },
    {
      id: 6,
      slug: "mars-mission-update",
      category: "SPACE",
      badgeColor: "bg-[#EA580C]",
      title: "Mars Mission Update: Humanity's Next Giant Leap",
      description: "Latest developments in Mars exploration technology bring us one step closer to establishing human presence on the Red Planet.",
      date: "DEC 2, 2024",
      image: MarsMission,
      content: "Full content for Mars Mission article goes here..."
    },
  ];

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageKey(prev => prev + 1);
    if (latestRef.current) {
      latestRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const [pageKey, setPageKey] = useState(0);

  // Navigate to blog details page
  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  // Function to scroll to Latest News section
  const scrollToLatestNews = () => {
    if (latestRef.current) {
      latestRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Animation variants - Top to Bottom
  const heroVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Animation variants - Bottom to Top for Featured section
  const featuredVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const featuredContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const featuredImageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  // Latest News - Row by row animation with individual row controls
  const latestHeaderVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Row container variants - each row animates with stagger
  const rowContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        type: "spring",
        stiffness: 70,
        damping: 18
      },
    },
  };

  const paginationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 }
    }
  };

  // Split posts into rows of 3
  const getRows = (posts) => {
    const rows = [];
    for (let i = 0; i < posts.length; i += 3) {
      rows.push(posts.slice(i, i + 3));
    }
    return rows;
  };

  const rows = getRows(currentPosts);

  // Row visibility - each row has its own observer
  const RowWithObserver = ({ children, rowIndex }) => {
    const rowRef = useRef(null);
    const rowInView = useInView(rowRef, { once: false, amount: 0.2 });
    const rowControls = useAnimation();

    useEffect(() => {
      if (rowInView) {
        rowControls.start('visible');
      } else {
        rowControls.start('hidden');
      }
    }, [rowInView, rowControls]);

    return (
      <motion.div
        ref={rowRef}
        variants={rowContainerVariants}
        initial="hidden"
        animate={rowControls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {children}
      </motion.div>
    );
  };

  // Featured story click handler
  const handleFeaturedReadMore = () => {
    navigate('/blog/the-future-of-ai');
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#F1F1F1] text-black overflow-x-hidden pt-[110px]">
      <Header />

      <main className="max-w-[1430px] mx-auto px-3 sm:px-5 md:px-6 lg:px-0 py-8 space-y-16">
        {/* HERO SECTION - Top to Bottom */}
        <motion.section
          ref={heroRef}
          variants={heroVariants}
          initial="hidden"
          animate={heroControls}
          className="relative min-h-screen rounded-[20px_20px_90px_90px] overflow-hidden group shadow-md"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `url(${ColomboLotusTower})`,
                backgroundPosition: "center 40%"
              }}
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16 bottom-10 text-white max-w-4xl space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-[#FFC80B] text-black text-xs font-bold uppercase tracking-wider rounded-md mb-4 shadow-[0_4px_12px_rgba(255,200,11,0.25)]">
                NEWS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight">
                Global Innovation <br />
                Summit & Retreat <br />
                <span className="text-[#FFC80B]">Sri Lanka 2025</span>
              </h1>
            </div>

            <p className="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">
              Join global visionaries, tech leaders, and innovators for a transformative summit & retreat in the heart of Sri Lanka.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFC80B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Mar 15 - 17, 2025
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFC80B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
                Colombo, Sri Lanka
              </span>
            </div>

            <motion.button
              onClick={scrollToLatestNews}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="self-start group flex items-center gap-3 px-6 py-3 border border-[#FFC80B] rounded-full text-white font-semibold backdrop-blur-sm bg-[#FFC80B]/20 hover:bg-[#FFC80B]/30 hover:text-white hover:border-[#FFC80B]/50 transition-all duration-300"
            >
              Read full story
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M9.33333 12.6667L14 8.00004L9.33333 3.33337M14 8.00004H2"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </motion.section>

        {/* FEATURED STORY - Bottom to Top */}
        <motion.section
          ref={featuredRef}
          variants={featuredVariants}
          initial="hidden"
          animate={featuredControls}
          className="space-y-6"
        >
          <motion.div
            variants={featuredContentVariants}
          >
            <h2 className="text-3xl font-bold font-Inter">Featured Story</h2>
            <p className="text-gray-500 mt-1 font-Inter">Stay ahead with our most impactful tech insights</p>
          </motion.div>

          <motion.div
            variants={featuredContentVariants}
            className="flex flex-col lg:flex-row rounded-[20px] overflow-hidden bg-[#151515] border border-white/5 shadow-xl group cursor-pointer"
            onClick={handleFeaturedReadMore}
          >
            <motion.div
              variants={featuredImageVariants}
              className="lg:w-1/2 w-full relative min-h-[280px] sm:min-h-[350px] lg:min-h-[480px] overflow-hidden"
            >
              <img
                src={AIFutureRobot}
                alt="AI Future Robot"
                className="w-full h-full object-cover object-center rounded-[20px_0_0_20px] lg:rounded-[20px_0_0_20px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent lg:hidden" />
            </motion.div>

            <motion.div
              variants={featuredContentVariants}
              className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6 text-white"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#9CA3AF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-xs text-[#9CA3AF] font-medium">December 15, 2024</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold leading-snug text-white group-hover:text-[#FFC80B] transition-colors duration-300">
                The Future of AI: How Machine Learning is Reshaping Industries
              </h3>
              <p className="text-[#9CA3AF] font-light leading-relaxed text-sm sm:text-base">
                Discover how artificial intelligence is revolutionizing healthcare, finance, and manufacturing. From predictive analytics to autonomous systems, explore the transformative power of AI technologies.
              </p>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFeaturedReadMore();
                }}
                whileHover={{ x: 6 }}
                className="self-start text-[#FFC80B] hover:text-[#e6b40a] font-semibold text-base flex items-center gap-2 group/link transition-colors duration-300"
              >
                Continue Reading
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* LATEST NEWS GRID - Row by Row Animation */}
        <motion.section
          ref={latestRef}
          className="space-y-8"
        >
          <motion.div
            variants={latestHeaderVariants}
            initial="hidden"
            animate={latestControls}
          >
            <h2 className="text-3xl font-bold font-Inter">Latest News</h2>
            <p className="text-gray-500 mt-1 font-Inter">Stay updated with the latest trends, breakthroughs, and insights from the world of technology.</p>
          </motion.div>

          {/* Rows - Each row has its own observer and animates independently */}
          <div className="space-y-6">
            {rows.map((row, rowIndex) => (
              <RowWithObserver key={`${pageKey}-row-${rowIndex}`} rowIndex={rowIndex}>
                {row.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: "#FFC80B",
                      boxShadow: "0 8px 30px rgba(255,200,11,0.15)"
                    }}
                    className="bg-white border border-gray-200 rounded-[20px] overflow-hidden shadow-sm transition-all duration-300 flex flex-col h-full cursor-pointer"
                    onClick={() => handleReadMore(post.slug)}
                  >
                    <div className="relative h-[215px] overflow-hidden rounded-t-[20px]">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-cover bg-center transition-transform duration-500"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      <span className={`absolute top-4 left-4 inline-block px-3 py-1 text-[10px] font-bold tracking-wider rounded-full text-white uppercase shadow-sm ${post.badgeColor}`}>
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-[18px] font-bold text-black leading-snug hover:text-[#FFC80B] transition-colors duration-300 cursor-pointer line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[14px] text-[#9CA3AF] font-light leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider flex items-center gap-1.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {post.date}
                        </span>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadMore(post.slug);
                          }}
                          whileHover={{ x: 4 }}
                          className="text-[#FFC80B] font-bold hover:text-[#e6b40a] transition-colors text-lg"
                        >
                          →
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </RowWithObserver>
            ))}
          </div>

          {/* Pagination */}
          {allPosts.length > postsPerPage && (
            <motion.div
              variants={paginationVariants}
              initial="hidden"
              animate={latestControls}
              className="flex justify-center items-center gap-3 pt-6"
            >
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium transition-all duration-300 ${
                  currentPage === 1
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400'
                    : 'hover:bg-[#FFC80B] hover:border-[#FFC80B] hover:text-black bg-white text-gray-700'
                }`}
              >
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-300 ${
                      currentPage === pageNum
                        ? 'bg-[#FFC80B] text-black border border-[#FFC80B]'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-[#FFC80B]/20 hover:border-[#FFC80B]'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400'
                    : 'hover:bg-[#FFC80B] hover:border-[#FFC80B] hover:text-black bg-white text-gray-700'
                }`}
              >
                Next
              </button>
            </motion.div>
          )}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}