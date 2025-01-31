import React from 'react';
import Image from 'next/image';

const SectionService: React.FC = () => {
  const features = [
    {
      image: '/Web-dev.webp',
      title: 'Web Development',
      description: [
        'Craft Websites that Captivate &   Convert.',
        'From Vision to Pixel-Perfect Reality',
        'Beyond the Surface: Results   that Matter',
        '24/7 monitoring and support',
        'Affordable Excellence: Websites for   Every Budget',
      ],
    },
    {
      image: '/OIP-sof.jpg',
      title: 'Application Development',
      description: [
        'Craft Solutions, Not Apps: We   Engineer Success',
        'Bridge the Gap: From Vision to   Applause',
        ' Measure, Improve, Thrive:   Continuous Optimization Is Key',
       
      ],
    },
    {
      image: '/UI-UX.jpg',
      title: 'UI/UX Design',
      description: [
        'Craft Beautiful Experiences, Drive   Tangible Results.',
        'User-Centricity at Our Core',
        'Beyond Pixel Perfection:   Storytelling Through Design',
        ' Your Design Partner, Not Just   Service Providers',
        
      ],
    },
    {
        image: '/CLOUD-.jpg',
        title: 'Cloud Management',
        description: [
          ' Take Control, Unleash Potential:   Master Your Cloud with Us',
          'Visibility & Insights: Demystify Your   Cloud, Make Informed Decisions',
          'Agility & Scalability: Adapt & Thrive   in the Ever-Changing   Cloud Landscape',
          ' Partnership, Not Service: Weare   Your Cloud Management   Collaborators',
         
        ],
      },
      {
        image: '/QA-.jpg',
        title: 'QA & Testing',
        description: [
          'Unleash the Unseen:   Comprehensive Testing   Coverage for Unwavering   Quality.',
          ' Future-Proof Expertise: Investing   in Continuous Improvement',
          'Beyond Bugs: Embrace the   Holistic Approach',
          'Show, Don t Tell:   Quantify Your Impact',
          
        ],
      },
      {
        image: '/digital.jpeg',
        title: 'Digital Marketing',
        description: [
          '4 Crisp Pointers for Your Fintech   Solution Company Service Page',
          'Content that Converts:   Captivate, Engage, and   Drive Action',
          'Innovation & Experimentation:   Stay Ahead of the Curve with   Cutting-Edge Strategies',
          'Your Team of Partners, Not Just   Agencies: Collaborative Success   Every Step of the Way',
        
        ],
      },
      {
        image: '/payment-.jpg',
        title: 'Payment Gateway',
        description: [
          ' Unleash Frictionless Commerce:   Streamline',
          'Speed, Scalability, and Global   Reach: Expand Your Boundaries',
          'Data-Driven Decisions,   Strategic Growth',
          'Partnership Beyond Transactions:   Dedicated Support & Innovation',
          
        ],
      },
      {
        image: '/consulting.webp',
        title: 'Consultation Services',
        description: [
          'Talent Puzzle Solved: Build Your   Dream Cloud Team   with Expert Guidance',
          'Deep Bench & Strategic   Matching: Right People, Right   Roles, Right Now',
          'Beyond Recruitment: Proactive   Management & Ongoing Support.',
         
        ],
      },
      {
        image: '/fintech.jpg',
        title: 'Fintech Solution',
        description: [
          'Forge the Future of Finance: Build   Bespoke Fintech Solutions with   Proven Expertise',
          'Technology Unleashed: Empower   Your Vision with Next-Gen   Fintech Capabilities',
          'From Payments to Wealth   Management: Navigating the   Fintech Landscape with You',
         
          
        ],
      },
  ];

  return (
    <section className="py-12 relative overflow-hidden"> {/* Removed background gradient here */}
    <div className="absolute inset-0 -z-10"> {/* Background container */}
          <Image src="/abstract.avif" alt="Background Layer 1" fill className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/60 to-blue-50/40" /> {/* Gradient Overlay */}
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore our services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative rounded-xl shadow-lg overflow-hidden transition-all duration-300">
              <div className="relative h-64 w-full">
                <Image src={feature.image} alt={`Feature ${index + 1}`} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-2 text-blue-800">{feature.title}</h3>
                <ul className="text-gray-700 text-sm list-disc pl-5">
                  {feature.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionService;