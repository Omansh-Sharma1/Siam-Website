import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-8">
        {/* Logo and About */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-16"
            />
          </div>
          <div className="text-center md:text-right text-sm text-gray-400">
            <p className="font-playfair">
              © 2023 <Link to="/" className="hover:underline font-roboto">hiteshchoudhary</Link> - All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
          {/* Resources */}
          <div>
            <h3 className="text-lg font-roboto font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-4 text-gray-300 font-playfair">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-yellow-400 transition duration-300">Projects</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-roboto font-semibold text-white mb-4">Follow Us</h3>
            <ul className="space-y-4 text-gray-300 font-playfair">
              <li>
                <a
                  href="https://github.com/hiteshchoudhary"
                  className="hover:text-yellow-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <Link to="/" className="hover:text-yellow-400 transition duration-300">Discord</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-yellow-400 transition duration-300">Twitter</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-roboto font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-4 text-gray-300 font-playfair">
              <li>
                <Link to="#" className="hover:text-yellow-400 transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-yellow-400 transition duration-300">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.facebook.com"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 19">
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://github.com/hiteshchoudhary"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
              <path
                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17">
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .11.87A11.65 11.65 0 0 1 1.39 1.04a4.04 4.04 0 0 0-.55 2.03 4.057 4.057 0 0 0 1.808-.34c-.178.578-.377 1.08-.535 1.44 0 .199-.062.38-.148.56-.274.472-.626.909-1.063 1.29A4.115 4.115 0 0 0 0 10.497a4.117 4.117 0 0 0 4.118 4.138c-2.88 2.365-4.8 4.564-4.8 7.168 0 .271.248.475.543.475 2.476 0 4.992-1.396 7.398-3.05 2.58 1.187 5.573 1.008 7.98-1.128a11.378 11.378 0 0 0 1.612-2.79c-.303-.11-.585-.275-.883-.439-.212.233-.476.5-.794.768 1.242-.035 2.326-.528 3.014-1.525A4.084 4.084 0 0 0 20 1.892z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
