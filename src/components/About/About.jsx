import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CardSpotlight } from '../ui/card-spotlight';
import FocusCards from '../ui/focus-cards';

export default function About() {
  const cardControls = useAnimation();
  const missionControls = useAnimation(); // Added for Our Mission animation
  const focusCardControls = useAnimation();  // Added for Focus Cards animation
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const scrollButton = document.getElementById("scroll-btn");
    scrollButton.addEventListener("click", () => {
      document.getElementById("about-content").scrollIntoView({ behavior: "smooth" });
    });

    const handleScroll = () => {
      const aboutContent = document.getElementById("about-content");
      const missionContent = document.getElementById("mission-section"); // Mission section
      const rect = aboutContent.getBoundingClientRect();
      const missionRect = missionContent.getBoundingClientRect();

      if (rect.top < window.innerHeight) {
        cardControls.start({ opacity: 1, x: 0 });
        focusCardControls.start({ opacity: 1, y: 0 }); // Trigger Focus Cards animation
      }

      if (missionRect.top < window.innerHeight) {
        missionControls.start({ opacity: 1, y: 0 }); // Trigger Our Mission animation
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardControls, missionControls, focusCardControls]);

  // Sample cards data (replace with your actual data)
  const cards = [
    {
      title: 'Research in Applied Mathematics',
      description: 'Learn about research opportunities in applied mathematics.',
    },
    {
      title: 'Industry Collaborations',
      description: 'Collaborate with top industry players in applied mathematics.',
    },
    {
      title: 'Workshops & Seminars',
      description: 'Attend workshops and seminars on the latest trends.',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="flex items-center justify-center relative w-full h-screen bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0 z-0 bg-cover bg-center fixed-bg"></div>

        <motion.div 
          className="text-center space-y-8 z-10 px-4"
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-8xl font-roboto text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            About Us
          </h1>
          <motion.div 
            id="scroll-btn" 
            className="cursor-pointer flex justify-center mt-8 text-gray-300 hover:text-gray-500 animate__animated animate__pulse animate__infinite"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300 hover:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div id="about-content" className="relative z-10 px-8 py-16 space-y-12">
        <section className="flex justify-between space-x-8 mt-16">
          <motion.div
            className="flex-1 opacity-0 transform translate-x-20"
            initial={{ opacity: 0, x: -200 }}
            animate={cardControls}
            transition={{ duration: 1 }}
          >
            <CardSpotlight className="w-full h-full p-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <h3 className="text-2xl font-playfair text-white text-center">What is SIAM?</h3>
                <p className="text-white mt-4 text-center font-playfair font-light">
                  SIAM is a global organization that promotes the development of applied mathematics and computational science across various industries.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>

          <div className="flex justify-center items-center">
            <img
              src="Text_Logo.png"
              alt="SIAM Logo"
              className="h-24 w-auto mx-8"
            />
          </div>

          <motion.div
            className="flex-1 opacity-0 transform -translate-x-20"
            initial={{ opacity: 0, x: 200 }}
            animate={cardControls}
            transition={{ duration: 1 }}
          >
            <CardSpotlight className="w-full h-full p-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <h3 className="text-2xl font-playfair text-white text-center">SIAM-JUIT Chapter</h3>
                <p className="text-white mt-4 text-center font-playfair font-light">
                  The SIAM-JUIT Student Chapter fosters an environment for students to explore applied mathematics through workshops, research, and industry collaborations.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
        </section>

        {/* Scroll Icon Below CardSpotlight Section */}
        <motion.div 
          id="scroll-btn" 
          className="cursor-pointer flex justify-center mt-8 text-gray-300 hover:text-gray-500 animate__animated animate__pulse animate__infinite"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => document.getElementById("mission-section").scrollIntoView({ behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300 hover:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>

        <div style={{ height: "15rem" }}></div>

        {/* Updated Our Mission Section with Scroll Animation */}
        <section 
          id="mission-section" 
          className="w-full bg-black-100 py-24 px-8 flex flex-col items-center justify-center space-y-16"
          style={{ minHeight: '100vh', height: '100vh' }} 
        >
          <motion.div
            className="max-w-7xl w-full text-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={missionControls}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-playfair text-black-500 mb-4">
              Our Mission
            </h2>
            <p className="text-black-700 text-lg leading-relaxed font-playfair">
              The SIAM-JUIT Student Chapter aims to inspire students to explore applied mathematics, engage in interdisciplinary research, and connect with professionals in the field. 
              We strive to foster a community of aspiring mathematicians and scientists eager to make an impact in engineering and technology.
            </p>
          </motion.div>

          {/* Focus Cards Section with Animation */}
          <motion.div
            className="flex justify-center w-full space-x-8"
            initial={{ opacity: 0, y: 50 }}
            animate={focusCardControls}
            transition={{ duration: 1 }}
          >
            <FocusCards cards={cards} />
          </motion.div>
        </section>

        {/* Other Content Sections */}
        <section className="w-full max-w-6xl mt-16">
          <h2 className="text-3xl font-playfair text-pink-400 mb-6">Why Join SIAM?</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Enhance your technical skills through workshops and seminars.</li>
            <li>Collaborate with peers and professionals in applied mathematics.</li>
            <li>Engage in research and industry opportunities.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
