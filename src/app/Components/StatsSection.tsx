import React from "react";
import CountUp from "react-countup";
import Image from 'next/image';

const clientLogos = [
  { name: "Sakhiya", src: "sakhiya-.png"  },
  { name: "Durga Engineering", src: "/Durga-eng.png" },
  { name: "Resinitz", src: "/Ayushi (-.jpg" },
  { name: "Gupta Events", src: "/GUptaevent-.png" },
  { name: "Nove Grow", src: "/nove-ravi- (1).png" },
  { name: "Six Seasons", src: "/six-season-real-estate-.png" },
  { name: "Kutchina", src: "/Kuchina--.png" },
  { name: "C&H", src: "/six-season-real-estate-1536x560.png" },
  { name: "NE Haven", src: "/Nehaven.png" },
  { name: "Engineer Choice", src: "/engineerchoice.png" },
  { name: "ABO Analytic", src: "/abc.png" },
  { name: "Varnishtha", src: "/varnishta.jpg" },
  { name: "Wall Diaries", src: "/walldiarries.png" },
];

const StatsSection: React.FC = () => {
  return (
    
    <div className="relative py-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pngtree-creative-blue.jpg"
          alt="Technology Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/60 to-blue-50/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
  <div className="relative backdrop-blur-sm text-black p-6 rounded-lg overflow-hidden w-full md:w-1/2 transition-all duration-300 hover:transform hover:scale-105 hover:border-2 hover:border-blue-800 hover:shadow-xl">
    <div className="relative z-10 text-center p-6">
      <h2 className="text-5xl font-bold">
        <CountUp start={0} end={100} duration={2.5} separator="," />+
      </h2>
      <h3 className="text-xl font-semibold mt-2">Projects Completed</h3>
      <p className="text-sm opacity-80">
        Successfully delivered so many projects with customer success stories.
      </p>
    </div>
  </div>

  <div className="relative backdrop-blur-sm text-black p-6 rounded-lg overflow-hidden w-full md:w-1/2 transition-all duration-300 hover:transform hover:scale-105 hover:border-2 hover:border-blue-800 hover:shadow-xl">
    <div className="relative z-10 text-center p-6">
      <h2 className="text-5xl font-bold">
        <CountUp start={50} end={80} duration={3} />+
      </h2>
      <h3 className="text-xl font-semibold mt-2">Happy Customers</h3>
      <p className="text-sm opacity-80">
        Customer satisfaction is our prime motto and we are able to achieve it well.
      </p>
    </div>
  </div>
</div>

        {/* Clients Grid Section */}
        <div>
          <h2 className="text-4xl font-bold text-black text-center mb-16 group">
            Our Trusted Clients
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black mx-auto"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg flex justify-center items-center transition-all duration-300 hover:transform hover:scale-110"
              >
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="h-20 w-90 opacity-90 hover:opacity-100" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
