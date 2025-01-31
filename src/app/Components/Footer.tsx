import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

const Footer: React.FC = () => {
  return (
    <header className="relative h-40 w-full"> {/* Set a fixed height for the header */}
      <Image
        src="/DotCom.webp" // Replace with your image path
        alt="Header Background"
        fill
        className="object-cover"
        priority // Optional: prioritize loading this image
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"> {/* Gradient overlay */} </div>

      <div className="absolute inset-0 flex items-center justify-between px-8 text-white"> {/* Content container */}
        <div className="flex items-center"> {/* Left side: Logo & Text */}
          <Image src="/logo.png" alt="Logo"  width={150} height={50} /> {/* Replace with your logo path and adjust size */}
      
        </div>

        <nav className="flex space-x-6"> {/* Navigation links */}
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/sector" className="hover:text-gray-300">Sector</Link>
          <Link href="/technologies" className="hover:text-gray-300">Technologies</Link>
          <Link href="/company" className="hover:text-gray-300">Company</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact Us</Link> {/* Contact Us Link */}
        </nav>

        <div className="flex space-x-4 items-center"> {/* Right side: Contact Info */}
          <a href="tel:+919685005583" className="hover:text-gray-300">+91 9685005583</a>
          <a href="mailto:support@bhisey.com" className="hover:text-gray-300">support@bhisey.com</a>
        </div>
      </div>
    </header>
  );
};

export default Footer;