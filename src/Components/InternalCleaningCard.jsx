import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Internalcleaning from '../assets/picture/Internalcleaning.png'
import './InternalCleaningCard.css';

gsap.registerPlugin(ScrollTrigger);

const InternalCleaningCard = () => {
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
        <h2 className="carwash-heading">Pristine Interior Care</h2>
        <p className="carwash-description">
        Experience a fresh, spotless interior with Pristine Interior Care! Our team ensures every corner of your car feels like new, giving you comfort and cleanliness in every drive.</p>
      </div>
      
      {/* Image Content */}
      <div className="carwash-image-container">
        <img
          src={Internalcleaning}
          alt="Internalcleaning"
          className="carwash-image"
        />
      </div>
    </div>
  );
};

export default InternalCleaningCard;
