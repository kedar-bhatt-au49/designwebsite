import React from "react";
import { FaCloud, FaChartLine, FaCogs, FaLaptopCode } from "react-icons/fa";
import Image from 'next/image';

const FeatureSection: React.FC = () => {
  return (
    <div className="relative py-20 group">
      <div className="relative py-20 min-h-screen">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/abstract-blue-.avif"
            alt="Technology Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/60 to-blue-50/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-black text-center mb-16 group">
            OUR SERVICES
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black mx-auto"></span>
          </h2>

          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col gap-16">
              {/* First Box */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 group hover:border-2 hover:border-blue-800 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/489.jpg"
                    alt="Background 1"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/30" />
                </div>
                <div className="mt-4 text-center relative z-10 group-hover:text-white">
                  <FaCloud className="text-blue-600 group-hover:text-white text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
                  <p className="group-hover:text-gray-200">
                    Innovative cloud solutions for your business growth and digital transformation
                  </p>
                </div>
              </div>

              {/* Second Box */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 group hover:border-2 hover:border-blue-800 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/OIP-data.jpg"
                    alt="Background 2"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/30" />
                </div>
                <div className="mt-4 text-center relative z-10 group-hover:text-white">
                  <FaChartLine className="text-blue-600 group-hover:text-white text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                  <p className="group-hover:text-gray-200">
                    Advanced data analytics to drive informed business decisions
                  </p>
                </div>
              </div>

              {/* Third Box */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 group hover:border-2 hover:border-blue-800 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/OIP-enter.jpg"
                    alt="Background 3"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/30" />
                </div>
                <div className="mt-4 text-center relative z-10 group-hover:text-white">
                  <FaCogs className="text-blue-600 group-hover:text-white text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                  <p className="group-hover:text-gray-200">
                    Comprehensive enterprise management and digital transformation
                  </p>
                </div>
              </div>

              {/* Fourth Box */}
              <div className="relative bg-white rounded-xl shadow-lg p-6 group hover:border-2 hover:border-blue-800 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/Customer.jpg"
                    alt="Background 4"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/30" />
                </div>
                <div className="mt-4 text-center relative z-10 group-hover:text-white">
                  <FaLaptopCode className="text-blue-600 group-hover:text-white text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Custom Development</h3>
                  <p className="group-hover:text-gray-200">
                    Tailored software solutions to meet your specific business requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
