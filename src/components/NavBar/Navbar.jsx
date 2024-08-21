import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navbar.css';
import logo from '../../assets/Logo_bg.png';

const NavbarComp = ({ scrollToSection, refs, navbarRef }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setExpanded(false); // Collapse the navbar
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        className="sticky-top"
        id="navbar"
        style={{ backgroundColor: '#677D6A' }} 
        expanded={expanded}
        ref={navbarRef}
      >
        <Container>
          <Navbar.Brand onClick={() => handleNavClick(refs.homeRef)} style={{ cursor: 'pointer' }}>
            <img
              src={logo}
              className="d-inline-block align-center brand-logo"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="navBarLink mx-auto" style={{ textAlign: 'center', fontSize: 'small', visibility: 'visible' }}>
              <Nav.Link href="#home" onClick={() => handleNavClick(refs.homeRef)}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={() => handleNavClick(refs.aboutRef)}>About</Nav.Link>
              <Nav.Link href="#skills" onClick={() => handleNavClick(refs.skillsRef)}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={() => handleNavClick(refs.projectsRef)}>Projects</Nav.Link>
              <Nav.Link href="#experiences" onClick={() => handleNavClick(refs.experiencesRef)}>Experiences</Nav.Link>
              <Nav.Link href="#services" onClick={() => handleNavClick(refs.servicesRef)}>Services</Nav.Link>
              <Nav.Link href="#contact" onClick={() => handleNavClick(refs.contactRef)}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
