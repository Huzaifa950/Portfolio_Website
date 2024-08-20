import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpwork } from "@fortawesome/free-solid-svg-icons";

const ServicesCard = ({ icon, heading, body, buttonLink }) => {
    const isMediumScreen = window.innerWidth < 1200 && window.innerWidth > 1000 ;

    const containerStyle = {
        flex: isMediumScreen ? '0 0 50%' : '0 0 90%',
        backgroundColor: '#738E5D',
        padding: '30px',
        borderRadius: '10px',
        height: isMediumScreen ? '500px' : 'auto',
    };
    return (
        <div className='servicesCard' style={containerStyle}>
            <div className='serviceCardIcon' style={{ fontSize: '25px', border: '2px solid black', display: 'inline', padding: '5px 10px' }}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className='serviceCardHeading' style={{ fontSize: '20px', fontWeight: 'bold', margin: '40px 0' }}>
                <p>{heading}</p>
            </div>
            <div className='serviceCardBody' style={{
                // height: '320px',
                overflow: 'auto', 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none' 
            }}>
                <p>{body}</p>
                <style jsx>{`
                    .serviceCardBody::-webkit-scrollbar {
                        display: none; 
                    }
                `}</style>
            </div>
            {/* <div className='serviceCardButton' style={{ textAlign: 'right', margin: '50px 0' }}>
                <button onClick={() => window.location.href = buttonLink} style={{ backgroundColor: "#5F754D", padding: '5px 15px', borderRadius: '10px', border: '1px solid black' }}>Hire Now</button>
            </div> */}
        </div>
    );
};

export default ServicesCard;
