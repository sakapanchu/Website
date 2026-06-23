import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LetsTalkBg from "../../assets/letTalk.png";

export default function LetsTalkHero() {
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

  // Animation variants
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main
      ref={sectionRef}
      className="min-h-auto mt-32 bg-[#F1F1F1] p-4 sm:p-6 lg:p-8 lg:pt-2 font-inter"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full max-w-[1430px] mx-auto overflow-hidden rounded-[10px_70px] border border-[#FFC80B]"
        style={{
          backgroundImage: `url(${LetsTalkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "260px",
        }}
      >
        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col min-h-[260px]">
          <div className="flex-1 px-3 sm:px-6 sm:px-12 lg:px-16 py-12 flex items-center">
            <motion.div variants={contentVariants} className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.2] lg:leading-[60px] mb-4">
                <span className="text-white [text-shadow:0_1px_0_#000]">
                  Let's <span className="text-[#FFC80B]">Talk</span>
                </span>
              </h1>

              <p className="text-gray-300 text-base  sm:text-lg lg:text-[20px] font-semibold leading-[1.4] lg:leading-[28px] max-w-[600px]">
                Book a quick discovery session with our team to discuss your
                project, goals, and technical needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
