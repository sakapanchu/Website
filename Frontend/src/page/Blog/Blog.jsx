import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../../components/Heder";
import Footer from "../../components/Footer";

// Assets imports as specified
import ColomboLotusTower from "../../assets/colombo_lotus_tower_night.png";
import AIFutureRobot from "../../assets/ai_future_robot_neon.png";
import BlockchainCrypto from "../../assets/blockchain_crypto_bitcoin.png";
import GreenTechSolar from "../../assets/green_tech_solar_plant.png";
import QuantumComputing from "../../assets/quantum_computing_breakthrough.png";
import MetaverseVR from "../../assets/metaverse_vr_glasses.png";
import AutonomousVehicles from "../../assets/autonomous_self_driving_car.png";
import MarsMission from "../../assets/mars_mission_rocket.png";

export default function Blog() {
  const containerRef = useRef(null);

  // Scroll animations setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const latestPosts = [
    {
      id: 1,
      category: "TECHNOLOGY",
      badgeColor: "bg-[#0052FF]",
      title: "Blockchain Revolution: Web3 Technologies Transform Digital Economy",
      description: "Explore how decentralized technologies are creating new opportunities for businesses and reshaping the digital landscape.",
      date: "DEC 13, 2026",
      image: BlockchainCrypto,
    },
    {
      id: 2,
      category: "SUSTAINABILITY",
      badgeColor: "bg-[#28A745]",
      title: "Green Tech Innovation: Sustainable Solutions for Tomorrow",
      description: "Discover breakthrough technologies that are driving the transition to a more sustainable and environmentally conscious future.",
      date: "DEC 10, 2026",
      image: GreenTechSolar,
    },
    {
      id: 3,
      category: "RESEARCH",
      badgeColor: "bg-[#7030A0]",
      title: "Quantum Computing Breakthrough: New Horizons in Processing Power",
      description: "Scientists achieve major milestone in quantum computing, opening doors to unprecedented computational capabilities.",
      date: "DEC 8, 2026",
      image: QuantumComputing,
    },
    {
      id: 4,
      category: "VR/AR",
      badgeColor: "bg-[#E83E8C]",
      title: "Metaverse Evolution: Virtual Worlds Become Reality",
      description: "The metaverse is evolving rapidly with new VR/AR technologies creating immersive digital experiences.",
      date: "DEC 6, 2026",
      image: MetaverseVR,
    },
    {
      id: 5,
      category: "AUTOMOTIVE",
      badgeColor: "bg-[#17A2B8]",
      title: "Autonomous Vehicles: The Road to Self-Driving Future",
      description: "Major automakers announce breakthrough in autonomous driving technology, bringing us closer to fully self-driving cars.",
      date: "DEC 4, 2026",
      image: AutonomousVehicles,
    },
    {
      id: 6,
      category: "SPACE",
      badgeColor: "bg-[#FD7E14]",
      title: "Mars Mission Update: Humanity's Next Giant Leap",
      description: "Latest developments in Mars exploration technology bring us one step closer to establishing human presence on the Red Planet.",
      date: "DEC 3, 2026",
      image: MarsMission,
    },
  ];

  // Framer Motion variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F1F1F1] text-black overflow-x-hidden pt-[115px]">
      <Header />

      <main className="max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[650px] rounded-[40px] overflow-hidden group shadow-md"
        >
          {/* Background Image Container with parallax & hover zoom */}
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
            {/* Dark & Golden gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16 text-white max-w-4xl space-y-6">
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

            {/* Meta Tags */}
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

            {/* Read story button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="self-start group flex items-center gap-3 px-6 py-3.5 border border-white/30 rounded-full text-white font-semibold backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Read full story
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </motion.button>
          </div>
        </motion.section>

        {/* FEATURED STORY */}
        <section className="space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="border-l-4 border-[#FFC80B] pl-4"
          >
            <h2 className="text-3xl font-bold font-Inter">Featured Story</h2>
            <p className="text-gray-500 mt-1 font-Inter">Stay ahead with our most impactful tech insights</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row rounded-[24px] overflow-hidden bg-[#161616] border border-[#262626] shadow-xl group"
          >
            {/* Left AI Image */}
            <div className="lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url(${AIFutureRobot})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent lg:hidden" />
            </div>

            {/* Right details */}
            <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-6 text-white bg-[#111111]">
              <span className="text-xs font-bold tracking-[1.5px] text-[#FFC80B] uppercase">
                FEATURED ARTICLE
              </span>

              <div className="space-y-4">
                <span className="text-xs text-gray-500 font-semibold uppercase block">
                  December 15, 2026
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-snug group-hover:text-[#FFC80B] transition-colors duration-300">
                  The Future of AI: How Machine Learning is Reshaping Industries
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                  Discover how artificial intelligence is revolutionizing healthcare, finance, and manufacturing. From predictive analytics to autonomous systems, explore the transformative power of AI technologies.
                </p>
              </div>

              <motion.a
                href="/blog/ai-future"
                whileHover={{ x: 6 }}
                className="self-start text-[#FFC80B] hover:text-[#e6b40a] font-bold text-sm flex items-center gap-2 group/link transition-colors duration-300"
              >
                Continue Reading
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* LATEST NEWS GRID */}
        <section className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="border-l-4 border-[#FFC80B] pl-4"
          >
            <h2 className="text-3xl font-bold font-Inter">Latest News</h2>
            <p className="text-gray-500 mt-1 font-Inter">Stay updated with the latest trends, breakthroughs, and insights from the world of technology.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {latestPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white border border-[#CFC8C8] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Post Image with dynamic sweep effect */}
                <div className="relative h-[220px] overflow-hidden group/img">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full bg-cover bg-center transition-transform duration-500"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Category Badge */}
                  <span className={`absolute top-4 left-4 inline-block px-3 py-1 text-[10px] font-bold tracking-wider rounded-md border backdrop-blur-md ${post.badgeColor}`}>
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-[19px] font-bold text-black leading-snug hover:text-[#FFC80B] transition-colors duration-300 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-gray-500 font-light leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {post.date}
                    </span>
                    <motion.a
                      href={`/blog/post-${post.id}`}
                      whileHover={{ x: 4 }}
                      className="text-[#FFC80B] font-bold hover:text-[#e6b40a] transition-colors"
                    >
                      →
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
