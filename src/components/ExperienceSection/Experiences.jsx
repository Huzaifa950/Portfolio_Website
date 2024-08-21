import React, { useEffect, useRef } from 'react';
import BurntBrains from '../../assets/BurntBrains.png';
import GCU_Logo from '../../assets/GCU_Logo.png'
import './Experiences.css';

function Experiences() {

  useEffect(() => {
    const experienceBoxes = document.querySelectorAll('.experienceBox');

    function handleScroll() {
      experienceBoxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;

        if (boxTop < triggerBottom) {
          box.style.animation = `movedown 1s linear forwards ${index * 0.5}s`;
          box.style.opacity = '1';
        } else {
          box.style.animation = 'none';
          box.style.opacity = '0';
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener on unmount
    };
  }, []);

  
  return (

    <div id='experienceMain' className='experienceMain'>
      <div className='experienceContainer'>
        <div className='experienceHeading' style={{ fontSize: "xx-large", fontWeight: "bold" }}>
          <p style={{ textTransform: "uppercase", margin: '0 0 50px 0' }}>Experience</p>
        </div>
        <div className="experienceTimeline">

          <div className="experienceBox leftExperienceBox">
            <img src={GCU_Logo} alt="" />
            <div className="experienceTextbox">
              <p className='experienceTextboxHeading'>GCU DIT</p>
              <p className='experienceTextboxTime'>Aug 2023 - Nov 2023</p>
              <p className='experienceTextboxTime'>Role: Student Developer</p>
              <p className='experienceTextboxBody'>During my 7th semester at GCU, I was selected as a Student Developer for the development of the GCU 360 website, which was in its initial phase. However, due to decisions made at higher levels, the project was ultimately discontinued.</p>
              <span class="leftExperienceBoxArrow"></span>
            </div>
          </div>

          <div className="experienceBox rightExperienceBox ">
            <img src={BurntBrains} alt="" />
            <div className="experienceTextbox">
              <p className='experienceTextboxHeading'>Burnt Brains</p>
              <p className='experienceTextboxTime'>Mar 2024 - May 2024</p>
              <p className='experienceTextboxTime'>Role: Backend Developer Intern</p>
              <p className='experienceTextboxBody'>In my 8th semester, I began working as a Backend Developer Intern at BurntBrains in Lahore. This position allowed me to work extensively with tools like Postman for CRUD operations and further develop my backend development expertise. The skills and experience I gained during this internship led to an offer for a permanent role with the company.</p>
              <span class="rightExperienceBoxArrow"></span>
            </div>
          </div>

          <div className="experienceBox leftExperienceBox">
            <img src={BurntBrains} alt="" />
            <div className="experienceTextbox">
              <p className='experienceTextboxHeading'>Burnt Brains</p>
              <p className='experienceTextboxTime'>June 2024 - Present</p>
              <p className='experienceTextboxTime'>Role: Associate Software Engineer</p>
              <p className='experienceTextboxBody'>During the final days of my internship, I was blessed with the opportunity to transition into a permanent role as an Associate Software Engineer. This ongoing journey has allowed me to work on US-based project, where I am dedicated to delivering my best efforts and continuously contributing to the success of my team and the project I am involved in.</p>
              <span class="leftExperienceBoxArrow"></span>
            </div>
          </div>


        </div>
      </div>
    </div>


  );
}

export default Experiences;