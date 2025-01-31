import Image from 'next/image';

const ChooseUsSection = () => {
    return (
        <div className="relative py-20 group">
            
            <div className="relative py-20 min-h-screen">
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
                    WHY CHOOSE US
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black mx-auto"></span>
                </h2>

                {/* Rest of your existing content */}
            </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 bg-gray-100 rounded-xl p-8 shadow-lg group h-[350px] transition-all duration-300 hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                        <div className="text-black space-y-6 flex flex-col justify-center h-full">
                            <h3 className="text-2xl font-bold text-center">Give a head start with future skills like AI, Robotics and Coding.</h3>
                            <p className="text-lg font-medium text-center">

                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 flex flex-col lg:flex-row gap-8">
                        <div className="relative overflow-hidden rounded-xl group lg:w-3/5">
                            <div className="relative h-[350px] w-full">
                                <Image
                                    src="/Robotic.avif"
                                    alt="Future Skills Training"
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-all duration-300 rounded-xl"></div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-xl shadow-lg group lg:w-2/5 h-[350px] transition-all duration-300 hover:bg-blue-100 hover:border-2 hover:border-blue-800 overflow-hidden">
        <div className="h-full p-8">
            <div className="text-black flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-blue-800 transition-colors duration-300"></h3>
                <p className="text-lg font-medium text-center group-hover:text-blue-700 transition-colors duration-300">
                AI-driven data analysis accelerates business growth by uncovering insights, enhancing decision-making, optimizing processes, and predicting market trends effectively.
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

export default ChooseUsSection;
