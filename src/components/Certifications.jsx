import React from 'react';
import certificationsBackground from '../assets/Certifications2.png'; // Import the background image

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative"
      style={{
        backgroundImage: `url(${certificationsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(0px)', // Slight blur for the background
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Slight dark overlay */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Certifications & Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              Chancellor's Brigade-NSS Wing
            </h3>
            <p className="text-lg text-white">
              State Level Disaster Management Training Program: Completed disaster management training effectively.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              Generative AI: Introduction and Application (Coursera, IBM)
            </h3>
            <p className="text-lg text-white">
              Learned applications of Generative AI in machine learning and data science through this certification.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              LangChain Chat with Your Data! (Coursera)
            </h3>
            <p className="text-lg text-white">
              Gained hands-on experience creating chatbots with LangChain to interact with structured and unstructured data.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              Google AI-ML Virtual Internship (July - Sep 2024)
            </h3>
            <p className="text-lg text-white">
              Completed a virtual internship through EduSkills Foundation, enhancing AI and ML skills.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              Seed Hackathon
            </h3>
            <p className="text-lg text-white">
              Participated in the AI/ML theme event hosted by The George Washington University.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              Google Play Academy
            </h3>
            <p className="text-lg text-white">
              Achieved the Store Listing Certificate, enhancing skills in app store optimization.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              Prompt Design in Vertex AI Skill Badge (Issued By Google Cloud)
            </h3>
            <p className="text-lg text-white">
              Recognized expertise in crafting effective prompts for AI models using Vertex AI.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500 border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300 hover:text-shadow-lg transition">
              Artificial Intelligence Intern (Internship Studio)
            </h3>
            <p className="text-lg text-white">
              Virtual Artificial Intelligence Intern at Internship Studio, focusing on AI development and applications from June 2024 to July 2024.
            </p>
          </div>
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

export default Certifications;
