import React from 'react';

const ContactUs = () => {
  return (
    <a
    href="/contact" // Replace with your contact page link
    className="fixed z-50 
      bg-[#343A40] hover:bg-[#495057] 
      text-white font-medium py-2 px-6 
      rounded-3xl shadow-lg 
      transition duration-300 ease-in-out transform hover:scale-105
      flex items-center justify-center
      bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8
      "
    style={{
      // Add any additional inline styles if needed
    }}
  >
    <span className="mr-2">Contact Us</span>
    {/* Optional Icon (e.g., from react-icons) */}
    {/* <FaEnvelope className="text-lg" />  */}
  </a>
  );
};

export default ContactUs;