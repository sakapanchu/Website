import Header from "../../components/Heder";
import Footer from "../../components/Footer";
import AboutHero from "../../components/About/AboutHero";
import OurStory from "../../components/About/OurStory";
import OurJourney from "../../components/About/OurJourney";
import OurPartnerships from "../../components/About/OurPartnerships";
import OurJourneySection from "../../components/About/OurJourneySection";
import MeetOurTeam from "../../components/About/MeetOurTeam";
import OurFoundation from "../../components/About/OurFoundation";
import CtaSection from "../../components/About/CtaSection";


export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutHero/>
      <OurStory/>
      <OurJourney/>
      <OurPartnerships/>
      <OurJourneySection/>
      <MeetOurTeam/>
      <OurFoundation/>
      <CtaSection/>
      <Footer/>
    </>
  );
}