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
        <p className="carwash-title">Our Services ----</p>
        <h2 className="carwash-heading">Coating and Treatment</h2>
        <p className="carwash-description">
        Protect and enhance your car’s finish with our Coating and Treatment service! Get long-lasting shine and protection for a car that looks stunning, rain or shine.</p>
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
