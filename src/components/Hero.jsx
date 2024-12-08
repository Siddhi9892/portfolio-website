import React from 'react';
import Navbar from './Navbar';
import profileImage from '../assets/profile.png';
import homeLogo from '../assets/home-logo.jpg'; // Home logo

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen">
      {/* Blurred Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1.5px)', // Apply blur only to the background image
          zIndex: '-1', // Push the blur behind all content
        }}
      ></div>

      {/* Navbar */}
      <Navbar/>

      {/* Home Button */}
      <div className="absolute top-4 left-4">
        <a href="#home">
          <img
            src={homeLogo}
            alt="Home"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6">
        {/* Main Heading */}
        <h1 className="text-6xl font-extrabold mb-6 text-yellow-500 glow-text">
          Hi, <span className="text-yellow-300">Siddhi</span> Here!
        </h1>

        {/* Sub Heading */}
        <p
          className="text-2xl font-semibold py-2 px-4 bg-yellow-500 text-black rounded-full inline-block shadow-lg"
          style={{ letterSpacing: '1px', }}
        >
          ARTIFICIAL INTELLIGENCE & DATA SCIENCE ENGINEER
        </p>

        {/* Highlighted Paragraph */}
        <div
          className="mt-8 bg-black bg-opacity-40 text-lg font-medium text-white px-6 py-4 rounded-lg shadow-lg"
          style={{
            backdropFilter: 'blur(1px)',
            lineHeight: '1.8',
            letterSpacing: '0.5px',
          }}
        >
          Hi! I'm Siddhi, an AI and Data Science Engineer who thrives on solving
          complex problems and building innovative solutions. <br />
          <span className="font-bold text-yellow-400">
            🚀 Let's collaborate to solve real-world problems using cutting-edge AI
            and machine learning technologies.
          </span>
        </div>

        {/* Get in Touch Button */}
        <div className="absolute bottom-0.9 left-100">
          <a
            href="#connect-me"
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full shadow-lg transition-transform transform duration-300"
            
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
