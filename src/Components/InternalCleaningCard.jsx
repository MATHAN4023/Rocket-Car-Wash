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
        <p className="carwash-title">Pristine Interior Care 🚀</p>
        <h2 className="carwash-heading">Experience the ultimate in car interior care with Pristine Interior Care—where freshness and cleanliness meet perfection.</h2>
        <p className="carwash-description">
        Specializing in deep-cleaning and restoration, we bring back the comfort and cleanliness of your car’s interior. From seats to carpets, every inch is meticulously treated for a like-new feel. Discover the difference with Pristine Interior Care today!</p>
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
