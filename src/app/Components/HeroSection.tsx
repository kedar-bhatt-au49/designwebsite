'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/DotCom.webp',
      h1: "Looking For A Website?",
      h2: "The easiest way to Get Your Business online Drag and Drop.",
      h3: "Transform your digital presence with our expert web solutions"
    },
    {
      image: '/IT-Small.jpg',
      h3: "Trying to Convert Your idia in a Practicle",
      h1: "Need a Tech Partner Who Drives Innovation?",
      h2: "Look no Further",
      
    },
    {
      image: '/6169786-.webp',
      h2: "Technologu Spmplified for all",
      h1: "The easy Way to Boost SEO" ,
      h3: "Let us give a chance to enhance your business visibility"
    },
    {
      image: '/ai1-700x454.webp',
      h1: "Looking For A Website?",
      
      h3: "We don't just Market, We tell your story online, Think outside the banner ads. Inovative marketing for the morder age."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Hero Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32 text-white">
        <div className="bg-blue-700/80 p-6 rounded-lg w-auto inline-block">
          <div className="relative min-h-[180px] md:min-h-[200px] lg:min-h-[220px] w-full">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 transform ${
                  index === currentSlide 
                    ? 'translate-y-0 opacity-100 relative' 
                    : '-translate-y-full opacity-0 absolute top-0 left-0'
                }`}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 whitespace-nowrap">
                  {slide.h1}
                </h1>
                <h2 className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-4">
                  {slide.h2}
                </h2>
                <h3 className="text-sm md:text-base lg:text-lg italic text-blue-200">
                  {slide.h3}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-blue-500 w-6' : 'bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
