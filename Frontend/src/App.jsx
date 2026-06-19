// App.jsx - Usage
import React from "react";
import { useEffect } from "react";
import Home from "./page/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./page/Projects";
import ProjectDetail from "./page/ProjectDetail";
import Services from "./page/Services";
import ServiceDetailPage from "./page/ServiceDetails.jsx/ServiceDetailPage";
// import Careers from "./pages/Careers";
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
        {/* Add other routes as you create them */}
        {/* <Route path="/careers" element={<Careers />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
