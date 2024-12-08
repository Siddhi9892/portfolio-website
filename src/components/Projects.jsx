import React from "react";
import projectbgImage from '../assets/projects1.png';
import musicSearchImage from '../assets/music-search.png';
import careerOtakuImage from '../assets/career-otaku.jpg';
import faceDetectionImage from '../assets/face-detection.png';
import discordGPTImage from '../assets/discord-gpt.png';
import petFamImage from '../assets/petfam.jpg';
import wallBeautificationImage from '../assets/wall-beautification.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Music Search Engine",
      description: "A Python-based project that allows users to search for songs and music based on various criteria. It utilizes APIs to fetch and display relevant music data for users.",
      image: musicSearchImage,
      link: "https://github.com/your-username/music-search-engine",
    },
    {
      title: "Career Otaku",
      description: "A platform designed for students to find placements and internship opportunities, with additional features such as career advice and guidance for a seamless job search experience.",
      image: careerOtakuImage,
      link: "https://github.com/your-username/career-otaku",
    },
    {
      title: "Face Detection using PCA",
      description: "A project utilizing Principal Component Analysis (PCA) for facial recognition, where images are processed to extract key features for detection.",
      image: faceDetectionImage,
      link: "https://replit.com/@your-username/Face-Detection-PCA",
    },
    {
      title: "DiscordGPT",
      description: "A Discord bot powered by GPT-3 for engaging, interactive conversations with users in real-time. The bot offers a range of commands to enhance user experience.",
      image: discordGPTImage,
      link: "https://replit.com/@your-username/DiscordGPT",
    },
    {
      title: "PetFam",
      description: "A pet adoption platform that allows users to connect with potential pet adopters or foster families. It also includes features for pet profiles, photos, and adoption processes.",
      image: petFamImage,
      link: "https://github.com/your-username/petfam",
    },
    {
      title: "NSS Wall Beautification",
      description: "I led a team for a wall beautification project aimed at raising awareness in a local railway station. The artwork communicated important social messages to the community.",
      image: wallBeautificationImage,
      link: null, // No external link for this project
    },
  ];

  return (
    <section
      id="my-projects"
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6"
      style={{
        backgroundImage: `url(${projectbgImage})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-[0_0_30px_10px_rgba(255,223,0,0.9)]"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                  {project.title}
                </h3>
                <p className="text-sm mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
                  >
                    View on {project.link.includes("github") ? "GitHub" : "Replit"}
                  </a>
                )}
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
    
  );
};

export default Projects;
