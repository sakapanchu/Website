import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import blog images
import BlogAI from "../../assets/insight1.png";
import BlogBlockchain from "../../assets/insight2.png";
import BlogCloud from "../../assets/insight3.png";

export default function Insights() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business Systems",
      description:
        "Discover how artificial intelligence is revolutionizing industries through automation, smart analytics, customer personalization, and intelligent decision-making systems.",
      category: "AI / ML",
      date: "MAY 10, 2025",
      readTime: "5 MIN READ",
      image: BlogAI,
      link: "/insights/ai-future",
    },
    {
      id: 2,
      title: "Blockchain Beyond Cryptocurrency",
      description:
        "Exploring real-world applications of blockchain in enterprises.",
      category: "BLOCKCHAIN",
      date: "AUG 06, 2025",
      readTime: "6 MIN READ",
      image: BlogBlockchain,
      link: "/insights/blockchain",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Trends in 2026",
      description:
        "Learn how modern cloud technologies are enabling businesses to scale faster, improve security, and optimize operational efficiency.",
      category: "CLOUD",
      date: "DEC 28, 2025",
      readTime: "4 MIN READ",
      image: BlogCloud,
      link: "/insights/cloud-trends",
    },
  ];

  const handleReadAll = () => {
    navigate("/insights");
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const cardContainerVariants = {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 px-3 sm:px-6 bg-[#F1F1F1] overflow-hidden"
    >
      <div className="max-w-[1430px] mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-[35px] font-bold text-black leading-[48px]">
              Featured Insights
            </h2>
            <p className="text-[16px] font-normal text-[#6B7280] leading-6 mt-2">
              Insights, innovations, and digital trends shaping the future of
              businesses and technology.
            </p>
          </div>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white border border-[#CFC8C8] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[224px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(255, 200, 11, 0.1) 100%)`,
                    }}
                  ></div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3.5 left-4 z-10">
                  <span className="inline-block px-3 py-[1.5px] bg-[#222222]/80 backdrop-blur-sm text-[#FFC80B] text-[10px] font-bold uppercase tracking-wide rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-[20px] font-bold text-black leading-[28px] hover:text-[#FFC80B] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-[14px] font-normal text-[#6B7280] leading-5">
                  {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#6B7280]">
                      {post.date}
                    </span>
                    <span className="text-[10px] font-bold text-[#6B7280]">
                      •
                    </span>
                    <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#6B7280]">
                      {post.readTime}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate(post.link)}
                    className="text-[#FFC80B] text-[18px] font-bold hover:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Read all insights  */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-8"
        >
          <button
            onClick={handleReadAll}
            className="group inline-flex mt-10 items-center justify-center mx-auto gap-1.5 px-6 py-5 border border-[#FAD007] bg-[rgba(0,0,0,0.004)] text-black font-semibold rounded-full hover:bg-[#e6b40a] transition-all duration-300 font-Montserrat"
            style={{
              width: "321px",
              height: "48px",
              boxShadow: "4px 6px 20px rgba(255, 200, 11, 0.25)",
            }}
          >
            Read all insights →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
