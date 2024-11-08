import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carwash from '../assets/picture/Carwash_ser.png';
import './CarwashCard.css';

gsap.registerPlugin(ScrollTrigger);

const CarwashCard = () => {
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
        <p className="carwash-title">Crystal Clear Car Wash 🚀</p>
        <h2 className="carwash-heading">Get your car shining like new! Crystal Clear Car Wash offers premium services to make every ride sparkle.</h2>
        <p className="carwash-description">
        From spotless exteriors to deep interior cleaning, we handle every detail with care. Using eco-friendly products, our team ensures a shine that lasts, all while protecting your car's finish. Visit us today for a truly crystal-clear wash experience!</p>
      </div>
      
      {/* Image Content */}
      <div className="carwash-image-container">
        <img
          src={Carwash}
          alt="Carwash"
          className="carwash-image"
        />
      </div>
    </div>
  );
};

export default CarwashCard;
