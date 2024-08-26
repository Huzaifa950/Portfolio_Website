import React from 'react';
import SkillProgressBar from '../ReusableComponents/SkillProgressBar'
import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHubspot } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { TbBrandNetflix } from "react-icons/tb";
import './Skills.css';

function Skills() {
  return (
    <div id="skillsMain" className='skillsMain'>
      <div className='skillsHeading' style={{ fontSize: "xx-large", fontWeight: "bold" }}>
        <p style={{ textTransform: "uppercase", margin: '0 0 50px 0' }}>Skills</p>
      </div>

      <div className='bars_description' style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div className='progressBars' style={{ marginLeft: '20PX' }}>


          <div className="JavaScript">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <p>JavaScript</p>
              <TbBrandJavascript style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }} />
            </div>
            <SkillProgressBar now={73} label={73} />
          </div>


          <div className="HubSpot">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <p>HubSpot CRM</p>
              <FaHubspot style={{ color: '#FF7F3E', fontSize: '30px', fontWeight: 'bold' }} />
            </div>
            <SkillProgressBar now={56} label={56} />
          </div>


          <div className="React">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <p>React</p>
              <FaReact style={{ color: '#3FA2F6', fontSize: '30px', fontWeight: 'bold' }} />
            </div>
            <SkillProgressBar now={68} label={68} />
          </div>


          <div className="NetSuite">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <p>NetSuite CRM</p>
              <TbBrandNetflix style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }} />
            </div>
            <SkillProgressBar now={38} label={38} />
          </div>


          <div className="PostMan">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <p>POSTMAN</p>
              <SiPostman style={{ color: '#FF9100', fontSize: '30px', fontWeight: 'bold' }} />
            </div>
            <SkillProgressBar now={58} label={58} />
          </div>


          <div className="Git">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <p>Git & GitHub</p>
              <IoLogoGithub style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }} />
            </div>
            <SkillProgressBar now={30} label={30} />
          </div>

          {/* <div className="CSS">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p>CSS</p>
              <FaCss3 style={{ color: '#1D24CA', fontSize: '30px', fontWeight: 'bold' }} />
            </div>
            <SkillProgressBar now={60} label={60} />
          </div> */}

        </div>
        <div className='description'>
          <p style={{ fontSize: '18px', fontWeight: '700', textDecoration: "underline", margin: '20px 0' }}>Description</p>
          <p className='descriptionBody'>
            I have developed multiple pages using <b><i>HTML and CSS</i></b>, which greatly enhanced my foundational skills in basic development. Additionally, I have tackled various tasks using pure <b><i>JavaScript</i></b>, such as updating HubSpot Deal Owners based on specific requirements and optimizing existing code for improved professionalism and efficiency. <br />My experience extends to creating custom cards in HubSpot using <b><i>React</i></b>, where I gained valuable hands-on experience and insights into React components. I have also worked extensively with <b><i>HubSpot CRM</i></b>, including designing and implementing workflows from scratch that trigger based on specific criteria, streamlining processes and enhancing functionality. <br /> <i>As a committed learner, I am enthusiastic about continuously expanding my skill set and exploring new opportunities for growth and innovation.</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;