import Image from 'next/image';

const WhyUsSection = () => {
    return (
        <div className="relative py-20 bg-sky-100">
          <div className="absolute inset-0 bg-sky-200/70 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-black text-center mb-16 group">
              What sets us apart?
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black mx-auto"></span>
            </h2>
            
            <div className="relative min-h-[500px]">
              <div className="absolute -top-10 right-0 w-[400px] h-[500px] z-20 hidden md:block overflow-hidden rounded-xl group">
                <div className="bg-gray-100 rounded-xl p-8 shadow-lg h-full cursor-pointer transition-all duration-300 hover:border-2 hover:border-black">
                  <div className="text-black space-y-6">
                    <p className="text-lg font-medium">
                      We tackle everything from web development and mobile apps to security and digital marketing. Think of us as your tech Swiss Army knife.
                    </p>
                    <p className="text-lg font-medium">
                      Quality first: We're obsessed with exceeding your expectations. Every project gets our full attention and a customized approach, from research to launch and beyond.
                    </p>
                    <p className="text-lg font-medium">
                      Your success is our mission: We don't just build software, we build partnerships.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-3/4 relative z-10 overflow-hidden rounded-xl group">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/Whyussection.jpg"
                    alt="Our Approach"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-all duration-300 rounded-xl"></div>
                </div>
              </div>

              <div className="md:hidden mt-8 bg-gray-100 rounded-xl p-8 shadow-lg">
                <div className="text-black space-y-6">
                  <p className="text-lg font-medium">
                    We tackle everything from web development and mobile apps to security and digital marketing. Think of us as your tech Swiss Army knife.
                  </p>
                  <p className="text-lg font-medium">
                    Quality first: We're obsessed with exceeding your expectations. Every project gets our full attention and a customized approach, from research to launch and beyond.
                  </p>
                  <p className="text-lg font-medium">
                    Your success is our mission: We don't just build software, we build partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default WhyUsSection;
