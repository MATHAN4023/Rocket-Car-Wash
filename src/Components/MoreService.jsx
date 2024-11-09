import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./MoreService.css";
import GLT from '../assets/picture/Extraservice/GlassTreatment.jpeg';
import EC from '../assets/picture/Extraservice/EngineTreatment.jpeg';
import AC from '../assets/picture/Extraservice/AcTreatment.jpeg';
import AR from '../assets/picture/Extraservice/Anti-rash-Treatment.jpeg';
import CA from '../assets/picture/Extraservice/paintTreatment.jpeg';
import AW from '../assets/picture/Extraservice/Alloy-Treatment.jpeg';
import LT from '../assets/picture/Extraservice/LeatherTreatment.jpeg';
import PT from '../assets/picture/Extraservice/PerfTun.jpeg';

const services = [
  { title: "Glass Treatment", img: GLT },
  { title: "Engine Coating", img: EC },
  { title: "Car Paint Protection", img: CA },
  { title: "Alloy Wheel Treatment", img: AW },
  { title: "Leather Conditioning", img: LT },
  { title: "Car Anti-Rust", img: AR },
  { title: "AC Treatment", img: AC },
  { title: "Vehicle Performance Tuning", img: PT },
];

const MoreService = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // GSAP animation to animate cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="Contentbox">
      <div className="more-service-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="service-text">{service.title}</div>
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreService;
