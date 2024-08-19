import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft, faPersonChalkboard, faWaveSquare, faLaptopCode, faCode } from "@fortawesome/free-solid-svg-icons";
import ServicesCard from '../ReusableComponents/ServicesCard';
import './Services.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSingleServiceView, setIsSingleServiceView] = useState(window.innerWidth < 898);

  const services = [
    {
      icon: faWaveSquare,
      heading: "Figma to Web Page",
      body: "If you are looking to transform your Figma designs, PSDs, and other design files into flawless, pixel-perfect web pages look no more. I have a strong background in converting designs into fully responsive web pages, I ensure top-notch quality and precision. Don't miss the opportunity to elevate your project — Click on Contact Button to start the conversation today.",
      buttonLink: "#"
    },
    {
      icon: faPersonChalkboard,
      heading: "JS Code Explanation",
      body: "Master JavaScript with expert guidance! With nearly two years of hands-on experience, I have successfully completed a wide range of projects centered around JavaScript. Whether you're just starting out or looking to deepen your understanding of complex concepts, I'm here to help. Don't hesitate—reach out today to embark on your journey to JavaScript proficiency.",
      buttonLink: "#"
    },
    {
      icon: faLaptopCode,
      heading: "Landing Page using React",
      body: "If you're aiming to attract more customers and stand out in the digital marketplace, look no further. As a skilled professional, I specialize in creating visually appealing and highly effective landing pages. By enhancing user experience and engagement, I can help increase your customer reach and drive conversions. Click on Contact Button to discuss your project and take the first step toward digital success.",
      buttonLink: "#"
    },
    {
      icon: faCode,
      heading: "HubSpot Custom Components",
      body: "Enhance your HubSpot experience with custom components tailored to your specific business needs! Unlock the full potential of HubSpot by integrating personalized solutions designed to streamline your processes and improve user engagement. Click on Contact Button to discuss what type of component you want to embedd in your HubSpot account & elevate your CRM capabilities.",
      buttonLink: "#"
    },
  ];

  const handleResize = () => {
    setIsSingleServiceView((window.innerWidth < 1200 && window.innerWidth > 1000 )|| (window.innerWidth < 850));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : services.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < services.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div id="servicesMain" className='servicesMain'>
      <div className='servicesContainer'>
        <div className='servicesHeading'>
          <p>My Services</p>
        </div>


        <div className='servicesBox'>
          <div className='servicesBoxLeft'>
            <div className='servicesBoxLeftHead'>
              <p>What I Do?</p>
            </div>
            <div className='servicesBoxLeftBody' style={{ margin: '0 0 0 20px' }}>
              <p>As a professional, I specialize in converting Figma designs into seamless, pixel-perfect web pages that are fully responsive and ready for any device. With a strong command of JavaScript, I provide straightforward explanations of code to help you deepen your understanding. I also create captivating landing pages using React, designed to enhance user engagement and elevate your online presence. Additionally, I develop custom components for HubSpot that are tailored to your business needs, optimizing your workflow and improving platform efficiency. I'm just a click away — feel free to reach out to start a meaningful conversation about how I can assist with your task or project.</p>
            </div>
            <div className="servicesContact">
              <a href="#contactMain" className="servicesContactButton">Contact Now!</a>
            </div>
          </div>

          <div className='servicesBoxRight'>
            {currentIndex > 0 && (
              <button className="servicesArrowButton servicesLeft" onClick={handlePrev}>
                <FontAwesomeIcon icon={faAnglesLeft} />
              </button>
            )}
            <div className="serviceWrapper">
              <div
                className="serviceSlider"
                style={{
                  transform: `translateX(-${currentIndex * (isSingleServiceView ? 100 : 50)}%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    className="serviceCard"
                    key={index}
                    style={{ minWidth: isSingleServiceView ? "100%" : "50%" }}
                  >
                    <ServicesCard
                      icon={service.icon}
                      heading={service.heading}
                      body={service.body}
                      buttonLink={service.buttonLink}
                    />
                  </div>
                ))}
              </div>
            </div>
            {currentIndex < services.length - 1 && (
              <button className="servicesArrowButton servicesRight" onClick={handleNext}>
                <FontAwesomeIcon icon={faAnglesRight} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;