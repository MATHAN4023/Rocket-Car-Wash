import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Promo.css";
import mp2 from "../assets/video/1.mp4";
import mp1 from "../assets/video/2.mp4";
import mp3 from "../assets/video/3.mp4";

gsap.registerPlugin(ScrollTrigger);

const Promo = () => {
  const promoRef = useRef(null);
  const textRef = useRef(null);
  const welcomeRef = useRef(null); // Reference for welcome text

  useEffect(() => {
    const promo = promoRef.current;
    const text = textRef.current;
    const welcome = welcomeRef.current;

    // Fade out welcome text and button as user scrolls down
    gsap.to(welcome, {
      opacity: 0,
      scrollTrigger: {
        trigger: promo,
        start: "top top",
        end: "top center",
        scrub: true,
      },
    });

    // Video animations
    gsap.to(".promo__video", {
      height: "20vh",
      borderRadius: "25px",
      ease: "none",
      scrollTrigger: {
        trigger: promo,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".promo__videos", {
      gridTemplateColumns: "15vw 15vw 15vw",
      height: "20vh",
      width: "50vw",
      columnGap: "30px",
      ease: "none",
      scrollTrigger: {
        trigger: promo,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Promo text fade-in animation on scroll
    gsap.fromTo(
      text,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="promo" ref={promoRef}>
      {/* Welcome Text Section */}
      <div className="welcome__text" ref={welcomeRef}>
        <h1>Treat Your Car Right!</h1>
        <h1> 
        Get a Fast and Fabulous Clean, Anytime</h1>
        {/* <h1> Rocket Car Wash</h1> */}
        <button className="book-now">Book Now</button>
      </div>

      {/* Videos Section */}
      <div className="promo__inner">
        <div className="promo__videos">
          <div className="promo__video-box">
            <video
              className="promo__video promo__video--left"
              src={mp1}
              muted
              loop
              playsInline
              autoPlay
            ></video>
          </div>
          <div className="promo__video-box">
            <video
              className="promo__video promo__video--center"
              src={mp2}
              muted
              loop
              playsInline
              autoPlay
            ></video>
          </div>
          <div className="promo__video-box">
            <video
              className="promo__video promo__video--right"
              src={mp3}
              muted
              loop
              playsInline
              autoPlay
            ></video>
          </div>
        </div>
      </div>

      {/* Promo Text Section */}
      <div className="promo__text" ref={textRef}>
          {/* <h1>Your Promo Text Here</h1> */}
          <p>Rocket Car Wash delivers fast, innovative car care for a perfect shine every time. Experience top-quality service that brings out the best in your vehicle!</p>
      </div>

      
    </section>
  );
};

export default Promo;
