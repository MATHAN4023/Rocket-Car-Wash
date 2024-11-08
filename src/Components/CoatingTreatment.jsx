import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CoatingandTreatment from '../assets/picture/CoatingandTreatment.png';
import './CoatingTreatment.css';

gsap.registerPlugin(ScrollTrigger);

const CoatingTreatment = () => {
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
        <p className="carwash-title">Coating and Treatment 🚀</p>
        <h2 className="carwash-heading">Protect and elevate your vehicle’s appearance with our premium Coating and Treatment services. Defend against the elements in style.</h2>
        <p className="carwash-description">
        Our advanced coating solutions provide a durable shield, enhancing gloss and resisting scratches, UV rays, and weather damage. Ideal for long-lasting shine and protection, each treatment is meticulously applied for maximum effect. Choose our Coating and Treatment to keep your car looking flawless year-round!</p>
      </div>
      
      {/* Image Content */}
      <div className="carwash-image-container">
        <img
          src={CoatingandTreatment}
          alt="CoatingTreatment"
          className="carwash-image"
        />
      </div>
    </div>
  );
};

export default CoatingTreatment;
