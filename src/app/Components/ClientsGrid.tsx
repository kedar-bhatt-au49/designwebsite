import Image from 'next/image';

const clientLogos = [
  { name: "Sakhiya", src: "/logos/sakhiya.png" },
  { name: "Durga Engineering", src: "/logos/durga.png" },
  { name: "Resinitz", src: "/logos/resinitz.png" },
  { name: "Gupta Events", src: "/logos/gupta.png" },
  { name: "Nove Grow", src: "/logos/nove.png" },
  { name: "Six Seasons", src: "/logos/sixseasons.png" },
  { name: "Kutchina", src: "/logos/kutchina.png" },
  { name: "C&H", src: "/logos/ch.png" },
  { name: "NE Haven", src: "/logos/nehaven.png" },
  { name: "Engineer Choice", src: "/logos/engineer.png" },
  { name: "ABO Analytic", src: "/logos/abo.png" },
  { name: "Varnishtha", src: "/logos/varnishtha.png" },
  { name: "Wall Diaries", src: "/logos/wall.png" },
];

const ClientsGrid: React.FC = () => {
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
                className="h-16 opacity-90 hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsGrid;
