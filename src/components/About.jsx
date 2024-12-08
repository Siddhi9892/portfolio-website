import React from "react";
import backgroundImage from '../assets/aboutimage2.png';
const About = () => {
  return (
    <section
      id="about-me"
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/src/assets/aboutimage2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(5px)", // Blur background
          zIndex: "-1", // Ensure blur stays behind content
        }}
      ></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6" style={{ color: "#FFD700" }}>
          About Me!
        </h2>

        {/* Description Card */}
        <div
          className="p-6 rounded-lg shadow-xl bg-black bg-opacity-30 backdrop-blur-lg"
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            lineHeight: "1.8",
            letterSpacing: "0.5px",
          }}
        >
          <p className="text-lg font-medium mb-4">
            Hi! I'm Siddhi, an AI and Data Science Engineer who thrives on solving
            complex problems and building innovative solutions. My passion lies
            in harnessing the power of artificial intelligence to transform ideas
            into impactful realities.
          </p>
          <p className="text-lg font-medium mb-4">
            Through my projects and participation in hackathons, I have honed my
            ability to tackle real-world challenges creatively and collaboratively. 
            These experiences have profoundly shaped my technical and problem-solving
            skills, enabling me to think critically and execute efficiently under pressure.
          </p>
          <p className="text-lg font-medium">
            With a strong foundation in AI and machine learning, I am dedicated to
            advancing technology and making meaningful contributions to the field.
            Let's create something amazing together!
          </p>
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

export default About;
