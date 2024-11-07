import React, { useEffect, useRef } from 'react';
import CarwashCard from './CarwashCard';
import InternalCleaningCard from './InternalCleaningCard';
import RubbingWaxing from './RubbingWaxing';
import CoatingTreatment from './CoatingTreatment';
import CarPaintPro from './CarPaintPro';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ setHorizontalScrollCompleted }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const itemWidth = container.scrollWidth / container.children.length;

    // Adjust GSAP animation for smooth horizontal scrolling
    gsap.to(container, {
      x: -(container.scrollWidth - window.innerWidth), // Calculate the scroll distance based on container width
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${container.scrollWidth}`, // Scroll distance based on container width
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          // Check if scroll is at the end or back at the start
          if (self.progress >= 1) {
            setHorizontalScrollCompleted(true);
          } else {
            setHorizontalScrollCompleted(false);
          }
        },
      },
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setHorizontalScrollCompleted]);

  return (
    <div ref={containerRef} className="hcontent flex w-[500vw] overflow-hidden bg-black-100">
      {/* Each card takes full screen width */}
      <div className="flex-shrink-0 w-screen h-screen bg-black-500 flex items-center justify-center">
        <CarwashCard />
      </div>
      <div className="flex-shrink-0 w-screen h-screen bg-black-500 flex items-center justify-center">
        <InternalCleaningCard />
      </div>
      <div className="flex-shrink-0 w-screen h-screen bg-black-500 flex items-center justify-center">
        <RubbingWaxing />
      </div>
      <div className="flex-shrink-0 w-screen h-screen bg-black-500 flex items-center justify-center">
        <CoatingTreatment />
      </div>
      <div className="flex-shrink-0 w-screen h-screen bg-black-500 flex items-center justify-center">
        <CarPaintPro />
      </div>
    </div>
  );
};

export default HorizontalScroll;
