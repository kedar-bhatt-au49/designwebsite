'use client'
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+1234567890" className="flex items-center hover:text-white-400 transition-colors">
              <FaPhone className="mr-2" />
              <span>+1 234 567 890</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center hover:text-white-400 transition-colors">
              <FaEnvelope className="mr-2" />
              <span>info@example.com</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
