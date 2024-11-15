import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Contact() {
  const formControls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send to backend)
  };

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
            Contact Us
          </h1>
        </motion.div>
      </div>

      <div id="contact-content" className="relative z-10 px-8 py-16 space-y-12">
        {/* Contact Form Section */}
        <section className="flex justify-between space-x-8 mt-16">
          <motion.div
            className="flex-1 opacity-0 transform translate-x-20"
            initial={{ opacity: 0, x: -200 }}
            animate={formControls}
            transition={{ duration: 1 }}
          >
            <div className="w-full p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-roboto text-white text-center">Get in Touch</h3>
              <p className="text-white mt-4 text-center font-playfair">
                Fill in the form below and we will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                {/* Name Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-white">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800 border-2 border-gray-600 text-white rounded-lg focus:outline-none focus:border-pink-500"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-white">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800 border-2 border-gray-600 text-white rounded-lg focus:outline-none focus:border-pink-500"
                    placeholder="Your email address"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-white">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800 border-2 border-gray-600 text-white rounded-lg focus:outline-none focus:border-pink-500"
                    rows="6"
                    placeholder="Your message"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-pink-500 hover:bg-pink-400 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          <div className="flex justify-center items-center">
            <img
              src="Text_Logo.png"
              alt="Contact Logo"
              className="h-24 w-auto mx-8"
            />
          </div>

          <motion.div
            className="flex-1 opacity-0 transform -translate-x-20"
            initial={{ opacity: 0, x: 200 }}
            animate={formControls}
            transition={{ duration: 1 }}
          >
            <div className="w-full p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-roboto text-white text-center">Contact Info</h3>
              <p className="text-white mt-4 text-center font-playfair">
                Reach us via the contact form or through the following details.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Map Section or Additional Content */}
        <section className="w-full max-w-6xl mt-16">
          <h2 className="text-3xl font-roboto text-pink-400 mb-6">Our Location</h2>
          <div className="text-lg text-gray-300 text-center space-y-4">
            <p>1234 Some Street, City, Country</p>
            <p>Email: contact@company.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </section>
      </div>
    </div>
  );
}
