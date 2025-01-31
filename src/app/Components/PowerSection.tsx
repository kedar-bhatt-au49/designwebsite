import Image from 'next/image';

const PowerSection = () => {
    return (
        <div className="relative py-20 bg-sky-100">
          <div className="absolute inset-0 bg-sky-200/70 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-black text-center mb-16 group">
              Power Your Business with Tailored Tech Solutions
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black mx-auto"></span>
            </h2>
            
            <div className="relative min-h-[500px]">
              <div className="bg-gray-100 rounded-xl p-8 shadow-lg w-full lg:w-3/4 relative z-20 cursor-pointer transition-all duration-300 hover:border-2 hover:border-black group">
                <div className="text-black space-y-6">
                  <p className="text-lg font-medium">
                    We deliver cutting-edge technology solutions that help businesses thrive in the digital age. Our expert team creates custom strategies to meet your unique needs.
                  </p>
                  <ul className="space-y-4 font-medium">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Custom Software Development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Digital Transformation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Cloud Solutions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      IT Consulting Services
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="absolute -top-10 right-0 w-[400px] h-[400px] z-10 hidden md:block overflow-hidden rounded-xl group">
                <div className="w-full h-full cursor-pointer relative">
                  <div className="relative h-full w-full">
                    <Image
                      src="/PowerSectionImage.jpg"
                      alt="Tech Solutions"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-all duration-300 rounded-xl"></div>
                  </div>
                </div>
              </div>

              <div className="md:hidden mt-8 overflow-hidden rounded-xl group">
                <div className="aspect-square cursor-pointer relative">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src="/PowerSectionImage.jpg"
                      alt="Tech Solutions"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-all duration-300 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default PowerSection;
