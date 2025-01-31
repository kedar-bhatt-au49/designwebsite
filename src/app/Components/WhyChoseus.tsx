import Image from 'next/image';

const ChooseUsSection = () => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="relative w-full">
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

                <div className="container mx-auto px-4 py-10 md:py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8 md:mb-16 group">
                        WHY CHOOSE US
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black mx-auto"></span>
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                        {/* Left Column */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-lg group h-full transition-all duration-300 hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                                <div className="text-black space-y-6 flex flex-col justify-center h-full">
                                    <h3 className="text-xl md:text-2xl font-bold text-center">Give a head start with future skills like AI, Robotics and Coding.</h3>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-8">
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-xl group w-full md:w-3/5 h-[300px] md:h-[350px]">
                                <Image
                                    src="/Robotic.avif"
                                    alt="Future Skills Training"
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-all duration-300 rounded-xl"></div>
                            </div>

                            {/* Text Container */}
                            <div className="bg-gray-100 rounded-xl shadow-lg group w-full md:w-2/5 h-[300px] md:h-[350px] transition-all duration-300 hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                                <div className="h-full p-6 md:p-8">
                                    <div className="text-black flex flex-col justify-center h-full">
                                        <p className="text-base md:text-lg font-medium text-center group-hover:text-blue-700 transition-colors duration-300">
                                            AI-driven data analysis accelerates business growth by uncovering insights, enhancing decision-making, optimizing processes, and predicting market trends effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSection;
