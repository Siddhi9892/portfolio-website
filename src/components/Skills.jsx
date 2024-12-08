import React from 'react';
import skillsBackground from '../assets/Skills.jpg'; // Background image
import pythonLogo from '../assets/python-logo.png';
import mlLogo from '../assets/ml-logo.jpg';
import aiLogo from '../assets/ai-logo.jpg';
import frontendLogo from '../assets/frontend-logo.png';
import backendLogo from '../assets/backend-logo.jpg';
import databaseLogo from '../assets/database-logo.png';
const Skills = () => {
  return (
    <section
      id="my-skills"
      className="relative py-16 px-6"
      style={{
        backgroundImage: `url(${skillsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background blur */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)', // Safari support
          zIndex: -1,
        }}
      ></div>

      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">
          My Skills
        </h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 z-10">
          {[
            { title: 'Python', content: 'EXPERIENCED IN PYTHON FOR VARIOUS TASKS, INCLUDING MACHINE LEARNING, AND WEB DEVELOPMENT.', logo: pythonLogo },
            { title: 'Machine Learning', content: 'PROFICIENT IN BUILDING MACHINE LEARNING MODELS USING LIBRARIES LIKE SCIKIT-LEARN, TENSORFLOW, AND PYTORCH.', logo: mlLogo },
            { title: 'AI & Data Science', content: 'UNDERSTANDING OF AI,DEEP LEARNING,GEN AI, DATA ANALYSIS, AND BIG DATA TECHNOLOGIES FOR SOLVING REAL WORLD PROBLEMS.', logo: aiLogo },
            { title: 'Frontend Development', content: 'EXPERIENCED IN BUILDING RESPONSIVE UI USING HTML, CSS, JAVASCRIPT, AND FRAMEWORKS LIKE REACT.', logo: frontendLogo },
            { title: 'Backend Development', content: 'BACKEND DEVELOPMENT KNOWLEDGE OF BACKEND TECHNOLOGIES LIKE NODE.JS AND FLASK FOR CREATING ROBUST APIS AND DATABASES.', logo: backendLogo },
            { title: 'Databases', content: 'FAMILIAR WITH SQL AND NOSQL DATABASES LIKE MYSQL FOR EFFICIENT DATA STORAGE.', logo: databaseLogo },
          ].map((skill, index) => (
            <div
              key={index}
              className="relative bg-black bg-opacity-70 p-6 rounded-lg border border-yellow-500 transition-transform transform hover:translate-y-[-10px] hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.9)]"
            >
              {/* Dynamically set the logo for each skill */}
               <img
                  src={skill.logo}
                  alt={`${skill.title} Logo`}
                  className="w-16 h-16 mx-auto mb-4"
              />
              <h4
                className={`text-2xl font-bold mb-4 text-yellow-400 ${
                  skill.title === 'Python' ||
                  skill.title === 'AI & Data Science' ||
                  skill.title === 'Web Development'
                    ? 'text-yellow-500'
                    : ''
                }`}
              >
                {skill.title}
              </h4>
              <p className="text-lg font-medium leading-relaxed">
                {skill.content}
              </p>
            </div>
          ))}
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

export default Skills;
