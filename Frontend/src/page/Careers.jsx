import Header from "../components/Heder";
import Footer from "../components/Footer";
import CareersHero from "../components/Careers/CareersHero";
import WhyChooseUs from "../components/Careers/WhyChooseUs";
import CultureBanner from "../components/Careers/CultureBanner";
import JobOpportunities from "../components/Careers/JobOpportunities";
import ProcessSection from "../components/Careers/ProcessSection";
import BenefitsSection from "../components/Careers/BenefitsSection";
import BottomCTA from "../components/Careers/BottomCTA";

export default function Careers() {
  return (
    <>
      <Header />
      <CareersHero />
      <WhyChooseUs />
      <CultureBanner />
      <JobOpportunities />
      <ProcessSection />
      <BenefitsSection />
      <BottomCTA />
      <Footer />
    </>
  );
}
