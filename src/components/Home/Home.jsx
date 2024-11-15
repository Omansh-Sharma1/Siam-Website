"use client";

import React, { useEffect, useRef } from "react";
import { FlipWords } from "../ui/flip-words";
import { motion, useAnimation } from "framer-motion";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function Home() {
  const synonyms = [
    "Creativity",
    "Advancement",
    "Progress",
    "Innovation",
    "Vision",
    "Imagination",
    "Exploration",
    "Transformation",
  ];

  const cardControls = useAnimation();
  const missionControls = useAnimation();

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      // Scroll into view with an offset to avoid navbar overlap
      window.scrollTo({
        top: ref.current.offsetTop - 100, // Adjust offset as per navbar height
        behavior: "smooth",
      });
    }
  };

  const firstSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutContent = aboutRef.current;
      const missionContent = missionRef.current;

      if (aboutContent) {
        const rect = aboutContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          cardControls.start({ opacity: 1, x: 0 });
        }
      }

      if (missionContent) {
        const rect = missionContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          missionControls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardControls, missionControls]);

  const handleScrollDown = (ref) => {
    scrollToSection(ref);
  };

  const handleScrollUp = (ref) => {
    scrollToSection(ref);
  };

  return (
    <div className="min-h-screen relative">
      {/* Main Content */}
      <motion.div ref={firstSectionRef} className="min-h-screen flex flex-col items-center justify-center bg-black text-center relative z-10">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src="./Logo.png"
            alt="Logo"
            className="max-w-[160%] max-h-[160%] object-contain opacity-80 z-5"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        </div>
        <motion.h1
          className="text-4xl sm:text-5xl text-white font-roboto font-bold mb-6 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          SOCIETY FOR INDUSTRIAL AND APPLIED MATHEMATICS
        </motion.h1>
        <div className="flex flex-col items-center">
          <span style={{ marginTop: "2rem" }} className="text-3xl sm:text-4xl font-playfair font-normal mb-8 text-white z-30">
            <FlipWords words={synonyms} duration={3000} className={"text-white"} />
          </span>
          <p style={{ marginTop: "8rem", fontSize: "1.3em" }} className="max-w-md mx-auto text-lg text-white font-Playfair font-normal mb-12 z-9">
            through research
          </p>
        </div>
        <motion.button
          className="relative text-white border-2 border-white py-2 px-8 rounded-full text-lg font-roboto font-semibold overflow-hidden transition-all duration-1100 ease-in-out hover:text-black focus:outline-none group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ marginTop: "3rem" }}
          onClick={() => handleScrollDown(aboutRef)}
        >
          <span className="relative z-10">Explore</span>
          <span className="absolute inset-0 bg-gradient-to-br from-white to-transparent transform -translate-x-full translate-y-full transition-transform duration-1100 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
        </motion.button>
      </motion.div>

      {/* About Section */}
      <div ref={aboutRef} className="min-h-screen bg-black text-white text-center py-12 relative">
        <motion.h2
          className="text-3xl sm:text-4xl font-roboto font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={cardControls}
          transition={{ duration: 1 }}
        >
          About SIAM
        </motion.h2>
        <p className="text-lg sm:text-xl font-playfair font-light">
          The Society for Industrial and Applied Mathematics promotes research that drives innovation.
        </p>
      </div>

      {/* Mission Section */}
      <div ref={missionRef} className="min-h-screen bg-black text-white text-center py-12 relative">
        <motion.h2
          className="text-3xl sm:text-4xl font-roboto font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={missionControls}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <p className="text-lg sm:text-xl font-playfair font-light">
          Driving research in applied mathematics for industrial applications.
        </p>
      </div>

      {/* Universities and Collaborated With Section */}
      <div ref={testimonialsRef} className="min-h-screen bg-black text-white text-center py-12 relative">
        <h2 className="text-3xl sm:text-4xl font-roboto font-bold mb-8">
          Universities and Collaborated With
        </h2>
        <AnimatedTestimonials
          testimonials={[
            {
              src: "/images/university1.jpg",
              name: "University of California",
              designation: "Research Collaborator",
              quote: "A partnership focused on advancing mathematical sciences.",
            },
            {
              src: "/images/mit.jpg",
              name: "MIT",
              designation: "Research Partner",
              quote: "Innovating solutions for industrial applications.",
            },
            {
              src: "/images/harvard.jpg",
              name: "Harvard University",
              designation: "Strategic Partner",
              quote: "Leading research in applied mathematics for industry.",
            },
          ]}
        />
      </div>
    </div>
  );
}
