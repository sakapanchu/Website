// src/pages/Home.jsx
import AIProducts from "../../components/Home/AIProducts";
import Header from "../../components/Heder";
import Hero from "../../components/Home/HeroSection";
import Products from "../../components/Home/Products";
import Projects from "../../components/Home/Projects";
import Services from "../../components/Home/Services";
import Partners from "../../components/Home/Partners";
import AboutUs from "../../components/Home/About";
import Testimonials from "../../components/Home/Testimonials";
import Process from "../../components/Home/Process";
import Insights from "../../components/Home/Insights";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects/>
      <Services/>
      <Products/>
      <AIProducts/>
      <Partners />
      <AboutUs />
      <Testimonials/>
      <Process/>
      <Insights/>
      <Contact/>
      <Footer/>
    </>
  );
}