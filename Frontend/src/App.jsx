// App.jsx - Usage
import React from "react";
import { useEffect } from "react";
import Home from "./page/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./page/Projects/Projects";
import ProjectDetail from "./page/ProjectDetail";
import Services from "./page/Services/Services";
import ServiceDetailPage from "./page/Services/ServiceDetails.jsx/ServiceDetailPage";
import LetTalk from "./page/LetsTalk/LetTalk";
import Careers from "./page/Career/Careers";
import CareersApply from "./page/Career/CareersApply";
import AboutUs from "./page/About/AboutUs";
import Contact from "./page/Contact/Contact";
import Blog from "./page/Blog/Blog";
import BlogDetails from "./page/Blog/BlogDetails";


// import Products from "./pages/Products";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/let-talk" element={<LetTalk />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply/:id" element={<CareersApply />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:slug" element={<BlogDetails />} />
      
        {/* Add other routes as you create them */}
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </>
  );
}

export default App;
