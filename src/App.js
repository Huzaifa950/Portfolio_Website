import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComp from "./components/NavBar/Navbar";
import Home from "./components/HeroSection/Hero";
import About from "./components/AboutSection/About";
import Skills from "./components/SkillsSection/Skills";
import Projects from "./components/ProjectSection/Projects";
import Experiences from "./components/ExperienceSection/Experiences";
import Services from "./components/ServicesSection/Services";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/Footer/Footer";


const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const navbarRef = useRef(null);

  const scrollToSection = (ref) => {
    if (navbarRef.current) {
      const offset = navbarRef.current.clientHeight-10;
      window.scrollTo({
        top: ref.current.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Router>
      <NavbarComp
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, skillsRef, projectsRef, experiencesRef, servicesRef, contactRef }}
        navbarRef={navbarRef}
      />
      <div ref={homeRef} >
        <Home />
      </div>
      <div ref={aboutRef} >
        <About />
      </div>
      <div ref={skillsRef} >
        <Skills />
      </div>
      <div ref={projectsRef} >
        <Projects />
      </div>
      <div ref={experiencesRef} >
        <Experiences />
      </div>
       <div ref={servicesRef} >
        <Services />
      </div>
      <div ref={contactRef} >
        <Contact />
      </div>
      <div >
        <Footer />
      </div>
    </Router>
  );
}

export default App;
