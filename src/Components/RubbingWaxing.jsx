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
        <p className="carwash-title">Car Rubbing and Waxing 🚀</p>
        <h2 className="carwash-heading">Bring out the brilliance in your car's finish with expert rubbing and waxing services. Restore, protect, and shine!</h2>
        <p className="carwash-description">
        Our Car Rubbing and Waxing service revitalizes your vehicle’s paint, removing minor scratches and imperfections. With top-grade wax and a professional touch, we ensure a high-gloss, long-lasting finish. Drive away with a showroom shine every time!</p>
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
