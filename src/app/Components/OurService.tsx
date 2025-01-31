'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurService = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      image: '/Web-dev.webp',
      title: 'Web Development',
      path: '/service/web-development'
    },
    {
      image: '/OIP-sof.jpg',
      title: 'Application Development',
      path: '/service/web-development'
    },
    {
      image: '/UI-UX.jpg',
      title: 'UI/UX Design',
      path: '/service/mobile-development'
    },
    {
      image: '/CLOUD-.jpg',
      title: 'Cloud Management',
      path: '/service/web-development'
    },
    {
      image: '/QA-.jpg',
      title: 'QA & Testing',
      path: '/service/mobile-development'
    },
    {
      image: '/digital.jpeg',
      title: 'Digital Marketing',
      path: '/service/web-development'
    },
    {
      image: '/payment-.jpg',
      title: 'Payment Gateway',
      path: '/service/mobile-development'
    },
    {
      image: '/consulting.webp',
      title: 'Consultation Services',
      path: '/service/web-development'
    },
    {
      image: '/fintech.jpg',
      title: 'Fintech Solution',
      path: '/service/mobile-development'
    },
  ];

  return (
    <section className="py-16 px-8 mt-32">
      <div className="container mx-auto">
        <div className="relative inline-block">
          <h1 
            className={`text-4xl md:text-5xl font-bold text-gray-800 mb-12 transition-all duration-700 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } hover:text-blue-600 hover:font-extrabold cursor-pointer group`}
          >
            Explore our services
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="relative w-full pt-[75%] overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover absolute top-0 left-0 h-full w-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <Link href={service.path}>
                <div className="absolute -bottom-5 left-4 right-4">
                  <div className="bg-gray-50 rounded-t-lg p-4 flex items-center h-16 w-full group-hover:bg-blue-500 transition-all duration-300">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 pl-4 group-hover:text-white transition-all duration-300">
                      {service.title}
                    </h2>
                  </div>
                  <div className="bg-blue-500/80 rounded-b-lg p-4 min-h-[60px]">
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
