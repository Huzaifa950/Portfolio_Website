// import React from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import imageUrl from "../../assets/PersonalPhoto.png";
// import dummyProfile from "../../assets/DummyProfile.jpg";
import personalPortfolio from "../../assets/Portfolio_Photo.png";
import Tilt from 'react-parallax-tilt';
import './Hero.css';

// Hero component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset animation when element exits the viewport
          setTimeout(() => setIsVisible(false), 2000); // Duration of the animation
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (roleRef.current) {
      observer.observe(roleRef.current);
    }

    return () => {
      if (roleRef.current) {
        observer.unobserve(roleRef.current);
      }
    };
  }, []);

  const heroStyle = {
    alignItems: "center",
    padding: "50px 0",
    backgroundColor: "#B6C7AA",
    height: "auto"
  };

  const textStyle = {
    flex: 1,
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
  };

  const role = {
    fontSize: "28px",
    color: '#597445',
  }

  return (
    <div style={heroStyle}>
      <div id="mainHero" class="mainHero">
        <div class="textStyle" style={textStyle}>
          <div>
            <p style={{ textAlign: 'center', textTransform: 'uppercase', color: '#597445', fontSize: 'larger', margin: '50px auto' }}>
              Welcome to My Portfolio Showcase</p>
            <p>Hello! I'M An</p>
            <p style={role}
              className={`role ${isVisible ? 'animate' : ''}`}
              ref={roleRef}>Associate Software Engineer.</p>
            <p class="smallIntro" className={`smallIntro ${isVisible ? 'animate' : ''}`}><br />Hi, This is Muhammad Huzaifa, a passionate Associate Software Engineer at Burnt Brains. I am 2024 graduate from Government College University, Lahore.</p>
          </div>

          <div className="heroSocialMedia">
            <SocialIcon className="socialIcon" url="https://www.linkedin.com/in/mhuzaifa440/" target='_blank' style={{ height: 30, width: 30 }} />
            <SocialIcon className="socialIcon" url="https://github.com/Huzaifa950" target='_blank' style={{ height: 30, width: 30 }} />
            <SocialIcon className="socialIcon" url="https://medium.com/@huzaifa12345612" target='_blank' style={{ height: 30, width: 30 }} />
            <SocialIcon className="socialIcon" url="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=mhuzaifa.prof@gmail.com&tf=1" target='_blank' style={{ height: 30, width: 30 }} />
          </div>

          <div className='CV_Section'>
            <a href="https://drive.google.com/file/d/1JyNgG7BPf5wXDV0YYZ_nwbiz7Wm9I9Sz/view?usp=drive_link" download="My_CV.pdf" target='_blank'>
              <button className="hero_CV">Download CV</button>
            </a>
          </div>
        </div>
        <div>
          <Tilt className="tilt-box" options={{ max: 50 }}>
            <img src={personalPortfolio} alt="User" className="imageStyle" />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
