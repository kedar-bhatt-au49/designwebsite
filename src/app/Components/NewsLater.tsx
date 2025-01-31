import React, { useState } from 'react';
import Image from 'next/image';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Accept Terms:", acceptTerms);
  };

  return (
    <section className="relative py-12 overflow-hidden"> {/* Relative for background positioning */}
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image src="/light-feb-.jpg" alt="Background" fill className="object-cover" /> {/* Replace with your image path */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/60 to-blue-50/40" /> {/* Gradient Overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10"> {/* Content above background */}
        <div className="bg-[#1A202C] rounded-2xl p-8 w-full max-w-3xl mx-auto"> {/* Form container with dark background */}
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Subscribe to Our Newsletter
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4"> {/* Form with flexbox layout */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#2D3748] border border-[#4A5568] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-[#2D3748] border border-[#4A5568] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
              />
              <label htmlFor="acceptTerms" className="text-white">
                Accept Term and Condition<span className="text-red-500">*</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#27AAE1] hover:bg-[#1E90FF] text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;