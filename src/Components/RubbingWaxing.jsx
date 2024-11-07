import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RubbingWaxingimg from '../assets/picture/RubbingWaxing.png';
import './RubbingWaxing.css';

gsap.registerPlugin(ScrollTrigger);

const RubbingWaxing = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    gsap.fromTo(
      cardElement,
      { height: '2vh' }, // Start height
      {
        height: '100vh', // End height
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardElement,
          start: 'top 80%',
          end: 'top top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="carwash-card">
      {/* Text Content */}
      <div className="carwash-text">
        <p className="carwash-title">Our Services ----</p>
        <h2 className="carwash-heading">Car Rubbing and Waxing</h2>
        <p className="carwash-description">
        Restore your car’s shine with our Rubbing and Waxing service! We smooth out scratches and add a lasting gloss for a like-new finish.</p>
      </div>
      
      {/* Image Content */}
      <div className="carwash-image-container">
        <img
          src={RubbingWaxingimg}
          alt="RubbingWaxing"
          className="carwash-image"
        />
      </div>
    </div>
  );
};

export default RubbingWaxing;
