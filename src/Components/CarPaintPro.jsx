import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarPaintProimg from '../assets/picture/CarPaintPro.png';
import './CarPaintPro.css';

gsap.registerPlugin(ScrollTrigger);

const CarPaintPro = () => {
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
        <h2 className="carwash-heading">Car Paint Protection</h2>
        <p className="carwash-description">
        Shield your car’s finish with our Paint Protection service! Enjoy a glossy, scratch-resistant coat that keeps your car looking new and protected from the elements.</p>
      </div>
      
      {/* Image Content */}
      <div className="carwash-image-container">
        <img
          src={CarPaintProimg}
          alt="CarPaintPro"
          className="carwash-image"
        />
      </div>
    </div>
  );
};

export default CarPaintPro;
