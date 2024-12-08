import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-4 right-8 z-20">
      <ul className="flex space-x-6">
        {['About Me', 'My Skills', 'My Projects', 'Certifications', 'Connect Me'].map(
          (item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
