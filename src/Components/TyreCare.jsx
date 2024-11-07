import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TyreCareimg from '../assets/picture/CarPaintPro.png';
import './TyreCare.css';

gsap.registerPlugin(ScrollTrigger);

const TyreCare = () => {
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
        <h2 className="carwash-heading">Car Tyre Care</h2>
        <p className="carwash-description">
        Keep your ride smooth and safe with our Car Tyre Care! We ensure optimal tread, alignment, and shine for tires that look great and perform even bette</p>
      </div>
      
      {/* Image Content */}
      <div className="carwash-image-container">
        <img
          src={TyreCareimg}
          alt="CarPaintPro"
          className="carwash-image"
        />
      </div>
    </div>
  );
};

export default TyreCare;
