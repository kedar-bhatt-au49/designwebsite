'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import ServiceContactForm from './ServiceContactForm';

const ServicePageMain = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  const slides = [
    '/blue.jpg',
    '/digital.jpeg',
    '/Web-dev.webp',
    '/UI-UX.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'border-2 border-black shadow-lg' : ''}`}>
          <div className="bg-white/90 h-16 w-full px-8 flex items-center justify-between hover:border-2 hover:border-black transition-all duration-300">
            <div className="flex items-center gap-2 text-gray-600">
              <Link href="/" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300">Home</Link>
              <span>/</span>
              <span className="text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300">Service</span>
            </div>
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all hover:bg-blue-700 hover:scale-105 hover:border-2 hover:border-black"
            >
              Get in Touch
              <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 translate-y-1/2 left-4 sm:left-8 md:left-16 lg:left-24">
          <div className="container group">
            <div className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[650px] hover:scale-105 transition-transform duration-300 group-hover:border-2 group-hover:border-black">
              <div className="bg-blue-600/75 rounded-t-lg p-4 sm:p-5 md:p-6 lg:p-8 min-h-[65px] sm:min-h-[75px] md:min-h-[85px] lg:min-h-[95px]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white pl-2 sm:pl-4 hover:border-b-2 hover:border-black transition-all duration-300">
                  Services
                </h1>
              </div>
              <div className="bg-blue-500/75 rounded-b-lg p-4 sm:p-5 md:p-6 lg:p-8 min-h-[65px] sm:min-h-[75px] md:min-h-[85px] lg:min-h-[95px]">
              </div>
            </div>
          </div>
        </div>
      </div>

      {showContactForm && <ServiceContactForm onClose={() => setShowContactForm(false)} />}
    </>
  );
};

export default ServicePageMain;
