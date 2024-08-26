import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView, faMobileScreen, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from 'react-social-icons';
import emailjs from 'emailjs-com';
import ToastMessage from '../ReusableComponents/Toast'; // Adjust the path as needed
import './Contact.css';

const Contact = () => {

  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false); // Define state here

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      to_name: 'Muhammad Huzaifa', // Replace with the actual recipient's name
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    const SERVICE_ID = 'service_p20cjmd';
    const TEMPLATE_ID = 'template_bnt3guc';
    const USER_ID = 'PPeZhnOsxB2HBGjbh';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowToast(true); // Set showToast to true
        setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
        // alert('Message sent successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message, please try again.');
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contactMain" className="contactMain">
      <div className="contactContainer">
        <div className="contactHeading" style={{ fontSize: "xx-large", fontWeight: "bold", margin: "0 0 50px 0" }}>
          <p style={{ textTransform: "uppercase" }}>Get In Touch</p>
        </div>
        <div className="contactBody" style={{ margin: "0 0 50px 0" }}>
          <p>I am always available to assist you. Please feel free to reach out whenever you need help. Your success is my priority, and I am committed to providing prompt and effective support. Don't hesitate to contact me with any questions or concerns. I look forward to helping you achieve your goals.</p>
        </div>

        <div className="contactCard" >
          <div className="contactCardLeft" style={{ backgroundColor: '#B6C7AA', flex: '0 0 30%' }}>
            <div className="contactCardLeftHeading" style={{ fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 50px 0', textAlign: 'center' }}>
              <p>Contact Information</p>
            </div>
            <div className="contactCardLeftBody">
              <div>
                <FontAwesomeIcon icon={faStreetView} style={{ fontSize: '20px', color: 'black' }} />
                <p>House No, E-4A-1 Mohalla Nadirabad Bedian Road, Lahore Cantt</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: '20px', color: 'black' }} />
                <p>(+92) 322 3174540</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: 'black', wordBreak: 'break-all' }} />
                <p>mhuzaifa.prof@gmail.com</p>
              </div>
              <div className="contactSocialMedia" style={{ display: 'flex', justifyContent: 'space-evenly', wordWrap: 'break-word' }}>
                <SocialIcon className="socialIcon" url="https://www.instagram.com/m.huzaifa500/" target='_blank' style={{ height: 40, width: 40 }} />
                <SocialIcon className="socialIcon" url="https://api.whatsapp.com/send/?phone=923223174540" target='_blank' style={{ height: 40, width: 40 }} />
                <SocialIcon className="socialIcon" url="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=mhuzaifa.prof@gmail.com&tf=1" target='_blank' style={{ height: 40, width: 40 }} />
              </div>
            </div>
          </div>

          <div className="contactCardRight" style={{ backgroundColor: '#9daf8f', flex: '0 0 70%' }}>
            <div className="contactCardRightHeading" style={{ fontSize: 'x-large', fontWeight: 'bold', margin: '0 0 20px 0' }}>
              <p>Reach Out To Me</p>
              <div className="toastMessage">
                {showToast && <ToastMessage />}
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="contactFormMain">
                <div className="contactNameEmail">
                  <div className="contactName" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required />
                  </div>

                  <div className="contactEmail" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
                  </div>
                </div>

                <div className="contactSubject" style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Enter Subject" required />
                </div>

                <div className="contactMessage" style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="message">Message</label>
                  <textarea placeholder="Write your Message" id="message" value={formData.message} onChange={handleChange} rows={5} required ></textarea>
                </div>

                <div className="contactButton">
                  <button
                    type="submit"
                    style={{ padding: '0', margin: '0', border: 'none', width: '0' }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <FontAwesomeIcon className="sendMessageIcon" icon={faPaperPlane} />
                  </button>
                  {hover && <div className="hoverMessage">Send Message</div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
