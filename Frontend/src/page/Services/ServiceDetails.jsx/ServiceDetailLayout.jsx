import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import ServiceHero from "../../../components/Services/ServiceDetails/ServiceHero";
import ServiceTransformation from "../../../components/Services/ServiceDetails/ServiceTransformation";
import ServiceCoreFeatures from "../../../components/Services/ServiceDetails/ServiceCoreFeatures";
import ServiceTechStack from "../../../components/Services/ServiceDetails/ServiceTechStack";
import ServiceProcess from "../../../components/Services/ServiceDetails/ServiceProcess";
import ServiceCTA from "../../../components/Services/ServiceDetails/ServiceCTA";
import ServiceRecentProjects from "../../../components/Services/ServiceDetails/ServiceRecentProjects";
import Header from "../../../components/Heder";
import Footer from "../../../components/Footer";

export default function ServiceDetailLayout({ service }) {
  const navigate = useNavigate();

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  return (
    <div className="bg-[#F1F1F1]">
      <Header />
      {/* Hero Section - Slide from left */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <ServiceHero service={service} />
      </motion.div>

      {/* Transformation Section - Fade up with stagger */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={sectionVariants}
        custom={0}
      >
        <ServiceTransformation service={service} />
      </motion.div>

      {/* Core Features - Scale up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        <ServiceCoreFeatures service={service} />
      </motion.div>

      {/* Tech Stack - Slide from right */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <ServiceTechStack service={service} />
      </motion.div>

      {/* Process - Fade up with stagger */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={sectionVariants}
        custom={1}
      >
        <ServiceProcess service={service} />
      </motion.div>

      {/* CTA Section - Slide from bottom */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            },
          },
        }}
      >
        <ServiceCTA service={service} />
      </motion.div>

      {/* Recent Projects - Rotate and scale */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, rotateY: -10, scale: 0.95 },
          visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        <ServiceRecentProjects service={service} />
      </motion.div>

      <Footer />
    </div>
  );
}
