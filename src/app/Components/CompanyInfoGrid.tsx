'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

const CompanyInfoGrid = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const increment = target / 100;
      
      function updateCount() {
        const count = parseInt(counter.innerHTML);
        if(count < target) {
          counter.innerHTML = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 10);
        } else {
          counter.innerHTML = target.toString();
        }
      }
      
      updateCount();
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/Website-Backgrounds-For-Desktop (1).jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <h1 className="text-5xl font-bold text-white max-w-2xl">
              Strategic Partner To Companies Around The World
            </h1>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are more than just a company, we are a catalyst. We spark the fire within businesses, igniting growth through a potent blend of SaaS solutions, fintech expertise, digital marketing magic, reliable IT services, and custom web app development.
            </p>
            <br />
            <p className="text-gray-600 leading-relaxed">
              Tired of the hamster wheel? We offer an escape route. Imagine streamlined operations, data-driven marketing campaigns, and robust IT infrastructure – all working in tandem to propel your business forward. That's what we do.
            </p>
          </div>
          <div>
            <Image
              src="/group-business-people-with-lit-background-mixed-media_641298-919.avif"
              alt="Company Overview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Facts
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-4xl font-bold text-blue-600 mb-2 hover:text-blue-800">
                <span className="counter" data-target="50">0</span>+
              </h3>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-4xl font-bold text-blue-600 mb-2 hover:text-blue-800">
                <span className="counter" data-target="1000">0</span>+
              </h3>
              <p className="text-gray-600">Clients</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-4xl font-bold text-blue-600 mb-2 hover:text-blue-800">
                <span className="counter" data-target="15">0</span>+
              </h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-4xl font-bold text-blue-600 mb-2 hover:text-blue-800">
                <span className="counter" data-target="500">0</span>+
              </h3>
              <p className="text-gray-600">Experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">People First</h3>
            <p className="text-gray-600">Investing in our people and their growth</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">Driving digital transformation through innovation</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
            <p className="text-gray-600">Delivering excellence in everything we do</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfoGrid
