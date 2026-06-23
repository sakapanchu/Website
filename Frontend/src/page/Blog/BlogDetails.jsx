import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import Header from "../../components/Heder";
import Footer from "../../components/Footer";
import { getBlogBySlug } from "../../data/blogDetails";

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  const blog = getBlogBySlug(slug);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F1F1F1] pt-28">
        <Header />
        <div className="max-w-screen-2xl mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800"
          >
            Blog Post Not Found
          </motion.h1>
          <p className="text-gray-500 mt-4">
            The article you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="mt-6 px-6 py-3 bg-[#FFC80B] text-black font-bold rounded-full hover:bg-[#e6b40a] transition-colors"
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  const splitContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.15,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  const imageContentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const backButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#F1F1F1] text-black overflow-x-hidden pt-28"
    >
      <Header />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-[1430px] mx-auto px-3 sm:px-5 md:px-6 lg:px-0 py-8 space-y-16"
      >
        <motion.section variants={contentVariants} className="space-y-7">
          {/* Back Button */}
          <motion.div variants={backButtonVariants} className="pt-2">
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 text-[#176F7A] hover:text-[#0f4a52] transition-colors font-semibold group"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </button>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={titleVariants}
            className="text-[34px] sm:text-[40px] lg:text-[52px] font-bold text-[#176F7A] leading-[1.08] text-center max-w-6xl mx-auto"
          >
            {blog.title}
          </motion.h1>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            className="relative w-full rounded-[20px_20px_46px_46px] overflow-hidden"
          >
            <img
              src={blog.heroImage || blog.image}
              alt={blog.title}
              className="w-full h-72 sm:h-96 lg:h-160 object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content Container */}
          <motion.div
            variants={contentVariants}
            className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="max-w-7xl mx-auto space-y-5">
              {blog.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <motion.p
                      key={index}
                      variants={contentVariants}
                      custom={index}
                      className="text-[14px] sm:text-[15px] font-normal text-[#4B5563] leading-6 hover:text-[#374151] transition-colors duration-300"
                    >
                      {item.text}
                    </motion.p>
                  );
                }

                if (item.type === "heading") {
                  return (
                    <motion.h2
                      key={index}
                      variants={headingVariants}
                      className="text-[28px] sm:text-[30px] font-bold text-[#1B3A97] leading-[1.1] pt-3 hover:text-[#15307a] transition-colors duration-300"
                    >
                      {item.text}
                    </motion.h2>
                  );
                }

                if (item.type === "split") {
                  const imageFirst = item.imagePosition !== "right";

                  return (
                    <motion.div
                      key={index}
                      variants={splitContentVariants}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-start pt-1"
                    >
                      {imageFirst ? (
                        <>
                          <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src={item.image}
                            alt={item.imageAlt || "Blog detail"}
                            className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                          />
                          <motion.p
                            variants={contentVariants}
                            className="text-[14px] sm:text-[15px] font-normal text-[#4B5563] leading-6 hover:text-[#374151] transition-colors duration-300"
                          >
                            {item.text}
                          </motion.p>
                        </>
                      ) : (
                        <>
                          <motion.p
                            variants={contentVariants}
                            className="text-[14px] sm:text-[15px] font-normal text-[#4B5563] leading-6 order-2 lg:order-1 hover:text-[#374151] transition-colors duration-300"
                          >
                            {item.text}
                          </motion.p>
                          <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src={item.image}
                            alt={item.imageAlt || "Blog detail"}
                            className="w-full h-48 sm:h-64 object-cover rounded-2xl order-1 lg:order-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                          />
                        </>
                      )}
                    </motion.div>
                  );
                }

                if (item.type === "link") {
                  return (
                    <motion.a
                      key={index}
                      variants={linkVariants}
                      href={item.href || "#"}
                      className="text-[14px] font-medium text-[#2563EB] leading-5 block hover:underline hover:text-[#1d4ed8] transition-colors duration-300"
                    >
                      {item.text}
                    </motion.a>
                  );
                }

                if (item.type === "numbered-list") {
                  return (
                    <motion.ol
                      key={index}
                      variants={contentVariants}
                      className="space-y-3 list-decimal pl-5"
                    >
                      {item.items.map((listItem, listIndex) => (
                        <motion.li
                          key={listIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: listIndex * 0.1 }}
                          className="text-[14px] sm:text-[15px] font-semibold text-[#1B3A97] leading-6 hover:text-[#15307a] transition-colors duration-300"
                        >
                          {listItem}
                        </motion.li>
                      ))}
                    </motion.ol>
                  );
                }

                if (item.type === "text-image-section") {
                  return (
                    <motion.div
                      key={index}
                      variants={splitContentVariants}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-start pt-2"
                    >
                      <div className="space-y-3">
                        <motion.h3
                          variants={headingVariants}
                          className="text-[28px] sm:text-[30px] font-bold text-[#1B3A97] leading-[1.1] hover:text-[#15307a] transition-colors duration-300"
                        >
                          {item.heading}
                        </motion.h3>
                        <motion.p
                          variants={contentVariants}
                          className="text-[14px] sm:text-[15px] font-normal text-[#4B5563] leading-6 hover:text-[#374151] transition-colors duration-300"
                        >
                          {item.description}
                        </motion.p>
                        <motion.ol
                          variants={contentVariants}
                          className="space-y-3 list-decimal pl-5"
                        >
                          {item.points.map((point, pointIndex) => (
                            <motion.li
                              key={pointIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: pointIndex * 0.1,
                              }}
                              className="text-[14px] sm:text-[15px] font-semibold text-[#1B3A97] leading-6 hover:text-[#15307a] transition-colors duration-300"
                            >
                              {point}
                            </motion.li>
                          ))}
                        </motion.ol>
                        {item.footer && (
                          <motion.p
                            variants={contentVariants}
                            className="text-[13px] italic text-[#6B7280] leading-5"
                          >
                            {item.footer}
                          </motion.p>
                        )}
                      </div>
                      <motion.img
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        src={item.image}
                        alt={item.imageAlt || "Blog detail"}
                        className="w-full h-60 sm:h-80 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                    </motion.div>
                  );
                }

                if (item.type === "image") {
                  return (
                    <motion.img
                      key={index}
                      variants={imageContentVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      src={item.image}
                      alt={item.imageAlt || "Blog detail"}
                      className="w-full max-w-xl h-60 sm:h-80 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  );
                }

                return null;
              })}
            </div>
          </motion.div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}
