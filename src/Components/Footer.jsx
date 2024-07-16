// src/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p>
              I am a full stack web developer with experience in building responsive and dynamic web applications.
            </p>
          </div>
          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow Me</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="https://github.com/abhijit7498" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abhijit-maske-58751925a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FqmTEFMaQaG2ix9F7ZvleQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p>Email: <a href="mailto:your.email@example.com" className="text-white hover:text-gray-400">abhimaske0000@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-white hover:text-gray-400">7498157132</a></p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
