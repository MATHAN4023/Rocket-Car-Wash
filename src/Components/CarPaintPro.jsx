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
        <p className="carwash-title">Car Paint Protection 🚀</p>
        <h2 className="carwash-heading">Safeguard your car’s beauty with our Car Paint Protection service—defense against scratches, UV rays, and wear.</h2>
        <p className="carwash-description">
        Using cutting-edge protective coatings, we help maintain your car's vibrant color and finish, reducing fading and damage. Our paint protection shields against everyday hazards, from road debris to harsh sunlight, keeping your vehicle looking brand new. Invest in lasting beauty and protection today!</p>
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
