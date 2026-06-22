import Header from "../../components/Heder";
import Footer from "../../components/Footer";
import ContactHero from "../../components/Contact/ContactHero";
import ContactForm from "../../components/Contact/ContactForm";
import ReachUsSection from "../../components/Contact/ReachUsSection";
import MapSection from "../../components/Contact/MapSection";
import FAQSection from "../../components/Contact/FAQSection";

export default function Contact() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactForm />
      <ReachUsSection/>
      <MapSection/>
      <FAQSection/>
      <Footer />
    </>
  );
}