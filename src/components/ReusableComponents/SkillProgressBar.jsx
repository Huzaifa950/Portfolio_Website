import React, { useEffect, useRef, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function SkillProgressBar({ now, label }) {
  const [inView, setInView] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);
  return (
    <div 
    ref={progressRef}
    style={{
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden',
      height: '12px',
      width: '100%'
    }}>
      <ProgressBar
        now={100}
        style={{
          height: '100%',
          backgroundColor: '#9DAF8F',
          borderRadius: 0,
          position: 'relative',
        }}
      >
        <div
          style={{
            width: `${now}%`,
            backgroundColor: '#40534C',
            height: '100%',
            borderRadius: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            animation: inView ? 'fill 5s forwards' : 'none',
            animationDuration: inView ? `${now / 50}s` : 'none',
            animationFillMode: 'forwards',
          }}
        />
        <div
          style={{
            width: `${now}%`,
            backgroundColor: '#40534C',
            height: '100%',
            borderRadius: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            animation: inView ? `progress ${now / 50}s forwards` : 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '10px',
            whiteSpace: 'nowrap'
          }}
        >
          {`${label} %`}
        </div>
      </ProgressBar>
      <style>{`
        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: ${now}%;
          }
        }
        @keyframes fill {
          from {
            background-color: #9DAF8F;
          }
          to {
            background-color: #40534C;
          }
        }
      `}</style>
    </div>
  );
}

export default SkillProgressBar;