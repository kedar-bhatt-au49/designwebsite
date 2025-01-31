'use client'
import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../routes';

const Navbar = () => {
  const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: routes.home },
    { name: 'About', href: routes.about },
    { name: 'Service', href: routes.service },
    { name: 'Portfolio', href: routes.portfolio },
    { name: 'Contact', href: routes.contact }
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Header */}
      <div 
        className="w-full h-2 bg-transparent cursor-pointer"
        onMouseEnter={() => setIsTopHeaderVisible(true)}
        onMouseLeave={() => setIsTopHeaderVisible(false)}
      >
        <div className={`w-full bg-gray-900 transition-all duration-300 ${
          isTopHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex space-x-6">
                <a href="tel:+1234567890" className="flex items-center hover:text-blue-400 transition-colors text-white">
                  <FaPhone className="mr-2" />
                  <span>+1 234 567 890</span>
                </a>
                <a href="mailto:info@example.com" className="flex items-center hover:text-blue-400 transition-colors text-white">
                  <FaEnvelope className="mr-2" />
                  <span>info@example.com</span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-400 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-400 transition-colors">
                  <FaFacebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-400 transition-colors">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 hover:bg-white group ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    isScrolled || isTopHeaderVisible 
                      ? 'text-gray-800 hover:text-blue-600' 
                      : 'text-white group-hover:text-gray-800 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
