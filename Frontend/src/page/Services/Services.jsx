import Header from "../../components/Heder";
import Footer from "../../components/Footer";
import ServiceHeroSection from "../../components/Services/ServiceHeroSection";
import ServicesCards from "../../components/Services/ServicesCards";
import FeaturedService from "../../components/Services/FeaturedService";
import CtaSection from "../../components/Services/CtaSection";

export default function Services() {
  return (
    <>
      <Header />
      <ServiceHeroSection />
      <ServicesCards/>
      <FeaturedService/>
      <CtaSection/>
      <Footer/>
    </>
  );
}