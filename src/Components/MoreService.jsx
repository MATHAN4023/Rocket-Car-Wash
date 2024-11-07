import React from 'react';
import './MoreService.css';

const services = [
  { title: 'Universal Office', img: 'path-to-universal-office-image.png' },
  { title: 'Auto Platform', img: 'path-to-auto-platform-image.png' },
  { title: 'Water Platform', img: 'path-to-water-platform-image.png' },
  { title: 'Space and Air', img: 'path-to-space-air-image.png' },
];

const MoreService = () => {
  return (
    <div className="more-service-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-text">{service.title}</div>
          <div className="service-image">
            <img src={service.img} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreService;
