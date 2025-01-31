'use client'
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ContactFormProps {
  onClose: () => void;
}

const ServiceContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] px-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceContactForm;
