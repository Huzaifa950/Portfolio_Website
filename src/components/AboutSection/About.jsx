import React, { useEffect, useRef, useState } from 'react';
import BasicCard from "../ReusableComponents/Card";
import "./About.css";
import {
  faPooStorm,
  faStairs,
  faIndustry,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const storyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 2000); // Duration of the animation
        }
      },
      { threshold: 0.1 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <div id="aboutMain" className="aboutMain">
      <div
        className="aboutHeading"
        style={{ fontSize: "xx-large", fontWeight: "bold" }}
      >
        <p style={{ textTransform: "uppercase", margin:'0 0 50px 0' }}>About</p>
      </div>
      <div className={`aboutStory ${isVisible ? 'visible' : ''}`} ref={storyRef}>
        <p>
          I am currently working as an <b>Associate Software Engineer</b> at{" "}
          <i>Burnt Brains</i> Lahore, Pakistan. During my last semester, just 3
          months away from completing my degree, I was presented with this
          incredible opportunity. After experiencing many ups and downs
          throughout my degree, it finally felt like the time to reap the
          rewards of all the hardships I had endured, made possible with the
          unwavering support of my family, friends, and teachers.
        </p>
      </div>
      <div
        className="storyHeading"
        style={{
          fontSize: "x-large",
          fontWeight: "bold",
          textAlign: "center",
          margin: "0 0 30px 0",
          textDecoration: "underline",
        }}
      >
        <p>My Story</p>
      </div>
      <div
        className="cardsSection"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "0 20px",
        }}
      >
        <div className="aboutCards">
          <BasicCard
            title="Struggle"
            text="At the start of my degree, I encountered significant challenges as I initially felt disconnected from the field of Computer Science. The concepts were difficult to grasp, and I frequently questioned my place in this discipline. Despite these obstacles, I remained determined and worked diligently to overcome them and succeed"
            icon={faPooStorm}
            color="#B6C7AA"
          />
        </div>
        <div className="aboutCards">
          <BasicCard
            title="Consistency"
            text="Throughout my journey in Computer Science, I demonstrated unwavering consistency. Despite facing initial challenges and complex concepts, I maintained a steady commitment to my studies. My persistent effort and dedication allowed me to overcome obstacles and steadily progress in my field, showcasing my resilience and determination to succeed"
            icon={faStairs}
            color="#677D6A"
          />
        </div>
        <div className="aboutCards">
          <BasicCard
            title="Industry"
            text="By the end of my degree, I successfully secured a position in the industry where I am gaining valuable hands-on experience. This opportunity has allowed me to apply the skills and knowledge I acquired throughout my studies in real-world scenarios, further enhancing my expertise and preparing me for future challenges in my field"
            icon={faIndustry}
            color="#B6C7AA"
          />
        </div>
        <div className="aboutCards">
          <BasicCard
            title="Achievements"
            text="Through consistent effort and dedication, I maintained an impressive CGPA by the end of my degree. Just a few days after joining the industry, my dedication and consistency led to my assignment on a U.S.-based project. I successfully delivered multiple projects, meeting all client requirements and showcasing my ability to excel in a professional setting"
            icon={faTrophy}
            color="#677D6A"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
