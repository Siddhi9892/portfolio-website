import React, { useState } from 'react';
import contactBackground from '../assets/Contactbg.png'; // Import the background image
import { FaLinkedin } from 'react-icons/fa'; // Importing Instagram and LinkedIn icons
import emailjs from 'emailjs-com'; // Importing EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize EmailJS with your User ID
    emailjs
      .sendForm('service_78xayyb', 'template_ak9ttie', e.target, 'p013Wfv7_hkUlGuqi')
      .then(
        (result) => {
          alert('Your message has been sent!');
          setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        },
        (error) => {
          alert('There was an error sending your message, please try again!');
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="connect-me"
      className="py-16 px-6 relative text-white"
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9,
      }}
    >
      <div className="max-w-6xl mx-auto text-center bg-black bg-opacity-70 py-8 px-6 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">For Any Suggestions and Messages:</h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto" method="POST">
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="bg-yellow-600 py-2 px-6 rounded-md text-white hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {/* Social Media Links Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">Or Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/siddhi-jadhav-477694279" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-yellow-300 hover:text-yellow-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
