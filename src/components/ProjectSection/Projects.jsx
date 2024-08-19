import React, { useState, useEffect } from "react";
import ImgMediaCard from "../ReusableComponents/ProjectCards";
import customLineItemsImg from "../../assets/Custom LineItems.jpg";
import dealOwnerUpdateImg from "../../assets/Owner_Update.jpg";
import portfolioVid from "../../assets/Portfolio.mp4";
import CareAtHomeVid from '../../assets/FYP.mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
  faAnglesRight,
  faAnglesLeft
} from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSingleProjectView, setIsSingleProjectView] = useState(window.innerWidth < 898);

  const projects = [
    {
      image: customLineItemsImg,
      heading: "HubSpot Custom Card",
      description: "HubSpot React JavaScript",
      githubLink: "https://github.com/Huzaifa950/Custom-Line-Items-with-JS-React"
    },
    {
      image: CareAtHomeVid,
      heading: "Care At Home",
      description: "React NodeJs MySQL",
      githubLink: "https://github.com/Huzaifa950/CareAtHome-Frontend"
    },
    {
      image: dealOwnerUpdateImg,
      heading: "Update Deal Owner",
      description: "HubSpot JavaScript",
      githubLink: "https://github.com/Huzaifa950/DealOwnerUpdate_HubSpot-JS"
    },
    {
      image: portfolioVid,
      heading: "Personal Portfolio",
      description: "HTML CSS JavaScript",
      githubLink: "https://github.com/Huzaifa950/Personal-Portfolio"
    },
  ];

  const handleResize = () => {
    setIsSingleProjectView(window.innerWidth < 898);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div id="projectMain" className="projectMain">
      <div className="projectContainer">
        <div
          className="projectHeading"
          style={{
            fontSize: "xx-large",
            fontWeight: "bold",
            margin: "0 0 50px 0",
          }}
        >
          <p style={{ textTransform: "uppercase" }}>My Work</p>
        </div>

        <div className="projectBody">
          <p>I am pleased to showcase some of my key projects below, each of which has been instrumental in deepening my technical expertise. These projects reflect my dedication, hard work, and persistence, and I take pride in discussing them. By exploring the code linked via the buttons below each project, you can gain insight into the challenges I tackled and the solutions I implemented.</p>
        </div>

        {currentIndex > 0 && (
          <button className="projectsArrowButton projectsLeft" onClick={handlePrev}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        )}
        <div className="projectWrapper">
          <div
            className="projectSlider"
            style={{
              transform: `translateX(-${currentIndex * (isSingleProjectView ? 100 : 50)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                className="projectCard"
                key={index}
                style={{ minWidth: isSingleProjectView ? "100%" : "50%" }}
              >
                <ImgMediaCard
                  image={project.image}
                  heading={project.heading}
                  description={project.description}
                  githubLink={project.githubLink} 
                />
              </div>
            ))}
          </div>
        </div>
        {currentIndex < projects.length - 2 && (
          <button className="projectsArrowButton projectsRight" onClick={handleNext}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
