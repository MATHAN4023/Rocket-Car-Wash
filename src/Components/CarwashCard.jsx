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
        <p className="carwash-title">Our Services ----</p>
        <h2 className="carwash-heading">Crystal Clear Car Wash</h2>
        <p className="carwash-description">
        Get a showroom shine with our Car Wash service! Our expert team uses top-quality products to make your car look brand new—drive in today and see the difference!</p>
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
