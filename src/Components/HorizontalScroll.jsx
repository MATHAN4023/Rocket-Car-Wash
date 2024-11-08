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

    // Function to create the horizontal scroll animation
    const createHorizontalScroll = () => {
      return gsap.to(container, {
        x: -(container.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${container.scrollWidth}`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            if (self.progress >= 1) {
              setHorizontalScrollCompleted(true);
              gsap.to(window, {
                scrollTo: { y: window.innerHeight },
                duration: 1,
                ease: 'power2.out',
                onComplete: () => ScrollTrigger.refresh(),
              });
            } else {
              setHorizontalScrollCompleted(false);
            }
          },
        },
      });
    };

    // Initialize the animation
    let scrollTween = createHorizontalScroll();

    // Refresh animation and ScrollTrigger on window resize with a delay
    const resizeHandler = () => {
      setTimeout(() => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        scrollTween = createHorizontalScroll();
        ScrollTrigger.refresh();
      }, 100); // Delay allows for complete element resizing
    };

    // Attach resize event listener
    window.addEventListener('resize', resizeHandler);

    // Initial refresh
    ScrollTrigger.refresh();

    return () => {
      // Cleanup on component unmount
      scrollTween.kill();
      window.removeEventListener('resize', resizeHandler);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setHorizontalScrollCompleted]);

  return (
    <div ref={containerRef} className="hcontent flex w-[500vw] overflow-hidden bg-black-100">
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
