'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/DotCom.webp',
      h1: "Transform Your Digital Presence",
      h2: "Expert Web Solutions That Drive Growth",
      h3: "Get your business online with our drag-and-drop solutions",
      cta: "Start Your Journey"
    },
    {
      image: '/IT-Small.jpg',
      h1: "Innovation Meets Excellence",
      h2: "Your Trusted Technology Partner",
      h3: "Turn your ideas into reality with our expert team",
      cta: "Let's Innovate"
    },
    {
      image: '/6169786-.webp',
      h1: "Boost Your SEO Rankings",
      h2: "Technology Simplified For All",
      h3: "Enhance your business visibility with proven strategies",
      cta: "Improve Visibility"
    },
    {
      image: '/ai1-700x454.webp',
      h1: "Digital Marketing Excellence",
      h2: "Beyond Traditional Marketing",
      h3: "We tell your story through innovative digital strategies",
      cta: "Start Marketing"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={`Hero Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {slides[currentSlide].h1}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-semibold">
              {slides[currentSlide].h2}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              {slides[currentSlide].h3}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {slides[currentSlide].cta}
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handlePrevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
