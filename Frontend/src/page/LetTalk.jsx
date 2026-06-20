import Header from "../components/Heder";
import Footer from "../components/Footer";
import LetsTalkHero from "../components/LetTalk/LetsTalkHero";
import { BookingInterface } from "../components/LetTalk/BookingInterface";



export default function Services() {
  return (
    <>
      <Header />
      <LetsTalkHero/>
      <BookingInterface/>
      <Footer/>
    </>
  );
}