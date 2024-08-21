import React, { useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons'
import './Footer.css'
const Footer = () => {

  useEffect(() => {
    const handleLinkClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 50; 
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    const footerLinks = document.querySelectorAll('.footerLinks a');
    footerLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      footerLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="footerMain">
      <div className="footerContainer">
        <div className="footerBody">
          <div className="footerHeading">
            <p>Let'$ Connect</p>
          </div>
          <div className="footerSocialIcons">
            <SocialIcon className="socialIcon" url="https://www.linkedin.com/in/mhuzaifa440/" target='_blank' style={{ height: 30, width: 30 }} />
            <SocialIcon className="socialIcon" url="https://github.com/Huzaifa950" target='_blank' style={{ height: 30, width: 30 }} />
            <SocialIcon className="socialIcon" url="https://www.instagram.com/m.huzaifa500/" target='_blank' style={{ height: 30, width: 30 }} />
            <SocialIcon className="socialIcon" url="https://medium.com/@huzaifa12345612" target='_blank' style={{ height: 30, width: 30 }} />
            <SocialIcon className="socialIcon" url="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=mhuzaifa.prof@gmail.com&tf=1" target='_blank' style={{ height: 30, width: 30 }} />
          </div>
          <div className="footerLinks">
            <a href="#mainHero" className="">Home</a>
            <a href="#aboutMain" className="">About</a>
            <a href="#skillsMain" className="">Skills</a>
            <a href="#projectMain" className="">Projects</a>
            <a href="#experienceMain" className="">Experiences</a>
            <a href="#servicesMain" className="">Services</a>
            <a href="#contactMain" className="">Contact</a>
          </div>
        </div>
        <div className="footerCopyRight">
          <p>Copyright &copy; 2024 | Designed by Muhammad Huzaifa</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;